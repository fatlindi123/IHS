@echo off
echo ============================================
echo VR Exhibition - Kontroll dhe Instalim
echo ============================================
echo.

echo Kontrollimi i Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo GABIM: Node.js nuk eshte i instaluar!
    echo.
    echo Shkarkimi dhe instalimi i Node.js...
    echo.

    REM Shkarko Node.js installer
    echo Shkarkimi i Node.js LTS...
    powershell -Command "Invoke-WebRequest -Uri 'https://nodejs.org/dist/v18.17.0/node-v18.17.0-x64.msi' -OutFile '%TEMP%\nodejs.msi'"

    if exist "%TEMP%\nodejs.msi" (
        echo Node.js u shkarkua. Instalimi...
        echo.
        echo JU LUTEM:
        echo 1. Klikoni "Next" ne instalues
        echo 2. Pranoni kushtet
        echo 3. Klikoni "Install"
        echo 4. Klikoni "Finish"
        echo.
        echo Pas instalimit, mbyllni kete dritare dhe ekzekutoni perseri kete skedar.
        echo.

        REM Hap instaluesin
        start "" "%TEMP%\nodejs.msi"

        echo Instaluesi u hap. Ju lutem ndiqni hapat e mesiperme.
        pause
        exit /b 1
    ) else (
        echo GABIM: Shkarkimi i Node.js deshtoi!
        echo Kontrolloni lidhjen internet dhe provoni perseri.
        echo Ose shkarkoni manualisht nga: https://nodejs.org/
        pause
        exit /b 1
    )
)

echo Node.js u gjet! Version:
node --version
echo.

echo Kontrollimi i npm...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo GABIM: npm nuk eshte i instaluar!
    echo Ju lutem instaloni npm ose perdorni Node.js qe e perfshin npm.
    pause
    exit /b 1
)

echo npm u gjet! Version:
npm --version
echo.

echo ============================================
echo Kontrollimi i projektit...
echo ============================================

if not exist "package.json" (
    echo GABIM: Skedari package.json nuk u gjet!
    echo Sigurohuni qe jeni ne direktorine e projektit vr-exhibition.
    echo Direktoria aktuale: %cd%
    pause
    exit /b 1
)

echo package.json u gjet.
echo.

echo ============================================
echo Instalimi i dependencave...
echo ============================================

echo Instalimi i paketave... (kjo mund te marre disa minuta)
npm install

if %errorlevel% neq 0 (
    echo.
    echo GABIM: Instalimi i dependencave deshtoi!
    echo Kontrolloni lidhjen internet dhe provoni perseri.
    pause
    exit /b 1
)

echo.
echo ============================================
echo SUKSES! Gjithcka eshte gati!
echo ============================================
echo.
echo Tani mund te ekzekutoni:
echo npm run dev
echo.
echo Dhe hapni browser te: http://localhost:3000
echo.
echo Per dashboard-in e perdoruesit: http://localhost:3000/user
echo Per dashboard-in e admin: http://localhost:3000/admin
echo.
pause