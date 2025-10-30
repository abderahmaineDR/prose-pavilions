import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * Header component with navigation, search bar, and mobile menu
 * Sticky positioning with backdrop blur for modern effect
 */
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "/catalog" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/catalog?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Main navigation">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <BookOpen className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
          <span className="text-xl font-bold font-serif text-primary">
            The Literary Corner
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`link-underline text-sm font-medium transition-colors hover:text-primary ${
                isActive(item.href) ? "text-primary" : "text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Search Bar - Desktop */}
        <form onSubmit={handleSearch} className="hidden lg:flex items-center">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search books..."
              className="w-64 pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search books"
            />
          </div>
        </form>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t animate-slide-in">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-muted ${
                  isActive(item.href)
                    ? "bg-muted text-primary"
                    : "text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="pt-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search books..."
                  className="w-full pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search books"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
