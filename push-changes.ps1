# Push changes to GitHub
Write-Host "Adding all changes..." -ForegroundColor Cyan
git add -A

Write-Host "Committing changes..." -ForegroundColor Cyan
git commit -m "Update README and remove Chinese documentation files"

Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git push

Write-Host "Done! Changes pushed to GitHub." -ForegroundColor Green

