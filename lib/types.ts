import { LucideIcon } from 'lucide-react';

export interface Division {
  name: string;
  icon: LucideIcon;
  href: string;
  desc: string;
  image?: string;
}

export interface NavLink {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
}

export interface Stat {
  label: string;
  value: string;
}

export interface Value {
  name: string;
  icon: LucideIcon;
  desc: string;
}

export interface Service {
  title: string;
  desc: string;
}

export interface ContactFormData {
  name: string;
  company?: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  error?: string;
  data?: T;
}
