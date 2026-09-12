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
 - Správa Pacientov (registrácia, vyhľadávanie, alergie, medikácia, súhlasy vrátane paliatívnej starostlivosti, rozsahu starostlivosti a zmluvy s poisťovňou aj účasti na výučbe, dohoda o ZS vrátane odstúpenia, očkovania s plánom, prekážkami, nežiaducimi účinkami, rozhodnutiami RÚVZ a informovaním zmluvného lekára, posudky, PN vrátane liečebného režimu, vychádzok a preukazu o trvaní, osobná starostlivosť § 12b vrátane písomného nesúhlasu, lekárske predpisy, transplantácia vrátane poučenia o živom darcovi, návrhu pred dialýzou a hlásenia pre NTO, hlásenia prenosných ochorení a oznámenia podozrenia § 79 ods. 4, lekárske ožiarenia, preprava, biomedicínsky výskum, sprístupňovanie so zákazmi nahliadnutia, výpis a súpis dokumentácie, zbavenie mlčanlivosti, žiadosti o nápravu, žiadosti Sociálnej poisťovne, evidencia úmrtia)
 - Evidencia Návštev (klinický zápis so vzormi, vlastné typy, KDIGO 2024, dispenzarizácia, výkony eZápis a pripočítateľné položky s kontrolou revíznych pravidiel, lekárske správy s evidenciou doručenia, odporúčania, konzultácie, ÚDZS, vzdialená a domáca starostlivosť, doplnkové ordinačné hodiny, krízová situácia § 49k, oprava zápisu)
 - Hemodialýza a predpis (záznamy HD a HDF vrátane vizity, osobitných komentárov aj po overení, opravy so zachovaním predchádzajúcich znení, zrušenia s nahradením a evidencie napojenia na mimotelový okruh, sprievodca zaradením, prístroje vrátane sérológie a vyhradenia, cievne prístupy, Nexadia, hosťovské ošetrenia, materiál, podpisy, revízie a zaškolenia, mesačné kontroly adekvátnosti, anémie a fosfo-kalcia)
 - Peritoneálna dialýza (PD — CAPD a APD, vyšetrenie PD, PET a Kt/V, bilancia tekutín, exit-site, peritonitída a komplikácie, zaškolenie pacienta, zrušenie záznamu s nahradením)
 - Kalendár a harmonogram (vrátane súhrnu na odovzdanie služby a kanálov objednania: osobne, telefonicky, NCZI, systém poskytovateľa)
 - Laboratórne výsledky (trendová matica, žiadanky na SVLZ s identifikátormi § 19a a prehľadom nevybavených, zápis panela s evidenciou pôvodu)
 - Moje zoznamy a štatistiky (vlastné diagnózy a výkony, žiadosti o nápravu, nevybavené žiadanky na SVLZ, kniha eliminačných výkonov s evidenciou napojenia, indikátory kvality, objednania a lehota poskytnutia, podklady pre revíznu kontrolu, dozor a klinický audit § 9c vrátane očkovania)
 - Vykazovanie poisťovniam (dávky 751a/799a, dispenzárne dávky, reklamácie vrátane opravnej dávky O a revíznych nálezov, eFaktúra, doklady o úhrade, súvisiace služby, platená starostlivosť, neodkladná starostlivosť, poistenci EÚ aj mimo EÚ, bez verejného poistenia I/J/K, lieky a pomôcky podľa pôvodu § 79a, oznámenia poisťovni vrátane kódov náhrady, údaje pre MZ SR § 79 ods. 1 písm. zh, mesačný výkaz pre Sociálnu poisťovňu § 233 ods. 2 písm. c)
 - Prevádzka dialýzy (zmeny, rozpis, zoznam pracovníkov vrátane oznámení, registrácie v komore, NRZP, ePZP s oznámením národnému centru § 80 ods. 1 písm. h a exportu do 65 rokov, očkovania, kvalifikácie a vzdelávanie, epidemiologický register, nežiaduce udalosti, zmluvy, kniha prehliadok mŕtvych, písomná forma, dokumenty kvality vrátane oboznámenia pracovníkov, evidencia záložných kópií, klinické audity, ordinačné hodiny, karta zariadenia, vykazovacie jednotky, označenie, informačný list a informácie na webové sídlo, poistenie zodpovednosti, zmeny v povolení, oznamy, odovzdanie dokumentácie)
 - Audit a bezpečnosť (audit log vrátane filtra pokusov o neoprávnený prístup § 22 ods. 6, uchovávanie, OIDC autentifikácia)
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

