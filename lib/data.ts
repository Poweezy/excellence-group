import { Landmark, Truck, Leaf, Droplets, Construction, Sprout, Building2, ShieldCheck, Zap, Award, Heart } from "lucide-react";
import type { Division, NavLink, Stat, Value } from './types';

export const divisions: Division[] = [
  { name: "Financial Advisory", icon: Landmark, href: "/financial", desc: "Expert wealth management and capital solutions" },
  { name: "Logistics Division", icon: Truck, href: "/logistics", desc: "End-to-end supply chain excellence" },
  { name: "Sustainability", icon: Leaf, href: "/sustainability", desc: "Green energy and environmental solutions" },
  { name: "Water Bottling", icon: Droplets, href: "/water", desc: "Premium water bottling and distribution" },
  { name: "Heavy Plant & Construction", icon: Construction, href: "/heavy-plant", desc: "Large-scale construction and infrastructure" },
  { name: "Agriculture", icon: Sprout, href: "/agriculture", desc: "Modern farming and agri-processing" },
  { name: "Mall & Property", icon: Building2, href: "/mall-property", desc: "Premium real estate development" },
  { name: "Insurance Division", icon: ShieldCheck, href: "/insurance", desc: "Comprehensive risk management solutions" },
];

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Divisions", href: "#", dropdown: divisions.map(({ name, href }) => ({ name, href })) },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Investors", href: "/investors" },
  { name: "Tenders", href: "/tenders" },
];

export const stats: Stat[] = [
  { label: "Years of Excellence", value: "20+" },
  { label: "Countries Active", value: "12" },
  { label: "Divisions", value: "8" },
  { label: "Employees", value: "5,000+" },
];

export const values: Value[] = [
  { name: "Integrity", icon: ShieldCheck, desc: "Upholding the highest moral and ethical standards in every transaction." },
  { name: "Innovation", icon: Zap, desc: "Pioneering new technologies and methodologies to lead global markets." },
  { name: "Excellence", icon: Award, desc: "A relentless pursuit of perfection in all our diversified ventures." },
  { name: "Sustainability", icon: Leaf, desc: "Commitment to long-term environmental and economic resilience." },
  { name: "Social Impact", icon: Heart, desc: "Creating measurable value and upliftment for our local communities." },
];
