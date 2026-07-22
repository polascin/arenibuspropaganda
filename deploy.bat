@echo off
REM Deployment script for Arenibus marketing website to websupport
REM Target: https://arenibus.polascin.net/
REM Requires: Git Bash or WSL with SSH configured

echo Building Next.js project...
call npm run build

if %ERRORLEVEL% neq 0 (
    echo Build failed. Aborting deployment.
    exit /b 1
)

echo Build successful. Starting deployment to websupport...
echo.
echo IMPORTANT: This script requires SSH access to websupport.
echo Please run the deploy.sh script using Git Bash or WSL instead.
echo.
echo Manual deployment steps:
echo 1. Open Git Bash or WSL
echo 2. Navigate to this directory
echo 3. Run: bash deploy.sh
echo.
pause
