# The Literary Corner - Professional Book Seller Website

A beautiful, responsive, and fully-featured showcase website for an English book seller. Built with React, TypeScript, Tailwind CSS, and modern web development best practices.

## 🌟 Features

### Core Functionality
- **Home Page**: Hero section with call-to-action, featured books carousel, about preview
- **Catalog Page**: Complete book listing with search, filter by genre, sort options, and pagination
- **Book Detail Pages**: Full book information with cover, description, reviews, purchase CTA
- **About Page**: Company story, mission, values, location information
- **Blog/News**: Reading guides, book reviews, and literary articles
- **Contact Page**: Contact form with validation, location map, contact information

### Technical Features
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ♿ **Accessible**: WCAG 2.1 compliant with semantic HTML, ARIA labels, keyboard navigation
- 🎨 **Beautiful Design**: Professional color palette evoking trust and sophistication
- ⚡ **Performance Optimized**: Lazy loading, optimized images, minimal bundle size
- 🔍 **SEO Ready**: Meta tags, Open Graph, structured data, semantic HTML
- 🧪 **Tested**: Example unit tests with Vitest and React Testing Library

### Design System
All styles are centralized in a carefully crafted design system:

#### Color Palette
```
Primary (Deep Burgundy):    hsl(345, 50%, 35%)  - Sophistication & elegance
Secondary (Forest Green):   hsl(150, 40%, 35%)  - Knowledge & growth
Accent (Gold):              hsl(40, 80%, 55%)   - Premium highlights
Background (Warm Cream):    hsl(42, 45%, 97%)   - Reading-friendly
Foreground (Charcoal):      hsl(220, 15%, 20%)  - Main text
```

**Usage**: These colors evoke warmth, trustworthiness, and literary elegance. Perfect for a bookstore brand focused on quality and curation.

#### Typography
- **UI/Body**: Inter - Clean, modern, highly readable
- **Headings**: Merriweather - Elegant serif that evokes classic literature

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd literary-corner

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm run test
```

The site will be available at `http://localhost:8080`

## 📁 Project Structure

```
literary-corner/
├── data/                      # JSON data files
│   ├── books.json            # Book catalog data
│   └── blog-posts.json       # Blog posts
├── src/
│   ├── components/           # React components
│   │   ├── ui/              # shadcn UI components
│   │   ├── Header.tsx       # Site header with navigation
│   │   ├── Footer.tsx       # Site footer
│   │   ├── BookCard.tsx     # Book display card
│   │   ├── Hero.tsx         # Homepage hero section
│   │   └── ...
│   ├── pages/               # Page components
│   │   ├── Index.tsx        # Home page
│   │   ├── Catalog.tsx      # Book catalog
│   │   ├── BookDetail.tsx   # Individual book page
│   │   ├── About.tsx        # About page
│   │   ├── Blog.tsx         # Blog listing
│   │   ├── BlogPost.tsx     # Individual blog post
│   │   └── Contact.tsx      # Contact page
│   ├── App.tsx              # Main app component with routing
│   ├── index.css            # Global styles & design system
│   └── main.tsx             # Application entry point
├── tests/                   # Test files
│   ├── BookCard.test.tsx   # Example unit tests
│   └── setup.ts            # Test configuration
├── public/                  # Static assets
├── index.html              # HTML entry point
└── README.md               # This file
```

## 📝 Content Management

### Managing Books

Edit `data/books.json` to add, remove, or modify books:

```json
{
  "id": "unique-id",
  "title": "Book Title",
  "author": "Author Name",
  "description": "Full description...",
  "shortDescription": "Brief description for cards",
  "price": 14.99,
  "isbn": "978-0-1234-5678-9",
  "publisher": "Publisher Name",
  "pages": 300,
  "year": 2020,
  "language": "English",
  "cover": "https://image-url.com/cover.jpg",
  "tags": ["Fiction", "Classic"],
  "featured": true,
  "reviews": [
    {
      "reviewer": "Name",
      "rating": 5,
      "comment": "Review text",
      "date": "2024-01-15"
    }
  ]
}
```

**Tips**:
- Use unique IDs for each book
- Keep shortDescription under 150 characters
- Use high-quality cover images (recommend 400x600px minimum)
- Set `featured: true` for books to appear on homepage (max 3)
- Price should be a number (not string)

### Managing Blog Posts

Edit `data/blog-posts.json`:

```json
{
  "id": "unique-id",
  "title": "Post Title",
  "author": "Author Name",
  "date": "2024-03-15",
  "excerpt": "Brief excerpt...",
  "content": "Full post content with paragraphs...",
  "image": "https://image-url.com/post-image.jpg",
  "tags": ["Reading", "Tips"]
}
```

### Customizing Site Content

- **Site name & tagline**: Edit `src/components/Header.tsx` and `index.html`
- **Contact information**: Edit `src/components/Footer.tsx` and `src/pages/About.tsx`
- **About page content**: Edit `src/pages/About.tsx`
- **Homepage content**: Edit `src/pages/Index.tsx`

### Replacing Images

Current images use Unsplash placeholders. Replace with your own:

1. Add images to `public/images/` directory
2. Update image URLs in data files and components
3. Use descriptive file names (e.g., `book-cover-gatsby.jpg`)
4. Optimize images before uploading (recommend tools like TinyPNG)

**Recommended sizes**:
- Book covers: 400x600px (2:3 aspect ratio)
- Blog post images: 1600x900px (16:9 aspect ratio)
- Hero images: 1920x1080px

## 🎨 Customizing the Design

### Changing Colors

Edit `src/index.css` to modify the color palette:

