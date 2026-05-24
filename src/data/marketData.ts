export const countries = [
  { id: '528', iso: 'NL', name: 'Nederland',             nameEn: 'Netherlands',             region: 'Core / Benelux',    score: 11, risk: 1, ginaf: 98, usedParts: 2,  priority: 'High',       note: 'Kernmarkt voor voorraad en merkbekendheid. Concurrentie hoog maar SEO en betrouwbaarheid kunnen verbeteren.' },
  { id: '56',  iso: 'BE', name: 'België',                nameEn: 'Belgium',                 region: 'Benelux',           score: 10, risk: 1, ginaf: 78, usedParts: 22, priority: 'High',       note: 'Logische Benelux uitbreiding. Nederlands/Frans/Duits kan later worden toegevoegd.' },
  { id: '276', iso: 'DE', name: 'Duitsland',             nameEn: 'Germany',                 region: 'DACH',              score: 8,  risk: 1, ginaf: 87, usedParts: 13, priority: 'Medium/High', note: 'Grote truckmarkt en hoge concurrentie. Interessant voor volume maar moeilijker te domineren.' },
  { id: '40',  iso: 'AT', name: 'Oostenrijk',            nameEn: 'Austria',                 region: 'DACH',              score: 7,  risk: 1, ginaf: 100,usedParts: 0,  priority: 'Medium/High', note: 'Professionele markt dichtbij DACH. Kans via Duitstalige content.' },
  { id: '756', iso: 'CH', name: 'Zwitserland',           nameEn: 'Switzerland',             region: 'DACH',              score: 6,  risk: 1, ginaf: 100,usedParts: 0,  priority: 'Medium',     note: 'Kleinere markt. Hoog kwaliteitsniveau en concurrentieverwachting.' },
  { id: '616', iso: 'PL', name: 'Polen',                 nameEn: 'Poland',                  region: 'Eastern Europe',    score: 14, risk: 2, ginaf: 91, usedParts: 9,  priority: 'Very High',  note: 'Top groeimarkt: transporthub, used parts vraag en lagere digitale concurrentiedruk.' },
  { id: '203', iso: 'CZ', name: 'Tsjechië',              nameEn: 'Czech Republic',          region: 'Eastern Europe',    score: 13, risk: 2, ginaf: 100,usedParts: 0,  priority: 'Very High',  note: 'Sterke nichekans. Goede regio voor Engelstalige en later lokale SEO.' },
  { id: '642', iso: 'RO', name: 'Roemenië',              nameEn: 'Romania',                 region: 'Eastern Europe',    score: 13, risk: 2, ginaf: 100,usedParts: 0,  priority: 'Very High',  note: 'Prijsgevoelige markt met gebruikte-onderdelenlogica. Goede kans voor hard-to-find parts.' },
  { id: '348', iso: 'HU', name: 'Hongarije',             nameEn: 'Hungary',                 region: 'Eastern Europe',    score: 15, risk: 1, ginaf: 100,usedParts: 0,  priority: 'Very High',  note: 'Hoogste kansscore van alle landen. Lage concurrentiedruk en sterke GINAF-interesse.' },
  { id: '703', iso: 'SK', name: 'Slowakije',             nameEn: 'Slovakia',                region: 'Eastern Europe',    score: 12, risk: 2, ginaf: 100,usedParts: 0,  priority: 'High',       note: 'Lage concurrentiedruk en Oost-Europese match.' },
  { id: '440', iso: 'LT', name: 'Litouwen',              nameEn: 'Lithuania',               region: 'Baltics',           score: 13, risk: 2, ginaf: 100,usedParts: 0,  priority: 'Very High',  note: 'Transport en logistieke hub. Interessante Baltische toegangspoort.' },
  { id: '233', iso: 'EE', name: 'Estland',               nameEn: 'Estonia',                 region: 'Baltics',           score: 12, risk: 2, ginaf: 100,usedParts: 0,  priority: 'High',       note: 'Kleine nichemarkt met lage digitale concurrentie.' },
  { id: '100', iso: 'BG', name: 'Bulgarije',             nameEn: 'Bulgaria',                region: 'Balkan',            score: 12, risk: 2, ginaf: 100,usedParts: 0,  priority: 'High',       note: 'Gebruikte-onderdelenmarkt met lage digitale volwassenheid.' },
  { id: '191', iso: 'HR', name: 'Kroatië',               nameEn: 'Croatia',                 region: 'Balkan',            score: 12, risk: 2, ginaf: 100,usedParts: 0,  priority: 'High',       note: 'Balkan niche. Kleiner volume maar goede witruimte.' },
  { id: '688', iso: 'RS', name: 'Servië',                nameEn: 'Serbia',                  region: 'Balkan',            score: 13, risk: 2, ginaf: 100,usedParts: 0,  priority: 'Very High',  note: 'Lage concurrentie en mogelijke vraag naar oudere onderdelen.' },
  { id: '70',  iso: 'BA', name: 'Bosnië-Herzegovina',   nameEn: 'Bosnia and Herzegovina',  region: 'Balkan',            score: 12, risk: 2, ginaf: 100,usedParts: 0,  priority: 'High',       note: 'Kleine maar interessante long-tail markt.' },
  { id: '804', iso: 'UA', name: 'Oekraïne',              nameEn: 'Ukraine',                 region: 'CIS / East',        score: 12, risk: 5, ginaf: 100,usedParts: 0,  priority: 'Watch',      note: 'Hoge interesse maar operationeel en geopolitiek risico. Lange termijn monitoren.' },
  { id: '643', iso: 'RU', name: 'Rusland',               nameEn: 'Russia',                  region: 'CIS / High-risk',   score: 10, risk: 5, ginaf: 29, usedParts: 71, priority: 'High-risk',  note: 'Niet toegankelijk zonder juridische toets. EU-sancties beperken export van technische onderdelen. Russische banken zijn afgesloten van SWIFT waardoor betaling via normale kanalen onmogelijk is. Directe verzending vanuit Nederland is geblokkeerd — routes via derde landen verhogen kosten en risico. Alleen activeren na volledige compliance-check.' },
  { id: '112', iso: 'BY', name: 'Belarus',               nameEn: 'Belarus',                 region: 'CIS / High-risk',   score: 12, risk: 5, ginaf: 100,usedParts: 0,  priority: 'High-risk',  note: 'Vergelijkbaar risicoprofiel als Rusland. EU-sancties, betalingsproblemen en logistieke blokkades maken directe handel onverantwoord zonder juridisch kader.' },
  { id: '246', iso: 'FI', name: 'Finland',               nameEn: 'Finland',                 region: 'Nordics',           score: 10, risk: 1, ginaf: 100,usedParts: 0,  priority: 'High',       note: 'Heavy-duty nichepotentie. Klein en geografisch verder.' },
  { id: '752', iso: 'SE', name: 'Zweden',                nameEn: 'Sweden',                  region: 'Nordics',           score: 8,  risk: 1, ginaf: 51, usedParts: 49, priority: 'Medium',     note: 'Truck parts gemengd. Concurrentie en lokale spelers waarschijnlijk sterker.' },
  { id: '724', iso: 'ES', name: 'Spanje',                nameEn: 'Spain',                   region: 'Southern Europe',   score: 8,  risk: 1, ginaf: 78, usedParts: 22, priority: 'Medium/High', note: 'Grote markt maar minder directe GINAF-focus en meer taalbarrière.' },
  { id: '250', iso: 'FR', name: 'Frankrijk',             nameEn: 'France',                  region: 'Western Europe',    score: 7,  risk: 1, ginaf: 65, usedParts: 35, priority: 'Medium',     note: 'Grote markt, generieke concurrentie. Lokale taal belangrijk.' },
  { id: '380', iso: 'IT', name: 'Italië',                nameEn: 'Italy',                   region: 'Southern Europe',   score: 7,  risk: 1, ginaf: 52, usedParts: 48, priority: 'Medium',     note: 'Truck parts relevant maar GINAF minder scherp.' },
  { id: '826', iso: 'GB', name: 'Verenigd Koninkrijk',  nameEn: 'United Kingdom',           region: 'Western Europe',    score: 5,  risk: 2, ginaf: 14, usedParts: 78, priority: 'Low/Medium', note: 'Grote used truck parts markt maar GINAF-signaal relatief zwak en concurrentie hoog.' },
  { id: '372', iso: 'IE', name: 'Ierland',              nameEn: 'Ireland',                  region: 'Western Europe',    score: 6,  risk: 1, ginaf: 0,  usedParts: 60, priority: 'Low/Medium', note: 'Kleine markt. Mogelijk via UK/English content bereikbaar.' },
]

