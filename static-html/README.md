# Static HTML Version - The Literary Corner

This is a static HTML/CSS/Bootstrap version of The Literary Corner website. It requires **no build tools** and can be opened directly in a browser or uploaded to any web host.

## 📁 Files Included

- `index.html` - Homepage
- `styles.css` - Custom styles (extends Bootstrap)
- `script.js` - JavaScript functionality
- `README.md` - This file

## 🚀 How to Use

### Option 1: Open Locally
1. Simply open `index.html` in your web browser
2. No server or build tools required

### Option 2: Upload to Web Host
1. Upload all files to your web hosting service
2. Access via your domain (e.g., `https://yourdomain.com`)

### Popular Hosting Options
- **Netlify Drop**: Drag and drop the folder at [netlify.com/drop](https://app.netlify.com/drop)
- **GitHub Pages**: Push to GitHub and enable Pages in settings
- **Traditional Hosting**: Upload via FTP to services like Bluehost, HostGator, etc.

## 🎨 Customization

### Change Colors
Edit the `:root` variables in `styles.css`:

```css
:root {
    --primary: #7d2e4c;        /* Your primary color */
    --secondary: #4a7d5e;      /* Your secondary color */
    --accent: #d4a02d;         /* Your accent color */
}
```

### Add More Pages
1. Copy `index.html`
2. Rename to your new page (e.g., `catalog.html`)
3. Update the content
4. Add link to navigation in all pages

### Change Content
- Edit the HTML directly in any text editor
- Replace placeholder images with your own
- Update text, titles, descriptions

## 📝 Contact Form Setup

The contact form needs a backend service. Choose one:

### Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form in `contact.html`:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

### Netlify Forms
1. Add these attributes to your form:
```html
<form name="contact" method="POST" data-netlify="true">
```
2. Deploy to Netlify
3. Forms appear in Netlify dashboard

## 🔗 External Resources Used

- Bootstrap 5.3 (CDN)
- Bootstrap Icons (CDN)
- Google Fonts (Inter & Merriweather)
- Unsplash images (placeholders)

## ⚡ Features

- ✅ Fully responsive design
- ✅ No build process required
- ✅ Works offline
- ✅ SEO friendly
- ✅ Accessible
- ✅ Fast loading
- ✅ Cross-browser compatible

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🆚 React vs Static HTML

**Use Static HTML when:**
- You want simplicity
- No complex interactions needed
- Easy updates via text editor
- Traditional hosting

**Use React version when:**
- Need advanced features
- Want dynamic content
- Prefer modern development tools
- Need component reusability

## 📞 Support

For questions about the static HTML version, refer to the main project README or create an issue on GitHub.

---

**Quick Start**: Just open `index.html` in your browser! 🚀
