import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";

/**
 * Contact page with form and contact information
 * Includes client-side validation and instructions for backend integration
 */
const Contact = () => {
  const [searchParams] = useSearchParams();
  const bookTitle = searchParams.get("book") || "";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: bookTitle ? `Inquiry about: ${bookTitle}` : "",
    message: bookTitle ? `I'm interested in purchasing "${bookTitle}". Please provide more information.` : "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length > 100) {
      newErrors.name = "Name must be less than 100 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    } else if (formData.email.length > 255) {
      newErrors.email = "Email must be less than 255 characters";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length > 200) {
      newErrors.subject = "Subject must be less than 200 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length > 2000) {
      newErrors.message = "Message must be less than 2000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    // TODO: Connect to your backend/email service
    // Options:
    // 1. Netlify Forms: Add name="contact" and data-netlify="true" to form
    // 2. Formspree: POST to https://formspree.io/f/YOUR_FORM_ID
    // 3. EmailJS: Use EmailJS service
    // 4. Custom backend: POST to your API endpoint

    console.log("Form submitted:", formData);
    
    toast.success("Thank you for your message! We'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@literarycorner.com",
      href: "mailto:hello@literarycorner.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+44 20 1234 5678",
      href: "tel:+442012345678",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "123 Book Street, Literature Quarter, London, LN1 2BC, UK",
      href: "https://maps.google.com",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
      href: null,
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - The Literary Corner</title>
        <meta
          name="description"
          content="Get in touch with The Literary Corner. Ask about our books, request recommendations, or inquire about purchases. We're here to help."
        />
        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1">
          {/* Page Header */}
          <section className="gradient-hero text-primary-foreground py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 animate-fade-in">
                Get in Touch
              </h1>
              <p className="text-xl max-w-2xl mx-auto opacity-90 animate-fade-in">
                Have questions about our books? Want personalized recommendations? We'd love to hear from you.
              </p>
            </div>
          </section>

          {/* Contact Content */}
          <section className="py-16 container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Send Us a Message</h2>
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          aria-invalid={!!errors.name}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          required
                        />
                        {errors.name && (
                          <p id="name-error" className="text-sm text-destructive mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          required
                        />
                        {errors.email && (
                          <p id="email-error" className="text-sm text-destructive mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject <span className="text-destructive">*</span>
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          aria-invalid={!!errors.subject}
                          aria-describedby={errors.subject ? "subject-error" : undefined}
                          required
                        />
                        {errors.subject && (
                          <p id="subject-error" className="text-sm text-destructive mt-1">
                            {errors.subject}
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message <span className="text-destructive">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us more about your inquiry..."
                          rows={6}
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? "message-error" : undefined}
                          required
                        />
                        {errors.message && (
                          <p id="message-error" className="text-sm text-destructive mt-1">
                            {errors.message}
                          </p>
                        )}
                      </div>

                      <Button type="submit" size="lg" className="w-full btn-hero">
                        Send Message
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        We typically respond within 24 hours during business days.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    const content = (
                      <Card key={index} className="card-hover">
                        <CardContent className="p-6 flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.label}</h3>
                            <p className="text-sm text-muted-foreground">{info.value}</p>
                          </div>
                        </CardContent>
                      </Card>
                    );

                    return info.href ? (
                      <a
                        key={index}
                        href={info.href}
                        target={info.href.startsWith("http") ? "_blank" : undefined}
                        rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    );
                  })}

                  {/* Map Placeholder */}
                  <Card>
                    <CardContent className="p-0">
                      <div className="aspect-video bg-muted rounded-lg flex items-center justify-center text-sm text-muted-foreground">
                        Map embed placeholder
                        <br />
                        (Add Google Maps or similar service)
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

export default Contact;
