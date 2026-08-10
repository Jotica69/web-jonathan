import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Jonathan Chávez — Automatizaciones con IA",
  description: "Especialista en automatizaciones y ecosistemas de IA en Barrancabermeja. Ahorra 20+ horas semanales con WhatsApp y datos centralizados.",
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
        {children}
      </body>
    </html>
  );
}
