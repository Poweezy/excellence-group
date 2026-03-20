export const SITE_CONFIG = {
  name: 'Excellence Group (Pty) Ltd',
  shortName: 'Excellence Group',
  description: 'A premier diversified African enterprise built on integrity, innovation, and excellence.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://excellencegroup.co.sz',
  locale: 'en_SZ',
  location: 'Manzini, Eswatini',
} as const;

export const CONTACT_INFO = {
  email: 'info@excellencegroup.co.sz',
  phone: '+268 3502 3746',
  address: 'Suite No. 1, First Floor, Eswatini Dairy Board Building, Manzini',
  hours: 'Monday – Friday: 08:00 – 17:00',
} as const;


export const RATE_LIMIT = {
  maxRequests: 3,
  windowMs: 60000, // 1 minute
} as const;

export const ANIMATION_DEFAULTS = {
  duration: 0.65,
  delay: 0,
  ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
} as const;
