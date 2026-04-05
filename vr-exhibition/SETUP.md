# Setup dhe Instalimi i Projektit VR Exhibition

## Metoda e Shpejtë (Rekomandohet)

### Për Përdoruesit e Windows:

1. **Shkarkoni dhe instaloni Node.js** nga [nodejs.org](https://nodejs.org/)

2. **Ekzekutoni skedarin automatik:**
   - **Për CMD:** Klikoni dy herë në `install.bat`
   - **Për PowerShell:** Klikoni dy herë në `install.ps1`

   Këta skedarë do të:
   - Verifikojnë nëse Node.js dhe npm janë të instaluar
   - Instalojnë të gjitha dependencat automatikisht
   - Tregojnë udhëzime për ekzekutimin e projektit

### Për Përdoruesit e Linux/Mac:

```bash
# Instaloni Node.js (version 18+)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Ekzekutoni projektin
npm install
npm run dev
```

## Metoda Manuale

### Parakushtet

Para se të filloni, sigurohuni që keni të instaluar:

1. **Node.js** (version 18 ose më e lartë)
   - Shkarkoni nga: https://nodejs.org/
   - Verifikoni instalimin: `node --version`

2. **npm** (vjen automatikisht me Node.js)
   - Verifikoni instalimin: `npm --version`

## Hapat e Instalimit

### 1. Klononi ose shkarkoni projektin

```bash
git clone <repository-url>
cd vr-exhibition
```

### 2. Instaloni dependencat

```bash
npm install
```

Ky komandë do të instalojë të gjitha paketat e nevojshme:

- `next` - Framework React
- `react` dhe `react-dom` - Libraritë bazë React
- `framer-motion` - Për animacione
- `lucide-react` - Për ikona
- `typescript` - Për TypeScript
- `tailwindcss` - Për CSS framework
- Dhe të tjera dependenca zhvillimi

### 3. Ekzekutoni serverin e zhvillimit

```bash
npm run dev
```

### 4. Hapni aplikacionin

- Hapni browser-in dhe shkoni te: `http://localhost:3000`
- Dashboard i përdoruesit: `http://localhost:3000/user`
- Dashboard i administratorit: `http://localhost:3000/admin`

## Komandat e Disponueshme

```bash
# Ekzekutimi i serverit të zhvillimit
npm run dev

# Build për production
npm run build

# Ekzekutimi i build-it të production
npm run start

# Kontrolli i kodit (linting)
npm run lint
```

## Zgjidhja e Problemeve të Mundshme

### Gabimi: "Cannot find module 'framer-motion'"

**Zgjidhja:** Instaloni dependencat me `npm install`

### Gabimi: "JSX element implicitly has type 'any'"

**Zgjidhja:** Sigurohuni që `react` dhe `@types/react` janë instaluar

### Gabimi: "node --version" nuk funksionon

**Zgjidhja:** Instaloni Node.js nga https://nodejs.org/

### Gabimi: Porti 3000 është i zënë

**Zgjidhja:** Ndryshoni portin:

```bash
npm run dev -- -p 3001
```

## Struktura e Projektit

```
vr-exhibition/
├── src/
│   ├── app/                 # Faqet Next.js 13+ (App Router)
│   │   ├── admin/page.tsx   # Dashboard administratori
│   │   ├── user/page.tsx    # Dashboard përdoruesi
│   │   └── layout.tsx       # Layout kryesor
│   ├── components/          # Komponentët React
│   │   ├── ExhibitionCard.tsx
│   │   ├── StatsPanel.tsx
│   │   ├── ProgressPanel.tsx
│   │   ├── AdminTable.tsx
│   │   └── AnalyticsPanel.tsx
│   ├── types.ts             # Definicionet TypeScript
│   └── data.ts              # Të dhënat mock
├── package.json             # Konfigurimi i paketave
├── tsconfig.json            # Konfigurimi TypeScript
├── tailwind.config.js       # Konfigurimi Tailwind CSS
└── README.md                # Dokumentacioni kryesor
```

## Teknologjitë e Përdorura

- **Next.js 14** - React framework me App Router
- **TypeScript** - Type safety dhe zhvillim i mirë
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animacione dhe tranzicione
- **Lucide React** - Ikona moderne

## Testimi

Pasi të instaloni dhe ekzekutoni projektin, mund të testoni:

1. **Dashboard i Përdoruesit** (`/user`)
   - Shfletoni ekspozitat VR
   - Shikoni statistikat NCD
   - Kontrolloni progresin

2. **Dashboard i Administratorit** (`/admin`)
   - Menaxhoni ekspozitat (CRUD)
   - Shikoni analizat
   - Konfiguroni cilësimet

## Mbështetje

Nëse hasni probleme gjatë instalimit:

1. Kontrolloni versionin e Node.js: `node --version`
2. Fshini `node_modules` dhe `package-lock.json`, pastaj ekzekutoni `npm install`
3. Kontrolloni log-et për gabime specifike
4. Hapni një issue në repository për ndihmë

---

**Shënim:** Sigurohuni që të keni hapësirë të mjaftueshme në disk për instalimin e paketave (rreth 200MB).
