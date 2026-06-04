# JUDGEMENT CALLS - Route 66 Borrmann Motors KG Hamburg

## Brand DNA Extraction (vor jedem Code-Write erstellt)

### Logo-Analyse (Authority-Rule)

Das Original-Logo zeigt einen klaren **Hardcore-Americana-Biker-Aesthetic**:
- **SCHWARZ dominant** mit Chrome/Silber-Gear als Hauptmotiv
- Skull mit "66"-Headband (klassisch Muscle-Car Outlaw)
- Route 66 Shield in Silber-Schwarz
- "BORRMANN MOTORS" / "ALL AMERICAN CARS" / "ROUTE 66 - HAMBURG"
- "EST. 1989" - 35 Jahre Heritage
- Schrift: condensed bold display (Highway-Sign-Charakter)

Klaus' Portrait zeigt klar:
- Tätowiert (Vollarm-Sleeves)
- Grau-meliert, Bart, kantig
- "Respect Your Districts" T-Shirt (Old-School Loyalty Vibe)
- Route 66 Highway-Schild im Hintergrund
- Dunkle Werkstatt-Wand
- 100% Hardcore-Werkstatt-authentic, NICHT clean-cut "premium dealer"

### Logo-Authority überschreibt Default-Briefing

Das Default-Briefing wollte LIGHT/Cream mood. Das LOGO zeigt aber klar:
**Predominant DARK + Chrome + Route66-Rot** = matches Brand DNA

Daher: **Hybrid-Strategy** mit:
- Hero, Footer, Team-Showcase = DARK (schwarz/anthrazit)
- Service-Sections, Content = WARMER CREAM mit dunklen Akzent-Sektionen
- Akzent-Farbe: Route 66 Highway-Rot (Highway Shield)
- Sekundär-Akzent: Chrome/Silber (Logo-Gear)

### Farbpalette Final

```
Primary Background DARK: #0A0A0A (matt black, wie Muscle Car Paint)
Section Background DARK: #1A1A1A (anthracite)
Section Background LIGHT: #FAFAF7 (warmer Cream, NICHT pure white)
Section Background CREAM: #F5F1E8 (warm-cream layering)

Accent RED Route 66: #B91C1C (Highway-Schild-Rot, warm signal red)
Accent RED Deep: #991B1B (für hover/active states)
Accent CHROME: #C9C9CD (Silber-Metallic für premium Akzente)
Accent CHROME Warm: #B8B5AD (Heritage-Chrom)

Text Primary on Light: #1A1A1A
Text Muted on Light: #5A5550 (warm grey)
Text on Dark: #FAFAF7 / weiß
Text Muted on Dark: rgba(255,255,255,0.7)

Border Light: #E5DDD0 (warmer Border-Ton)
Border Dark: rgba(255,255,255,0.1)
Success Green: #10B981 (für "TÜV bestanden" moments)
```

### Schriften (Americana-Heritage-Lineage)

- **Display/Headlines**: **Oswald** (700 Weight) - condensed bold, Highway-Sign-Charakter, matches Logo-Schrift
- **Body**: **Work Sans** (300/400/500/600/700) - humanist sans für Du-Form-Lesbarkeit
- **NICHT verwendet** (Tech-Look verboten):
  - Inter / Bebas Neue / JetBrains Mono / Cormorant Garamond / Unbounded (das war das Major Car Parts Template)
- **Optional Brand-Accent**: Reserved für später falls nötig

### Tonalität

**Du-Form überall** preserved aus Wix-Site:
- "Dein Spezialist für US-Cars"
- "Dein Klaus Borrmann"
- "Du hast Dein Wunschfahrzeug gefunden"
- "Frag auch gern nach unserem Abholservice"

NIEMALS Sie-Form. Klaus' Brand ist persönlich, authentisch, V8-passionate.

### Site-Mood

**HYBRID**: Predominant DARK (Hero, Team-Showcase, Footer, manche CTAs) + LIGHT Section-Bodies (Services-Grid, Content) mit warmen Cream. KEIN Toggle. Das Logo-Authority erlaubt diesen Mix - er passt zur tätowierten Werkstatt-Realität von Klaus.

### Content Verbatim Preserved aus Wix-Site

