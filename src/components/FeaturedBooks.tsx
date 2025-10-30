import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * FeaturedBooks component displays featured books from the catalog
 * Loads data from books.json and filters for featured items
 */
interface Book {
  id: string;
  title: string;
  author: string;
  shortDescription: string;
  price: number;
  cover: string;
  tags: string[];
  featured?: boolean;
}

const FeaturedBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load books data
    fetch("/data/books.json")
      .then((response) => response.json())
      .then((data) => {
        const featuredBooks = data.filter((book: Book) => book.featured);
        setBooks(featuredBooks.slice(0, 3));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading books:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[2/3] w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Featured Books
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked selections from our curated collection of timeless classics and literary treasures
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
          {books.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
