import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

const siteUrl = "https://jonathan-data.vercel.app";

export const metadata: Metadata = {
  title: "Jonathan Chávez — Automatizaciones con IA",
  description: "Especialista en automatizaciones y ecosistemas de IA en Barrancabermeja. Ahorra 20+ horas semanales con WhatsApp y datos centralizados.",
  metadataBase: new URL(siteUrl),
  icons: { icon: "/logo.png" },
  openGraph: {
    title: "Jonathan Chávez — Automatizaciones con IA",
    description: "Especialista en automatizaciones y ecosistemas de IA en Barrancabermeja. Ahorra 20+ horas semanales con WhatsApp y datos centralizados.",
    url: siteUrl,
    siteName: "Jonathan Chávez",
    locale: "es_CO",
    type: "website",
    images: [{ url: "/HeroCols.png", width: 1200, height: 630, alt: "Jonathan Chávez — Automatizaciones con IA" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jonathan Chávez — Automatizaciones con IA",
    description: "Especialista en automatizaciones y ecosistemas de IA en Barrancabermeja. Ahorra 20+ horas semanales con WhatsApp y datos centralizados.",
    images: ["/HeroCols.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL,GRAD,opsz@100..700,0..1,-50..200,24..48" rel="stylesheet" />
      </head>
      <body className={`${sora.className} font-display antialiased overflow-x-hidden selection:bg-brand-light selection:text-white bg-slate-50`}>
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-slate-900 focus:shadow-xl">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
