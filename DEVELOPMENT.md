# 🔥 Burnout-Test - Entwicklung

## 🚀 Quick Start

### Lokale Entwicklung
```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Build für Produktion
npm run build

# Preview des Builds
npm run preview
```

### Environment Setup
```bash
# Deutsche Version
cp env.de.example .env

# Englische Version  
cp env.en.example .env

# Spanische Version
cp env.es.example .env
```

## 🏗️ Projektstruktur

```
src/
├── components/           # React-Komponenten
│   ├── LandingPage.tsx  # Startseite
│   ├── BurnoutTest.tsx  # Test-Interface
│   ├── Results.tsx      # Ergebnis-Anzeige
│   ├── EmailCapture.tsx # E-Mail-Erfassung
│   ├── PrivacyPolicy.tsx
│   └── TermsOfService.tsx
├── config/              # Konfiguration
│   └── language.ts      # Sprach-Konfiguration
├── data/                # Statische Daten
│   └── mbi-questions.ts # MBI-Fragen
├── hooks/               # Custom Hooks
│   ├── useTranslation.ts
│   └── useBurnoutTest.ts
├── translations/        # Übersetzungen
│   └── index.ts         # DE/EN/ES Übersetzungen
├── types/               # TypeScript Types
│   └── burnout.ts       # Burnout-spezifische Types
├── utils/               # Utility-Funktionen
│   ├── analytics.ts     # Google Analytics
│   ├── meta.ts          # Meta-Tag Updates
│   └── scoring.ts       # MBI-Scoring-Algorithmus
├── App.tsx              # Haupt-App
├── main.tsx             # Entry Point
└── index.css            # Globale Styles
```

## 🧪 MBI-Scoring

### Dimensionen
1. **Emotionale Erschöpfung** (9 Fragen)
   - Score: 0-54 Punkte
   - Hoch: ≥27 Punkte

2. **Depersonalisation** (5 Fragen)  
   - Score: 0-30 Punkte
   - Hoch: ≥13 Punkte

3. **Persönliche Leistungsfähigkeit** (8 Fragen)
   - Score: 0-48 Punkte (reverse scored)
   - Niedrig: ≤33 Punkte

### Burnout-Level
- **Niedrig:** Alle Dimensionen normal
- **Moderat:** Eine Dimension auffällig
- **Hoch:** Zwei Dimensionen auffällig
- **Kritisch:** Alle drei Dimensionen auffällig

## 🌍 Multi-Language

### Unterstützte Sprachen
- **Deutsch (DE):** `burnout-test.samebi.net`
- **Englisch (EN):** `burnout-check.samebi.net`  
- **Spanisch (ES):** `test-burnout.samebi.net`

### Neue Übersetzung hinzufügen
1. `src/translations/index.ts` erweitern
2. `src/config/language.ts` erweitern
3. HTML-Template erstellen (`index.xx.html`)
4. Environment-Variablen erstellen (`env.xx.example`)

## 📊 Analytics Events

```typescript
// Tracked Events
trackTestStarted()                    // Test gestartet
trackQuestionAnswered(id, number)     // Frage beantwortet
trackTestCompleted(scores, level)     // Test abgeschlossen
trackEmailCaptured(email)             // E-Mail erfasst
trackPdfDownloaded()                  // PDF heruntergeladen
trackUpsellClicked(type)              // Upsell geklickt
```

## 🚀 Deployment

### Coolify Deployment
```bash
# Git Push → Auto-Deploy
git add .
git commit -m "feat: neue Feature"
git push origin main
```

### Docker Build
```bash
# Lokaler Build
docker build -t burnout-test .

# Container starten
docker run -p 3000:80 burnout-test
```

### Environment Variables
```env
VITE_LANGUAGE=de
VITE_API_URL=https://api.samebi.net
VITE_GA_TRACKING_ID=G-DE-XXXXXXXXX
VITE_EMAIL_SERVICE_URL=https://api.samebi.net/email
VITE_STRIPE_PUBLIC_KEY=pk_live_de_xxx
VITE_APP_NAME=Burnout-Test SAMEBI
VITE_APP_DESCRIPTION=Wissenschaftlich validierter Burnout-Test
VITE_SUPPORT_EMAIL=support@samebi.net
VITE_COMPANY_NAME=SAMEBI Deutschland
VITE_DOMAIN=burnout-test.samebi.net
```

## 🧪 Testing

```bash
# Unit Tests
npm run test

# Test UI
npm run test:ui

# Linting
npm run lint
npm run lint:fix
```

## 📈 Performance

### Optimierungen
- **Code Splitting:** Automatisch durch Vite
- **Tree Shaking:** Unused Code wird entfernt
- **Gzip Compression:** Nginx-Konfiguration
- **Caching:** Statische Assets 1 Jahr
- **Lazy Loading:** Komponenten werden bei Bedarf geladen

### Bundle Analysis
```bash
# Bundle-Größe analysieren
npm run build
npx vite-bundle-analyzer dist
```

## 🔧 Troubleshooting

### Häufige Probleme

**1. Build-Fehler**
```bash
# Dependencies neu installieren
rm -rf node_modules package-lock.json
npm install
```

**2. TypeScript-Fehler**
```bash
# Type-Checking
npx tsc --noEmit
```

**3. Styling-Probleme**
```bash
# Tailwind neu kompilieren
npx tailwindcss -i ./src/index.css -o ./dist/output.css --watch
```

## 📞 Support

- **Entwickler:** PDG1999
- **Repository:** https://github.com/PDG1999/tool-burnout-test
- **Issues:** GitHub Issues verwenden
- **Dokumentation:** Diese Datei aktualisieren
