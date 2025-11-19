# UL Student Management System - GitHub Setup Script
# This script helps you set up the GitHub repository and deploy

Write-Host "==================================" -ForegroundColor Cyan
Write-Host "UL Student Management System" -ForegroundColor Cyan
Write-Host "GitHub Repository Setup" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan
Write-Host ""

# Get repository name from user
$repoName = Read-Host "Enter your GitHub repository name (e.g., ul-student-management)"

if ([string]::IsNullOrWhiteSpace($repoName)) {
    Write-Host "Error: Repository name cannot be empty!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Repository URL will be: https://github.com/ufoericlaito/$repoName" -ForegroundColor Yellow
Write-Host ""

$confirm = Read-Host "Have you created this repository on GitHub? (y/n)"

if ($confirm -ne "y") {
    Write-Host ""
    Write-Host "Please create the repository first:" -ForegroundColor Yellow
    Write-Host "1. Visit: https://github.com/new" -ForegroundColor White
    Write-Host "2. Repository name: $repoName" -ForegroundColor White
    Write-Host "3. Choose Public" -ForegroundColor White
    Write-Host "4. DO NOT initialize with README, .gitignore, or license" -ForegroundColor White
    Write-Host "5. Click 'Create repository'" -ForegroundColor White
    Write-Host ""
    Write-Host "After creating the repository, run this script again." -ForegroundColor Green
    exit 0
}

Write-Host ""
Write-Host "Setting up Git remote..." -ForegroundColor Green

# Add remote
git remote add origin "https://github.com/ufoericlaito/$repoName.git"

if ($LASTEXITCODE -ne 0) {
    Write-Host "Remote might already exist. Removing and re-adding..." -ForegroundColor Yellow
    git remote remove origin
    git remote add origin "https://github.com/ufoericlaito/$repoName.git"
}

Write-Host "Remote added successfully!" -ForegroundColor Green
Write-Host ""

# Commit deployment guide
Write-Host "Committing deployment guide..." -ForegroundColor Green
git add .
git commit -m "Add deployment guide and setup script"

Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push -u origin master

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "==================================" -ForegroundColor Green
    Write-Host "SUCCESS!" -ForegroundColor Green
    Write-Host "==================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your code has been pushed to GitHub!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "1. Go to: https://github.com/ufoericlaito/$repoName" -ForegroundColor White
    Write-Host "2. Click 'Settings' tab" -ForegroundColor White
    Write-Host "3. Click 'Pages' in the left sidebar" -ForegroundColor White
    Write-Host "4. Under 'Source', select 'GitHub Actions'" -ForegroundColor White
    Write-Host "5. Wait a few minutes for deployment" -ForegroundColor White
    Write-Host ""
    Write-Host "Your site will be available at:" -ForegroundColor Green
    Write-Host "https://ufoericlaito.github.io/$repoName/" -ForegroundColor Cyan
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "Error: Failed to push to GitHub!" -ForegroundColor Red
    Write-Host "Please check your GitHub credentials and try again." -ForegroundColor Yellow
}

