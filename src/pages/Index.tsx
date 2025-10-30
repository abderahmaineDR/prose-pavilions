import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedBooks from "@/components/FeaturedBooks";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Users } from "lucide-react";

/**
 * Home page - Main landing page with hero, featured books, and about section
 * Optimized for SEO with semantic HTML and meta tags
 */
const Index = () => {
  return (
    <>
      <Helmet>
        <title>The Literary Corner - Curated English Books & Classic Literature</title>
        <meta
          name="description"
          content="Discover handpicked English books, classic literature, and contemporary fiction. Contact us to purchase your next great read from our carefully curated collection."
        />
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />

        <main>
          {/* Hero Section */}
          <Hero />

          {/* Featured Books */}
          <FeaturedBooks />

          {/* About Preview Section */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="grid gap-12 lg:grid-cols-2 items-center">
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold">
                    Your Trusted Source for Quality Literature
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    At The Literary Corner, we believe in the transformative power of books. 
                    Our carefully curated collection brings together timeless classics and 
                    contemporary favorites, each selected for its literary merit and ability 
                    to enrich the reader's experience.
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3 pt-4">
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="rounded-full bg-primary/10 p-4">
                        <BookOpen className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold">Curated</h3>
                      <p className="text-sm text-muted-foreground">Handpicked selections</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="rounded-full bg-secondary/10 p-4">
                        <Heart className="h-6 w-6 text-secondary" />
                      </div>
                      <h3 className="font-semibold">Quality</h3>
                      <p className="text-sm text-muted-foreground">Excellence guaranteed</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-2">
                      <div className="rounded-full bg-accent/10 p-4">
                        <Users className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="font-semibold">Personal</h3>
                      <p className="text-sm text-muted-foreground">Dedicated service</p>
                    </div>
                  </div>
                  <Button asChild size="lg" className="btn-hero">
                    <Link to="/about">Learn More About Us</Link>
                  </Button>
                </div>

                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=600&fit=crop"
                    alt="Cozy bookshelf filled with classic literature"
                    className="rounded-lg shadow-2xl"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl max-w-xs">
                    <p className="text-sm font-medium">
                      "Books are a uniquely portable magic."
                    </p>
                    <p className="text-xs mt-2 opacity-90">— Stephen King</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4 text-center">
              <div className="max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold">
                  Ready to Find Your Next Read?
                </h2>
                <p className="text-lg text-muted-foreground">
                  Browse our complete catalog or get in touch to discuss your literary interests. 
                  We're here to help you discover books you'll treasure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button asChild size="lg" className="btn-hero">
                    <Link to="/catalog">Browse Full Catalog</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
