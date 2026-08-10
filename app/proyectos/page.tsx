"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { GlassFilter } from '@/components/ui/liquid-glass';

export default function ProyectosPage() {
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
                    <img src="/logo.png" alt="Jonathan Chavez" className="h-8 md:h-10 w-auto" />
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
      <section id="contenido" className="pt-32 pb-16 md:pt-40 md:pb-24 bg-[#0b1121] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 reveal-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[1rem] bg-white/5 border border-white/10 text-blue-300 text-sm font-bold mb-8 uppercase tracking-widest">
                Portafolio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tighter">
                Proyectos <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">reales</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl leading-relaxed">
                Estas son algunas de las soluciones que ya construí y están funcionando. No promesas, sino resultados reales para negocios reales.
            </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 md:py-32 bg-[#0b1121] text-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 reveal-on-scroll">
                {/* Project 1 */}
                <div className="group cursor-pointer">
                    <div className="w-full aspect-[4/3] bg-[#141b2a] rounded-[2rem] mb-6 relative overflow-hidden border border-white/5 group-hover:border-blue-500/30 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0071e3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/30 group-hover:text-white/60 transition-colors">
                            <span className="material-symbols-outlined text-5xl">precision_manufacturing</span>
                            <span className="font-bold text-xl tracking-widest uppercase">Mocia SaaS</span>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">Mocia — Cobranza Inteligente</h3>
                    <p className="text-slate-400 font-medium mb-4">Sistema SaaS que automatiza cobranzas por WhatsApp usando Inteligencia Artificial. Recupera el dinero de los prestamistas sin que tengan que enviar un solo mensaje.</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 text-slate-300 rounded-full border border-white/10">IA</span>
                        <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 text-slate-300 rounded-full border border-white/10">WhatsApp</span>
                        <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 text-slate-300 rounded-full border border-white/10">Supabase</span>
                        <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 text-slate-300 rounded-full border border-white/10">SaaS</span>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="group cursor-pointer">
                    <div className="w-full aspect-[4/3] bg-[#141b2a] rounded-[2rem] mb-6 relative overflow-hidden border border-white/5 group-hover:border-cyan-500/30 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/30 group-hover:text-white/60 transition-colors">
                            <span className="material-symbols-outlined text-5xl">monitoring</span>
                            <span className="font-bold text-xl tracking-widest uppercase">Dashboard App</span>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">Dashboard Financiero</h3>
                    <p className="text-slate-400 font-medium mb-4">Aplicación de finanzas personales con paneles visuales que muestran de un vistazo a dónde se va el dinero y cómo optimizar gastos.</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 text-slate-300 rounded-full border border-white/10">Python</span>
                        <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 text-slate-300 rounded-full border border-white/10">FastAPI</span>
                        <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 text-slate-300 rounded-full border border-white/10">UI/UX</span>
                    </div>
                </div>
            </div>

            <div className="mt-24 mb-12 border-t border-white/10 pt-12">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[1rem] bg-white/5 border border-white/10 text-cyan-300 text-sm font-bold mb-6 uppercase tracking-widest">
                    Complementarios
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-4">
                    Otros Proyectos
                </h2>
                <p className="text-slate-400 text-lg font-medium max-w-xl">
                    Trabajos adicionales enfocados en la atracción visual y posicionamiento de marca.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 reveal-on-scroll">
                {/* Project 4 - Video Marketing */}
                <div className="group cursor-pointer">
                    <div className="w-full aspect-[4/3] bg-[#141b2a] rounded-[2rem] mb-6 relative overflow-hidden border border-white/5 group-hover:border-indigo-500/30 transition-colors">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/30 group-hover:text-white/60 transition-colors">
                            <span className="material-symbols-outlined text-5xl">movie_edit</span>
                            <span className="font-bold text-xl tracking-widest uppercase">Video Marketing</span>
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">Reel Viral — Marketing Digital</h3>
                    <p className="text-slate-400 font-medium mb-4">Video editado profesionalmente con alto engagement, diseñado para captar la atención en los primeros 3 segundos.</p>
                    <div className="flex flex-wrap gap-2">
                        <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 text-slate-300 rounded-full border border-white/10">DaVinci Resolve</span>
                        <span className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 bg-white/5 text-slate-300 rounded-full border border-white/10">Edición</span>
                    </div>
                </div>
            </div>

            {/* CTA Bottom */}
            <div className="text-center mt-16 reveal-on-scroll">
                <p className="text-slate-400 font-medium mb-6 text-lg">¿Tienes un proyecto similar? Hablemos.</p>
                <a href="https://wa.me/573223663275" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#10b981] hover:bg-[#059669] text-white px-8 py-4 rounded-full text-lg font-bold shadow-[0_8px_30px_rgba(16,185,129,0.4)] hover:scale-[1.02] active:scale-95 transition-all">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    Escríbeme por WhatsApp
                </a>
            </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/573223663275" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 group">
        <span className="bg-[#0b1121]/90 backdrop-blur-md border border-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          ¿Hablamos?
        </span>
        <span className="w-14 h-14 md:w-16 md:h-16 bg-[#10b981] hover:bg-[#059669] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(16,185,129,0.4)] hover:scale-110 active:scale-95 transition-all animate-[bounce_2s_ease-in-out_infinite]">
          <svg className="w-7 h-7 md:w-8 md:h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
          </svg>
        </span>
      </a>
    </>
  );
}
