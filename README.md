# RUDRXAI — Official Website

The official website for **RUDRXAI**, a software engineering studio specializing in AI solutions, full-stack development, and production-grade products.

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion + Canvas API
- **Deployment:** Vercel-ready

## Features

- Dark/Light mode with system-aware toggle
- Animated particle backgrounds (Canvas)
- Responsive design (mobile-first)
- SEO-optimized with metadata
- Contact form (Web3Forms integration)
- Product showcase with live demo links
- Portfolio & case studies
- Services breakdown

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The app runs at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/               # Next.js App Router pages
│   ├── page.tsx       # Homepage
│   ├── about/         # About page
│   ├── services/      # Services page
│   ├── products/      # Products page
│   ├── portfolio/     # Portfolio page
│   ├── contact/       # Contact page
│   ├── privacy-policy/
│   └── terms-of-service/
├── components/        # Reusable UI components
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Features.tsx
│   ├── WhatWeDo.tsx
│   ├── ProductsShowcase.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   ├── PageBackground.tsx
│   ├── MotionBackground.tsx
│   ├── ParticleField.tsx
│   └── ...
└── data/              # Static data
```

## Environment Variables

Create a `.env.local` file for deployment:

```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key
```

## License

All rights reserved. © RUDRXAI
