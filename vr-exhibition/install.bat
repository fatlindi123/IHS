@echo off
echo ============================================
echo VR Exhibition - Instalimi i dependencave
echo ============================================
echo.

echo Kontrollimi i Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo GABIM: Node.js nuk eshte i instaluar!
    echo.
    echo Ju lutem shkarkoni dhe instaloni Node.js nga:
    echo https://nodejs.org/
    echo.
    echo Pas instalimit, ekzekutoni kete skedar perseri.
    pause
    exit /b 1
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
echo Instalimi i dependencave te projektit...
echo ============================================

cd /d "%~dp0"
if not exist "package.json" (
    echo GABIM: Skedari package.json nuk u gjet ne direktorine aktuale!
    echo Sigurohuni qe jeni ne direktorine e projektit vr-exhibition.
    pause
    exit /b 1
)

echo Direktoria aktuale: %cd%
echo.

echo Instalimi i dependencave... (kjo mund te marre disa minuta)
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
echo Instalimi perfundoi me sukses!
echo ============================================
echo.
echo Tani mund te ekzekutoni projektin me:
echo npm run dev
echo.
echo Hapni browser dhe shkoni te: http://localhost:3000
echo.
pause