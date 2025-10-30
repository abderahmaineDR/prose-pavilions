import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Star, Mail } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

/**
 * Book Detail page - Displays full information about a specific book
 * Includes cover, description, details, reviews, and purchase CTA
 */
interface Review {
  reviewer: string;
  rating: number;
  comment: string;
  date: string;
}

interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  isbn: string;
  publisher: string;
  pages: number;
  year: number;
  language: string;
  cover: string;
  tags: string[];
  reviews?: Review[];
}

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/books.json")
      .then((response) => response.json())
      .then((data) => {
        const foundBook = data.find((b: Book) => b.id === id);
        setBook(foundBook || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading book:", error);
        setLoading(false);
      });
  }, [id]);

  const handleContactToBuy = () => {
    toast.success("Redirecting to contact form...");
    setTimeout(() => {
      window.location.href = `/contact?book=${encodeURIComponent(book?.title || "")}`;
    }, 500);
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <Skeleton className="h-10 w-32 mb-8" />
          <div className="grid gap-8 lg:grid-cols-2">
            <Skeleton className="aspect-[2/3] w-full" />
            <div className="space-y-4">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-32 w-full" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!book) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h1 className="text-3xl font-serif font-bold mb-4">Book Not Found</h1>
            <p className="text-muted-foreground mb-8">
              Sorry, we couldn't find the book you're looking for.
            </p>
            <Button asChild>
              <Link to="/catalog">Back to Catalog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const averageRating = book.reviews && book.reviews.length > 0
    ? book.reviews.reduce((sum, review) => sum + review.rating, 0) / book.reviews.length
    : 0;

  return (
    <>
      <Helmet>
        <title>{book.title} by {book.author} - The Literary Corner</title>
        <meta name="description" content={book.description.substring(0, 160)} />
        <link rel="canonical" href={`https://yourdomain.com/book/${book.id}`} />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={`${book.title} by ${book.author}`} />
        <meta property="og:description" content={book.description.substring(0, 160)} />
        <meta property="og:image" content={book.cover} />
        <meta property="og:type" content="book" />
        <meta property="book:author" content={book.author} />
        <meta property="book:isbn" content={book.isbn} />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-8">
          {/* Back Button */}
          <Button asChild variant="ghost" className="mb-8">
            <Link to="/catalog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Catalog
            </Link>
          </Button>

          {/* Book Details */}
          <article className="grid gap-8 lg:grid-cols-2 mb-12">
            {/* Book Cover */}
            <div className="flex justify-center lg:justify-start">
              <img
                src={book.cover}
                alt={`Cover of ${book.title} by ${book.author}`}
                className="rounded-lg shadow-2xl max-w-md w-full"
              />
            </div>

            {/* Book Information */}
            <div className="space-y-6">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {book.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h1 className="text-4xl font-serif font-bold mb-2">{book.title}</h1>
                <p className="text-xl text-muted-foreground mb-4">by {book.author}</p>

                {book.reviews && book.reviews.length > 0 && (
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.round(averageRating)
                              ? "fill-accent text-accent"
                              : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {averageRating.toFixed(1)} ({book.reviews.length} reviews)
                    </span>
                  </div>
                )}
              </div>

              <div>
                <h2 className="text-2xl font-serif font-bold mb-2">Description</h2>
                <p className="text-foreground/80 leading-relaxed">{book.description}</p>
              </div>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Book Details</h3>
                  <dl className="grid grid-cols-2 gap-3 text-sm">
                    <dt className="text-muted-foreground">ISBN:</dt>
                    <dd className="font-medium">{book.isbn}</dd>
                    
                    <dt className="text-muted-foreground">Publisher:</dt>
                    <dd className="font-medium">{book.publisher}</dd>
                    
                    <dt className="text-muted-foreground">Pages:</dt>
                    <dd className="font-medium">{book.pages}</dd>
                    
                    <dt className="text-muted-foreground">Year:</dt>
                    <dd className="font-medium">{book.year}</dd>
                    
                    <dt className="text-muted-foreground">Language:</dt>
                    <dd className="font-medium">{book.language}</dd>
                  </dl>
                </CardContent>
              </Card>

              <div className="flex items-center justify-between bg-muted/30 p-6 rounded-lg">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Price</p>
                  <p className="text-3xl font-bold text-primary">${book.price.toFixed(2)}</p>
                </div>
                <Button size="lg" className="btn-hero" onClick={handleContactToBuy}>
                  <Mail className="mr-2 h-5 w-5" />
                  Contact to Buy
                </Button>
              </div>
            </div>
          </article>

          {/* Reviews Section */}
          {book.reviews && book.reviews.length > 0 && (
            <section className="mb-12">
              <h2 className="text-3xl font-serif font-bold mb-6">Customer Reviews</h2>
              <div className="space-y-6">
                {book.reviews.map((review, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="font-semibold">{review.reviewer}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(review.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        </div>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "fill-accent text-accent"
                                  : "text-muted"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-foreground/80">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BookDetail;