export const competitors = [
  { name: 'GINAF Trucks Nederland', type: 'OEM / aftersales',          country: 'NL', ginafFocus: 5, seo: 4, marketplace: 2, branding: 4, threat: 21, url: 'https://ginaf.com/contact/',                          kans: 'Hemmol kan online sneller vindbaar zijn op long-tail OEM-codes.' },
  { name: 'BAS Parts & Tyres',      type: 'Brede truckonderdelenpartij', country: 'NL', ginafFocus: 2, seo: 5, marketplace: 4, branding: 5, threat: 21, url: 'https://www.basparts.com',                             kans: 'Niet GINAF-specialistisch. Hemmol wint op nichefocus.' },
  { name: 'Mestebeld Trucks',       type: 'Gebruikte truckonderdelen',   country: 'NL', ginafFocus: 4, seo: 4, marketplace: 4, branding: 4, threat: 20, url: 'https://www.mestebeldtrucks.com/en/brands/ginaf/',     kans: 'Hemmol kan scherper positioneren op hard-to-find GINAF/HPVS.' },
  { name: 'Truck Rebuilt Parts',    type: 'Revisie / transmissie',       country: 'NL', ginafFocus: 4, seo: 3, marketplace: 4, branding: 3, threat: 18, url: 'https://www.truck1.eu/dealers/truck-rebuilt-parts/',   kans: 'Hemmol kan sterker catalogiseren en internationaal vindbaar worden.' },
  { name: 'Used DAF Parts',         type: 'DAF/GINAF webshop',           country: 'NL', ginafFocus: 4, seo: 3, marketplace: 2, branding: 3, threat: 15, url: 'https://useddafparts.com/product-categorie/ginaftrucks/', kans: 'Hemmol wint via betere structuur, Engelstalige SEO en productcontext.' },
  { name: 'AUTODOC Trucks',         type: 'Online catalogus',            country: 'EU', ginafFocus: 1, seo: 5, marketplace: 0, branding: 5, threat: 20, url: 'https://trucks.autodoc.co.uk/truck/ginaf',             kans: 'Hemmol wint op echte nichevoorraad en advies i.p.v. generieke catalogus.' },
  { name: 'Autoline',               type: 'Marketplace',                 country: 'EU', ginafFocus: 3, seo: 5, marketplace: 5, branding: 4, threat: 19, url: 'https://autoline.info/-/spare-parts/GINAF--c456tm2582', kans: 'Hemmol kan eigen merk bouwen i.p.v. afhankelijk zijn van listings.' },
  { name: 'TrucksNL',               type: 'Marketplace',                 country: 'NL', ginafFocus: 4, seo: 5, marketplace: 5, branding: 4, threat: 19, url: 'https://www.trucks.nl/truck-onderdelen/ginaf',         kans: 'Geen specialistisch GINAF-merkverhaal. Hemmol kan dat claimen.' },
]

