# Hub Dashboard - Portali Kryesor

Një aplikacion web modern i ndërtuar me Next.js, Tailwind CSS dhe Framer Motion për menaxhimin e moduleve të ndryshme të sistemit.

## 🚀 Karakteristikat

- **Modern UI/UX**: Dizajn minimalist dhe i pastër me hapësirë të bardhë
- **Responsive Design**: Funksionon perfekt në mobile, tablet dhe desktop
- **Dark/Light Mode**: Mundësi për të ndryshuar temën
- **Animacione**: Efekte të lehta me Framer Motion
- **Navigation**: Menu elegante me user profile
- **Module Cards**: Karta interaktive për çdo modul
- **TypeScript**: Kod i sigurt dhe i tipizuar

## 🛠️ Teknologjitë e Përdorura

- **Next.js 14** - Framework React me App Router
- **TypeScript** - JavaScript me tipe statike
- **Tailwind CSS** - CSS framework për styling
- **Framer Motion** - Animacione dhe efekte
- **Lucide React** - Ikona moderne

## 📦 Instalimi

1. **Shko në folderin e projektit:**

   ```bash
   cd hub-dashboard
   ```

2. **Instalo dependencat:**

   ```bash
   npm install
   ```

3. **Niso serverin e zhvillimit:**

   ```bash
   npm run dev
   ```

4. **Hape në browser:**
   ```
   http://localhost:3000
   ```

## 📁 Struktura e Projektit

```
hub-dashboard/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout kryesor
│   │   ├── page.tsx            # Faqja kryesore
│   │   └── globals.css         # CSS global
│   └── components/
│       └── Dashboard.tsx       # Komponenti kryesor
├── package.json
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── eslint.config.mjs
```

## 🎨 Përshtatja

### Shtim i Moduleve të Reja

Për të shtuar një modul të ri, modifikoni array-n `modules` në `Dashboard.tsx`:

```typescript
const modules: ModuleCard[] = [
  // Modulet ekzistuese...
  {
    id: "new-module",
    title: "Moduli i Ri",
    description: "Përshkrimi i modulit të ri.",
    icon: NewIcon, // Importo nga lucide-react
    color: "from-red-500 to-pink-600",
    href: "/new-module",
  },
];
```

### Ndryshim i Ngjyrave

Ndryshoni ngjyrat në `tailwind.config.js` ose përdorni klasat e Tailwind direkt.

### Dark Mode

Dark mode është implementuar dhe mund të zgjerohet me localStorage për të ruajtur preferencën e përdoruesit.

## 📱 Responsive Design

- **Mobile (< 768px)**: Layout vertikal, menu hamburger
- **Tablet (768px - 1024px)**: 2 kolona për karta
- **Desktop (> 1024px)**: 4 kolona për karta

## 🎯 Modulet Aktuale

1. **Analitika** - Statistikë dhe performancë
2. **Menaxhimi i Dokumenteve** - Organizim dokumentesh
3. **Komunikimi** - Chat dhe komunikim
4. **Konfigurimet e Sistemit** - Parametra dhe konfigurime

## 🔧 Scripts të Disponueshme

```bash
npm run dev      # Zhvillimi
npm run build    # Build për prodhim
npm run start    # Nis serverin e prodhimit
npm run lint     # Kontrolli i kodit
```

## 🌟 Zgjerime të Mundshme

- **Authentication**: Shtim i login/logout
- **Real-time Data**: Integrim me WebSocket për të dhëna live
- **Internationalization**: Mbështetje për gjuhë të ndryshme
- **Accessibility**: Përmirësim për përdoruesit me aftësi të kufizuara
- **PWA**: Progressive Web App features

## 📄 Licensa

Ky projekt është për qëllime edukative dhe demonstruese.

## 🤝 Kontributi

Kontributet janë të mirëpritura! Ju lutem, hapni issues ose pull requests për përmirësime.

---

**Autor**: AI Assistant  
**Data**: Prill 2026  
**Version**: 1.0.0
