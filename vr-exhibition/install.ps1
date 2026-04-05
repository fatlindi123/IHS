Write-Host "============================================" -ForegroundColor Cyan
Write-Host "VR Exhibition - Instalimi i dependencave" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Kontrollimi i Node.js..." -ForegroundColor Yellow
try {
    $nodeVersion = & node --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Node.js u gjet! Version: $nodeVersion" -ForegroundColor Green
    } else {
        throw "Node.js nuk eshte i instaluar"
    }
} catch {
    Write-Host "GABIM: Node.js nuk eshte i instaluar!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Ju lutem shkarkoni dhe instaloni Node.js nga:" -ForegroundColor Yellow
    Write-Host "https://nodejs.org/" -ForegroundColor White
    Write-Host ""
    Write-Host "Pas instalimit, ekzekutoni kete skedar perseri." -ForegroundColor Yellow
    Read-Host "Shtypni Enter per te dalur"
    exit 1
}

Write-Host ""
Write-Host "Kontrollimi i npm..." -ForegroundColor Yellow
try {
    $npmVersion = & npm --version 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "npm u gjet! Version: $npmVersion" -ForegroundColor Green
    } else {
        throw "npm nuk eshte i instaluar"
    }
} catch {
    Write-Host "GABIM: npm nuk eshte i instaluar!" -ForegroundColor Red
    Write-Host "Ju lutem instaloni npm ose perdorni Node.js qe e perfshin npm." -ForegroundColor Yellow
    Read-Host "Shtypni Enter per te dalur"
    exit 1
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Instalimi i dependencave te projektit..." -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan

$projectPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectPath

if (!(Test-Path "package.json")) {
    Write-Host "GABIM: Skedari package.json nuk u gjet ne direktorine aktuale!" -ForegroundColor Red
    Write-Host "Sigurohuni qe jeni ne direktorine e projektit vr-exhibition." -ForegroundColor Yellow
    Read-Host "Shtypni Enter per te dalur"
    exit 1
}

Write-Host "Direktoria aktuale: $projectPath" -ForegroundColor White
Write-Host ""

Write-Host "Instalimi i dependencave... (kjo mund te marre disa minuta)" -ForegroundColor Yellow
& npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "GABIM: Instalimi i dependencave deshtoi!" -ForegroundColor Red
    Write-Host "Kontrolloni lidhjen internet dhe provoni perseri." -ForegroundColor Yellow
    Read-Host "Shtypni Enter per te dalur"
    exit 1
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "Instalimi perfundoi me sukses!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "Tani mund te ekzekutoni projektin me:" -ForegroundColor Cyan
Write-Host "npm run dev" -ForegroundColor White
Write-Host ""
Write-Host "Hapni browser dhe shkoni te: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Read-Host "Shtypni Enter per te dalur"