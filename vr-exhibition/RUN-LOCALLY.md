# 🚀 Running VR Exhibition App Locally

## Quick Start (3 Steps)

### Step 1: Install Node.js and npm

- Download from: https://nodejs.org/ (LTS version recommended)
- Run the installer and follow the prompts
- Verify installation by opening Command Prompt and running:
  ```
  node --version
  npm --version
  ```

### Step 2: Install Project Dependencies

Open Command Prompt/PowerShell in the project folder and run:

```bash
cd "c:\Users\PULSE Electronics\Desktop\ihs\vr-exhibition"
npm install
```

### Step 3: Start Development Server

```bash
npm run dev
```

The app will be available at: **http://localhost:3000**

## 📝 Components Status

- ✅ All components compile without errors
- ✅ HTML fallbacks in place for missing React dependencies
- ⚠️ Full functionality available after `npm install`

## 📍 Available Pages

- **Main Page**: http://localhost:3000
- **User Page**: http://localhost:3000/user
- **Admin Page**: http://localhost:3000/admin

## 🛠️ Build for Production

```bash
npm run build
npm start
```

---

**Note**: After `npm install` completes, React components will automatically use full JSX functionality.
