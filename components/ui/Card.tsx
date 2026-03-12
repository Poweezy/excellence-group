import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={`p-8 rounded-2xl gold-border bg-dark-card ${
        hover ? 'hover:bg-dark-elevated transition-all' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

export function IconCard({ icon: Icon, title, description, className = '' }: IconCardProps) {
  return (
    <Card className={`group ${className}`}>
      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-6 h-6 text-primary" strokeWidth={1} />
      </div>
      <h3 className="luxury-text-accent text-[11px] text-white/50 mb-3 tracking-widest group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-slate-400 text-xs leading-relaxed luxury-text-sans font-light">
        {description}
      </p>
    </Card>
  );
}

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className = '' }: StatCardProps) {
  return (
    <div className={`text-center p-6 rounded-2xl gold-border bg-dark ${className}`}>
      <div className="luxury-text-display text-5xl font-bold text-secondary mb-3">
        {value}
      </div>
      <div className="text-white/40 text-[10px] uppercase tracking-[0.3em] luxury-text-accent">
        {label}
      </div>
    </div>
  );
}
