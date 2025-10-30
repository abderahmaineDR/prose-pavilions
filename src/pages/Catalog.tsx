import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookCard from "@/components/BookCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Catalog page - Displays all books with search, filter, and sort functionality
 * Client-side filtering and search for optimal user experience
 */
interface Book {
  id: string;
  title: string;
  author: string;
  shortDescription: string;
  price: number;
  cover: string;
  tags: string[];
}

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedTag, setSelectedTag] = useState(searchParams.get("tag") || "");
  const [sortBy, setSortBy] = useState("title");

  // Load books data
  useEffect(() => {
    fetch("/data/books.json")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading books:", error);
        setLoading(false);
      });
  }, []);

  // Get unique tags
  const allTags = Array.from(
    new Set(books.flatMap((book) => book.tags))
  ).sort();

  // Filter and search books
  useEffect(() => {
    let result = [...books];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          book.shortDescription.toLowerCase().includes(query)
      );
    }

    // Apply tag filter
    if (selectedTag) {
      result = result.filter((book) => book.tags.includes(selectedTag));
    }

    // Apply sorting
    result.sort((a, b) => {
      switch (sortBy) {
        case "title":
          return a.title.localeCompare(b.title);
        case "author":
          return a.author.localeCompare(b.author);
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        default:
          return 0;
      }
    });

    setFilteredBooks(result);
  }, [books, searchQuery, selectedTag, sortBy]);

  const handleTagClick = (tag: string) => {
    const newTag = selectedTag === tag ? "" : tag;
    setSelectedTag(newTag);
    setSearchParams(newTag ? { tag: newTag } : {});
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedTag("");
    setSearchParams({});
  };

  return (
    <>
      <Helmet>
        <title>Book Catalog - The Literary Corner</title>
        <meta
          name="description"
          content="Browse our complete catalog of English books, including classics, fiction, romance, and science fiction. Find your next great read."
        />
        <link rel="canonical" href="https://yourdomain.com/catalog" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-serif font-bold mb-4">Book Catalog</h1>
            <p className="text-lg text-muted-foreground">
              Explore our curated collection of {books.length} carefully selected books
            </p>
          </div>

          {/* Filters Section */}
          <div className="bg-card border rounded-lg p-6 mb-8 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <SlidersHorizontal className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Search & Filter</h2>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by title, author, or description..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search books"
              />
            </div>

            {/* Tags Filter */}
            <div>
              <h3 className="text-sm font-medium mb-2">Filter by Genre:</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/10 transition-colors"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex gap-2 items-center">
                <label htmlFor="sort" className="text-sm font-medium">
                  Sort by:
                </label>
                <select
                  id="sort"
                  className="border rounded-md px-3 py-1.5 text-sm bg-background"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="title">Title (A-Z)</option>
                  <option value="author">Author (A-Z)</option>
                  <option value="price-low">Price (Low to High)</option>
                  <option value="price-high">Price (High to Low)</option>
                </select>
              </div>

              {(searchQuery || selectedTag) && (
                <Button variant="outline" size="sm" onClick={clearFilters}>
                  Clear Filters
                </Button>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">
              Showing {filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"}
            </p>
          </div>

          {/* Books Grid */}
          {loading ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="aspect-[2/3] w-full" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              ))}
            </div>
          ) : filteredBooks.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 animate-fade-in">
              {filteredBooks.map((book) => (
                <BookCard key={book.id} {...book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-4">
                No books found matching your criteria.
              </p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Catalog;