export const seoKeywords = [
  { cluster: 'HPVS / EVS systemen',    priority: 'Very High', keywords: ['ginaf hpvs', 'ginaf evs', 'ginaf hydraulic cylinder', 'ginaf steering cylinder', 'hpvs veerpoot ginaf', 'evs stuurcilinder ginaf'] },
  { cluster: 'OEM / artikelnummers',   priority: 'Very High', keywords: ['OG89182', 'OG89181', 'OG89184', 'OG28371', 'OG28374', 'OG24592', 'OG01304', 'OG93221'] },
  { cluster: 'GINAF parts (Engels)',    priority: 'High',      keywords: ['ginaf parts', 'ginaf spare parts', 'used ginaf parts', 'hard to find ginaf parts', 'ginaf truck parts europe'] },
  { cluster: 'Hydrauliek cluster',      priority: 'High',      keywords: ['ginaf hydraulic parts', 'truck hydraulic cylinder', 'ginaf front axle', 'ginaf sensor', 'ginaf angle sensor'] },
  { cluster: 'Oost-Europa & talen',    priority: 'Medium',    keywords: ['GINAF alkatrészek (HU)', 'запчасти GINAF (RU)', 'ginaf części (PL)', 'ginaf onderdelen export'] },
]

export const websiteGaps = [
  { title: 'Geen Engelse website',            severity: 'critical', icon: 'globe',    desc: '26 Europese landen, 0 Engelstalige pagina\'s. De hele groeiregio is onbereikbaar.' },
  { title: 'OEM-nummers niet indexeerbaar',   severity: 'critical', icon: 'search',   desc: 'OG89182, OG28371 etc. staan in tekst maar niet als aparte SEO-productpagina\'s.' },
  { title: 'Geen categoriestructuur',         severity: 'critical', icon: 'layout',   desc: '4 statische pagina\'s. Geen clusters voor hydrauliek, HPVS, EVS, assen, sensoren.' },
  { title: 'Geen positioneringsclaim',        severity: 'high',     icon: 'award',    desc: '"Never enough GINAF" is geen USP. Kans: European Specialist in Hard-to-Find GINAF Parts.' },
  { title: 'Geen prijzen online',             severity: 'high',     icon: 'tag',      desc: 'Alleen "bel voor prijs". B2B-inkopers in Oost-Europa haken af zonder referentie.' },
  { title: 'Geen technische kenniscontent',   severity: 'high',     icon: 'book',     desc: 'HPVS-werking, EVS uitleg, compatibiliteit — niemand legt dit goed uit. Open terrein.' },
  { title: 'Geen internationale verzendinfo', severity: 'medium',   icon: 'truck',    desc: 'Polen, Hongarije en Baltics willen weten: lever je hier? Hoe? Wat kost het?' },
  { title: 'Taalvoordeel onbenut',            severity: 'medium',   icon: 'language', desc: 'Meertalige ondersteuning (EN/HU/PL) is een uniek onderscheid. Geen enkele concurrent heeft dit volledig ingericht.' },
  { title: 'Geen trust signals',              severity: 'medium',   icon: 'shield',   desc: 'Marketplace-aanbod, garantie-info en klantervaring zijn nergens zichtbaar gebundeld.' },
]

