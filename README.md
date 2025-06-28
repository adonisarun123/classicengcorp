# 🏭 Classic Engineering Corp Website

A modern, SEO-optimized website for Classic Engineering Corp - a leading provider of industrial motors, gearboxes, pumps, and custom engineering solutions.

## ✨ Features

- **Modern Design**: Beautiful, responsive design with Classic Engineering Corp's brand colors
- **SEO Optimized**: Complete SEO implementation with structured data (JSON-LD)
- **TypeScript**: Full TypeScript implementation for type safety
- **Performance**: Optimized for Core Web Vitals and fast loading
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **Mobile First**: Responsive design that works on all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **SEO**: next-seo package
- **Font**: Inter (Google Fonts)

## 📋 Website Structure

```
/                     - Homepage with hero, products, services
/about-us            - Company information, mission, vision
/products            - Product overview page
  /gearboxes         - Industrial gearboxes
  /motors            - Electric motors
  /pumps             - Industrial pumps
  /custom-solutions  - Custom engineering solutions
/services            - Services overview
  /maintenance       - Maintenance services
  /repair            - Repair services
  /installation      - Installation services
/industries          - Industries served
/downloads           - Technical documents and catalogs
/contact             - Contact form and information
```

## 🎨 Design System

### Brand Colors
- **Corporate Blue**: #003366 (Primary brand color)
- **Corporate Gray**: #666666 (Secondary color)
- **White**: #FFFFFF (Background)

### Typography
- **Font Family**: Inter (Modern, readable sans-serif)
- **Headings**: Bold weights for hierarchy
- **Body Text**: Regular weight for optimal readability

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd classic-engineering-corp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📊 SEO Implementation

### Structured Data (JSON-LD)
- Organization schema for company information
- Product schemas for each product category
- Breadcrumb navigation schemas
- LocalBusiness schema for contact information

### Meta Tags
- Open Graph tags for social media sharing
- Twitter Card meta tags
- Canonical URLs for SEO
- Proper meta descriptions and keywords

### Performance
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized fonts and CSS
- Minimal JavaScript bundle size

## 🎯 Key Pages

### Homepage (`/`)
- Hero section with company messaging
- Product showcase with key features
- Services overview
- Company statistics
- Call-to-action sections

### Products (`/products/*`)
- Comprehensive product listings
- Detailed specifications
- Applications and features
- Technical documentation links

### About Us (`/about-us`)
- Company history and milestones
- Mission and vision statements
- Core values and certifications
- Company timeline

### Contact (`/contact`)
- Multi-channel contact options
- Contact form with validation
- Business hours and location
- Department-specific contact information

## 🔧 Customization

### Adding New Products
1. Create a new page in `/src/app/products/[product-name]/page.tsx`
2. Follow the existing product page structure
3. Add the product to the main products array in `/src/app/products/page.tsx`
4. Update navigation in the Header component

### Modifying Brand Colors
Update the Tailwind configuration in `tailwind.config.ts`:
```typescript
colors: {
  'corporate-blue': '#YOUR_PRIMARY_COLOR',
  'corporate-gray': '#YOUR_SECONDARY_COLOR',
}
```

### Adding New Pages
1. Create the page component in the appropriate directory under `/src/app/`
2. Add navigation links in `Header.tsx` and `Footer.tsx`
3. Implement proper SEO metadata
4. Add structured data if applicable

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

All components adapt to different screen sizes with mobile-first design principles.

## 🔍 SEO Checklist

- ✅ Structured data implementation
- ✅ Meta tags and Open Graph
- ✅ Semantic HTML structure
- ✅ Image alt attributes
- ✅ Proper heading hierarchy
- ✅ Mobile-friendly design
- ✅ Fast loading times
- ✅ Clean URLs
- ✅ XML sitemap ready
- ✅ Internal linking structure

## 🚦 Performance

The website is optimized for:
- **Core Web Vitals**: LCP, FID, CLS optimization
- **Loading Speed**: Code splitting and asset optimization
- **SEO Score**: 100/100 target score
- **Accessibility**: WCAG AA compliance
- **Best Practices**: Security and modern web standards

## 📦 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Digital Ocean App Platform
- AWS Amplify

## 📞 Support

For technical support or questions about the website:
- Email: support@classicengineeringcorp.com
- Phone: +1-800-CLASSIC

## 📄 License

This project is proprietary to Classic Engineering Corp. All rights reserved.

---

**Built with ❤️ for Classic Engineering Corp**
