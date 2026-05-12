"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import { GlassFilter } from '@/components/ui/liquid-glass';

export default function SolucionesPage() {
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
      {/* Simple Nav Back */}
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-hero-dark relative overflow-hidden">
        <div className="vertical-lines"></div>
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 text-center reveal-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[1rem] bg-white/5 border border-white/10 text-blue-300 text-sm font-bold mb-8 uppercase tracking-widest">
                Productos Propios
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white tracking-tighter">
                Soluciones que ya <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">funcionan</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
                Sistemas listos para usar que resuelven problemas reales de negocios como el tuyo. Sin esperar meses de desarrollo. Conectas, pruebas, y empiezas a ahorrar tiempo.
            </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 md:py-32 bg-[#f4f7fc] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0071e30a_1px,transparent_1px),linear-gradient(to_bottom,#0071e30a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 reveal-on-scroll">
                {/* Mocia */}
                <div className="group relative bg-white border border-slate-200 hover:border-blue-200 rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,113,227,0.08)] overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-[40px] group-hover:bg-blue-500/10 transition-colors"></div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-[#0071e3] flex items-center justify-center shadow-lg mb-8 relative z-10">
                        <span className="material-symbols-outlined text-white text-2xl">account_balance_wallet</span>
                    </div>
                    <div className="mb-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Para Prestamistas</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-4 tracking-tight">Mocia — Cobranza con IA</h2>
                    <p className="text-slate-600 leading-relaxed font-medium mb-4 flex-1 text-[17px]">
                        El sistema le manda recordatorios automáticos a tus clientes por WhatsApp. La IA adapta el tono: si es la primera vez, va suave; si ya se pasó de la fecha, va más directo.
                    </p>
                    <p className="text-slate-800 font-bold mb-8">
                        <strong className="text-blue-600">Resultado:</strong> Recuperas tu dinero más rápido sin tener que enviar un solo mensaje manualmente.
                    </p>
                    <a href="https://wa.me/573223663275?text=Me%20interesa%20Mocia" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#0071e3] font-bold hover:text-blue-700 transition-colors group/link w-fit text-lg">
                        Quiero Mocia para mi negocio <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                </div>

                {/* QR Menu */}
                <div className="group relative bg-white border border-slate-200 hover:border-cyan-200 rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(6,182,212,0.08)] overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/5 rounded-full blur-[40px] group-hover:bg-cyan-500/10 transition-colors"></div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg mb-8 relative z-10">
                        <span className="material-symbols-outlined text-white text-2xl">qr_code_scanner</span>
                    </div>
                    <div className="mb-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Para Restaurantes</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-4 tracking-tight">QR Menu System</h2>
                    <p className="text-slate-600 leading-relaxed font-medium mb-4 flex-1 text-[17px]">
                        El cliente escanea un QR en la mesa, elige lo que quiere del menú digital, y el pedido llega directo a cocina o caja. Sin mesero de por medio, sin errores de anotación.
                    </p>
                    <p className="text-slate-800 font-bold mb-8">
                        <strong className="text-cyan-600">Resultado:</strong> Atendés más mesas con menos personal y cero confusiones.
                    </p>
                    <a href="https://wa.me/573223663275?text=Me%20interesa%20QR%20Menu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-600 font-bold hover:text-cyan-700 transition-colors group/link w-fit text-lg">
                        Quiero QR Menu <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                </div>

                {/* CRM Simple */}
                <div className="group relative bg-white border border-slate-200 hover:border-indigo-200 rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)] overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/5 rounded-full blur-[40px] group-hover:bg-indigo-500/10 transition-colors"></div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg mb-8 relative z-10">
                        <span className="material-symbols-outlined text-white text-2xl">insights</span>
                    </div>
                    <div className="mb-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Para Tiendas y Retail</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-4 tracking-tight">CRM Simple</h2>
                    <p className="text-slate-600 leading-relaxed font-medium mb-4 flex-1 text-[17px]">
                        El sistema registra automáticamente quién te compra, qué compra y cuándo fue la última vez. Cuando pasa tiempo sin volver, le manda una promo por WhatsApp para que regrese.
                    </p>
                    <p className="text-slate-800 font-bold mb-8">
                        <strong className="text-indigo-600">Resultado:</strong> Sabes exactamente quiénes son tus mejores clientes y los haces volver sin esfuerzo.
                    </p>
                    <a href="https://wa.me/573223663275?text=Me%20interesa%20CRM%20Simple" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors group/link w-fit text-lg">
                        Quiero implementar CRM <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                </div>

                {/* Reservas */}
                <div className="group relative bg-white border border-slate-200 hover:border-teal-200 rounded-[2rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(20,184,166,0.08)] overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/5 rounded-full blur-[40px] group-hover:bg-teal-500/10 transition-colors"></div>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-lg mb-8 relative z-10">
                        <span className="material-symbols-outlined text-white text-2xl">event_available</span>
                    </div>
                    <div className="mb-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Para Clínicas y Barberías</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] mb-4 tracking-tight">Agendamiento Automático</h2>
                    <p className="text-slate-600 leading-relaxed font-medium mb-4 flex-1 text-[17px]">
                        Tus clientes reservan cita por WhatsApp sin que nadie conteste el teléfono. El sistema confirma la cita y les manda un recordatorio horas antes para que no falten.
                    </p>
                    <p className="text-slate-800 font-bold mb-8">
                        <strong className="text-teal-600">Resultado:</strong> Agenda llena sin contestar llamadas. Cero citas olvidadas.
                    </p>
                    <a href="https://wa.me/573223663275?text=Me%20interesa%20Reservas" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-teal-600 font-bold hover:text-teal-700 transition-colors group/link w-fit text-lg">
                        Quiero automatizar reservas <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                    </a>
                </div>
            </div>

            {/* CTA Bottom */}
            <div className="text-center mt-16 reveal-on-scroll">
                <p className="text-slate-600 font-medium mb-6 text-lg">¿No encontrás lo que necesitás? Contame tu problema y te armo algo a medida.</p>
                <a href="https://wa.me/573223663275" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#10b981] hover:bg-[#059669] text-white px-8 py-4 rounded-full text-lg font-bold shadow-[0_8px_30px_rgba(16,185,129,0.4)] hover:scale-[1.02] active:scale-95 transition-all">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                    Escribime por WhatsApp
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
