# VR Exhibition - Kontroll dhe Instalim
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "VR Exhibition - Kontroll dhe Instalim" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Funksioni per kontrollimin e Node.js
function Test-NodeJS {
    try {
        $nodeVersion = & node --version 2>$null
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Node.js u gjet! Version: $nodeVersion" -ForegroundColor Green
            return $true
        }
    } catch {
        Write-Host "Node.js nuk u gjet." -ForegroundColor Red
    }
    return $false
}

# Funksioni per kontrollimin e npm
function Test-NPM {
    try {
        $npmVersion = & npm --version 2>$null
        if ($LASTEXITCODE -eq 0) {
            Write-Host "npm u gjet! Version: $npmVersion" -ForegroundColor Green
            return $true
        }
    } catch {
        Write-Host "npm nuk u gjet." -ForegroundColor Red
    }
    return $false
}

# Kontrollimi i Node.js
Write-Host "Kontrollimi i Node.js..." -ForegroundColor Yellow
$nodeInstalled = Test-NodeJS

if (-not $nodeInstalled) {
    Write-Host ""
    Write-Host "Node.js nuk eshte i instaluar!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Shkarkimi dhe instalimi i Node.js LTS..." -ForegroundColor Yellow

    try {
        # Shkarko Node.js
        $url = "https://nodejs.org/dist/v18.17.0/node-v18.17.0-x64.msi"
        $outputPath = "$env:TEMP\nodejs.msi"

        Write-Host "Shkarkimi i Node.js..."
        Invoke-WebRequest -Uri $url -OutFile $outputPath -ErrorAction Stop

        if (Test-Path $outputPath) {
            Write-Host "Node.js u shkarkua me sukses!" -ForegroundColor Green
            Write-Host ""
            Write-Host "JU LUTEM:" -ForegroundColor Yellow
            Write-Host "1. Klikoni 'Next' ne instalues" -ForegroundColor White
            Write-Host "2. Pranoni kushtet" -ForegroundColor White
            Write-Host "3. Klikoni 'Install'" -ForegroundColor White
            Write-Host "4. Klikoni 'Finish'" -ForegroundColor White
            Write-Host ""
            Write-Host "Pas instalimit, mbyllni kete dritare dhe ekzekutoni perseri kete skedar." -ForegroundColor Yellow
            Write-Host ""

            # Hap instaluesin
            Start-Process $outputPath

            Write-Host "Instaluesi u hap. Ju lutem ndiqni hapat e mesiperme." -ForegroundColor Green
            Read-Host "Shtypni Enter per te mbyllur"
            exit 1
        }
    } catch {
        Write-Host "GABIM: Shkarkimi i Node.js deshtoi!" -ForegroundColor Red
        Write-Host "Kontrolloni lidhjen internet dhe provoni perseri." -ForegroundColor Red
        Write-Host "Ose shkarkoni manualisht nga: https://nodejs.org/" -ForegroundColor Yellow
        Read-Host "Shtypni Enter per te mbyllur"
        exit 1
    }
}

# Kontrollimi i npm
Write-Host ""
Write-Host "Kontrollimi i npm..." -ForegroundColor Yellow
$npmInstalled = Test-NPM

if (-not $npmInstalled) {
    Write-Host ""
    Write-Host "GABIM: npm nuk eshte i instaluar!" -ForegroundColor Red
    Write-Host "Ju lutem instaloni npm ose perdorni Node.js qe e perfshin npm." -ForegroundColor Red
    Read-Host "Shtypni Enter per te mbyllur"
    exit 1
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Kontrollimi i projektit..." -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan

# Kontrollo package.json
if (-not (Test-Path "package.json")) {
    Write-Host "GABIM: Skedari package.json nuk u gjet!" -ForegroundColor Red
    Write-Host "Sigurohuni qe jeni ne direktorine e projektit vr-exhibition." -ForegroundColor Red
    Write-Host "Direktoria aktuelle: $(Get-Location)" -ForegroundColor Yellow
    Read-Host "Shtypni Enter per te mbyllur"
    exit 1
}

Write-Host "package.json u gjet." -ForegroundColor Green
Write-Host ""

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Instalimi i dependencave..." -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan

Write-Host "Instalimi i paketave... (kjo mund te marre disa minuta)" -ForegroundColor Yellow

try {
    & npm install
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "============================================" -ForegroundColor Green
        Write-Host "SUKSES! Gjithcka eshte gati!" -ForegroundColor Green
        Write-Host "============================================" -ForegroundColor Green
        Write-Host ""
        Write-Host "Tani mund te ekzekutoni:" -ForegroundColor White
        Write-Host "npm run dev" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Dhe hapni browser te:" -ForegroundColor White
        Write-Host "http://localhost:3000" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Per dashboard-in e perdoruesit:" -ForegroundColor White
        Write-Host "http://localhost:3000/user" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Per dashboard-in e admin:" -ForegroundColor White
        Write-Host "http://localhost:3000/admin" -ForegroundColor Cyan
        Write-Host ""
    } else {
        Write-Host ""
        Write-Host "GABIM: Instalimi i dependencave deshtoi!" -ForegroundColor Red
        Write-Host "Kontrolloni lidhjen internet dhe provoni perseri." -ForegroundColor Red
    }
} catch {
    Write-Host ""
    Write-Host "GABIM: Instalimi i dependencave deshtoi!" -ForegroundColor Red
    Write-Host "Kontrolloni lidhjen internet dhe provoni perseri." -ForegroundColor Red
}

Read-Host "Shtypni Enter per te mbyllur"