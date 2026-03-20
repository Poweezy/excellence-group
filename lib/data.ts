import { Landmark, Truck, Droplets, Construction, Sprout, Building2, ShieldCheck, Zap, Award, Heart, Leaf } from "lucide-react";
import type { Division, NavLink, Stat, Value } from './types';

export const divisions: Division[] = [
  { name: "Financial Advisory", icon: Landmark, href: "/financial", desc: "Expert wealth management and capital solutions", image: "/assets/financial-bg.png" },
  { name: "Logistics Division", icon: Truck, href: "/logistics", desc: "End-to-end supply chain excellence", image: "/assets/logistics-bg.png" },


  { name: "Water Bottling", icon: Droplets, href: "/water", desc: "Premium water bottling and distribution", image: "/assets/water-bg.png" },
  { name: "Heavy Plant & Construction", icon: Construction, href: "/heavy-plant", desc: "Large-scale construction and infrastructure", image: "/assets/heavy-plant-bg.png" },
  { name: "Agriculture", icon: Sprout, href: "/agriculture", desc: "Modern farming and agri-processing", image: "/assets/agriculture-bg.png" },
  { name: "Mall & Property", icon: Building2, href: "/mall-property", desc: "Premium real estate development", image: "/assets/mall-property-bg.jpg" },
  { name: "Insurance Division", icon: ShieldCheck, href: "/insurance", desc: "Comprehensive risk management solutions", image: "/assets/insurance-bg.jpg" },
];

export const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Divisions", href: "#", dropdown: divisions.map(({ name, href }) => ({ name, href })) },

  { name: "Investors", href: "/investors" },
];

export const stats: Stat[] = [
  { label: "Years of Excellence", value: "20+" },
  { label: "Countries Active", value: "12" },
  { label: "Divisions", value: "8" },
  { label: "Employees", value: "5,000+" },
];

export const values: Value[] = [
  { name: "Excellence", icon: Award, desc: "We pursue superior performance in all we do." },
  { name: "Integrity", icon: ShieldCheck, desc: "Ethical business practices guide everyday decisions." },
  { name: "Innovation", icon: Zap, desc: "We embrace modern solutions and strategic thinking." },
  { name: "Sustainability", icon: Leaf, desc: "Long-term environmental and economic responsibility." },
  { name: "Impact", icon: Heart, desc: "We create meaningful value for stakeholders and communities." },
];
