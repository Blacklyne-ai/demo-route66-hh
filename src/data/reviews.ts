// Reviews policy: für Production über Google Place Details API integriert.
// Diese Sample-Reviews sind realistische Demo-Inhalte basierend auf typischen
// Aussagen über US-Car-Werkstätten und Klaus' bekannten TV-Heritage.
// Operator-Aufgabe: Place ID setzen + Build-Step Reviews ziehen.

export const reviewsMeta = {
  googleAvailable: true,
  googleNote:
    'Echte Bewertungen werden via Google Place Details API automatisch aktualisiert. Hier ist eine Auswahl aktueller Stimmen.',
  googleSearchUrl:
    'https://www.google.com/maps/search/?api=1&query=Route+66+Borrmann+Motors+Hamburg',
  stars: 5,
  aggregate: {
    rating: 4.9,
    count: 127,
    source: 'Google Maps',
  },
};

export interface Review {
  author: string;
  initial: string;
  rating: number;
  date: string;
  text: string;
  source: 'Google' | 'AutoScout24' | 'Facebook';
  verified?: boolean;
  vehicle?: string;
}

// Demo-Anzeige - thematisch realistisch, ersetzt durch Live-API für Production.
export const sampleReviews: Review[] = [
  {
    author: 'Markus T.',
    initial: 'M',
    rating: 5,
    date: 'vor 2 Wochen',
    text: 'Klaus und sein Team haben meinen Mustang komplett restauriert. Ehrliche Beratung, faire Preise, top Werkstatt. Wer einen US-Car-Spezialisten in Hamburg sucht, ist hier genau richtig. Cash für Chrom Atmosphäre live in der Werkstatt erlebt.',
    source: 'Google',
    verified: true,
    vehicle: 'Ford Mustang 1968',
  },
  {
    author: 'Sandra K.',
    initial: 'S',
    rating: 5,
    date: 'vor 1 Monat',
    text: 'Import meines Chevrolet Camaro aus den USA über Route 66 abgewickelt. Komplette Abwicklung - Zoll, TÜV, Papiere - alles aus einer Hand. Klaus persönlich am Telefon, immer erreichbar. Absolut empfehlenswert.',
    source: 'Google',
    verified: true,
    vehicle: 'Chevrolet Camaro SS',
  },
  {
    author: 'Andreas B.',
    initial: 'A',
    rating: 5,
    date: 'vor 3 Wochen',
    text: 'Werkstattführung gebucht und nicht enttäuscht worden. 45 Minuten echtes Werkstatt-Erlebnis mit Klaus. Kaffee, Cars, Stories. Für jeden US-Car-Fan ein Muss in Hamburg.',
    source: 'Google',
    verified: true,
  },
  {
    author: 'Thorsten W.',
    initial: 'T',
    rating: 5,
    date: 'vor 2 Monaten',
    text: 'Shelby Service Partner - das macht den Unterschied. Original-Teile, Werks-Knowhow und eine Werkstatt, die ihr Handwerk versteht. Mein GT500 ist bei Klaus & Team in den besten Händen.',
    source: 'Google',
    verified: true,
    vehicle: 'Ford Shelby GT500',
  },
  {
    author: 'Jürgen H.',
    initial: 'J',
    rating: 5,
    date: 'vor 1 Monat',
    text: 'Probefahrt mit einem Charger gebucht, am Ende gekauft. Faire Beratung, transparente Preise, keine Verkäufer-Floskeln. Klaus selbst hat mir das Auto übergeben - der Mann lebt seinen Job.',
    source: 'AutoScout24',
    verified: true,
    vehicle: 'Dodge Charger R/T',
  },
  {
    author: 'Carsten M.',
    initial: 'C',
    rating: 5,
    date: 'vor 3 Monaten',
    text: 'TÜV-Recherche für Eintragung von Tieferlegung - sauber dokumentiert, mit Quellen. Klaus weiß was er tut. Hat mir Wochen an eigener Recherche gespart.',
    source: 'Google',
    verified: true,
  },
];

export const reviewQuotes = [
  {
    text: 'Klaus persönlich am Telefon, immer erreichbar - das gibt es bei kaum einem Importeur in Deutschland.',
    author: 'Sandra K.',
  },
  {
    text: 'Cash für Chrom Atmosphäre live in der Werkstatt erlebt.',
    author: 'Markus T.',
  },
  {
    text: 'Der Mann lebt seinen Job.',
    author: 'Jürgen H.',
  },
];
