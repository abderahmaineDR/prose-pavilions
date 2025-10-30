import { Link } from "react-router-dom";
import { BookOpen, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

/**
 * Footer component with newsletter signup, social links, and site navigation
 * Includes structured footer sections for better SEO and accessibility
 */
const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    
    // Basic email validation
    if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toString())) {
      toast.success("Thank you for subscribing to our newsletter!");
      e.currentTarget.reset();
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold font-serif text-primary">
                The Literary Corner
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted source for curated English books and classic literature. 
              Discover timeless stories and contemporary favorites.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit our Twitter page"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/catalog" className="text-muted-foreground hover:text-primary transition-colors">
                  Browse Catalog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog & News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/catalog?tag=Classic" className="text-muted-foreground hover:text-primary transition-colors">
                  Classic Literature
                </Link>
              </li>
              <li>
                <Link to="/catalog?tag=Fiction" className="text-muted-foreground hover:text-primary transition-colors">
                  Fiction
                </Link>
              </li>
              <li>
                <Link to="/catalog?tag=Romance" className="text-muted-foreground hover:text-primary transition-colors">
                  Romance
                </Link>
              </li>
              <li>
                <Link to="/catalog?tag=Science%20Fiction" className="text-muted-foreground hover:text-primary transition-colors">
                  Science Fiction
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe to receive updates on new arrivals and special offers.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                name="email"
                placeholder="Your email address"
                required
                aria-label="Email address for newsletter"
              />
              <Button type="submit" className="w-full btn-hero">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} The Literary Corner. All rights reserved.
          </p>
          <p className="mt-2">
            Built with passion for books and readers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
