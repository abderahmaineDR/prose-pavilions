import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Heart, Star, Users } from "lucide-react";

/**
 * About page - Company story, mission, values, and contact information
 * Includes personal touch and trust-building content
 */
const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Quality Curation",
      description:
        "Every book in our collection is carefully selected for its literary merit, ensuring you always find quality reads worth your time.",
    },
    {
      icon: Heart,
      title: "Passion for Literature",
      description:
        "We're not just sellers—we're readers. Our love for books drives us to share the joy of discovering great stories with fellow bibliophiles.",
    },
    {
      icon: Star,
      title: "Excellence in Service",
      description:
        "Your satisfaction is our priority. We provide personalized recommendations and ensure every interaction is pleasant and memorable.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description:
        "We believe in building a community of readers who share our appreciation for literature and the transformative power of books.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - The Literary Corner</title>
        <meta
          name="description"
          content="Learn about The Literary Corner's mission to bring quality literature to passionate readers. Discover our story, values, and commitment to excellence."
        />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="gradient-hero text-primary-foreground py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-in">
                About The Literary Corner
              </h1>
              <p className="text-xl max-w-2xl mx-auto opacity-90 animate-fade-in">
                Where passion for literature meets carefully curated excellence
              </p>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-16 container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold">Our Story</h2>
                <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                  <p>
                    The Literary Corner began with a simple belief: that the right book, 
                    discovered at the right time, can change a life. What started as a 
                    personal collection shared among friends has grown into a carefully 
                    curated selection of English literature spanning centuries and genres.
                  </p>
                  <p>
                    We understand that in today's fast-paced world, finding books worth 
                    your precious reading time can be overwhelming. That's why we do the 
                    work for you—reading, evaluating, and selecting only those titles that 
                    meet our exacting standards for literary quality and reader engagement.
                  </p>
                  <p>
                    Every book in our collection represents hours of careful consideration. 
                    We don't just stock popular titles; we seek out works that offer genuine 
                    value—books that entertain, enlighten, challenge, and stay with you long 
                    after you've turned the final page.
                  </p>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop"
                  alt="Vintage library with wooden shelves and classic books"
                  className="rounded-lg shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-lg shadow-xl max-w-xs">
                  <p className="font-semibold text-lg mb-2">Founded 2018</p>
                  <p className="text-sm opacity-90">
                    Serving readers with curated excellence for over 6 years
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Mission Statement */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-serif font-bold">Our Mission</h2>
                <p className="text-xl text-foreground/80 leading-relaxed">
                  To connect passionate readers with exceptional literature, fostering a 
                  love of reading and creating a community where books are celebrated, 
                  discussed, and treasured. We believe that quality literature should be 
                  accessible, and that every reader deserves personalized service and 
                  expert recommendations.
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-16 container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="card-hover text-center">
                    <CardContent className="p-6 space-y-4">
                      <div className="mx-auto rounded-full bg-primary/10 p-4 w-fit">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-serif font-bold text-xl">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Location & Contact Info */}
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-center">
                  Visit Us
                </h2>
                <div className="grid gap-8 md:grid-cols-2">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-4">Location</h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p className="font-medium text-foreground">The Literary Corner</p>
                        <p>123 Book Street</p>
                        <p>Literature Quarter</p>
                        <p>London, LN1 2BC</p>
                        <p className="pt-2">United Kingdom</p>
                      </div>
                      {/* Placeholder for map embed */}
                      <div className="mt-6 aspect-video bg-muted rounded-lg flex items-center justify-center text-sm text-muted-foreground">
                        Map placeholder - Add your preferred map service embed
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
                      <div className="space-y-4 text-sm">
                        <div>
                          <p className="font-medium mb-1">Email</p>
                          <a
                            href="mailto:hello@literarycorner.com"
                            className="text-primary hover:underline"
                          >
                            hello@literarycorner.com
                          </a>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Phone</p>
                          <a
                            href="tel:+442012345678"
                            className="text-primary hover:underline"
                          >
                            +44 20 1234 5678
                          </a>
                        </div>
                        <div>
                          <p className="font-medium mb-1">Hours</p>
                          <div className="text-muted-foreground space-y-1">
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 10:00 AM - 4:00 PM</p>
                            <p>Sunday: Closed</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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

export default About;
