import Image from "next/image";
import { DEMO_VERSION } from "@/lib/site";
import ContactForm from "./contact-form";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

const DEMO_ACCESS_MAILTO =
  "mailto:arenibus@nephroctor.com" +
  "?subject=" +
  encodeURIComponent("Žiadosť o prístupové údaje k demo Arenibus") +
  "&body=" +
  encodeURIComponent(
    "Dobrý deň,\n\nprosím o zaslanie hesiel k demo kontám Arenibus (lekár / sestra).\n\nĎakujem."
  );

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand focus:text-brand-text focus:rounded-lg"
      >
        Preskočiť na hlavný obsah
      </a>
      <div className="flex flex-col min-h-screen bg-background">
      <SiteHeader />

      <main id="main-content" className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-start justify-center pt-10 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative w-full max-w-96 aspect-square mx-auto">
            <Image
              src="/logo-768.webp"
              alt="Arenibus logo"
              fill
              className="rounded-xl shadow-brand-lg object-cover"
              sizes="(max-width: 768px) 100vw, 384px"
              draggable={false}
              priority
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Nefrologický a dialyzačný informačný systém
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-brand-soft text-brand-strong border border-brand/20 shadow-sm">
              Verzia {DEMO_VERSION} (MVP)
            </span>
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-semibold bg-warn-soft text-warn shadow-sm">
              Stále vo fáze pokročilého vývoja
            </span>
          </div>
          <p className="text-lg md:text-xl text-foreground-2 mb-8 max-w-3xl mx-auto">
            Moderný .NET systém pre nefrologickú ambulanciu a dialyzačné stredisko (hemodialýza HD a peritoneálna dialýza PD): dokumentácia návštev a ošetrení, registre podľa slovenskej legislatívy, vykazovanie poisťovniam a integrácia s ezdravotníctvom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://demo.arenibus.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-brand text-brand-text rounded-lg font-semibold hover:bg-brand-strong transition-colors shadow-brand"
            >
              Vyskúšať Demo Verziu
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-brand text-brand rounded-lg font-semibold hover:bg-brand hover:text-brand-text transition-colors"
            >
              Kontaktujte Nás
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Funkcie nefrologického a dialyzačného informačného systému Arenibus v aktuálnej verzii
          </h2>
          <p className="text-center text-foreground-2 text-sm mb-1">
            (MVP = Minimum Viable Product)
          </p>
          <p className="text-center text-foreground-2 text-sm mb-4">
            (Minimálny životaschopný produkt)
          </p>
          <p className="text-center text-foreground-2 text-lg mb-12 max-w-2xl mx-auto">
            Kompletný prehľad modulov implementovaných v živom demo prostredí.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature Cards */}
            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Správa Pacientov</h3>
              <p className="text-foreground-2 text-sm leading-relaxed">
                Registrácia a vyhľadávanie vrátane overenia poisťovne v registri poistencov ÚDZS, identifikačná karta (meno, poisťovňa, adresa, kontakt a krvná skupina) pre role bez klinického oprávnenia, alergie, medikácia, poučenia a súhlasy vrátane paliatívnej starostlivosti (§ 6ba) s náležitosťami sociálnej pomoci, duchovnej služby a postupu pri nedostupnosti v opodstatnenej lehote, spôsobu poučenia (§ 6 ods. 2), poučenej osoby (§ 6 ods. 1) vrátane osoby určenej pacientom a zástupcu, odmietnutia poučenia (§ 6 ods. 3), vyjadrenia nespôsobilej osoby (§ 6 ods. 10), negatívneho reverzu a situácií, keď sa súhlas nevyžaduje (§ 6 ods. 9), súhlasov na HD, PD, CVK, AV fistulu, transfúziu a biopsiu obličky, poučenia o rozsahu a podmienkach starostlivosti a o zmluve s poisťovňou (§ 79 ods. 1 písm. h) aj účasti na výučbe (§ 11 ods. 9), dohoda o poskytovaní ZS — do registra dohôd NCZI sa nezapisuje (§ 12 ods. 2; vyhradené všeobecnej a primárnej gynekologickej starostlivosti) a neuzatvára sa pri výlučne neodkladnej starostlivosti (§ 12 ods. 3) — vrátane odstúpenia osoby aj poskytovateľa (§ 12 ods. 16) s písomným upovedomením (§ 12 ods. 17) a zániku dohody pri úmrtí alebo zániku poskytovateľa (§ 12 ods. 18) aj dôvodov odstúpenia poskytovateľa (§ 12 ods. 9) vrátane osobného presvedčenia (§ 12 ods. 11: len UPT, sterilizácia, asistovaná reprodukcia), očkovania s individuálnym plánom so zachovaním predchádzajúceho znenia, prekážkami, nežiaducimi účinkami, rozhodnutiami RÚVZ a oznámením zmluvnému lekárovi (§ 13 ods. 5), posudky so súhlasom osoby (§ 16 ods. 3), pracovná neschopnosť, ktorú posudzuje aj lekár špecializovanej ambulantnej starostlivosti (§ 12a ods. 1 písm. c), vrátane liečebného režimu (§ 12a ods. 3, § 2 ods. 11), vychádzok aj ich zrušenia zo závažných dôvodov (§ 12a ods. 7), preukazu o trvaní (§ 12a ods. 8), pokračovania predošlej PN (§ 12a ods. 10), ukončenia lekárom najviac tri dni spätne (§ 12a ods. 5) alebo pre nedostavenie sa (§ 12a ods. 6), potvrdenia pri výpadku IS (§ 12a ods. 17) a starostlivosti poskytnutej zamestnancovi po odpracovaní zmeny (§ 12a ods. 4) a osobná starostlivosť (§ 12b) vrátane dôvodu potreby (§ 12b ods. 2), písomného nesúhlasu, hospitalizácie, ktorá potrebu neukončuje (§ 12b ods. 9), spôsobu ukončenia (§ 12b ods. 8), upovedomenia všeobecného lekára osoby (§ 12b ods. 3 písm. c), oznámenia všeobecnému lekárovi a papierového potvrdenia pri výpadku NZIS (§ 12b ods. 11), lekárske predpisy a poukazy vrátane listinného predpisu z číselníka ŠÚKL do napojenia na eRecept (§ 79 ods. 1 písm. r), čakacia listina so súhlasom podľa zák. 317/2016 a písomným odporúčaním nefrológa transplantačného centra a návrh transplantácie pred dialýzou (§ 79 ods. 1 písm. ad) vrátane poučenia o živom darcovi a hlásenia pre NTO, hlásenia prenosných ochorení s dokladom o hlásení RÚVZ (§ 4 vyhl. 585/2008) a zdrojom nákazy (§ 11 ods. 14), oznámenia podozrenia z týrania, zanedbávania, zneužívania, znásilnenia, sexuálneho násilia a súlože medzi príbuznými (§ 79 ods. 4) orgánu činnému v trestnom konaní, obci alebo UPSVaR, lekárske ožiarenia s odôvodnením indikácie (§ 44a ods. 1) a údajom o dávke (§ 44d), preprava vrátane oslobodenia od spoluúčasti za 1 km (§ 3 ods. 19 zák. 577/2004), biomedicínsky výskum vrátane schválenia (§ 26 ods. 5 až 7), povahy so zdravotnou indikáciou aj bez nej (§ 26 ods. 8 a 9) a písomného informovania poisťovne (§ 26 ods. 11), sprístupňovanie dokumentácie so zákazmi nahliadnutia, registrom nahliadnutí (§ 25) vrátane okruhu manžel/dieťa/rodič (§ 25 ods. 1 písm. b a d), inšpektora správnej klinickej praxe (§ 25 ods. 1 písm. t, len pseudonymizované kópie), výpiskov a kópií (§ 25 ods. 2), pseudonymizácie, osvedčeného podpisu (§ 18 ods. 4) a kontroly 7-dňovej platnosti potvrdenia všeobecného lekára (§ 25 ods. 8), výpis podľa právneho základu všeobecného alebo odporúčajúceho lekára (§ 24 ods. 3) alebo písomného vyžiadania oprávnenej osoby (§ 24 ods. 4) a súpis dokumentácie, zbavenie mlčanlivosti (§ 80 ods. 3 až 6), žiadosti o nápravu osobou alebo blízkou osobou (§ 17 ods. 1 a 2, lehota 30 dní), žiadosti Sociálnej poisťovne, potvrdenie ambulantnej starostlivosti (§ 19 ods. 2 písm. f), evidencia úmrtia a uchovávanie dokumentácie s evidenciou lehôt.
              </p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Evidencia Návštev</h3>
              <p className="text-foreground-2 text-sm leading-relaxed">
                Klinické zápisy (SOAP) so vzormi textov, antropometria (výška, hmotnosť, BMI podľa WHO, BSA Mosteller a DuBois, obvod pása, viscerálny tuk, suchá hmotnosť, IBW a LBW), vlastné typy návštev, klasifikácia CKD (KDIGO 2024 CGA) vrátane odporúčania eGFRcr-cys (cystatín C), epikríza, dispenzarizácia vrátane skupiny podľa vyhl. 127/2014, výkony (eZápis) a pripočítateľné položky s kontrolou revíznych pravidiel, lehota plánovanej starostlivosti (§ 21 ods. 3 písm. h), lekárske správy s evidenciou doručenia vrátane správy pre všeobecného alebo odporúčajúceho lekára (§ 8 ods. 6), odporúčania na ďalšiu špecializovanú starostlivosť a SVLZ s náležitosťami (§ 8 ods. 4 a 8) vrátane dôvodu, prečo sa odporúčanie nevyžaduje (§ 8 ods. 5), a konzultácie medzi pracovníkmi, overenie poistného vzťahu (ÚDZS), vzdialená starostlivosť vrátane telekonzultácie a videokonzultácie s overením totožnosti a poistného vzťahu (§ 8 ods. 13), miesto poskytnutia (§ 8 ods. 1) vrátane domáceho a iného prirodzeného prostredia, domáca starostlivosť na žiadosť osoby mimo ordinačných hodín (§ 8 ods. 10) a doplnkové ordinačné hodiny (§ 2a ods. 3) — uhrádza osoba podľa cenníka a nevykazujú sa poisťovni, poskytnutie počas krízovej situácie (§ 49k), zápis osobou určenou podľa § 18 ods. 1 (§ 21 ods. 3 písm. i) a oprava zápisu so zachovaním pôvodného znenia.
              </p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Hemodialýza &amp; Predpis</h3>
              <p className="text-foreground-2 text-sm leading-relaxed">
                Dialyzačné predpisy a záznamy (HD a hemodiafiltrácia) vrátane dialyzačnej vizity, osobitných komentárov aj po overení, opravy záznamu so zachovaním predchádzajúcich znení, zrušenia záznamu s nahradením a zachovaním pôvodných znení (§ 21 ods. 1 a 2), evidencie sedení s napojením, ukončením a zrušením, spôsobu napojenia, kanylácie AVF, metódy MEL a typu substitúcie, sprievodca zaradením do programu vrátane preddialyzačného sérologického skríningu (HBsAg, anti-HCV, anti-HIV), register cievnych prístupov vrátane prvého použitia a znovuotvorenia, samostatný modul Prístroje (technik a správca) so stavom, umiestnením, sérológiou, účelom a vyhradením a kartou prístroja (§ 79 ods. 1 písm. d: výrobné číslo, deň uvedenia do prevádzky, posledná odborná prehliadka), dáta z monitorov Nexadia, serologický status podľa § 19 ods. 2 písm. g) na pridelenie prístroja a prevádzkové určenie vrátane vyhradenia pre akútne stavy, hosťovské ošetrenia, spotrebný materiál, overenie záznamu podpismi, revízie a zaškolenia na prístrojoch a mesačné kontroly adekvátnosti, anémie a fosfo-kalciového metabolizmu.
              </p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Peritoneálna Dialýza (PD)</h3>
              <p className="text-foreground-2 text-sm leading-relaxed">
                Program PD (CAPD a APD), predpisy, vyšetrenie PD, záznamy výmen, cyklovač, použité roztoky, PET a Kt/V, bilancia tekutín, ošetrovanie exit-site, liečba peritonitídy a komplikácií, zaškolenie pacienta, zaradenie do programu a zrušenie záznamu s nahradením.
              </p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Kalendár &amp; Harmonogram</h3>
              <p className="text-foreground-2 text-sm leading-relaxed">
                Kalendár ambulancie a dialyzačných smien, dnešné termíny, čakajúce ošetrenia, denný rozpis, správa objednávok (osobne, telefonicky, národný objednávací systém NCZI aj objednávací systém poskytovateľa) vrátane dňa objednania a lehoty 20 dní (§ 2a ods. 2) a súhrn na odovzdanie služby.
              </p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Laboratórne Výsledky</h3>
              <p className="text-foreground-2 text-sm leading-relaxed">
                Trendová matica výsledkov, žiadanky na SVLZ ako súčasť dokumentácie (§ 19 ods. 2 písm. c) s identifikátormi žiadanky a vzorky pri prijatí laboratóriom (§ 19a ods. 2) — žiadanku môže na základe indikácie lekára vytvoriť aj sestra (§ 19a ods. 1) — aj prehľadom už zapísaných žiadaniek a výsledkov (§ 19a ods. 3) a nevybavených žiadaniek, zápis odberových panelov s evidenciou pôvodu (listinný výsledkový list, elektronický záznam SVLZ, rozhranie laboratória) vrátane dohody, že listinná podoba sa nevyhotoví (§ 8 ods. 9), referenčné rozsahy a korigované hodnoty.
              </p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Moje Zoznamy &amp; Štatistiky</h3>
              <p className="text-foreground-2 text-sm leading-relaxed">
                Vlastné zoznamy diagnóz a výkonov, denný súhrn ambulancie a dialýzy, evidencie vyžiadanej dokumentácie, pracovných neschopností, žiadostí o nápravu a nevybavených žiadaniek na SVLZ, kniha eliminačných výkonov s evidenciou napojenia, prehľad lehôt uchovávania dokumentácie, indikátory kvality (§ 79 ods. 1 písm. t, § 79a ods. 1 písm. b), objednania a lehota poskytnutia vrátane pôvodu objednania, dňa objednania a počtu dní (§ 2a ods. 2, § 79 ods. 1 písm. am) až ao), podklady pre revíznu kontrolu poisťovne, dozor orgánu a klinický audit (§ 9c ods. 1 písm. d, § 79 ods. 1 písm. q, § 79a ods. 1 písm. d) vrátane podkladov ku kontrole očkovania RÚVZ (§ 14 ods. 1 vyhl. 585/2008) a tlač registrov.
              </p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Vykazovanie poisťovniam</h3>
              <p className="text-foreground-2 text-sm leading-relaxed">
                Dávky 751a (ambulancia a dialyzačný stacionár) s pre-flight kontrolou pred uzavretím a 799a, dispenzárne dávky, reklamácie dávok vrátane opravnej dávky O a revíznych nálezov, eFaktúra UBL 2.1, cenník výkonov, doklady o výške úhrady z cenníka platného v deň úhrady (§ 79 ods. 1 písm. o a g), služby súvisiace so starostlivosťou vrátane výpisu dokumentácie (§ 13 písm. f), posudku (§ 13 písm. e) a spracúvania údajov pre poistenie (§ 13 písm. c), oznámenia o platenej starostlivosti v doplnkových hodinách (§ 2a) a domácej na žiadosť osoby (§ 8 ods. 10, § 79 ods. 1 písm. ap) a poučenia o úhrade podľa cenníka (§ 19 ods. 7), potvrdenie neodkladnej starostlivosti vrátane žiadosti poisťovni, či išlo o neodkladnú starostlivosť (§ 79a ods. 1 písm. a a ods. 2), poistenci EÚ aj mimo EÚ, poistenci bez verejného poistenia (I/J/K) vrátane dokladu totožnosti (§ 79b), lieky a pomôcky podľa pôvodu (§ 79a ods. 1 písm. e) vrátane odchýlok pri podaní z vlastných zásob, oznámenia poisťovni (režim, alkohol, úrazy a kódy náhrady 01 až 04 alebo 06) k poslednému dňu mesiaca (§ 79a ods. 1 písm. c) vrátane odpovede poisťovne, údaje pre ministerstvo zdravotníctva (§ 79 ods. 1 písm. zh) a mesačný výkaz pre Sociálnu poisťovňu (§ 233 ods. 2 písm. c).
              </p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Prevádzka dialýzy</h3>
              <p className="text-foreground-2 text-sm leading-relaxed">
                Dialyzačné zmeny, miestnosti a pozície s evidenciou obsadenosti, týždenný rozpis personálu, zoznam pracovníkov vrátane oznámení kódov a registrácie kraju do 14 dní (§ 79 ods. 18), registrácie v komore, identifikátora NRZP s dňom oznámenia pracovníkovi (§ 79 ods. 1 písm. zm), osoby určenej podľa § 18 ods. 1, preukazu ePZP (aktívny, stratený, odcudzený, zničený, nahradený) s oznámením národnému centru (§ 80 ods. 1 písm. h) a exportu pracovníkov do 65 rokov na vyžiadanie kraja (§ 79 ods. 1 písm. bh), očkovania s kategóriou podľa § 5 ods. 1 vyhl. 585/2008, kvalifikácie zapísané presne podľa dokladu vrátane starších tvarov (§ 79 ods. 15, § 83c ods. 8, § 83d ods. 1) a sústavné vzdelávanie s evidenciou aktivít a hodnotení komory doručených zamestnávateľovi (§ 42, § 42 ods. 7, § 80 ods. 1 písm. b) — kredity sa nesčítavajú do záveru o splnení, register epidemiologicky závažných skutočností a nežiaducich udalostí vrátane interného systému hodnotenia bezpečnosti pacienta (§ 79 ods. 1 písm. ba/bb, § 9b), druhu podľa § 9b ods. 2 a prijatých opatrení (§ 9b ods. 3), zmluvy s poisťovňami s evidenciou na viditeľnom mieste (§ 79 ods. 1 písm. f), kniha prehliadok mŕtvych podľa rozpisu úradu pre dohľad (§ 79 ods. 1 písm. w), písomná forma dokumentácie (§ 20 ods. 2) pri výpadku IS poskytovateľa alebo NZIS, keď to vyžaduje zákon, alebo pri záznamoch nad rámec EZK, písomne dokumentovaný systém kvality (§ 9 ods. 1 a 2) vrátane preukázateľného oboznámenia pracovníkov, evidencia záložných kópií (§ 20 ods. 5), klinické audity vrátane podrobenia sa auditu (§ 79 ods. 1 písm. bc, § 9d), rozpis ordinačných hodín so schválením kraja (§ 79 ods. 1 písm. z), karta zariadenia vrátane náhradného odborného zástupcu, vykazovacie jednotky a personálne zabezpečenie, označenie zariadenia, informačný list a informácie na webové sídlo o možnostiach ošetrenia, kvalite, bezpečnosti a cenách (§ 79 ods. 1 písm. zj), poistenie zodpovednosti za škodu po celý čas oprávnenia (§ 79 ods. 1 písm. s), oznámenia zmien údajov v povolení bezodkladne (§ 79 ods. 11, § 16, § 17 a § 17e), oznamy o zastupovaní, pozastavení a skončení (§ 79 ods. 1 písm. j) a k) a protokoly odovzdania dokumentácie vrátane odovzdania jednotlivému pacientovi (§ 23 ods. 3), priameho odovzdania inému poskytovateľovi (§ 23 ods. 9) a úschovy samosprávnym krajom (§ 23 ods. 4 a 5).
              </p>
            </div>

            <div className="bg-surface-2 p-6 rounded-lg shadow-brand hover:shadow-brand-lg transition-shadow border border-border">
              <div className="w-12 h-12 bg-brand rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-text" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Audit &amp; Bezpečnosť</h3>
              <p className="text-foreground-2 text-sm leading-relaxed">
                Append-only audit log, evidencia prístupov k pacientskym záznamom vrátane filtra pokusov o neoprávnený prístup (§ 22 ods. 6), lehota uchovávania dokumentácie a prihlásenie cez Keycloak (OIDC / ePZP).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4 bg-gradient-to-r from-brand-strong to-brand text-brand-text">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-surface text-brand-strong mb-4 shadow-sm">
            Živé demo prostredie {DEMO_VERSION}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text mb-6">
            Vyskúšajte Arenibus v praxi
          </h2>
          <p className="text-lg md:text-xl text-brand-text mb-8 max-w-2xl mx-auto">
            Plne funkčná verzia pre nefrologickú ambulanciu a dialýzu. Všetky fiktívne dáta sa automaticky obnovujú každú noc o 03:00.
          </p>

          {/* Demo access — passwords on request. Solid surface cards so small text meets WCAG AA. */}
          <div className="bg-surface rounded-xl p-6 mb-8 border border-border max-w-2xl mx-auto text-left shadow-lg">
            <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
              Prístup do demo prostredia
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-5">
              <div className="bg-surface-2 p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-foreground text-sm">Rola: LEKÁR</span>
                  <span className="text-xs bg-brand-soft text-brand-strong px-2 py-0.5 rounded font-medium">demo-lekar</span>
                </div>
                <div className="text-xs space-y-1.5 text-foreground-2">
                  <p>
                    <span>Prihlasovacie meno:</span>{" "}
                    <code className="bg-surface-3 px-1.5 py-0.5 rounded font-mono text-foreground">demo-lekar</code>
                  </p>
                  <p><span>Heslo:</span> na vyžiadanie</p>
                </div>
              </div>
              <div className="bg-surface-2 p-4 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-foreground text-sm">Rola: SESTRA</span>
                  <span className="text-xs bg-brand-soft text-brand-strong px-2 py-0.5 rounded font-medium">demo-sestra</span>
                </div>
                <div className="text-xs space-y-1.5 text-foreground-2">
                  <p>
                    <span>Prihlasovacie meno:</span>{" "}
                    <code className="bg-surface-3 px-1.5 py-0.5 rounded font-mono text-foreground">demo-sestra</code>
                  </p>
                  <p><span>Heslo:</span> na vyžiadanie</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-foreground-2 text-center mb-4">
              Demo heslá nie sú verejné. Pošlite žiadosť na{" "}
              <a
                href={DEMO_ACCESS_MAILTO}
                className="underline font-medium text-brand hover:text-brand-strong transition-colors"
              >
                arenibus@nephroctor.com
              </a>
              {" "}a zašleme vám ich.
            </p>
            <a
              href={DEMO_ACCESS_MAILTO}
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-brand text-brand-text rounded-lg font-semibold hover:bg-brand-strong transition-colors"
            >
              Požiadať o demo heslo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          <a
            href="https://demo.arenibus.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 bg-surface text-brand rounded-lg font-semibold hover:bg-surface-2 transition-colors shadow-brand-lg text-lg"
          >
            Spustiť Demo Verziu (demo.arenibus.com)
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <p className="text-brand-text mt-4 text-sm max-w-xl mx-auto">
            Prihlásenie v spustenom deme prebieha cez ePZP / OIDC (Keycloak).
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Kontaktujte Nás
          </h2>
          <div className="bg-surface-2 p-8 rounded-lg shadow-brand border border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Máte otázky?</h3>
                <p className="text-foreground-2 mb-6">
                  Kontaktujte nás pre viac informácií o Arenibus systéme, cenách alebo demonštrácii.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-brand mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:arenibus@polascin.net" className="text-foreground-2 hover:text-brand transition-colors">arenibus@polascin.net</a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Pošlite správu</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      <SiteFooter />
    </div>
    </>
  );
}