- Hero: "Dein Spezialist für US-Cars, Classic Cars, Oldtimer, Youngtimer und Neuwagen"
- Authority Statement: "Route 66 in Hamburg ist der erfolgreiche und aus Cash für Chrom bekannte Importeur, Tuner und Service-Partner für US-Fahrzeuge in ganz Deutschland!"
- Klaus Sign-Off: "Kontaktiere uns – wir machen Deinen Fahrzeugtraum wahr! Herzliche Grüße, Dein Klaus Borrmann"
- Service-Listen verbatim aus Wix
- Team-Bios verbatim:
  - Michel: "DER Experte in Sachen Ersatzteile, er wird auch gern Ersatzteilwiki auf zwei Beinen genannt. Seit 40 Jahren Spezialist für Autoteile."
  - Fred: "KFZ-Meister und seit 30 Jahren Werkstattleiter. Who knows what it is? Fred!"
  - Björn: "Vollblutmechaniker mit Diesel im Blut und V8 im Herzen. Sein norddeutscher Charme verzückt das Team und Cash für Chrom-Fans."

### Beide Standorte

- **Hamburg HQ**: Kieler Straße 271, 22525 Hamburg (Klaus + Michel + Fred)
- **Rendsburg Zweigstelle**: Lundener Str. 12-14, 24768 Rendsburg (Björn leitet)

Beide Standorte mit Google Maps Embed und vollständigen Kontaktdaten.

### Trust-Signals Featured

1. **Cash für Chrom DMAX** - TV-Personality Heritage mit Link zu dmax.de/sendungen/cash-fuer-chrom
2. **Official Shelby Service Partner** - Authority Badge prominent platziert
3. **EST. 1989** - 35+ Jahre Erfahrung
4. **KFZ-Meisterbetrieb** - offizielle Zertifizierung
5. **Klaus Borrmann persönlich** - bekannte TV-Personality

### External Links (NICHT migriert)

- **AutoScout24 Cars-for-Sale**: autoscout24.de/haendler/route-66-borrmann-motors-kg-hamburg
- **Ersatzteile Shop**: route66-hh.shop (separater Subdomain)
- **DMAX Cash für Chrom**: dmax.de/sendungen/cash-fuer-chrom
- **Instagram**: @route_66_borrmann_motors
- **YouTube**: channel UCsAVSWGRaxmpvSy81R1NIcw
- **Facebook**: facebook.com/KlausBorrmannMotors

### Template-Basis

Geklont aus `demo-major-car-parts` (Astro 5.7 + Tailwind 3.4 + @lucide/astro 1.16). Komplett umgebrandet:
- Navy -> Schwarz (Dark Anthracite Theme)
- Orange -> Route66 Red #B91C1C
- Unbounded/Helvetica -> Oswald/Work Sans (Americana-Lineage)
- UK English -> Deutsch Du-Form
- Parts/Fitting/Body/Spray -> US-Car Import/Werkstatt/Restoration/Shelby

### Reviews-Policy

Google Reviews aus Place Details API (falls verfügbar). Wenn nicht verfügbar -> ehrlicher Hinweis im Footer-Bereich, dass Bewertungen über Google API integriert werden. **NIEMALS** Reviews erfinden. **NIEMALS** Wix-Testimonials migrieren.

### Site Verbote (Tech-Look)

- KEIN JetBrains Mono / IBM Plex Mono / Space Mono fuer Preise oder Phone
- KEIN Glass-morphism Backdrop-blur Navigation
- KEIN pulsende Live-Status-Dots
- KEINE Stats-Counter mit cubic-bezier easing
- KEINE Magnetic Buttons / Custom-Cursor
- KEINE View Transitions API
- KEINE FLIP Animations
- KEINE Asymmetric Grid-Breaking Layouts
- KEINE Cinematic Ken-Burns Hero
- KEIN Light/Dark Mode Toggle
- KEINE Emojis (Lucide Icons only)
- KEINE Editorial Pull-Quotes / Drop-Caps
- KEINE Modal-Overlays / Splash-Screens
- KEINE Particle Effects
- KEINE Carousel Slider mit Arrow-Dots

---

**Operator-Review-Note**: Diese Site preserved die Brand-DNA aus der bestehenden Wix-Site (Americana Heritage, Du-Form, Cash fuer Chrom Heritage, beide Standorte, KFZ-Meisterbetrieb-Authority) und hebt nur die Execution-Qualitaet auf 2026er Standard. Logo-Authority-Rule wurde angewendet: das tatsaechliche Logo zeigt DARK + Chrome + Skull-Aesthetic, daher Hybrid-Mood statt reines Light wie urspruenglich im Briefing skizziert.
