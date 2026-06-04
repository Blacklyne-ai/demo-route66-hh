// Route 66 Borrmann Motors KG Hamburg - central site configuration.
// Every business fact preserved verbatim from the existing Wix site
// (route66-hh.de) and the briefing. Nothing invented.
// German throughout. Du-form. Currency EUR. Phone format +49.

export const site = {
  name: 'Route 66 Borrmann Motors',
  shortName: 'Route 66 HH',
  legalName: 'Route 66 Borrmann Motors KG',
  tagline: 'Dein Spezialist für US-Cars',
  taglineFull: 'Dein Spezialist für US-Cars, Classic Cars, Oldtimer, Youngtimer und Neuwagen',
  description:
    'Route 66 Borrmann Motors KG Hamburg - All American Cars, US-Car-Spezialist und KFZ-Meisterbetrieb, Import/Verkauf amerikanischer Oldtimer, Youngtimer inklusive Zollabfertigung und Neuwagen. Kieler Straße 271, D-22525 Hamburg.',
  url: 'https://demo-route66-hh.pages.dev',

  // Hamburg headquarters
  phone: '+49 40 541095',
  phoneDisplay: '+49 (40) 54 10 95',
  phoneIntl: '+4940541095',
  phoneDigits: '4940541095',

  // Rendsburg branch (Björn)
  phoneRendsburg: '+49 172 5623198',
  phoneRendsburgDisplay: '+49 (172) 56 23 198',
  phoneRendsburgIntl: '+491725623198',
  phoneRendsburgDigits: '491725623198',

  email: 'info@route66-hh.de',
  emailWorkshop: 'werkstatt@route66-hh.de',
  emailRendsburg: 'info@route66-sh.de',

  // Pre-filled WhatsApp message
  whatsappMessage: 'Hallo Route 66 Team, ich habe eine Anfrage zu meinem US-Car bzw. Wunschfahrzeug.',

  address: {
    street: 'Kieler Straße 271',
    streetDetail: 'Ecke Uwestraße',
    postal: '22525',
    city: 'Hamburg',
    region: 'Hamburg',
    country: 'Deutschland',
    countryCode: 'DE',
    lat: 53.5734,
    lng: 9.9203,
  },

  addressRendsburg: {
    street: 'Lundener Straße 12-14',
    postal: '24768',
    city: 'Rendsburg',
    region: 'Schleswig-Holstein',
    country: 'Deutschland',
    countryCode: 'DE',
    web: 'https://www.route66-sh.de',
  },

  legal: {
    hra: 'HRA 84233',
    ustIdNr: 'DE118039307',
    gesellschafter: 'Klaus-Peter Borrmann',
    gerichtsstand: 'Amtsgericht Hamburg',
  },

  hours: [
    { day: 'Montag', open: '08:00', close: '17:00' },
    { day: 'Dienstag', open: '08:00', close: '17:00' },
    { day: 'Mittwoch', open: '08:00', close: '17:00' },
    { day: 'Donnerstag', open: '08:00', close: '17:00' },
    { day: 'Freitag', open: '08:00', close: '15:00' },
    { day: 'Samstag', open: null, close: null },
    { day: 'Sonntag', open: null, close: null },
  ] as { day: string; open: string | null; close: string | null }[],

  hoursSummary: [
    { label: 'Montag - Donnerstag', value: '8:00 - 17:00 Uhr' },
    { label: 'Freitag', value: '8:00 - 15:00 Uhr' },
    { label: 'Samstag', value: 'Nach Vereinbarung' },
    { label: 'Sonntag', value: 'Geschlossen' },
  ],

  phoneAvailability: 'Telefonisch erreichbar Montag - Freitag 09:00 - 15:00 Uhr',

  // Trust signals & figures
  stats: {
    yearsEstablished: 1989,
    yearsExperience: 35,
    teamYearsCombined: 110,
  },

  social: {
    instagram: 'https://instagram.com/route_66_borrmann_motors',
    instagramHandle: '@route_66_borrmann_motors',
    youtube: 'https://www.youtube.com/channel/UCsAVSWGRaxmpvSy81R1NIcw',
    facebook: 'https://facebook.com/KlausBorrmannMotors',
  },

  // External (NOT migrated - remain external links)
  external: {
    autoscout24: 'https://www.autoscout24.de/haendler/route-66-borrmann-motors-kg-hamburg',
    partsShop: 'https://www.route66-hh.shop',
    shopMerchandise: 'https://www.route66-hh.shop/category/shirts-hoodies',
    shopErsatzteile: 'https://www.route66-hh.shop/category/ersatzteile',
    shopTuning: 'https://www.route66-hh.shop/category/tuning',
    cashFürChrom: 'https://www.dmax.de/sendungen/cash-für-chrom',
  },

  // Google Maps - Place ID extracted from official Maps URL
  // Place: Borrmann GmbH (Route 66) - 0x47baa35be11860db:0x393d7c138bd25d6b
  googlePlaceId: '0x47baa35be11860db:0x393d7c138bd25d6b',
  googleMapsEmbed:
    'https://www.google.com/maps?q=Route+66+Borrmann+Motors+Kieler+Stra%C3%9Fe+271+Hamburg&z=16&output=embed',
  googleMapsUrl:
    'https://www.google.com/maps/place/Borrmann+GmbH/data=!4m2!3m1!1s0x47baa35be11860db:0x393d7c138bd25d6b',
  googleReviewsUrl:
    'https://www.google.com/maps/place/Borrmann+GmbH/data=!4m6!3m5!1s0x47baa35be11860db:0x393d7c138bd25d6b!8m2!3d53.5734!4d9.9203!9m1!1b1',
  googleDirectionsUrl:
    'https://www.google.com/maps/dir/?api=1&destination=Kieler+Straße+271+22525+Hamburg&destination_place_id=0x47baa35be11860db:0x393d7c138bd25d6b',
  googleMapsEmbedRendsburg:
    'https://www.google.com/maps?q=Lundener+Stra%C3%9Fe+12,+24768+Rendsburg&z=16&output=embed',
  googleMapsUrlRendsburg:
    'https://www.google.com/maps/search/?api=1&query=Lundener+Straße+12+24768+Rendsburg',
};

