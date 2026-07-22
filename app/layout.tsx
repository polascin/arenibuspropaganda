import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arenibus - Nefrologický Informačný Systém",
  description: "Moderný .NET systém pre nefrologickú ambulanciu a dialyzačné stredisko, integrovaný s ezdravotníctvom. Spravujte pacientov, návštevy, dialyzačný predpis a laboratórne výsledky efektívne s Arenibus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
