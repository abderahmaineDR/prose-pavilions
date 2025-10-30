import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

/**
 * Hero section for homepage with gradient background and call-to-action
 * Features elegant typography and smooth animations
 */
const Hero = () => {
  return (
    <section className="relative gradient-hero text-primary-foreground overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0aDJWMGgtMnpNMzQgMzBoMlYxNmgtMnpNMTQgMTRoMlYwSDE0em0wIDE2aDJWMTZIMTR6bTE2IDBIMTZWMTZoMTR6TTE0IDBoMTZWMTRIMTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container relative mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="rounded-full bg-primary-foreground/10 p-4 backdrop-blur-sm">
              <BookOpen className="h-12 w-12" />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
            Discover Your Next
            <br />
            <span className="text-accent">Great Read</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Curated collection of English books, from timeless classics to contemporary favorites. 
            Quality literature, thoughtfully selected for discerning readers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="btn-accent text-base px-8 group"
            >
              <Link to="/catalog">
                Browse Catalog
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 text-base px-8"
            >
              <Link to="/about">
                About Us
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Curated Selection</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent"></div>
              <span>Personal Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
