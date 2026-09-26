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
 - Správa Pacientov (registrácia vrátane bezdomovca a cudzinca mimo EÚ a overenia poisťovne v ÚDZS, identifikačná karta pre role bez klinického oprávnenia vrátane krvnej skupiny, vyhľadávanie, alergie, medikácia, súhlasy vrátane paliatívnej starostlivosti § 6ba s náležitosťami sociálnej pomoci a duchovnej služby, spôsobu poučenia § 6 ods. 2, poučenej osoby § 6 ods. 1 písm. a/b, odmietnutia poučenia § 6 ods. 3, vyjadrenia nespôsobilej osoby § 6 ods. 10, negatívneho reverzu a situácií bez súhlasu § 6 ods. 9, súhlasov na HD/PD/CVK/AVF/transfúziu/biopsiu, poučenia o rozsahu starostlivosti a zmluve s poisťovňou § 79 ods. 1 písm. h aj účasti na výučbe § 11 ods. 9, dohoda o ZS — vznik dohodou § 12 ods. 1, mimo registra NCZI § 12 ods. 2/3 vrátane odstúpenia osoby aj poskytovateľa § 12 ods. 16, písomného upovedomenia § 12 ods. 17, dôvodov § 12 ods. 9/11 a zániku dohody § 12 ods. 18, očkovania s plánom § 9 ods. 7 so znením základného ochorenia, imunosupresie a imunitného profilu a so zachovaním predchádzajúceho znenia, záverom lekára pred očkovaním § 13 ods. 2, prečiarknutím úhrady poisťovňou pri profesionálnom očkovaní § 13 ods. 1 vyhl. 585/2008, prekážkami, nežiaducimi účinkami, rozhodnutiami RÚVZ vrátane rozhodnutia, na ktorého základe sa očkovalo § 17 ods. 2, a oznámením zmluvnému lekárovi § 13 ods. 5, posudky so súhlasom § 16 ods. 3, PN ktorú posudzuje aj špecialista § 12a ods. 1 písm. c vrátane liečebného režimu § 12a ods. 3, vychádzok aj zrušenia § 12a ods. 7, preukazu o trvaní § 12a ods. 8, pokračovania § 12a ods. 10, ukončenia lekárom a vyšetrenia najneskôr v deň predpokladaného skončenia § 12a ods. 5 alebo pre nedostavenie sa § 12a ods. 6, potvrdenia pri výpadku IS § 12a ods. 17 a starostlivosti poskytnutej zamestnancovi § 12a ods. 4, osobná starostlivosť § 12b vrátane dôvodu § 12b ods. 2, písomného nesúhlasu, hospitalizácie ktorá potrebu neukončuje § 12b ods. 9, ukončenia § 12b ods. 8, upovedomenia VLD § 12b ods. 3 písm. c a papierového potvrdenia § 12b ods. 11, lekárske predpisy vrátane listinného predpisu ŠÚKL do eReceptu § 79 ods. 1 písm. r, transplantácia vrátane súhlasu podľa zák. 317/2016, poučenia o živom darcovi, návrhu pred dialýzou § 79 ods. 1 písm. ad a hlásenia pre NTO, hlásenia prenosných ochorení s dokladom RÚVZ § 4 vyhl. 585/2008, zamestnaním § 20 ods. 2 písm. e) vyhl. 585/2008, zdrojom nákazy § 11 ods. 14 a okruhom osôb, na ktoré mohla chorobu preniesť, oznámenia podozrenia z týrania a zneužívania § 79 ods. 4, lekárske ožiarenia s odôvodnením § 44a ods. 1, predchádzajúcimi ožiareniami § 44a ods. 2 písm. b, zistením u ženy v reprodukčnom veku § 44a ods. 2 písm. e a dávkou § 44d, preprava DZS vrátane asistencie alebo sprievodu § 14 ods. 1 písm. a) zák. 576/2004 a oslobodenia od spoluúčasti § 3 ods. 19 zák. 577/2004, biomedicínsky výskum vrátane schválenia § 26 ods. 5–7, povahy § 26 ods. 8/9, súhlasu § 27 ods. 2 písm. a) až k) a informovania poisťovne § 26 ods. 11, sprístupňovanie so zákazmi nahliadnutia, registrom nahliadnutí § 25 vrátane inšpektora SKP § 25 ods. 1 písm. t a 7-dňovej platnosti potvrdenia VLD § 25 ods. 8, výpis § 24 ods. 3/4 a súpis dokumentácie, zbavenie mlčanlivosti § 80 ods. 3 až 6, žiadosti o nápravu § 17 ods. 1/2 vrátane dôvodu § 4 ods. 3 a informovania § 17 ods. 3, žiadosti Sociálnej poisťovne s výpisom do ôsmich dní § 233 ods. 2 písm. a, potvrdenie ambulantnej starostlivosti § 19 ods. 2 písm. f, evidencia úmrtia a uchovávanie dokumentácie vrátane 30 rokov pri dokumentácii súvisiacej s transplantáciou a záznamu o naložení)
 - Evidencia Návštev (klinický zápis so vzormi, antropometria vrátane BMI podľa WHO, BSA, viscerálneho tuku, suchej hmotnosti, IBW a LBW, vlastné typy, KDIGO 2024 vrátane potvrdenia chronicity (≥ 3 mesiace), uACR a eGFRcr-cys, dispenzarizácia vrátane skupiny vyhl. 127/2014, výkony eZápis a pripočítateľné položky s kontrolou revíznych pravidiel, lehota plánovanej starostlivosti § 21 ods. 3 písm. h, lekárske správy s evidenciou doručenia vrátane správy pre VLD § 8 ods. 6, odporúčania na špecializovanú starostlivosť a SVLZ § 8 ods. 4 a 8 vrátane dôvodu, prečo sa odporúčanie nevyžaduje § 8 ods. 5, konzultácie vrátane telekonzultácie a videokonzultácie medzi pracovníkmi § 2 ods. 46 písm. b a § 7 ods. 1 písm. f, ÚDZS, vzdialená starostlivosť vrátane telekonzultácie a videokonzultácie s overením totožnosti § 8 ods. 13, miesto poskytnutia § 8 ods. 1, domáca na žiadosť § 8 ods. 10, doplnkové ordinačné hodiny § 2a ods. 3, vyšetrenie na sociálne účely (Sociálna poisťovňa, ÚPSVaR), krízová situácia § 49k, zápis osobou určenou podľa § 18 ods. 1 a § 21 ods. 3 písm. i, výpis záznamu návštevy podľa § 21, oprava zápisu)
 - Hemodialýza a predpis (záznamy HD a HDF vrátane vizity, osobitných komentárov aj po overení, opravy so zachovaním predchádzajúcich znení, zrušenia s nahradením a § 21 ods. 1 a 2, sedenia s napojením/ukončením/zrušením, spôsob napojenia, kanylácia AVF, metóda MEL a typ substitúcie, sprievodca zaradením vrátane preddialyzačného skríningu HBsAg/anti-HCV/anti-HIV, cievne prístupy vrátane prvého použitia, znovuotvorenia a intervencie PTA/revízie, samostatný modul Prístroje pre technika a správcu vrátane sérológie § 19 ods. 2 písm. g), vyhradenia a karty prístroja § 79 ods. 1 písm. d, Nexadia, hosťovské ošetrenia, materiál, podpisy, revízie a zaškolenia, dosiahnuté eKt/V a eURR, mesačné kontroly adekvátnosti, anémie a fosfo-kalcia)
 - Peritoneálna dialýza (PD — CAPD a APD, vyšetrenie PD, PET a Kt/V vrátane reziduálneho renálneho Kt/V, reziduálna diuréza, ikodextrín a aminokyselinový roztok, peritoneálny katéter, bilancia tekutín, exit-site, peritonitída a komplikácie, zaškolenie pacienta, zrušenie záznamu s nahradením)
 - Kalendár a harmonogram (vrátane súhrnu na odovzdanie služby, evidencie nedostavenia sa, kanálov objednania: osobne, telefonicky, NCZI, systém poskytovateľa, a dňa objednania s lehotou 20 dní § 2a ods. 2)
 - Laboratórne výsledky (trendová matica, žiadanky na SVLZ ako súčasť dokumentácie § 19 ods. 2 písm. c s identifikátormi pri prijatí § 19a ods. 2 vrátane zápisu sestrou na základe indikácie lekára § 19a ods. 1, prehľadom už zapísaného § 19a ods. 3 a nevybavených, zápis panela s evidenciou pôvodu vrátane dohody o nevyhotovení listinnej podoby § 8 ods. 9)
 - Moje zoznamy a štatistiky (vlastné diagnózy a výkony, žiadosti o nápravu s informovaním do 30 dní § 17 ods. 3, nevybavené žiadanky na SVLZ, kniha eliminačných výkonov s evidenciou napojenia, prehľad lehôt uchovávania vrátane 20 rokov od posledného poskytnutia § 22 a 30 rokov pri transplantácii a záznamu o naložení, odovzdania vyžiadanej dokumentácie do siedmich dní § 23 ods. 3, indikátory kvality § 79 ods. 1 písm. t a § 79a ods. 1 písm. b, objednania a lehota poskytnutia vrátane pôvodu a dňa objednania § 2a ods. 2 a § 79 ods. 1 písm. am) až ao), podklady pre revíznu kontrolu, dozor a klinický audit § 9c ods. 1 písm. d, § 79 ods. 1 písm. q a § 79a ods. 1 písm. d vrátane podkladov ku kontrole očkovania RÚVZ § 14 ods. 1 vyhl. 585/2008)
 - Vykazovanie poisťovniam (dávky 751a/799a vrátane pre-flight kontroly, dispenzárne dávky, reklamácie vrátane opravnej dávky O a revíznych nálezov, eFaktúra UBL 2.1 / EN 16931 s prenosom čísla faktúry do poľa 7 záhlavia dávky, doklady o výške úhrady z cenníka platného v deň úhrady § 79 ods. 1 písm. o/g, oslobodenie ZS od DPH § 29 zák. 222/2004, súvisiace služby vrátane § 13 písm. c/e/f, platená starostlivosť vrátane doplnkových hodín § 2a, vyšetrenia na vlastnú žiadosť a domácej na žiadosť § 8 ods. 10 a § 79 ods. 1 písm. ap a poučenia o úhrade § 19 ods. 7, neodkladná starostlivosť vrátane žiadosti poisťovni § 79a ods. 1 písm. a, poistenci EÚ aj mimo EÚ vrátane stropu úhrady § 79b ods. 4, bez verejného poistenia I/J/K vrátane dokladu totožnosti § 79b, lieky a pomôcky podľa pôvodu § 79a ods. 1 písm. e vrátane odchýlok z vlastných zásob, oznámenia poisťovni vrátane kódov náhrady k poslednému dňu mesiaca § 79a ods. 1 písm. c a odpovede poisťovne, údaje pre MZ SR za kalendárny rok v elektronickej podobe § 79 ods. 1 písm. zh, mesačný výkaz pre Sociálnu poisťovňu do 14. dňa nasledujúceho mesiaca § 233 ods. 2 písm. c)
 - Prevádzka dialýzy (zmeny, miestnosti a pozície s obsadenosťou vrátane izolačnej miestnosti a akútnej dialyzačnej sály, rozpis, zoznam pracovníkov vrátane úväzku do záhlavia dávky a oznámení kraju do 14 dní § 79 ods. 18, registrácie v komore vrátane čísla, dátumov, pozastavenia, obnovenia, zrušenia a ročného poplatku do 31. januára § 80 ods. 1 písm. c/d, § 63 a § 64, zdravotníckeho povolania § 27, NRZP § 79 ods. 1 písm. zm, osoby určenej podľa § 18 ods. 1, ePZP s oznámením národnému centru § 80 ods. 1 písm. h a exportu lekárov, sestier a praktických sestier do 65 rokov § 79 ods. 1 písm. bh, očkovania s kategóriou § 5 ods. 1 vyhl. 585/2008, kvalifikácie presne podľa dokladu vrátane diplomu § 33, uznania § 35 až 37a, zdravotnej spôsobilosti § 32, bezúhonnosti § 38 a § 79 ods. 15 / § 83c ods. 8 / § 83d ods. 1 a vzdelávanie s evidenciou aktivít a hodnotení komory § 42 / § 42 ods. 7 / § 80 ods. 1 písm. b, epidemiologický register, nežiaduce udalosti vrátane interného systému hodnotenia bezpečnosti pacienta, ktorý môže nahlásiť každý pracovník aj anonymne, § 79 ods. 1 písm. ba/bb, § 9b ods. 2 a opatrení § 9b ods. 3, zmluvy s evidenciou na viditeľnom mieste § 79 ods. 1 písm. f, kniha prehliadok mŕtvych vrátane vykonaných prehliadok a ospravedlnení § 79 ods. 1 písm. w, písomná forma § 20 ods. 2, písomne dokumentovaný systém kvality § 9 ods. 1 a 2 vrátane oboznámenia pracovníkov, evidencia záložných kópií § 20 ods. 5, klinické audity vrátane podrobenia sa auditu § 79 ods. 1 písm. bc a § 9d, ordinačné a doplnkové hodiny § 2 ods. 32 a 33 so schválením kraja a informovaním o schválení § 79 ods. 1 písm. z a bv a stropom doplnkových hodín na 30 % schválených ordinačných hodín za týždeň, identifikácia poskytovateľa § 19 ods. 1 písm. b vrátane KPZS, IdZZ a kódu útvaru PZS, karta zariadenia vrátane náhradného odborného zástupcu pri PO § 79 ods. 1 písm. e a druhu zariadenia § 7 ods. 3, sprievodca uvedením pracoviska do prevádzky, vykazovacie jednotky, označenie, informačný list a informácie na webové sídlo o možnostiach ošetrenia, dostupnosti, kvalite, bezpečnosti a cenách § 79 ods. 1 písm. zj, poistenie zodpovednosti § 79 ods. 1 písm. s s evidenciou poistnej sumy, zmeny v povolení § 79 ods. 11, oznamy o zastupovaní, pozastavení a skončení § 79 ods. 1 písm. j) a k), odovzdanie dokumentácie vrátane odovzdania pacientovi § 23 ods. 3, priameho odovzdania § 23 ods. 9 a úschovy krajom § 23 ods. 4 a 5)
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

