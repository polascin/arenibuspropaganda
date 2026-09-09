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
  - Správa Pacientov (registrácia, vyhľadávanie, alergie, medikácia, súhlasy vrátane paliatívnej starostlivosti, dohoda o ZS, očkovania s plánom, posudky, PN, osobná starostlivosť § 12b, lekárske predpisy, transplantácia vrátane poučenia o živom darcovi a návrhu pred dialýzou, hlásenia prenosných ochorení, lekárske ožiarenia, preprava, biomedicínsky výskum, sprístupňovanie so zákazmi nahliadnutia, zbavenie mlčanlivosti, žiadosti o nápravu, žiadosti Sociálnej poisťovne, evidencia úmrtia)
  - Evidencia Návštev (klinický zápis so vzormi, vlastné typy, KDIGO 2024, dispenzarizácia, výkony eZápis a pripočítateľné položky, lekárske správy s evidenciou doručenia, odporúčania, konzultácie, ÚDZS, vzdialená a domáca starostlivosť, doplnkové ordinačné hodiny, oprava zápisu)
  - Hemodialýza a predpis (záznamy HD a HDF, sprievodca zaradením, prístroje vrátane sérológie a vyhradenia, cievne prístupy, Nexadia, hosťovské ošetrenia, materiál, podpisy, revízie a zaškolenia, mesačné kontroly)
  - Peritoneálna dialýza (PD — CAPD a APD, vyšetrenie PD, PET a Kt/V, exit-site, zaškolenie pacienta)
  - Kalendár a harmonogram (vrátane súhrnu na odovzdanie služby a kanálov objednania: osobne, telefonicky, NCZI, systém poskytovateľa)
  - Laboratórne výsledky (trendová matica, žiadanky na SVLZ, zápis panela s evidenciou pôvodu)
  - Moje zoznamy a štatistiky (vlastné diagnózy a výkony, žiadosti o nápravu, kniha eliminačných výkonov, indikátory kvality, objednania a lehota poskytnutia, podklady pre revíznu kontrolu, dozor a klinický audit § 9c vrátane očkovania)
  - Vykazovanie poisťovniam (dávky 751a/799a, dispenzárne dávky, reklamácie vrátane opravnej dávky O, eFaktúra, doklady o úhrade, súvisiace služby, platená starostlivosť, neodkladná starostlivosť, poistenci EÚ aj mimo EÚ, bez verejného poistenia I/J/K, lieky a pomôcky podľa pôvodu § 79a, oznámenia poisťovni)
  - Prevádzka dialýzy (zmeny, rozpis, zoznam pracovníkov vrátane oznámení a exportu do 65 rokov, očkovania, kvalifikácie a vzdelávanie, epidemiologický register, nežiaduce udalosti, zmluvy, kniha prehliadok mŕtvych, písomná forma, dokumenty kvality, karta zariadenia, označenie a informačný list, poistenie zodpovednosti, zmeny v povolení, oznamy, odovzdanie dokumentácie)
  - Audit a bezpečnosť (audit log, uchovávanie, OIDC autentifikácia)
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
The main demo version is available at https://demo.arenibus.com/ and is prominently featured throughout the site. Demo passwords are not published; access is provided on request via arenibus@nephroctor.com.

## Deployment
Deployment uses SSH to websupport server with static export build files. Target directory: /data/8/6/868f981d-e598-4e71-b7f5-246f2e180cef/polascin.net/arenibus

### GitHub Actions CI/CD
The repository includes `.github/workflows/deploy.yml` that automatically builds and deploys the site on every push to `main`:
1. Verifies the local checkout is in sync with `origin/main`.
2. Installs Node.js dependencies (`npm ci`).
3. Runs lint (`npm run lint`).
4. Checks colour contrast (`npm run check:contrast`).
5. Builds the static export (`npm run build`).
6. Checks user-facing web links (`npm run check:links`).
7. Connects via SSH and prepares the remote directory.
8. Uploads `out/` contents via SCP.
9. Sets file permissions and performs a smoke test against https://arenibus.polascin.net/.

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

### Standard Task Completion Workflow
Vždy na záver každej úlohy, **bez pýtania používateľa** (úloha nie je hotová, kým nie je overený živý deploy na WebSupport):
1. Spustiť overovacie kontroly (`npm run lint`, `npm run build`, `npm run check:contrast`, `npm run check:links`).
2. Commitnúť **všetky** relevantné zmeny s jasnou správou.
3. Pushnúť commit do `origin/main`.
4. Sledovať GitHub Actions deploy a verifikovať živú produkciu na https://arenibus.polascin.net/ (HTTP 200 + relevantné kontroly).

