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
 - Správa Pacientov (registrácia, vyhľadávanie, alergie, medikácia, súhlasy vrátane paliatívnej starostlivosti § 6ba, spôsobu poučenia § 6 ods. 2, odmietnutia poučenia § 6 ods. 3, vyjadrenia nespôsobilej osoby § 6 ods. 10, negatívneho reverzu a situácií bez súhlasu § 6 ods. 9, súhlasov na HD/PD/CVK/AVF/transfúziu/biopsiu, rozsahu starostlivosti a zmluvy s poisťovňou aj účasti na výučbe § 11 ods. 9, dohoda o ZS vrátane odstúpenia osoby aj poskytovateľa § 12 ods. 16 a zániku dohody § 12 ods. 18, očkovania s plánom so zachovaním predchádzajúceho znenia, prekážkami, nežiaducimi účinkami, rozhodnutiami RÚVZ a informovaním zmluvného lekára, posudky, PN vrátane liečebného režimu, vychádzok, preukazu o trvaní § 12a ods. 8, ukončenia lekárom § 12a ods. 5, potvrdenia pri výpadku IS § 12a ods. 17 a starostlivosti poskytnutej zamestnancovi § 12a ods. 4, osobná starostlivosť § 12b vrátane písomného nesúhlasu, hospitalizácie, ukončenia § 12b ods. 8 a papierového potvrdenia § 12b ods. 11, lekárske predpisy vrátane listinného predpisu ŠÚKL do eReceptu § 79 ods. 1 písm. r, transplantácia vrátane poučenia o živom darcovi, návrhu pred dialýzou § 79 ods. 1 písm. ad a hlásenia pre NTO, hlásenia prenosných ochorení s dokladom RÚVZ § 4 vyhl. 585/2008 a zdrojom nákazy § 11 ods. 14 a oznámenia podozrenia § 79 ods. 4, lekárske ožiarenia s odôvodnením § 44a a dávkou § 44d, preprava vrátane oslobodenia od spoluúčasti § 3 ods. 19 zák. 577/2004, biomedicínsky výskum, sprístupňovanie so zákazmi nahliadnutia, registrom nahliadnutí § 25 vrátane 7-dňovej platnosti potvrdenia VLD § 25 ods. 8, výpis § 24 a súpis dokumentácie, zbavenie mlčanlivosti, žiadosti o nápravu, žiadosti Sociálnej poisťovne, evidencia úmrtia)
 - Evidencia Návštev (klinický zápis so vzormi, vlastné typy, KDIGO 2024 vrátane eGFRcr-cys, dispenzarizácia vrátane skupiny vyhl. 127/2014, výkony eZápis a pripočítateľné položky s kontrolou revíznych pravidiel, lehota plánovanej starostlivosti § 21 ods. 3 písm. h, lekárske správy s evidenciou doručenia vrátane správy pre VLD § 8 ods. 6, odporúčania na špecializovanú starostlivosť a SVLZ § 8 ods. 4 a 8, konzultácie, ÚDZS, vzdialená starostlivosť vrátane telekonzultácie a videokonzultácie s overením totožnosti § 8 ods. 13, domáca starostlivosť, doplnkové ordinačné hodiny, krízová situácia § 49k, zápis osobou určenou podľa § 18 ods. 1, oprava zápisu)
 - Hemodialýza a predpis (záznamy HD a HDF vrátane vizity, osobitných komentárov aj po overení, opravy so zachovaním predchádzajúcich znení, zrušenia s nahradením a evidencie napojenia na mimotelový okruh, spôsob napojenia, kanylácia AVF, metóda MEL a typ substitúcie, sprievodca zaradením vrátane preddialyzačného skríningu HBsAg/anti-HCV/anti-HIV, prístroje vrátane sérológie § 19 ods. 2 písm. g) a vyhradenia, cievne prístupy, Nexadia, hosťovské ošetrenia, materiál, podpisy, revízie a zaškolenia, mesačné kontroly adekvátnosti, anémie a fosfo-kalcia)
 - Peritoneálna dialýza (PD — CAPD a APD, vyšetrenie PD, PET a Kt/V, bilancia tekutín, exit-site, peritonitída a komplikácie, zaškolenie pacienta, zrušenie záznamu s nahradením)
 - Kalendár a harmonogram (vrátane súhrnu na odovzdanie služby, kanálov objednania: osobne, telefonicky, NCZI, systém poskytovateľa, a dňa objednania s lehotou 20 dní § 2a ods. 2)
 - Laboratórne výsledky (trendová matica, žiadanky na SVLZ s identifikátormi § 19a a prehľadom nevybavených, zápis panela s evidenciou pôvodu vrátane dohody o nevyhotovení listinnej podoby § 8 ods. 9)
 - Moje zoznamy a štatistiky (vlastné diagnózy a výkony, žiadosti o nápravu, nevybavené žiadanky na SVLZ, kniha eliminačných výkonov s evidenciou napojenia, indikátory kvality, objednania a lehota poskytnutia vrátane pôvodu a dňa objednania § 2a ods. 2 a § 79 ods. 1 písm. am) až ao), podklady pre revíznu kontrolu, dozor a klinický audit § 9c vrátane podkladov ku kontrole očkovania RÚVZ § 14 ods. 1 vyhl. 585/2008)
 - Vykazovanie poisťovniam (dávky 751a/799a vrátane pre-flight kontroly, dispenzárne dávky, reklamácie vrátane opravnej dávky O a revíznych nálezov, eFaktúra, doklady o úhrade, súvisiace služby, platená starostlivosť vrátane doplnkových hodín a domácej na žiadosť § 79 ods. 1 písm. ap a poučenia o úhrade § 19 ods. 7, neodkladná starostlivosť, poistenci EÚ aj mimo EÚ, bez verejného poistenia I/J/K vrátane dokladu totožnosti § 79b, lieky a pomôcky podľa pôvodu § 79a vrátane odchýlok z vlastných zásob, oznámenia poisťovni vrátane kódov náhrady a odpovede poisťovne, údaje pre MZ SR § 79 ods. 1 písm. zh, mesačný výkaz pre Sociálnu poisťovňu § 233 ods. 2 písm. c)
 - Prevádzka dialýzy (zmeny, rozpis, zoznam pracovníkov vrátane oznámení, registrácie v komore, NRZP, osoby určenej podľa § 18 ods. 1, ePZP s oznámením národnému centru § 80 ods. 1 písm. h a exportu do 65 rokov § 79 ods. 1 písm. bh, očkovania, kvalifikácie a vzdelávanie, epidemiologický register, nežiaduce udalosti vrátane interného systému hodnotenia bezpečnosti pacienta § 79 ods. 1 písm. ba/bb a § 9b, zmluvy, kniha prehliadok mŕtvych, písomná forma, dokumenty kvality vrátane oboznámenia pracovníkov, evidencia záložných kópií, klinické audity vrátane podrobenia sa auditu § 79 ods. 1 písm. bc a § 9d, ordinačné hodiny, karta zariadenia vrátane náhradného odborného zástupcu, vykazovacie jednotky, označenie, informačný list a informácie na webové sídlo o možnostiach ošetrenia, kvalite, bezpečnosti a cenách § 79 ods. 1 písm. zj, poistenie zodpovednosti, zmeny v povolení, oznamy, odovzdanie dokumentácie vrátane priameho odovzdania § 23 ods. 9 a úschovy krajom § 23 ods. 4 a 5)
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

