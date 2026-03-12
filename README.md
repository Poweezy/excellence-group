# Excellence Group (Pty) Ltd - Corporate Website

A premium Next.js 14 corporate website for Excellence Group, a diversified African enterprise based in Eswatini.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Playfair Display, Inter

## 📋 Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd excellence-group
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Configure environment variables in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
RESEND_API_KEY=your_api_key_here
# Add other variables as needed
```

## 🏃 Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

Create a production build:

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
excellence-group/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── api/                 # API routes
│   │   └── contact/         # Contact form API
│   ├── [divisions]/         # Division pages
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── error.tsx            # Error boundary
│   ├── loading.tsx          # Loading state
│   └── sitemap.ts           # Dynamic sitemap
├── components/
│   ├── layout/              # Layout components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── DivisionLayout.tsx
│   └── ui/                  # UI components
│       └── AnimatedSection.tsx
├── lib/
│   ├── data.ts              # Centralized data
│   └── utils.ts             # Utility functions
├── public/
│   ├── assets/              # Images and assets
│   ├── logo.png
│   └── robots.txt
└── styles/
    └── globals.css          # Global styles
```

## 🎨 Design System

### Colors
- **Primary (Gold):** #D4AF37
- **Secondary (Emerald):** #10B981
- **Dark Navy:** #0A2540
- **Card Background:** #0D2D4D

### Typography
- **Display:** Playfair Display (serif)
- **Body:** Inter (sans-serif)

### Custom Classes
- `.luxury-text-display` - Display headings
- `.luxury-text-accent` - Uppercase accent text
- `.luxury-text-sans` - Body text
- `.gold-shimmer` - Animated gold gradient
- `.glass-card` - Glassmorphism effect

## 🔒 Security Features

- Rate limiting on contact form (3 requests/minute)
- Input sanitization
- CSRF protection headers
- XSS protection headers
- Content Security Policy

## ♿ Accessibility

- ARIA labels on interactive elements
- Skip-to-content link
- Semantic HTML structure
- Keyboard navigation support
- Focus indicators

## 🔍 SEO

- Dynamic sitemap generation
- Open Graph tags
- Twitter Card tags
- Structured metadata
- robots.txt configuration

## 📧 Contact Form Setup

The contact form requires email service configuration. Options:

### Option 1: Resend (Recommended)
```bash
npm install resend
```

Add to `.env.local`:
```env
RESEND_API_KEY=re_xxxxx
```

### Option 2: SMTP
Configure SMTP settings in `.env.local`:
```env
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Other Platforms
```bash
npm run build
```
Deploy the `.next` folder and `public` directory.

## 📊 Performance

- Image optimization with Next.js Image
- Code splitting
- Font optimization
- Lazy loading animations

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 📝 License

Copyright © 2024 Excellence Group (Pty) Ltd. All rights reserved.

## 🤝 Contributing

This is a private corporate website. For inquiries, contact info@excellencegroup.co.sz

## 📞 Support

For technical support or questions:
- Email: info@excellencegroup.co.sz
- Phone: +268 3502 3746
- Location: Manzini, Eswatini
