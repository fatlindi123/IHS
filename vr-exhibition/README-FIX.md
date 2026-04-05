# VR Exhibition NCDs - Udhëzues i Shpejtë

## Problemi: "npm run dev" nuk funksionon

Ky gabim ndodh sepse **Node.js nuk është i instaluar** në kompjuterin tuaj.

## Zgjidhja: Instaloni Node.js

### Hapi 1: Shkarkoni Node.js

1. Hapni browser dhe shkoni te: https://nodejs.org/
2. Klikoni butonin **"18.17.0 LTS"** (versioni i rekomanduar)
3. Shkarkimi do të fillojë automatikisht

### Hapi 2: Instaloni Node.js

1. Gjeni skedarin e shkarkuar (node-v18.17.0-x64.msi)
2. Klikoni dy herë për ta hapur
3. Ndiqni këto hapa:
   - Klikoni **"Next"**
   - Pranoni kushtet
   - Klikoni **"Install"**
   - Klikoni **"Finish"**

### Hapi 3: Kontrolloni instalimin

1. Hapni Command Prompt ose PowerShell
2. Shkruani: `node --version`
3. Duhet të shihni: v18.17.0
4. Shkruani: `npm --version`
5. Duhet të shihni një version si: 9.6.7

### Hapi 4: Ekzekutoni projektin

1. Hapni Command Prompt ose PowerShell
2. Shkoni te direktoria e projektit:
   ```
   cd "C:\Users\PULSE Electronics\Desktop\ihs\vr-exhibition"
   ```
3. Instaloni dependencat:
   ```
   npm install
   ```
4. Nisni serverin e zhvillimit:
   ```
   npm run dev
   ```
5. Hapni browser dhe shkoni te: http://localhost:3000

## Alternativa: Përdorni skedarët automatikë

Nëse preferoni, mund të përdorni skedarët që kam krijuar:

- **setup-complete.bat** - për Command Prompt
- **setup-complete.ps1** - për PowerShell

Thjesht klikoni dy herë mbi njërin prej tyre dhe ndiqni udhëzimet.

## Çfarë përmban aplikacioni

- **Dashboard i Përdoruesit** (/user): Galeria VR, statistikat, progresi
- **Dashboard i Admin** (/admin): Menaxhimi i përmbajtjes, analitikë
- **Galeria VR**: Kartat interaktive për ekspozitat NCDs
- **Statistikat**: Fakte dhe shifra për sëmundjet NCDs
- **Progresi**: Gjurmimi i vizitave dhe përfundimit
- **Analitikë**: Statistikat e vizitorëve dhe preferencat

## Teknologjitë e përdorura

- Next.js 14 (React framework)
- TypeScript (siguria e tipeve)
- Tailwind CSS (stilizimi)
- Framer Motion (animacionet)
- Lucide React (ikonat)

## Nëse keni probleme

1. Sigurohuni që jeni në direktorinë e duhur
2. Kontrolloni që Node.js është i instaluar siç duhet
3. Provoni të mbyllni dhe hapni përsëri Command Prompt/PowerShell
4. Kontrolloni lidhjen internet për shkarkimin e paketave

---

**Përkthimi:** NCDs = Non-Communicable Diseases (Sëmundje Jo Ngjitëse)
