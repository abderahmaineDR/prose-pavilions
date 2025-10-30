import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";

/**
 * BlogPostCard component for displaying blog post previews
 * Shows image, title, excerpt, author, date, and tags
 */
interface BlogPostCardProps {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
}

const BlogPostCard = ({ id, title, author, date, excerpt, image, tags }: BlogPostCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="card-hover h-full flex flex-col overflow-hidden">
      <Link to={`/blog/${id}`}>
        <div className="aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        </div>
      </Link>

      <CardContent className="flex-1 p-6 space-y-3">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <Link to={`/blog/${id}`}>
          <h3 className="font-serif font-bold text-xl leading-tight hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
        </div>

        <p className="text-foreground/80 line-clamp-3">{excerpt}</p>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link to={`/blog/${id}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogPostCard;
