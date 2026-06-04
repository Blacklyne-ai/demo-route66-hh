// Route 66 services - core offerings preserved from the Wix site.
// Klaus Borrmann KFZ-Meisterbetrieb in Hamburg-Bahrenfeld plus
// Rendsburg branch. Official Shelby Service Partner.
// All copy preserved verbatim in Du-form (no Sie-form).

export interface Service {
  slug: string;
  href: string;
  title: string;
  navLabel: string;
  icon: string;
  image: string;
  eyebrow: string;
  tagline: string;
  lead: string;
  features: { title: string; body: string; icon: string }[];
  includes: string[];
  cta: string;
  price?: string;
}

export const services: Service[] = [
  {
    slug: 'call-a-mechanic',
    href: '/services/call-a-mechanic',
    title: 'Call a Mechanic',
    navLabel: 'Call a Mechanic',
    icon: 'Phone',
    image: '/images/car-check-hero.jpg',
    eyebrow: 'Telefon-Beratung vom Spezialisten',
    tagline: 'Du brauchst Tipps und Tricks zu Deinem Lieblingsfahrzeug?',
    lead:
      'Professionelle Telefon-Beratung von unseren US-Car-Spezialisten. Ohne Werkstatt-Besuch, direkt am Telefon - Klaus und sein Team beraten Dich zu allen Fragen rund um Dein US-Fahrzeug, Diagnose-Strategie oder TÜV-Problemen.',
    features: [
      { title: 'Online Telefon-Termin buchen', body: 'Wähle den passenden Slot aus unserem Kalender - wir rufen Dich punktgenau zurück.', icon: 'Calendar' },
      { title: 'Problem beschreiben', body: 'Sag uns kurz worum es geht - und vor allem: was Du schon versucht hast.', icon: 'MessageSquare' },
      { title: 'Pauschal-Preis 175 EUR', body: 'Inkl. 19% MwSt. für 45 Minuten Beratung. Bestandskunden sind ausgenommen.', icon: 'Euro' },
      { title: 'Rückruf im Zeitfenster', body: 'Du erhältst in dem gewünschten Zeitfenster einen Rückruf von unserem Spezialisten.', icon: 'PhoneCall' },
    ],
    includes: [
      'Diagnose-Beratung am Telefon',
      'Tipps zu Motor- und Getriebearbeiten',
      'Empfehlungen zu Ersatzteilen',
      'TÜV-Vorbereitung Hinweise',
      'Klassiker-Restaurierung Beratung',
      'Für Bestandskunden kostenlos',
    ],
    cta: 'Telefon-Termin buchen',
    price: '175 EUR / 45 Min.',
  },
  {
    slug: 'car-check',
    href: '/services/car-check',
    title: 'Car Check',
    navLabel: 'Car Check',
    icon: 'SearchCheck',
    image: '/images/car-check-hero.jpg',
    eyebrow: 'Fahrzeug-Prüfung vor dem Kauf',
    tagline: 'Du liebaeugelst mit dem Kauf eines Fahrzeuges, bist Dir aber noch nicht sicher?',
    lead:
      'Wir checken Dein Wunschfahrzeug professionell und ehrlich. Pauschal-Preis bis 1,5 Stunden - egal ob US-Car Import oder EU-Fahrzeug. Bei USA-Fahrzeugen bitte vorab E-Mail senden.',
    features: [
      { title: 'Online buchen', body: 'CAR-CHECK online buchen und Pauschal-Preis sichern.', icon: 'Calendar' },
      { title: '275 EUR pauschal', body: 'Inkl. MwSt. bis max. 1,5 Stunden Prüfdauer.', icon: 'Euro' },
      { title: 'Fahrzeug-Infos senden', body: 'Sende uns alle Infos und Inserate-Links zum Wunschfahrzeug.', icon: 'FileText' },
      { title: 'Klaus ruft zurück', body: 'Klaus klaert mit Dir alle Details und macht den Termin.', icon: 'PhoneCall' },
    ],
    includes: [
      'Visuelle Inspektion (Lack, Rost, Schweißarbeiten)',
      'Technik-Check (Motor, Getriebe, Bremsen)',
      'Originalitaets-Prüfung Oldtimer',
      'Papier-Check (KFZ-Brief, Servicehefte)',
      'Marktwert-Einschaetzung',
      'Mehraufwand 165 EUR pro Stunde',
    ],
    cta: 'Car Check buchen',
    price: '275 EUR pauschal',
  },
  {
    slug: 'car-design',
    href: '/services/car-design',
    title: 'Car Design',
    navLabel: 'Car Design',
    icon: 'Palette',
    image: '/images/car-design-1.jpg',
    eyebrow: 'Tuning, Customisation, Kunstwerk',
    tagline: 'Du liebst es außergewöhnlich?',
    lead:
      'Du möchtest Deinem Auto ein neues Design verpassen? Lass Dich inspirieren, Deiner Fantasie und Kreativität freien Lauf. Und wenn Du es wirklich willst, dass wir Dein Fahrzeug in ein Kunstobjekt verwandeln, dann melde Dich gerne bei uns!',
    features: [
      { title: 'Customisation', body: 'Vom dezenten Streifen bis zur vollstaendigen Fahrzeug-Folierung.', icon: 'Brush' },
      { title: 'Bodywork & Spachtelarbeit', body: 'Eigene Werkstatt für aufwaendige Karosserie-Anpassungen.', icon: 'Hammer' },
      { title: 'Race-Design', body: 'Borrmann Motors Racing - 66 Branding für Track Cars und Show Builds.', icon: 'Flag' },
      { title: 'Inspirations-Gespraech', body: 'Erstgespraech ist kostenfrei - bring Deine Vision mit und wir machen daraus ein Konzept.', icon: 'Lightbulb' },
    ],
    includes: [
      'Vollfolierung & Teilfolierung',
      'Race-Stripes & Decals',
      'Custom Bodywork',
      'Lackierung in unserer Werkstatt',
      'Konzept-Beratung individuell',
      'Show & Track Car Builds',
    ],
    cta: 'Anfrage senden',
  },
  {
    slug: 'call-for-parts',
    href: '/services/call-for-parts',
    title: 'TÜV-Fragen & Ersatzteile',
    navLabel: 'TÜV & Ersatzteile',
    icon: 'Wrench',
    image: '/images/car-design-2.jpg',
    eyebrow: 'Call for Parts - Professionelle Beratung',
    tagline: 'Mit CALL FOR PARTS geben wir Dir die Möglichkeit, Dich professionell zu Ersatzteilen und TÜV-Fragen für Dein Fahrzeug beraten zu lassen.',
    lead:
      'Die Fakten zur Zulassung und Eintragung zusammen zu tragen kostet Zeit und Nerven. Wir recherchieren für Dich das richtige Ersatzteil und prüfen die TÜV-Verträglichkeit vor dem Kauf - damit Dein Umbau auch im KFZ-Schein landet.',
    features: [
      { title: 'Telefon-Termin online buchen', body: 'Wähle den passenden Slot aus unserem Kalender.', icon: 'Calendar' },
      { title: 'Anfrage beschreiben', body: 'Sag uns kurz um welches Bauteil oder welche Eintragungs-Frage es geht.', icon: 'MessageSquare' },
      { title: 'Pauschal-Preis 175 EUR', body: 'Inkl. 19% MwSt. für eine angefangene Recherche-Einheit.', icon: 'Euro' },
      { title: 'Rückruf mit Fakten', body: 'Du erhältst die kompletten Infos zu Teilenummer, Eintragungs-Weg und Quellen.', icon: 'PhoneCall' },
    ],
    includes: [
      'Ersatzteil-Recherche für US-Cars',
      'TÜV-Prüfung von Umbauten',
      'Eintragungs-Strategie nach StVZO',
      'Importteile mit deutscher Zulassung',
      'Beratung zu OEM- und Aftermarket-Teilen',
      'Empfehlung: route66-hh.shop für Direktkauf',
    ],
    cta: 'TÜV-Termin buchen',
    price: '175 EUR / Recherche',
  },
  {
    slug: 'werkstattführung',
    href: '/services/werkstattführung',
    title: 'Private Werkstattführung',
    navLabel: 'Werkstattführung',
    icon: 'Compass',
    image: '/images/klaus-borrmann.jpg',
    eyebrow: 'Neu - Ein Erlebnis für Enthusiasten',
    tagline: 'Ein Blick hinter die Kulissen - dort, wo Leidenschaft auf Motoren trifft.',
    lead:
      'Exklusive Führung durch unsere Werkstatt und unsere Ausstellungsräume. Persönliche Einblicke in unsere Projekte und Fahrzeuge. Zeit für Deine Fragen und Diskussionen. Kaffee und Wasser sind inklusive. Ein Erlebnis für echte Automobil-Enthusiasten und alle, die einen Blick hinter die Kulissen werfen möchten.',
    features: [
      { title: 'Max. 3-4 Personen', body: 'Klein und persönlich, damit jeder Zeit für seine Fragen hat.', icon: 'Users' },
      { title: 'Ca. 45 Minuten', body: 'Genug Zeit für Projekte, Anekdoten und Cash-für-Chrom-Geschichten.', icon: 'Clock' },
      { title: 'Ab Mai 2026 buchbar', body: 'Termine nach Verfügbarkeit - melde Dich am besten frueh.', icon: 'Calendar' },
      { title: '300 EUR pro Führung', body: 'Inkl. MwSt., Kaffee und Wasser für die ganze Gruppe.', icon: 'Euro' },
    ],
    includes: [
      'Werkstatt-Rundgang mit Klaus',
      'Aktuelle Restaurations-Projekte ansehen',
      'Ausstellungs-Raum US-Cars',
      'Werkzeug- und Equipment-Schau',
      'Persönliche Q&A-Runde',
      'Kaffee, Wasser und Cash-für-Chrom-Stories',
    ],
    cta: 'Werkstattführung buchen',
    price: '300 EUR / Führung',
  },
];

export function serviceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

// Quick service tiles for service-grid sections
export const quickServiceTiles = [
  { title: 'Probefahrt & Besichtigung', body: 'Wunschfahrzeug gefunden? Schau es Dir an und teste es!', icon: 'Car' },
  { title: 'Werkstatt & Abholservice', body: 'Dein US-Fahrzeug in besten Haenden. Frag auch gern nach unserem Abholservice.', icon: 'Truck' },
  { title: 'Fahrzeugsuche', body: 'Noch nicht fündig geworden? Wir finden Dein Modell.', icon: 'Search' },
  { title: 'US-Car-Experten', body: 'Ob Oldtimer, Youngtimer oder Neuwagen - wir kennen uns aus!', icon: 'Award' },
];
