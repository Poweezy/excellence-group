# Contributing to Excellence Group Website

Thank you for your interest in contributing to the Excellence Group website.

## Development Setup

1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd excellence-group
   npm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Configure your environment variables
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   ```

## Code Standards

### TypeScript
- Use TypeScript for all new files
- Define proper types (avoid `any`)
- Use interfaces for object shapes
- Export types from `lib/types.ts`

### React/Next.js
- Use functional components
- Prefer server components (avoid "use client" unless needed)
- Use Next.js Image component for images
- Follow Next.js 14 App Router conventions

### Styling
- Use Tailwind CSS utility classes
- Follow existing design system (colors, spacing)
- Use custom classes from `globals.css` when appropriate
- Maintain responsive design (mobile-first)

### Accessibility
- Add ARIA labels to interactive elements
- Ensure keyboard navigation works
- Maintain color contrast ratios
- Test with screen readers

## Git Workflow

1. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes**
   - Write clean, readable code
   - Follow existing patterns
   - Add comments for complex logic

3. **Test Your Changes**
   ```bash
   npm run lint
   npm run type-check
   npm run build
   ```

4. **Commit**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

   Commit message format:
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation
   - `style:` Formatting
   - `refactor:` Code restructuring
   - `test:` Adding tests
   - `chore:` Maintenance

5. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## File Structure

```
app/
├── [page]/          # Route pages
├── api/             # API routes
├── layout.tsx       # Root layout
├── error.tsx        # Error boundary
└── loading.tsx      # Loading state

components/
├── layout/          # Layout components
└── ui/              # Reusable UI components

lib/
├── data.ts          # Static data
├── types.ts         # TypeScript types
├── constants.ts     # Configuration
├── utils.ts         # Utility functions
└── validation.ts    # Validation helpers
```

## Adding New Pages

1. Create page in `app/[page-name]/page.tsx`
2. Add metadata export
3. Update sitemap in `app/sitemap.ts`
4. Add navigation link if needed

## Adding New Components

1. Create in appropriate directory
2. Export from index file if needed
3. Add TypeScript types
4. Document props with JSDoc

## Testing Checklist

Before submitting PR:
- [ ] Code builds without errors
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Tested on mobile and desktop
- [ ] Accessibility checked
- [ ] Performance is acceptable

## Questions?

Contact the development team at info@excellencegroup.co.sz
