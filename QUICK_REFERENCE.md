# Quick Reference Guide

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Setup environment
cp .env.example .env.local

# Run development server
npm run dev

# Build for production
npm run build
npm run start
```

## 📁 Key Files

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout, metadata, SEO |
| `app/page.tsx` | Homepage |
| `app/api/contact/route.ts` | Contact form API |
| `lib/data.ts` | Static content data |
| `lib/types.ts` | TypeScript types |
| `lib/constants.ts` | Configuration values |
| `lib/validation.ts` | Validation utilities |
| `next.config.mjs` | Next.js configuration |

## 🎨 Design Tokens

```css
/* Colors */
--primary: #D4AF37 (Gold)
--secondary: #10B981 (Emerald)
--dark-bg: #0A2540 (Navy)

/* Typography */
font-display: Playfair Display
font-body: Inter

/* Custom Classes */
.luxury-text-display
.luxury-text-accent
.gold-shimmer
.glass-card
```

## 🔧 Common Tasks

### Add New Page
```bash
# 1. Create page file
app/new-page/page.tsx

# 2. Add to sitemap
app/sitemap.ts

# 3. Add navigation link (if needed)
lib/data.ts
```

### Update Contact Info
```typescript
// lib/constants.ts
export const CONTACT_INFO = {
  email: 'info@excellencegroup.co.sz',
  phone: '+268 3502 3746',
  // ...
}
```

### Add New Division
```typescript
// lib/data.ts
export const divisions = [
  {
    name: "Division Name",
    icon: IconComponent,
    href: "/division-url",
    desc: "Description"
  }
]
```

## 🧪 Testing Commands

```bash
# Lint code
npm run lint

# Type check
npm run type-check

# Format code
npm run format

# Check formatting
npm run format:check
```

## 🚢 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

### Environment Variables Needed
```env
NEXT_PUBLIC_SITE_URL=https://excellencegroup.co.sz
RESEND_API_KEY=your_key_here
```

## 📞 Support

- **Email:** info@excellencegroup.co.sz
- **Phone:** +268 3502 3746
- **Location:** Manzini, Eswatini

## 📚 Documentation

- [README.md](./README.md) - Full documentation
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Development guidelines
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment checklist
- [IMPROVEMENTS.md](./IMPROVEMENTS.md) - Changes summary
- [CHANGELOG.md](./CHANGELOG.md) - Version history
