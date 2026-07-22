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
