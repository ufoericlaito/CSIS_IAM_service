# CSIS IAM Service - Deployment Status Checker
# This script helps you check and enable GitHub Pages deployment

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  CSIS IAM Service - Deployment Guide  " -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Repository Information
Write-Host "📍 Repository Information:" -ForegroundColor Yellow
Write-Host "   Repository: https://github.com/ufoericlaito/CSIS_IAM_service" -ForegroundColor White
Write-Host "   Branch: master" -ForegroundColor White
Write-Host ""

# Step 2: Enable GitHub Pages
Write-Host "🔧 Step 1: Enable GitHub Pages" -ForegroundColor Yellow
Write-Host "   1. Open this URL in your browser:" -ForegroundColor White
Write-Host "      https://github.com/ufoericlaito/CSIS_IAM_service/settings/pages" -ForegroundColor Green
Write-Host ""
Write-Host "   2. Under 'Build and deployment':" -ForegroundColor White
Write-Host "      - Source: Select 'GitHub Actions'" -ForegroundColor White
Write-Host "      - Click 'Save'" -ForegroundColor White
Write-Host ""

$response = Read-Host "   Have you enabled GitHub Pages? (y/n)"
if ($response -eq 'y' -or $response -eq 'Y') {
    Write-Host "   ✅ Great! Moving to next step..." -ForegroundColor Green
} else {
    Write-Host "   ⚠️  Please enable GitHub Pages first, then run this script again." -ForegroundColor Red
    Write-Host ""
    Write-Host "Press any key to open the settings page..."
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    Start-Process "https://github.com/ufoericlaito/CSIS_IAM_service/settings/pages"
    exit
}

Write-Host ""

# Step 3: Check Workflow
Write-Host "🔄 Step 2: Check Deployment Workflow" -ForegroundColor Yellow
Write-Host "   Opening GitHub Actions page..." -ForegroundColor White
Start-Process "https://github.com/ufoericlaito/CSIS_IAM_service/actions"
Write-Host ""
Write-Host "   Look for:" -ForegroundColor White
Write-Host "   - Workflow name: 'Deploy to GitHub Pages'" -ForegroundColor White
Write-Host "   - Status: Green checkmark ✅ (success)" -ForegroundColor White
Write-Host "   - If running: Wait 2-5 minutes for completion" -ForegroundColor White
Write-Host ""

$response = Read-Host "   Is the workflow successful? (y/n)"
if ($response -eq 'y' -or $response -eq 'Y') {
    Write-Host "   ✅ Excellent! Your site should be live!" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  If the workflow failed, check the error logs in the Actions tab." -ForegroundColor Red
    Write-Host "   Common fixes:" -ForegroundColor White
    Write-Host "   - Make sure GitHub Pages source is set to 'GitHub Actions'" -ForegroundColor White
    Write-Host "   - Try pushing a new commit to trigger deployment" -ForegroundColor White
}

Write-Host ""

# Step 4: Access Website
Write-Host "🌐 Step 3: Access Your Website" -ForegroundColor Yellow
Write-Host "   Your website should be available at:" -ForegroundColor White
Write-Host "   https://ufoericlaito.github.io/CSIS_IAM_service/" -ForegroundColor Green
Write-Host ""

$response = Read-Host "   Would you like to open the website now? (y/n)"
if ($response -eq 'y' -or $response -eq 'Y') {
    Write-Host "   Opening website..." -ForegroundColor White
    Start-Process "https://ufoericlaito.github.io/CSIS_IAM_service/"
}

Write-Host ""

# Step 5: Test Accounts
Write-Host "🔐 Demo Accounts for Testing:" -ForegroundColor Yellow
Write-Host "   Admin Account:" -ForegroundColor White
Write-Host "   - Email: admin@ul.com" -ForegroundColor Cyan
Write-Host "   - Password: admin123" -ForegroundColor Cyan
Write-Host ""
Write-Host "   User Account:" -ForegroundColor White
Write-Host "   - Email: user@ul.com" -ForegroundColor Cyan
Write-Host "   - Password: user123" -ForegroundColor Cyan
Write-Host ""

# Summary
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Deployment Summary" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "✅ Repository: https://github.com/ufoericlaito/CSIS_IAM_service" -ForegroundColor Green
Write-Host "✅ Settings: https://github.com/ufoericlaito/CSIS_IAM_service/settings/pages" -ForegroundColor Green
Write-Host "✅ Actions: https://github.com/ufoericlaito/CSIS_IAM_service/actions" -ForegroundColor Green
Write-Host "✅ Website: https://ufoericlaito.github.io/CSIS_IAM_service/" -ForegroundColor Green
Write-Host ""
Write-Host "📖 For detailed instructions, see: DEPLOYMENT_GUIDE.md" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

