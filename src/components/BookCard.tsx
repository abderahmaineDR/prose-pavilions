import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

/**
 * BookCard component for displaying book information in grid/list views
 * Includes cover image, title, author, price, and tags
 */
interface BookCardProps {
  id: string;
  title: string;
  author: string;
  shortDescription: string;
  price: number;
  cover: string;
  tags: string[];
}

const BookCard = ({ id, title, author, shortDescription, price, cover, tags }: BookCardProps) => {
  return (
    <Card className="card-hover h-full flex flex-col overflow-hidden group">
      <Link to={`/book/${id}`} className="block">
        <div className="aspect-[2/3] overflow-hidden bg-muted">
          <img
            src={cover}
            alt={`Cover of ${title} by ${author}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>
      
      <CardContent className="flex-1 p-4 space-y-2">
        <div className="flex flex-wrap gap-1 mb-2">
          {tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <Link to={`/book/${id}`}>
          <h3 className="font-serif font-bold text-lg leading-tight hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        
        <p className="text-sm text-muted-foreground">{author}</p>
        
        <p className="text-sm text-foreground/80 line-clamp-2">
          {shortDescription}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="text-xl font-bold text-primary">
          ${price.toFixed(2)}
        </span>
        
        <Button asChild variant="outline" size="sm">
          <Link to={`/book/${id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
