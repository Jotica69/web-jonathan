import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Jonathan Chávez — Automatizaciones con IA",
  description: "Especialista en automatizaciones y ecosistemas de IA en Barrancabermeja. Ahorrá 20+ horas semanales con WhatsApp y datos centralizados.",
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
      <body className={`${spaceGrotesk.variable} ${instrumentSerif.variable} font-display antialiased overflow-x-hidden bg-[var(--surface-ice)] text-[var(--text-ink)]`}>
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-slate-900 focus:shadow-2xl">
          Saltar al contenido
        </a>
        {children}
      </body>
    </html>
  );
}
