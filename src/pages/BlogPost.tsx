import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Individual Blog Post page
 * Displays full blog post content with metadata
 */
interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
}

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/blog-posts.json")
      .then((response) => response.json())
      .then((data) => {
        const foundPost = data.find((p: BlogPost) => p.id === id);
        setPost(foundPost || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading blog post:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
          <Skeleton className="h-10 w-32 mb-8" />
          <Skeleton className="aspect-[16/9] w-full mb-8" />
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-64 w-full" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <h1 className="text-3xl font-serif font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">
              Sorry, we couldn't find the blog post you're looking for.
            </p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <Helmet>
        <title>{post.title} - The Literary Corner Blog</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://yourdomain.com/blog/${post.id}`} />
        
        {/* Open Graph tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.date} />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1">
          <article className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Back Button */}
            <Button asChild variant="ghost" className="mb-8">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            {/* Featured Image */}
            <div className="aspect-[16/9] overflow-hidden rounded-lg mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex items-center gap-6 text-muted-foreground mb-8 pb-8 border-b">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <time dateTime={post.date}>{formattedDate}</time>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                // Handle headings (markdown-style)
                if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
                  return (
                    <h2 key={index} className="text-2xl font-serif font-bold mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, '').replace(':', '')}
                    </h2>
                  );
                }
                
                // Regular paragraphs
                return (
                  <p key={index} className="text-foreground/80 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Back to Blog CTA */}
            <div className="mt-12 pt-8 border-t text-center">
              <Button asChild size="lg" className="btn-hero">
                <Link to="/blog">Read More Articles</Link>
              </Button>
            </div>
          </article>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
