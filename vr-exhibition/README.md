# VR Exhibition: NCDs

Një aplikacion web interaktiv për ekspozita virtuale të sëmundjeve jo-infektive (NCDs) me module të veçanta për përdoruesit dhe administratorët.

## Karakteristikat

### Moduli i Përdoruesit

- Galeri interaktive e ekspozitave VR
- Statistika edukative për NCDs
- Gjurmuesi i progresit të vizitave
- Animacione të lëmuara me Framer Motion
- Dizajn responsive për të gjitha pajisjet

### Moduli i Administratorit

- Panel kontrolli për menaxhimin e përmbajtjes
- Tabela CRUD për ekspozitat
- Analiza dhe statistika të vizitorëve
- Cilësimet e sistemit
- Interface intuitive me sidebar navigim

## Teknologjitë e Përdorura

- **Next.js 14** - Framework React me App Router
- **TypeScript** - Type safety dhe zhvillim më i mirë
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animacione dhe tranzicione
- **Lucide React** - Ikona moderne dhe të bukura

## Instalimi dhe Ekzekutimi

### Metoda e Shpejtë (Rekomandohet)

1. **Shkarkoni dhe instaloni Node.js** nga [nodejs.org](https://nodejs.org/) (version 18+)

2. **Ekzekutoni skedarin e instalimit automatik:**

   ```bash
   # Per Windows CMD:
   install.bat

   # Per PowerShell:
   .\install.ps1
   ```

   Ky skedar do të:
   - Kontrollojë nëse Node.js dhe npm janë të instaluar
   - Instalojë të gjitha dependencat e projektit automatikisht
   - Tregojë udhëzime për ekzekutimin

### Metoda Manuale

#### Parakushtet

- Node.js (version 18 ose më e lartë)
- npm ose yarn

#### Hapat e Instalimit

1. **Klononi ose shkarkoni projektin**

   ```bash
   git clone <repository-url>
   cd vr-exhibition
   ```

2. **Instaloni dependencat**

   ```bash
   npm install
   # ose
   yarn install
   ```

3. **Ekzekutoni serverin e zhvillimit**

   ```bash
   npm run dev
   # ose
   yarn dev
   ```

4. **Hapni aplikacionin**
   - Hapni browser-in dhe shkoni te `http://localhost:3000`
   - Dashboard i përdoruesit: `http://localhost:3000/user`
   - Dashboard i administratorit: `http://localhost:3000/admin`

   ```bash
   npm run dev
   # ose
   yarn dev
   ```

5. **Hapni aplikacionin**
   - Hapni browser-in dhe shkoni te `http://localhost:3000`
   - Për dashboard-in e administratorit: `http://localhost:3000/admin`
   - Për dashboard-in e përdoruesit: `http://localhost:3000/user`

## Struktura e Projektit

```
src/
├── app/
│   ├── admin/
│   │   └── page.tsx          # Dashboard i administratorit
│   ├── user/
│   │   └── page.tsx          # Dashboard i përdoruesit
│   └── page.tsx              # Faqja kryesore
├── components/
│   ├── ExhibitionCard.tsx    # Karta për ekspozitat VR
│   ├── StatsPanel.tsx        # Paneli i statistikave NCD
│   ├── ProgressPanel.tsx     # Gjurmuesi i progresit
│   ├── AdminTable.tsx        # Tabela CRUD për admin
│   └── AnalyticsPanel.tsx    # Paneli i analizave
├── types/
│   └── index.ts              # Definicionet TypeScript
└── data/
    └── mockData.ts           # Të dhënat mock për zhvillim
```

## Komponentët Kryesorë

### ExhibitionCard

Shfaq kartat interaktive të ekspozitave VR me animacione hover dhe butona për hyrje në VR.

### StatsPanel

Prezanton statistika edukative për sëmundjet NCD me ikona dhe thirrje për veprim.

### ProgressPanel

Gjurmuesi i progresit që tregon vizitat e përdoruesit dhe përqindjen e plotësimit.

### AdminTable

Tabela e administratorit për menaxhimin e ekspozitave me operacione CRUD.

### AnalyticsPanel

Paneli i analizave që shfaq statistika të vizitorëve dhe ekspozitat më të vizituara.

## Të Dhënat Mock

Projekti përdor të dhëna mock për zhvillim dhe demonstrim:

- Lista e ekspozitave VR
- Statistika NCD
- Progresi i përdoruesit
- Të dhëna analitike

## Cilësimet

### Tailwind CSS

Konfigurimi i Tailwind është në `tailwind.config.js` me ngjyrat dhe fontet e personalizuara.

### TypeScript

Konfigurimi i TypeScript është në `tsconfig.json` me rregullat për Next.js dhe React.

## Zhvillimi i Mëtejshëm

### Plani për të Ardhmen

1. **Autentifikimi**: Sistemi i login-it për admin dhe përdorues
2. **Baza e të Dhënave**: Integrimi me database reale (Prisma + PostgreSQL)
3. **VR Integration**: Lidhja reale me aplikacione VR
4. **API Routes**: Backend API për CRUD operations
5. **Testimi**: Unit dhe integration tests
6. **Deploy**: Konfigurimi për production deployment

### Shtimi i Komponentëve të Rinj

1. Krijoni komponentin në `src/components/`
2. Përcaktoni tipet në `src/types/index.ts`
3. Importoni dhe përdorni në faqet përkatëse

## Kontributi

1. Fork projektin
2. Krijoni branch për feature (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Hapni Pull Request

## Licensa

Ky projekt është licencuar nën MIT License - shihni skedarin LICENSE për detaje.

## Kontakt

Për pyetje ose sugjerime, ju lutem hapni një issue në repository.

---

**Shënim**: Ky është një projekt edukativ për demonstrimin e teknologjive moderne web. Të dhënat dhe informacionet për NCDs janë për qëllime ilustrative dhe nuk duhet të përdoren për këshilla mjekësore.