// Link helpers
export const telLink = `tel:${site.phoneIntl}`;
export const telRendsburgLink = `tel:${site.phoneRendsburgIntl}`;
export const mailLink = `mailto:${site.email}`;
export const mailWorkshopLink = `mailto:${site.emailWorkshop}`;
export const whatsappLink = `https://wa.me/${site.phoneDigits}?text=${encodeURIComponent(site.whatsappMessage)}`;

export function whatsappFor(subject: string) {
  return `https://wa.me/${site.phoneDigits}?text=${encodeURIComponent(subject)}`;
}
export function mailFor(subject: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

// Navigation
export interface NavItem {
  href: string;
  label: string;
  external?: boolean;
  children?: { href: string; label: string; external?: boolean }[];
}

export const nav: NavItem[] = [
  { href: '/', label: 'Startseite' },
  {
    href: 'https://www.autoscout24.de/haendler/route-66-borrmann-motors-kg-hamburg',
    label: 'Fahrzeuge',
    external: true,
  },
  {
    href: '/services',
    label: 'Services',
    children: [
      { href: '/services', label: 'Alle Services' },
      { href: '/services/call-a-mechanic', label: 'Mechaniker-Beratung' },
      { href: '/services/car-check', label: 'Fahrzeug-Check' },
      { href: '/services/car-design', label: 'Tuning & Design' },
      { href: '/services/call-for-parts', label: 'Teile & TÜV-Beratung' },
      { href: '/services/werkstattfuehrung', label: 'Private Werkstattführung' },
    ],
  },
  {
    href: 'https://www.route66-hh.shop',
    label: 'Shop',
    external: true,
    children: [
      { href: 'https://www.route66-hh.shop', label: 'Shop-Startseite', external: true },
      { href: 'https://www.route66-hh.shop/category/shirts-hoodies', label: 'Merchandise', external: true },
      { href: 'https://www.route66-hh.shop/category/ersatzteile', label: 'Ersatzteile', external: true },
      { href: 'https://www.route66-hh.shop/category/tuning', label: 'Tuning', external: true },
    ],
  },
  { href: '/team', label: 'Team' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/presse', label: 'Presse' },
  { href: '/kontakt', label: 'Kontakt' },
];

export const legalNav = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
  { href: '/agb', label: 'AGB' },
];

// Trust signals
export const trustSignals = [
  'Bekannt aus Cash für Chrom',
  'Official Shelby Service Partner',
  'KFZ-Meisterbetrieb',
  'EST. 1989',
];

// Full service list (verbatim from existing Wix site)
export const fullServiceLeistungen = [
  'US-Cars - Oldtimer, Youngtimer und Neuwagen',
  'Official Shelby Service Partner',
  'Classic Cars - Muscle Cars',
  'Import US-Cars',
  'Reparatur US-Cars - Oldtimer, Youngtimer und Neuwagen',
  'Restaurierung US-Cars - Oldtimer',
  'Zulassungen',
  'TÜV-Abnahmen',
  'Ersatzteile',
];
