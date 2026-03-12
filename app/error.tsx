'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, Home, RefreshCcw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
            <AlertTriangle className="w-10 h-10 text-primary" />
          </div>
          <h1 className="luxury-text-display text-4xl font-bold text-white mb-4">
            Something Went Wrong
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed luxury-text-sans">
            We apologize for the inconvenience. Our team has been notified and is working to resolve the issue.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-dark font-bold rounded-lg hover:bg-primary-light transition-all"
          >
            <RefreshCcw className="w-4 h-4" />
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-primary/20 text-primary hover:bg-primary/5 rounded-lg transition-all"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
