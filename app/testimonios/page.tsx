"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { GlassFilter } from '@/components/ui/liquid-glass';

export default function TestimoniosPage() {
  useEffect(() => {
    const observerOptions = { root: null, rootMargin: '0px 0px -50px 0px', threshold: 0.15 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, observerOptions);
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <GlassFilter />
      {/* Nav */}
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 glass-dark !bg-[#0b1121]/70 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl">
        <div className="px-5 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 md:h-20 items-center">
                <Link href="/" className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105">
                    <span className="material-symbols-outlined text-brand-light text-xl md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>widgets</span>
                    <span className="font-bold text-lg md:text-xl tracking-tight text-white">Jonathan.Ai</span>
                </Link>
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-slate-300 hover:text-white font-medium transition-colors text-sm flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">arrow_back</span> Volver al inicio
                    </Link>
                    <a className="hidden md:inline-flex bg-green-600 text-white hover:bg-green-500 px-5 py-2.5 rounded-full text-sm font-bold shadow-[0_8px_20px_rgba(5,150,105,0.3)] transition-all hover:scale-105" href="https://wa.me/573223663275" target="_blank" rel="noopener noreferrer">Consultar por WhatsApp</a>
                </div>
            </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#0b1121] relative overflow-hidden min-h-screen flex flex-col justify-center">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 text-center reveal-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[1rem] bg-white/5 border border-white/10 text-blue-300 text-sm font-bold mb-8 uppercase tracking-widest">
                Testimonios
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tighter">
                Lo que dicen mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">clientes</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed mb-12">
                Próximamente encontrarás aquí las experiencias reales de empresarios locales que ya automatizaron sus procesos y recuperaron su tiempo.
            </p>
            
            <div className="p-12 border border-white/10 rounded-[2rem] bg-white/5 backdrop-blur-md inline-block">
                <span className="material-symbols-outlined text-6xl text-slate-500 mb-4">hourglass_empty</span>
                <h3 className="text-xl font-bold text-white mb-2">Recolectando testimonios...</h3>
                <p className="text-slate-400">Esta sección está en construcción.</p>
            </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/573223663275" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 group">
        <span className="bg-white text-slate-700 text-sm font-semibold px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          ¿Hablamos?
        </span>
        <span className="w-14 h-14 md:w-16 md:h-16 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(5,150,105,0.4)] hover:scale-110 active:scale-95 transition-all animate-[bounce_2s_ease-in-out_infinite]">
          <span className="material-symbols-outlined text-2xl md:text-3xl">chat</span>
        </span>
      </a>
    </>
  );
}
