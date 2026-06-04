// Team - verbatim bios preserved from the existing Wix site.
// All personal touches (40 Jahre, 30 Jahre, V8 im Herzen) kept exactly.

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  location: 'hamburg' | 'rendsburg';
  trustBadges?: string[];
}

export const team: TeamMember[] = [
  {
    slug: 'klaus-borrmann',
    name: 'Klaus Borrmann',
    role: 'Inhaber & Chef vom Ganzen',
    bio: 'Chef vom Ganzen und bekannt aus Cash für Chrom bei DMAX TV. Mit über 35 Jahren Leidenschaft für US-Cars steht Klaus persönlich für Beratung, Import-Abwicklung und Restaurations-Projekte.',
    image: '/images/klaus-borrmann.jpg',
    location: 'hamburg',
    trustBadges: ['Cash für Chrom DMAX', 'EST. 1989', 'KFZ-Meisterbetrieb'],
  },
  {
    slug: 'michel-schmidt',
    name: 'Michel Schmidt',
    role: 'Ersatzteil-Experte',
    bio: 'DER Experte in Sachen Ersatzteile, er wird auch gern Ersatzteilwiki auf zwei Beinen genannt. Seit 40 Jahren Spezialist für Autoteile.',
    image: '/images/michel-schmidt.jpg',
    location: 'hamburg',
    trustBadges: ['40 Jahre Erfahrung'],
  },
  {
    slug: 'fred-fiedler',
    name: 'Fred Fiedler',
    role: 'KFZ-Meister & Werkstattleiter',
    bio: 'KFZ-Meister und seit 30 Jahren Werkstattleiter. Who knows what it is? Fred!',
    image: '/images/fred-fiedler.jpg',
    location: 'hamburg',
    trustBadges: ['30 Jahre Werkstattleiter', 'KFZ-Meister'],
  },
  {
    slug: 'bjoern',
    name: 'Björn',
    role: 'Standortleiter Rendsburg',
    bio: 'Vollblutmechaniker mit Diesel im Blut und V8 im Herzen. Sein norddeutscher Charme verzückt das Team und Cash-für-Chrom-Fans. Björn leitet den Standort Rendsburg.',
    image: '/images/bjoern.jpg',
    location: 'rendsburg',
    trustBadges: ['V8 im Herzen', 'Standort Rendsburg'],
  },
];

export function teamMember(slug: string) {
  return team.find((t) => t.slug === slug);
}
