import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jonathan.Ai — Socio Estratégico Digital",
  description: "Infraestructuras de automatización e inteligencia artificial.",
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
      <body className={`${inter.className} font-display antialiased overflow-x-hidden selection:bg-brand-light selection:text-white bg-slate-50`}>
        {children}
      </body>
    </html>
  );
}
