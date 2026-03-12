# Production Deployment Checklist

## Pre-Deployment

### Environment Setup
- [ ] Copy `.env.example` to `.env.local`
- [ ] Set `NEXT_PUBLIC_SITE_URL` to production URL
- [ ] Configure email service (Resend API key or SMTP)
- [ ] Add Google Analytics ID (if using)
- [ ] Update Google Search Console verification code in layout.tsx

### Content Review
- [ ] Review all page content for accuracy
- [ ] Verify contact information (phone, email, address)
- [ ] Check all internal links work correctly
- [ ] Verify all images are optimized and loading
- [ ] Test contact form submission

### SEO & Analytics
- [ ] Verify sitemap.xml is accessible at /sitemap.xml
- [ ] Check robots.txt is accessible at /robots.txt
- [ ] Confirm Open Graph images are set
- [ ] Test social media sharing previews
- [ ] Set up Google Analytics (if needed)
- [ ] Submit sitemap to Google Search Console

### Performance
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test on mobile devices
- [ ] Check page load times
- [ ] Verify images are using Next.js Image optimization
- [ ] Test on slow 3G connection

### Security
- [ ] Verify security headers are set
- [ ] Test rate limiting on contact form
- [ ] Check for exposed API keys or secrets
- [ ] Enable HTTPS/SSL certificate
- [ ] Test CORS policies

### Accessibility
- [ ] Test with screen reader
- [ ] Verify keyboard navigation works
- [ ] Check color contrast ratios
- [ ] Test skip-to-content link
- [ ] Verify all images have alt text

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### Legal & Compliance
- [ ] Add Privacy Policy page (if collecting data)
- [ ] Add Terms of Service page
- [ ] Add Cookie Consent (if required)
- [ ] Verify GDPR compliance (if applicable)

## Deployment

### Vercel (Recommended)
1. [ ] Push code to GitHub
2. [ ] Import project in Vercel
3. [ ] Add environment variables in Vercel dashboard
4. [ ] Configure custom domain
5. [ ] Deploy to production
6. [ ] Test production URL

### Alternative Platforms
1. [ ] Run `npm run build` locally to test
2. [ ] Configure environment variables on platform
3. [ ] Set up custom domain
4. [ ] Deploy
5. [ ] Verify deployment

## Post-Deployment

### Monitoring
- [ ] Set up error tracking (Sentry, etc.)
- [ ] Enable Vercel Analytics
- [ ] Monitor Core Web Vitals
- [ ] Set up uptime monitoring

### Marketing
- [ ] Submit to search engines
- [ ] Update social media profiles with new URL
- [ ] Announce launch
- [ ] Set up email signatures with website link

### Maintenance
- [ ] Schedule regular content updates
- [ ] Plan for security updates
- [ ] Set up automated backups
- [ ] Document update procedures

## Emergency Contacts

- **Technical Issues:** [Your Name/Team]
- **Content Updates:** [Content Manager]
- **Hosting Support:** [Vercel/Platform Support]

## Rollback Plan

If issues occur:
1. Revert to previous deployment in Vercel
2. Check error logs
3. Fix issues locally
4. Test thoroughly
5. Redeploy

---

**Last Updated:** [Date]
**Deployed By:** [Name]
**Deployment Date:** [Date]