export const roadmap = [
  { phase: 'Fase 1', phaseColor: 'blue',   title: 'Engelse website structuur',          timeline: 'Week 1–2', desc: 'EN categoriepagina\'s aanmaken. Hero-tekst, meta titles en marketplace-bios herpositioneren naar "European Specialist in Hard-to-Find GINAF Parts".' },
  { phase: 'Fase 1', phaseColor: 'blue',   title: 'OEM-nummers',  timeline: 'Week 2–4', desc: 'Elk artikelnummer, GINAF-model en onderdeel zichtbaar.' },
  { phase: 'Fase 1', phaseColor: 'blue',   title: 'Marketplace optimalisatie',          timeline: 'Week 2–3', desc: 'TrucksNL en Autoline-profielen vernieuwen met Engelstalige teksten, HPVS/EVS-focus en internationale verzendinfo.' },
  { phase: 'Fase 2', phaseColor: 'green',  title: 'Polen + Hongarije activeren',        timeline: 'Maand 2',  desc: 'Engelstalige landingspagina\'s gericht op Poolse transportmarkt en Hongaarse markt. Hoge kansscore en lage concurrentiedruk.' },
  { phase: 'Fase 2', phaseColor: 'green',  title: 'Baltische hub aanpakken',            timeline: 'Maand 3',  desc: 'Litouwen als transportknooppunt. Engelstalige pagina\'s + Autoline-aanwezigheid als ingang.' },
  { phase: 'Fase 3', phaseColor: 'amber',  title: 'HPVS/EVS kennisbank bouwen',        timeline: 'Maand 3–4', desc: '5 kernaartikelen over systemen, compatibiliteit en montage. Unieke content die geen concurrent heeft.' },
  { phase: 'Fase 3', phaseColor: 'amber',  title: 'Hard-to-find landing page',          timeline: 'Maand 3',  desc: '"Can\'t find your GINAF part? We can." — emotionele positioneringspagina met directe leadgeneratie.' },
  { phase: 'Fase 4', phaseColor: 'red',    title: 'CIS / Rusland — niet zonder compliance-check',   timeline: 'Maand 4–6', desc: 'EU-sancties, SWIFT-uitsluiting en logistieke blokkades maken directe handel onverantwoord. Eerst juridisch laten toetsen welke export is toegestaan. Geen actieve verkoop of communicatie richting deze markt zonder groen licht van een compliance-adviseur.' },
]

export const kpis = {
  aantalLanden: 26,
  gemKansscore: 10.7,
  veryHighLanden: 7,
  marketplaceAanbod: 204,
  concurrentenNL: 5,
  websiteGaps: 9,
}

export const regions = [
  { name: 'Eastern Europe', gemScore: 13.4, landen: ['Polen','Tsjechië','Roemenië','Hongarije','Slowakije'] },
  { name: 'Baltics',        gemScore: 12.5, landen: ['Litouwen','Estland'] },
  { name: 'Balkan',         gemScore: 12.2, landen: ['Bulgarije','Kroatië','Servië','Bosnië-Herzegovina'] },
  { name: 'CIS/Rusland',    gemScore: 11.0, landen: ['Rusland','Belarus','Oekraïne'] },
  { name: 'Core/Benelux',   gemScore: 10.5, landen: ['Nederland','België'] },
  { name: 'Nordics',        gemScore: 9.0,  landen: ['Finland','Zweden'] },
  { name: 'DACH',           gemScore: 7.0,  landen: ['Duitsland','Oostenrijk','Zwitserland'] },
  { name: 'West/South EU',  gemScore: 6.3,  landen: ['Frankrijk','Italië','Spanje','VK','Ierland'] },
]
