import Link from 'next/link';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="luxury-text-display text-9xl font-bold text-primary/20 mb-4">
            404
          </div>
          <h1 className="luxury-text-display text-4xl lg:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed luxury-text-sans max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-dark font-bold rounded-lg hover:bg-primary-light transition-all shadow-gold-sm"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary/20 text-primary hover:bg-primary/5 rounded-lg transition-all"
          >
            <Search className="w-5 h-5" />
            Contact Us
          </Link>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <p className="text-slate-500 text-sm mb-4">Quick Links</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { name: 'About', href: '/about' },
              { name: 'Divisions', href: '/#divisions' },
              { name: 'Careers', href: '/careers' },
              { name: 'Investors', href: '/investors' },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-400 hover:text-primary text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
