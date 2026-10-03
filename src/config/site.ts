export const siteConfig = {
  name: 'Erwin Austria',
  roleLine: 'HighLevel Certified Admin · CRM & Automation Systems Specialist · AI Automation',
  roleParts: [
    'HighLevel Certified Admin',
    'CRM & Automation Systems Specialist',
    'AI Automation',
  ] as const,
  heroHeadline: 'The invisible engine behind your business.',
  supportingLine: 'GoHighLevel systems, automations and integrations, built to run quietly and reliably.',
  email: 'eaustria963@gmail.com',
  whatsapp: 'https://wa.me/639107188536',
  bookingUrl: '',
  siteUrl: 'https://erwin-portfolio.eaustria963.workers.dev',
  navLinks: [
    { label: 'GHL', href: '/#ghl' },
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/#about' },
    { label: 'Contact', href: '/#contact' },
  ] as const,
  defaultTitle: 'Erwin Austria — HighLevel Certified Admin · CRM & Automation Systems Specialist',
  defaultDescription: 'HighLevel Certified Admin · CRM & Automation Systems Specialist · AI Automation. The invisible engine behind your business.',
} as const;

export type SiteConfig = typeof siteConfig;
