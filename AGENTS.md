<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Arenibus Marketing Website

## Project Overview
This is a marketing website for the Arenibus nephrology information system (MVP phase). The website is built with Next.js 16, TypeScript, and Tailwind CSS.

## Development Commands
- `npm run dev` - Start development server (runs on http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Key Features
- Hero section with system overview (MVP - nefrologická ambulancia)
- Features section highlighting implemented MVP functions:
  - Správa Pacientov (registrácia, vyhľadávanie, alergie, medikácia, súhlasy)
  - Evidencia Návštev (klinický zápis, dispenzarizácia, výkony)
  - Dialyzačný Predpis (39 polí, číselníky materiálu, mesačné kontroly)
  - Objednávanie Termínov (kalendár, harmonogram)
  - Audit a Bezpečnosť (audit log, OIDC autentifikácia)
  - Laboratórne Výsledky (trendová matica, zápis panela)
- Demo section linking to https://demo.arenibus.com/
- Contact information with arenibus@polascin.net
- Responsive design with dark mode support
- Professional medical/healthcare styling

## Technical Details
- Next.js 16 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Static export for simple hosting
- SEO optimized with proper metadata

## Demo Integration
The main demo version is available at https://demo.arenibus.com/ and is prominently featured throughout the site. Demo accounts: demo-lekar / demo-sestra.

## Deployment
Deployment uses SSH to websupport server with static export build files. Target directory: /data/8/6/868f981d-e598-4e71-b7f5-246f2e180cef/polascin.net/arenibus

### GitHub Actions CI/CD
The repository includes `.github/workflows/deploy.yml` that automatically builds and deploys the site on every push to `main`:
1. Verifies the local checkout is in sync with `origin/main`.
2. Installs Node.js dependencies (`npm ci`).
3. Runs lint (`npm run lint`).
4. Builds the static export (`npm run build`).
5. Connects via SSH and prepares the remote directory.
6. Uploads `out/` contents via SCP.
7. Sets file permissions and performs a smoke test against https://arenibus.polascin.net/.

### Required GitHub Secrets
Configure the following secrets in the repository settings (`Settings > Secrets and variables > Actions`):
- `WEBSUPPORT_SSH_KEY` — private SSH key for `uid58858@shell.r1.websupport.sk`.
- `WEBSUPPORT_SSH_HOST` (optional, default: `shell.r1.websupport.sk`).
- `WEBSUPPORT_SSH_PORT` (optional, default: `26650`).
- `WEBSUPPORT_SSH_USER` (optional, default: `uid58858`).
- `WEBSUPPORT_DEPLOY_DIR` (optional, default: `/data/8/6/868f981d-e598-4e71-b7f5-246f2e180cef/polascin.net/arenibus`).

### Manual deployment
Local fallback scripts are still available:
- `deploy.sh` — bash script for Linux/macOS/Git Bash.
- `deploy.bat` — Windows helper that delegates to `deploy.sh` via Git Bash/WSL.
