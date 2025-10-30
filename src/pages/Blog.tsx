import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostCard from "@/components/BlogPostCard";
import { Skeleton } from "@/components/ui/skeleton";

/**
 * Blog page - Displays all blog posts
 * Shows reading guides, reviews, and literary news
 */
interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  tags: string[];
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/blog-posts.json")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading blog posts:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog & Reading Guides - The Literary Corner</title>
        <meta
          name="description"
          content="Read our latest posts about classic literature, reading recommendations, and building your personal library. Expert insights from passionate readers."
        />
        <link rel="canonical" href="https://yourdomain.com/blog" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1">
          {/* Page Header */}
          <section className="gradient-hero text-primary-foreground py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 animate-fade-in">
                Blog & Reading Guides
              </h1>
              <p className="text-xl max-w-2xl mx-auto opacity-90 animate-fade-in">
                Insights, recommendations, and thoughts on literature from fellow book lovers
              </p>
            </div>
          </section>

          {/* Blog Posts */}
          <section className="py-16 container mx-auto px-4">
            {loading ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-4">
                    <Skeleton className="aspect-[16/9] w-full" />
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                  </div>
                ))}
              </div>
            ) : posts.length > 0 ? (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
                {posts.map((post) => (
                  <BlogPostCard key={post.id} {...post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  No blog posts available at the moment. Check back soon!
                </p>
              </div>
            )}
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