```css
:root {
  --primary: 345 50% 35%;      /* Change to your brand color */
  --secondary: 150 40% 35%;    /* Secondary brand color */
  --accent: 40 80% 55%;        /* Accent/highlight color */
  /* ... other colors */
}
```

**Important**: Always use HSL format (Hue Saturation Lightness) for colors.

### Typography

Change fonts in `tailwind.config.ts`:

```typescript
fontFamily: {
  sans: ['Your-Sans-Font', 'system-ui', 'sans-serif'],
  serif: ['Your-Serif-Font', 'Georgia', 'serif'],
}
```

Don't forget to add the font imports in `index.html`.

### Component Variants

Button variants are defined in `src/components/ui/button.tsx`. Add custom variants:

```typescript
const buttonVariants = cva(
  "...",
  {
    variants: {
      variant: {
        // Add your custom variant
        myVariant: "bg-custom hover:bg-custom/90",
      }
    }
  }
)
```

## 📧 Setting Up Contact Form

The contact form requires a backend service. Choose one:

### Option 1: Netlify Forms (Easiest)
1. Add attributes to form in `src/pages/Contact.tsx`:
   ```tsx
   <form name="contact" method="POST" data-netlify="true">
   ```
2. Deploy to Netlify
3. Forms will appear in Netlify dashboard

### Option 2: Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update handleSubmit in `src/pages/Contact.tsx`:
   ```typescript
   await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     body: JSON.stringify(formData),
     headers: { 'Content-Type': 'application/json' }
   });
   ```

### Option 3: EmailJS
1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Follow EmailJS documentation to integrate

### Option 4: Custom Backend
Create your own API endpoint and update the fetch URL in `handleSubmit`.

## 🚀 Deployment

### Deploy to Netlify

1. **Via Netlify UI** (Easiest):
   - Push code to GitHub
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your repository
   - Build settings are auto-detected
   - Click "Deploy"

2. **Via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

### Deploy to Vercel

1. **Via Vercel UI**:
   - Push code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Settings are auto-detected
   - Click "Deploy"

2. **Via Vercel CLI**:
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Update vite.config.ts with base path:
base: '/your-repo-name/'

# Deploy
npm run deploy
```

## ✅ Pre-Launch Checklist

### Content
- [ ] Replace all placeholder images with real images
- [ ] Add your actual books to `data/books.json`
- [ ] Write your about page content
- [ ] Add your contact information
- [ ] Create initial blog posts

### Configuration
- [ ] Update site title and description in `index.html`
- [ ] Add your favicon to `public/`
- [ ] Update social media links in footer
- [ ] Configure contact form backend
- [ ] Add Google Maps embed (if desired)

### SEO
- [ ] Add Google Analytics (if desired)
- [ ] Create and submit sitemap.xml
- [ ] Update all canonical URLs with your domain
- [ ] Test Open Graph tags with [opengraph.xyz](https://www.opengraph.xyz/)
- [ ] Verify meta descriptions are under 160 characters

### Performance
- [ ] Run Lighthouse audit
- [ ] Optimize all images
- [ ] Test on mobile devices
- [ ] Check loading times

### Legal
- [ ] Add privacy policy (if collecting data)
- [ ] Add terms of service (if selling)
- [ ] Ensure copyright notices are correct

## 🎯 Lighthouse Optimization Tips

### Performance
- Lazy load images (already implemented)
- Use WebP format for images when possible
- Minimize unused CSS (already optimized)
- Enable gzip compression on server

### Accessibility
- All images have alt text ✓
- Semantic HTML structure ✓
- Keyboard navigation support ✓
- ARIA labels where needed ✓
- Color contrast meets WCAG standards ✓

### SEO
- Meta descriptions on all pages ✓
- Heading hierarchy (h1-h6) ✓
- Descriptive link text ✓
- Canonical URLs ✓
- Open Graph tags ✓

### Best Practices
- HTTPS (configure on hosting)
- No console errors ✓
- Secure dependencies ✓

## 🛍️ Adding E-commerce Features (Future)

This is currently a showcase/inquiry site. To add purchasing:

### Stripe Integration
1. Install Stripe: `npm install @stripe/stripe-js`
2. Create Stripe account and get API keys
3. Add checkout flow to book detail pages
4. Implement order confirmation

### PayPal Integration
1. Sign up for PayPal Business
2. Get API credentials
3. Add PayPal buttons
4. Handle webhooks for order confirmations

### Shopping Cart
Consider libraries like:
- `use-shopping-cart` for Stripe
- `react-use-cart` for general cart management

## 🧪 Testing

### Run Unit Tests
```bash
npm run test
```

### Add New Tests
Create test files in `tests/` directory following the example in `BookCard.test.tsx`.

### Coverage Report
```bash
npm run test:coverage
```

## 🤝 Contributing

This is a template project for book sellers. Feel free to:
- Fork and customize for your business
- Submit issues for bugs
- Suggest features via pull requests

## 📄 License

MIT License - Feel free to use this project for commercial purposes.

## 🔗 Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## 📞 Support

For questions about this template:
- Check the documentation above
- Review the code comments
- Open an issue on GitHub

---

**Quick Repository Description:**
> Professional, responsive website template for English book sellers. Features catalog with search/filter, blog, contact form, and beautiful design. Built with React, TypeScript, and Tailwind CSS. SEO optimized, accessible, and ready to deploy.

## Next Steps

1. **Content First**: Add your real books and write your about page
2. **Design Tweaks**: Adjust colors if needed to match your brand
3. **Contact Setup**: Configure your contact form backend
4. **Test Thoroughly**: Check on multiple devices and browsers
5. **Deploy**: Choose your hosting and go live!
6. **Marketing**: Share your new website with customers

Good luck with your bookstore! 📚✨
