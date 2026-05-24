# Hemmol Marktanalyse Dashboard

Professioneel Next.js dashboard voor de strategische marktanalyse van Hemmol.nl — GINAF onderdelen.

## Wat zit er in

- **Overzicht** — KPI-kaarten, top 10 landen, risk/kans scatter
- **Landen & Kaart** — interactieve wereldkaart + filterbare detailtabel
- **Concurrentie** — scorebars per concurrent met kanshoek
- **SEO & Gaps** — zoekwoordclusters + website verbeterpunten
- **Roadmap** — gefaseerd actieplan per tijdlijn

## Installatie (stap voor stap)

### Wat je nodig hebt
- [Node.js](https://nodejs.org) — download de LTS versie en installeer
- [VS Code](https://code.visualstudio.com) — gratis code-editor

### Stap 1 — Node.js installeren
Ga naar https://nodejs.org, klik op "LTS" en volg de installatie.
Controleer daarna in je terminal: `node --version` (moet iets tonen zoals v20.x)

### Stap 2 — Project openen in VS Code
1. Open VS Code
2. Ga naar Bestand → Map openen
3. Selecteer de map `hemmol-dashboard`

### Stap 3 — Terminal openen in VS Code
Ga naar Beeld → Terminal (of druk op Ctrl + `)

### Stap 4 — Dependencies installeren
Typ in de terminal:
```
npm install
```
Dit duurt 1-2 minuten. Je ziet een `node_modules` map verschijnen.

### Stap 5 — Development server starten
```
npm run dev
```

Open je browser en ga naar: **http://localhost:3000**

Je ziet nu het dashboard! 🎉

### Stap 6 — Online zetten (gratis)

**Via Netlify (makkelijkst):**
1. Maak een gratis account op https://github.com
2. Maak een gratis account op https://netlify.com
3. Zet de map op GitHub (je man kan je hierbij helpen)
4. Koppel de GitHub repo aan Netlify
5. Netlify bouwt het automatisch en geeft je een URL

**Build commando voor Netlify:**
```
npm run build
```
**Output directory:** `.next`

## Data aanpassen

Alle data staat in één bestand: `src/data/marketData.ts`

- Landen scores aanpassen → zoek het land op en verander `score`
- Nieuwe concurrent toevoegen → voeg een object toe aan de `competitors` array
- Roadmap acties wijzigen → pas de `roadmap` array aan

## Structuur

```
src/
  app/
    page.tsx          ← hoofdpagina met navigatie
    layout.tsx        ← HTML-wrapper
    globals.css       ← stijlen en kleuren
  components/
    Header.tsx        ← navigatiebalk bovenaan
    KpiRow.tsx        ← 6 KPI-kaarten
    WorldMap.tsx      ← interactieve kaart (D3)
    TopCountriesChart.tsx
    RiskScatterChart.tsx
    RegionChart.tsx
    CompetitorTable.tsx
    WebsiteGaps.tsx
    SeoKeywords.tsx
    Roadmap.tsx
    CountryTable.tsx  ← filterbare tabel
  data/
    marketData.ts     ← ALLE data hier
```

## Vragen?

De data en structuur zijn opgezet zodat je zelf eenvoudig scores en teksten kunt aanpassen in `marketData.ts`.
Voor technische aanpassingen: je man kent de weg. Voor data en inhoud: jij bent de expert.
