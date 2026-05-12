"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { GlassEffect, GlassFilter } from '@/components/ui/liquid-glass';
import { MessageSquare, Lightbulb, Rocket, TrendingUp } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.15
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <GlassFilter />
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 glass-dark !bg-[#0b1121]/70 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl transition-all duration-300">
        <div className="px-5 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 md:h-20 items-center">
                <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer transition-transform hover:scale-105">
                    <Image src="/logo.png" alt="Jonathan Chavez Logo" width={32} height={32} className="object-contain" />
                    <span className="font-bold text-lg md:text-xl tracking-tight text-white">Jonathan Chavez</span>
                </div>
                <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
                    <a className="text-slate-300 hover:text-white font-medium transition-colors text-sm" href="#autoridad">Mis Servicios</a>
                    <a className="text-slate-300 hover:text-white font-medium transition-colors text-sm" href="/soluciones">Soluciones</a>
                    <a className="text-slate-300 hover:text-white font-medium transition-colors text-sm" href="/proyectos">Proyectos</a>
                    <a className="text-slate-300 hover:text-white font-medium transition-colors text-sm" href="/testimonios">Testimonios</a>
                    <a className="text-slate-300 hover:text-white font-medium transition-colors text-sm" href="#sobre-mi">Sobre Mí</a>
                </div>
                <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                    <a className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white border border-emerald-500/20 px-5 lg:px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.15)] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all hover:scale-105 flex items-center gap-2" href="https://wa.me/573223663275" target="_blank" rel="noopener noreferrer">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                        Escribime
                    </a>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none p-2 rounded-full hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-xl">menu</span>
                    </button>
                </div>
            </div>
        </div>
        
        {mobileMenuOpen && (
            <div className="md:hidden glass-dark absolute top-full mt-4 w-full left-0 rounded-2xl border border-white/10 shadow-2xl overflow-hidden p-2">
                <div className="px-2 pt-2 pb-4 space-y-1 bg-[#0b1121]/90 rounded-xl backdrop-blur-2xl">
                    <a onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors" href="#autoridad">Mis Servicios</a>
                    <a onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors" href="/soluciones">Soluciones</a>
                    <a onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors" href="/proyectos">Proyectos</a>
                    <a onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors" href="/testimonios">Testimonios</a>
                    <a onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors" href="#sobre-mi">Sobre Mí</a>
                    <a onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2 w-full mt-4 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white border border-emerald-500/20 px-5 py-3 rounded-xl text-sm font-bold shadow-md transition-all" href="https://wa.me/573223663275" target="_blank" rel="noopener noreferrer">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                        Escribime por WhatsApp
                    </a>
                </div>
            </div>
        )}
      </nav>

      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 bg-hero-dark overflow-hidden text-left z-0 flex flex-col justify-center min-h-[90vh] lg:min-h-screen">
        <div className="vertical-lines"></div>
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] border-t-2 border-dashed border-white/10 rounded-[100%] pointer-events-none opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 mt-12 md:mt-16">
            
            {/* TEXT COLUMN */}
            <div className="flex-1 max-w-3xl reveal-on-scroll z-20 relative">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[1rem] bg-white/5 border border-white/10 text-blue-300 text-sm font-semibold mb-8 backdrop-blur-md shadow-lg ring-1 ring-white/5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Barrancabermeja, Santander
                </div>
                <h1 className="text-[2.5rem] leading-[1.1] sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold mb-6 text-white tracking-tight sm:leading-[1.08]">
                    Automatizo negocios{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 inline-block">
                        con IA en Barrancabermeja
                    </span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-300 font-medium mb-8 leading-relaxed max-w-2xl">
                    Ahorras 20+ horas por semana automatizando procesos manuales en tu negocio. En menos de 15 días.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://wa.me/573223663275" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white border border-emerald-500/20 px-8 py-4 rounded-full text-lg font-bold shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:scale-[1.02] active:scale-95 transition-all group">
                        <svg className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                        <span>Escribime por WhatsApp</span>
                    </a>
                    <a href="/proyectos" className="inline-flex items-center justify-center gap-2 text-slate-300 hover:text-white font-semibold px-6 py-4 rounded-full border border-white/10 hover:border-white/20 transition-all text-base hover:bg-white/5">
                        Ver proyectos reales <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </a>
                </div>
            </div>

            {/* IMAGE COLUMN */}
            <div className="flex-1 w-full relative reveal-on-scroll flex justify-center lg:justify-end mt-10 lg:mt-0">
                {/* Splendor Azul Behind Image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#0071e3]/40 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-cyan-400/30 rounded-full blur-[80px] pointer-events-none z-0"></div>

                <div className="relative z-10 w-full max-w-[600px] aspect-square md:aspect-[4/5] lg:aspect-auto lg:h-[650px]" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)' }}>
                    <Image 
                        src="/HeroCols.png"
                        alt="Infraestructuras de IA"
                        fill
                        className="object-contain lg:object-cover object-bottom transition-transform duration-1000 hover:scale-[1.02]"
                        priority
                    />
                </div>
            </div>

        </div>
      </section>

      {/* 2. EL EFECTO DIAGNÓSTICO */}
      <section id="features" className="relative pt-32 pb-24 overflow-hidden bg-[#f4f7fc]">
        {/* Dynamic Blue Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0071e31a_1px,transparent_1px),linear-gradient(to_bottom,#0071e31a_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 mix-blend-multiply pointer-events-none"></div>
        
        {/* Animated Blue/Purple Glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#9B51E0]/10 rounded-full blur-[100px] pointer-events-none animate-blob animation-delay-2000"></div>
        <div className="absolute top-[40%] left-[20%] w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none animate-blob animation-delay-4000"></div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-20 reveal-on-scroll">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-8 text-[#1d1d1f] tracking-tighter leading-tight">
                    Lo que hoy haces a mano, <br className="hidden md:block" />mañana se hace solo.
                </h2>
                <div className="text-lg md:text-xl text-[#0071e3] font-medium leading-relaxed space-y-4 max-w-3xl mx-auto">
                    <p className="text-blue-900/60 text-base md:text-lg">Las tareas manuales están frenando tu crecimiento. Al implementar sistemas de Inteligencia Artificial, eliminas los cuellos de botella operativos y liberas tiempo para enfocarte en lo que realmente importa: vender y escalar.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
                {/* Tall Card 1: Pérdida por inacción */}
                <div className="reveal-on-scroll">
                    <div className="relative h-full flex flex-col p-10 md:p-12 bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/20 shadow-[0_20px_40px_rgba(0,113,227,0.05)] hover:bg-white/10 transition-all duration-500 group overflow-hidden">
                        {/* Background glowing number */}
                        <div className="absolute -top-10 -right-4 text-[150px] font-black text-black/5 pointer-events-none group-hover:scale-110 transition-transform duration-700">01</div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px] group-hover:bg-blue-400/40 transition-all duration-700"></div>
                        
                        <div className="w-16 h-16 rounded-[1.2rem] bg-gradient-to-br from-blue-100 to-white flex items-center justify-center shadow-lg border border-white/50 mb-auto relative z-10">
                            <span className="material-symbols-outlined text-blue-600 text-3xl">timer_off</span>
                        </div>
                        
                        <div className="mt-16 relative z-10">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-5 text-[#1d1d1f] tracking-tight">Tiempo que no vuelve</h3>
                            <p className="text-slate-600 text-base lg:text-[17px] leading-relaxed font-medium">Cada tarea que sigues haciendo a mano es tiempo valioso que <span className="text-[#0071e3] font-bold">podrías estar usando para vender más</span>. Y mientras tanto, la competencia ya automatizó sus procesos.</p>
                        </div>
                    </div>
                </div>

                {/* Tall Card 2: Ceguera de datos */}
                <div className="reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
                    <div className="relative h-full flex flex-col p-10 md:p-12 bg-gradient-to-br from-slate-900 via-[#0b1121] to-blue-950 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-[0_20px_40px_rgba(0,113,227,0.2)] hover:-translate-y-2 transition-transform duration-500 group overflow-hidden">
                        <div className="absolute -top-10 -right-4 text-[150px] font-black text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-700">02</div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px] group-hover:bg-cyan-400/20 transition-all duration-700"></div>
                        
                        <div className="w-16 h-16 rounded-[1.2rem] bg-white/5 flex items-center justify-center shadow-lg border border-white/10 mb-auto relative z-10 backdrop-blur-md">
                            <span className="material-symbols-outlined text-cyan-300 text-3xl">visibility_off</span>
                        </div>
                        
                        <div className="mt-16 relative z-10">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-5 text-white tracking-tight">Decisiones a ciegas</h3>
                            <p className="text-slate-300 text-base lg:text-[17px] leading-relaxed font-medium">Si no sabes cuál es tu producto estrella, cuánto vendiste esta semana o cuántos clientes perdiste, estás adivinando. Y adivinar es la forma más cara de gestionar un negocio.</p>
                        </div>
                    </div>
                </div>

                {/* Tall Card 3: La pregunta incómoda */}
                <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                    <div className="relative h-full flex flex-col p-10 md:p-12 bg-[#0b1121]/80 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-[0_20px_40px_rgba(0,113,227,0.15)] hover:-translate-y-2 transition-transform duration-500 group overflow-hidden">
                        <div className="absolute -top-10 -right-4 text-[150px] font-black text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-700">03</div>
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none"></div>
                        
                        <div className="w-16 h-16 rounded-[1.2rem] bg-white/5 flex items-center justify-center shadow-lg border border-white/10 mb-auto relative z-10 backdrop-blur-md">
                            <span className="material-symbols-outlined text-blue-400 text-3xl">account_tree</span>
                        </div>
                        
                        <div className="mt-16 relative z-10">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-5 text-white tracking-tight">Tu negocio depende de ti</h3>
                            <p className="text-slate-300 text-base lg:text-[17px] leading-relaxed font-medium">Si tú no estás presente, ¿tu negocio sigue funcionando? Si la respuesta es no, no tienes una empresa estructurada, tienes un empleo que tú mismo te creaste.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 3. AUTORIDAD IMPLÍCITA */}
      <section id="autoridad" className="py-24 md:py-32 overflow-hidden bg-[#f4f7fc] relative">
        {/* Dynamic Glowing Beams Background */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-gradient-to-br from-[#0071e3]/20 to-cyan-400/10 rounded-full blur-[100px] pointer-events-none animate-pulse mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0071e31a_1px,transparent_1px),linear-gradient(to_bottom,#0071e31a_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.35] mix-blend-multiply pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
            
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-24">
                {/* Content Column (Title & Top Description) */}
                <div className="flex-1 max-w-2xl reveal-on-scroll relative z-10">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl lg:leading-[1.1] font-semibold mb-8 text-[#1d1d1f] tracking-tighter">
                        Operación sin esfuerzo. <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0071e3] to-cyan-500">Sistemas que trabajan por ti.</span>
                    </h2>
                    
                    {/* Graphical element: Modern badge */}
                    <div className="mt-10 flex items-center gap-4 bg-white/50 backdrop-blur-md border border-blue-100/60 p-2 pr-6 rounded-full w-fit shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-inner">
                             <span className="material-symbols-outlined text-white text-sm md:text-base">verified_user</span>
                        </div>
                        <span className="text-blue-900 font-bold text-xs md:text-sm tracking-widest uppercase">Resultados desde la primera semana</span>
                    </div>
                </div>

                {/* Image Column */}
                <div className="flex-1 w-full relative reveal-on-scroll flex justify-center items-center mt-8 lg:mt-0">
                    {/* Glowing Splendor Azul */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] max-w-[600px] max-h-[600px] bg-[#0071e3]/20 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-multiply animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] max-w-[400px] max-h-[400px] bg-cyan-400/20 rounded-full blur-[80px] pointer-events-none z-0"></div>
                    
                    {/* The Image Wrapper */}
                    <div className="relative z-10 w-full max-w-[420px] aspect-[4/5] drop-shadow-[0_20px_50px_rgba(0,113,227,0.25)]">
                        <Image 
                            src="/PeonBillete.png"
                            alt="El fin de su preocupación operativa"
                            fill
                            className="object-contain transition-transform duration-1000 hover:scale-[1.03]"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Row: Pilares Grid */}
            <div className="reveal-on-scroll">
                <div className="flex flex-col items-center lg:items-start mb-12">
                     <h3 className="text-xl md:text-2xl font-bold tracking-widest text-[#0071e3] uppercase flex items-center gap-4">
                         <span className="w-12 h-1 bg-gradient-to-r from-[#0071e3] to-cyan-400 rounded-full"></span>
                         Servicios relacionados
                     </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
                    {/* Pilar 1: Webs */}
                    <div className="group relative w-full flex flex-col h-full bg-white/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/50 shadow-[0_20px_40px_rgba(0,113,227,0.05)] hover:bg-white/50 hover:shadow-[0_20px_40px_rgba(43,140,238,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                        {/* Imagen integrada arriba */}
                        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[2.5rem]">
                            <Image src="/Webs de Alta Conversión.png" alt="Webs de alta conversión" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
                        </div>

                        {/* Contenido */}
                        <div className="relative z-10 p-8 md:p-10 flex flex-col flex-1">
                            <div className="w-14 h-14 rounded-[1.2rem] bg-gradient-to-br from-[#2b8cee]/10 to-white flex items-center justify-center shadow-sm border border-white/60 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-[#2b8cee] text-2xl">rocket_launch</span>
                            </div>
                            <h4 className="text-xl md:text-[22px] font-extrabold mb-3 text-[#1d1d1f] tracking-tight leading-tight">Webs de alta conversión</h4>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">Páginas rápidas para que tus clientes te encuentren en Google y <span className="text-[#2b8cee] font-bold">te compren sin dar tantas vueltas</span>.</p>
                        </div>
                    </div>

                    {/* Pilar 2: Video */}
                    <div className="group relative w-full flex flex-col h-full bg-white/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/50 shadow-[0_20px_40px_rgba(0,113,227,0.05)] hover:bg-white/50 hover:shadow-[0_20px_40px_rgba(43,140,238,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[2.5rem]">
                            <Image src="/Celular.jpg" alt="Edición de Video" fill className="object-cover object-center group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
                        </div>

                        <div className="relative z-10 p-8 md:p-10 flex flex-col flex-1">
                            <div className="w-14 h-14 rounded-[1.2rem] bg-gradient-to-br from-[#2b8cee]/10 to-white flex items-center justify-center shadow-sm border border-white/60 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-[#2b8cee] text-2xl">movie_edit</span>
                            </div>
                            <h4 className="text-xl md:text-[22px] font-extrabold mb-3 text-[#1d1d1f] tracking-tight leading-tight">Edición de Video</h4>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">Reels y TikToks editados para enganchar. <span className="text-[#2b8cee] font-bold">Vende más</span> con el mismo Instagram que ya tienes.</p>
                        </div>
                    </div>

                    {/* Pilar 3: Datos */}
                    <div className="group relative w-full flex flex-col h-full bg-white/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/50 shadow-[0_20px_40px_rgba(0,113,227,0.05)] hover:bg-white/50 hover:shadow-[0_20px_40px_rgba(43,140,238,0.1)] hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-[2.5rem]">
                            <Image src="/Inteligencia Ejecutiva.png" alt="Análisis de Datos" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent"></div>
                        </div>

                        <div className="relative z-10 p-8 md:p-10 flex flex-col flex-1">
                            <div className="w-14 h-14 rounded-[1.2rem] bg-gradient-to-br from-[#2b8cee]/10 to-white flex items-center justify-center shadow-sm border border-white/60 mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="material-symbols-outlined text-[#2b8cee] text-2xl">query_stats</span>
                            </div>
                            <h4 className="text-xl md:text-[22px] font-extrabold mb-3 text-[#1d1d1f] tracking-tight leading-tight">Análisis de Datos</h4>
                            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">Paneles visuales donde ves <span className="text-[#2b8cee] font-bold">qué se vende, cuándo y a quién</span>. Decides con números, no con suposiciones.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </section>

      {/* EXPLORA MI ECOSISTEMA */}
      <section className="py-24 md:py-32 bg-[#f4f7fc] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0071e30a_1px,transparent_1px),linear-gradient(to_bottom,#0071e30a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
        
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 reveal-on-scroll">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] tracking-tight mb-4">Todo mi ecosistema</h2>
                <p className="text-xl text-slate-500 font-medium max-w-2xl">Casos de éxito, proyectos y soluciones empaquetadas listas para integrarse en tu operación.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left side: Image + Featured Solution */}
                <div className="w-full flex flex-col">
                    <div className="relative w-full h-full min-h-[400px] rounded-[2.5rem] overflow-hidden group shadow-[0_20px_50px_rgba(0,113,227,0.15)] flex flex-col justify-end">
                        <Image src="/DashboardDatos.jpg" alt="Ecosistema de Soluciones" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1121] via-[#0b1121]/40 to-transparent"></div>
                        <div className="relative z-10 p-8 md:p-10">
                            <h3 className="text-white text-3xl font-bold mb-3 tracking-tight">Soluciones Listas</h3>
                            <p className="text-slate-300 font-medium mb-6 text-lg leading-relaxed">Sistemas preconstruidos que puedes conectar hoy mismo a tu empresa.</p>
                            <a href="/soluciones" className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:bg-slate-100 hover:scale-105 transition-all">
                                Ver soluciones <span className="material-symbols-outlined text-base">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right side: List of items */}
                <div className="w-full flex flex-col gap-8">
                    {/* Proyectos Banner */}
                    <a href="/proyectos" className="group flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white rounded-[2.5rem] p-8 md:p-10 border border-slate-200 hover:border-[#0071e3]/30 hover:shadow-[0_20px_40px_rgba(0,113,227,0.08)] transition-all duration-300 h-full gap-6">
                        <div className="flex-1">
                            <div className="w-14 h-14 bg-blue-50 text-[#0071e3] rounded-2xl flex items-center justify-center mb-5 border border-blue-100 group-hover:bg-[#0071e3] group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined text-2xl">work</span>
                            </div>
                            <h3 className="text-2xl font-bold text-[#1d1d1f] tracking-tight mb-2 group-hover:text-[#0071e3] transition-colors">Proyectos reales</h3>
                            <p className="text-slate-500 font-medium text-[15px] leading-relaxed">Mira lo que ya construí: desde SaaS con IA hasta sistemas integrales de datos.</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#0071e3] group-hover:text-white transition-colors shrink-0 shadow-sm border border-slate-100 group-hover:border-[#0071e3]">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </div>
                    </a>

                    {/* Testimonios Banner */}
                    <a href="/testimonios" className="group flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#0b1121] rounded-[2.5rem] p-8 md:p-10 border border-[#0071e3]/30 hover:shadow-[0_20px_40px_rgba(0,113,227,0.2)] transition-all duration-300 h-full gap-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-[40px] group-hover:bg-cyan-400/20 transition-colors"></div>
                        <div className="flex-1 relative z-10">
                            <div className="w-14 h-14 bg-cyan-500/20 text-cyan-400 rounded-2xl flex items-center justify-center mb-5 border border-cyan-500/30 group-hover:bg-cyan-400 group-hover:text-[#0b1121] transition-colors">
                                <span className="material-symbols-outlined text-2xl">forum</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">Casos de éxito</h3>
                            <p className="text-slate-400 font-medium text-[15px] leading-relaxed">Descubre las experiencias de otros empresarios que transformaron sus operaciones.</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/5 text-white flex items-center justify-center group-hover:bg-cyan-400 group-hover:text-[#0b1121] transition-colors shrink-0 relative z-10 border border-white/10 group-hover:border-cyan-400">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
      </section>

      {/* 6. MECANISMO DE EXCLUSIÓN */}
      <section id="exclusion" className="py-24 md:py-32 overflow-hidden bg-[#070b14] relative border-t border-white/5 shadow-[inset_0_20px_40px_rgba(0,0,0,0.4)]">
        {/* Dynamic Dark Background Elements */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#0071e3]/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 reveal-on-scroll relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
            <div className="flex-1 text-left">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 mb-8 shadow-[0_0_20px_rgba(0,113,227,0.2)] hover:bg-blue-500/20 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]"></span>
                    <span className="text-blue-300 text-xs md:text-sm font-bold tracking-widest uppercase">Nota importante</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-[4.5rem] font-bold mb-8 text-white tracking-tighter leading-[1.05] drop-shadow-lg">
                    Esto <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">no es para todos.</span>
                </h2>
                
                <div className="text-[17px] md:text-[19px] text-slate-400 space-y-6 leading-relaxed font-medium max-w-xl">
                    <p>La inteligencia artificial y las automatizaciones no son píldoras mágicas para negocios rotos. Son aceleradores para negocios que quieren ir más rápido.</p>
                    <p className="text-slate-300">Trabajo exclusivamente con emprendedores y dueños de negocio que entienden que <span className="text-cyan-400 font-bold drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">la innovación es una obligación, no una opción</span>. Si estás dispuesto a transformar tu operación y dejar de ser un empleado en tu propia empresa, podemos trabajar juntos.</p>
                </div>
            </div>
            
            <div className="flex-1 w-full max-w-[500px] relative reveal-on-scroll lg:mt-0 mt-12 flex justify-center">
                {/* Deep radial blue flare behind the image */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/30 rounded-full blur-[100px] pointer-events-none z-0 mix-blend-screen animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-cyan-400/20 rounded-full blur-[60px] pointer-events-none z-0 mix-blend-screen"></div>
                
                {/* 3D Element Image with Bottom Fade Mask */}
                <div className="relative z-10 w-full aspect-square max-w-[450px]" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}>
                    <Image 
                        src="/CristoElemento3D.png"
                        alt="Innovación y tecnología 3D"
                        fill
                        className="object-contain filter drop-shadow-[0_20px_50px_rgba(0,113,227,0.3)] hover:-translate-y-4 transition-transform duration-700"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* 5. EL CAMINO DEFINIDO (Roadmap) */}
      <section id="roadmap" className="py-24 md:py-32 bg-[#f4f7fc] relative z-10 overflow-hidden">
        {/* Sutil grid de fondo */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0071e30a_1px,transparent_1px),linear-gradient(to_bottom,#0071e30a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* Degradados animados sutiles */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#2b8cee]/8 rounded-full blur-[120px] pointer-events-none animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-300/8 rounded-full blur-[100px] pointer-events-none animate-blob animation-delay-2000"></div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 md:mb-24 reveal-on-scroll">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 text-slate-900 tracking-tighter">Así funciona el proceso</h2>
                <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto">4 pasos claros. Sin sorpresas, sin letra pequeña.</p>
            </div>

            {/* Grid principal con alineación perfecta */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 reveal-on-scroll relative">
                {/* Línea conectora animada (solo desktop). top-6 (24px) pasa exactamente por el centro del círculo de 48px */}
                <div className="hidden lg:block absolute top-6 left-[12.5%] w-[75%] h-[2px] bg-slate-200/60 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-[#2b8cee] to-transparent opacity-60 animate-[shimmer_3s_infinite]"></div>
                </div>

                {/* Fase 1 */}
                <div className="flex flex-col items-center h-full group" style={{ transitionDelay: '0ms' }}>
                    {/* Número centrado, mismo tamaño en todos los breakpoints */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#2b8cee] to-cyan-400 p-[2px] shadow-md group-hover:shadow-[0_0_20px_rgba(43,140,238,0.3)] transition-shadow duration-500 mb-6 lg:mb-8">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                            <span className="text-sm font-bold bg-gradient-to-br from-[#2b8cee] to-cyan-500 bg-clip-text text-transparent">1</span>
                        </div>
                    </div>
                    {/* Card: altura completa, contenido distribuido verticalmente */}
                    <div className="relative w-full flex-1 flex flex-col p-10 md:p-12 bg-white/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/50 shadow-[0_20px_40px_rgba(0,113,227,0.05)] hover:bg-white/50 hover:shadow-[0_20px_40px_rgba(43,140,238,0.1)] hover:-translate-y-2 transition-all duration-500 group/card overflow-hidden">
                        <div className="absolute -top-10 -right-4 text-[150px] font-black text-black/[0.03] pointer-events-none group-hover/card:scale-110 transition-transform duration-700">01</div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#2b8cee]/10 rounded-full blur-[40px] group-hover/card:bg-[#2b8cee]/20 transition-all duration-700"></div>

                        <div className="w-16 h-16 rounded-[1.2rem] bg-gradient-to-br from-[#2b8cee]/10 to-white flex items-center justify-center shadow-sm border border-white/60 mb-auto relative z-10">
                            <MessageSquare className="w-7 h-7 text-[#2b8cee]" strokeWidth={1.5} />
                        </div>

                        <div className="mt-10 relative z-10">
                            <div className="text-[11px] uppercase tracking-widest font-bold text-slate-400 mb-3">Fase 1</div>
                            <h4 className="font-bold text-[#1d1d1f] text-xl mb-3 tracking-tight">Entiendo tu negocio</h4>
                            <p className="text-slate-600 text-[15px] leading-relaxed">Me siento contigo, entiendo cómo funciona tu operación y encuentro exactamente dónde estás perdiendo tiempo y dinero.</p>
                        </div>
                    </div>
                </div>

                {/* Fase 2 */}
                <div className="flex flex-col items-center h-full group" style={{ transitionDelay: '150ms' }}>
                    <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#2b8cee] to-cyan-400 p-[2px] shadow-md group-hover:shadow-[0_0_20px_rgba(43,140,238,0.3)] transition-shadow duration-500 mb-6 lg:mb-8">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                            <span className="text-sm font-bold bg-gradient-to-br from-[#2b8cee] to-cyan-500 bg-clip-text text-transparent">2</span>
                        </div>
                    </div>
                    <div className="relative w-full flex-1 flex flex-col p-10 md:p-12 bg-white/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/50 shadow-[0_20px_40px_rgba(0,113,227,0.05)] hover:bg-white/50 hover:shadow-[0_20px_40px_rgba(43,140,238,0.1)] hover:-translate-y-2 transition-all duration-500 group/card overflow-hidden">
                        <div className="absolute -top-10 -right-4 text-[150px] font-black text-black/[0.03] pointer-events-none group-hover/card:scale-110 transition-transform duration-700">02</div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#2b8cee]/10 rounded-full blur-[40px] group-hover/card:bg-[#2b8cee]/20 transition-all duration-700"></div>

                        <div className="w-16 h-16 rounded-[1.2rem] bg-gradient-to-br from-[#2b8cee]/10 to-white flex items-center justify-center shadow-sm border border-white/60 mb-auto relative z-10">
                            <Lightbulb className="w-7 h-7 text-[#2b8cee]" strokeWidth={1.5} />
                        </div>

                        <div className="mt-10 relative z-10">
                            <div className="text-[11px] uppercase tracking-widest font-bold text-slate-400 mb-3">Fase 2</div>
                            <h4 className="font-bold text-[#1d1d1f] text-xl mb-3 tracking-tight">Diseño tu solución</h4>
                            <p className="text-slate-600 text-[15px] leading-relaxed">Armo un plan a medida para tu negocio: qué automatizar, qué herramientas usar, cómo conectar todo.</p>
                        </div>
                    </div>
                </div>

                {/* Fase 3 */}
                <div className="flex flex-col items-center h-full group" style={{ transitionDelay: '300ms' }}>
                    <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#2b8cee] to-cyan-400 p-[2px] shadow-md group-hover:shadow-[0_0_20px_rgba(43,140,238,0.3)] transition-shadow duration-500 mb-6 lg:mb-8">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                            <span className="text-sm font-bold bg-gradient-to-br from-[#2b8cee] to-cyan-500 bg-clip-text text-transparent">3</span>
                        </div>
                    </div>
                    <div className="relative w-full flex-1 flex flex-col p-10 md:p-12 bg-white/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/50 shadow-[0_20px_40px_rgba(0,113,227,0.05)] hover:bg-white/50 hover:shadow-[0_20px_40px_rgba(43,140,238,0.1)] hover:-translate-y-2 transition-all duration-500 group/card overflow-hidden">
                        <div className="absolute -top-10 -right-4 text-[150px] font-black text-black/[0.03] pointer-events-none group-hover/card:scale-110 transition-transform duration-700">03</div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#2b8cee]/10 rounded-full blur-[40px] group-hover/card:bg-[#2b8cee]/20 transition-all duration-700"></div>

                        <div className="w-16 h-16 rounded-[1.2rem] bg-gradient-to-br from-[#2b8cee]/10 to-white flex items-center justify-center shadow-sm border border-white/60 mb-auto relative z-10">
                            <Rocket className="w-7 h-7 text-[#2b8cee]" strokeWidth={1.5} />
                        </div>

                        <div className="mt-10 relative z-10">
                            <div className="text-[11px] uppercase tracking-widest font-bold text-slate-400 mb-3">Fase 3</div>
                            <h4 className="font-bold text-[#1d1d1f] text-xl mb-3 tracking-tight">Lo construyo y lo activo</h4>
                            <p className="text-slate-600 text-[15px] leading-relaxed">Desarrollo todo, lo conecto a tus sistemas, lo pruebo y lo dejo funcionando sin que tengas que hacer nada técnico.</p>
                        </div>
                    </div>
                </div>

                {/* Fase 4 */}
                <div className="flex flex-col items-center h-full group" style={{ transitionDelay: '450ms' }}>
                    <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-[#2b8cee] to-cyan-400 p-[2px] shadow-md group-hover:shadow-[0_0_20px_rgba(43,140,238,0.3)] transition-shadow duration-500 mb-6 lg:mb-8">
                        <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                            <span className="text-sm font-bold bg-gradient-to-br from-[#2b8cee] to-cyan-500 bg-clip-text text-transparent">4</span>
                        </div>
                    </div>
                    <div className="relative w-full flex-1 flex flex-col p-10 md:p-12 bg-white/40 backdrop-blur-3xl rounded-[2.5rem] border border-white/50 shadow-[0_20px_40px_rgba(0,113,227,0.05)] hover:bg-white/50 hover:shadow-[0_20px_40px_rgba(43,140,238,0.1)] hover:-translate-y-2 transition-all duration-500 group/card overflow-hidden">
                        <div className="absolute -top-10 -right-4 text-[150px] font-black text-black/[0.03] pointer-events-none group-hover/card:scale-110 transition-transform duration-700">04</div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#2b8cee]/10 rounded-full blur-[40px] group-hover/card:bg-[#2b8cee]/20 transition-all duration-700"></div>

                        <div className="w-16 h-16 rounded-[1.2rem] bg-gradient-to-br from-[#2b8cee]/10 to-white flex items-center justify-center shadow-sm border border-white/60 mb-auto relative z-10">
                            <TrendingUp className="w-7 h-7 text-[#2b8cee]" strokeWidth={1.5} />
                        </div>

                        <div className="mt-10 relative z-10">
                            <div className="text-[11px] uppercase tracking-widest font-bold text-slate-400 mb-3">Fase 4</div>
                            <h4 className="font-bold text-[#1d1d1f] text-xl mb-3 tracking-tight">Crecimiento continuo</h4>
                            <p className="text-slate-600 text-[15px] leading-relaxed">Recuperás tu tiempo. Tu negocio empieza a funcionar con menos esfuerzo y listo para escalar.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="py-20 md:py-28 bg-[#070b14] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#0071e3]/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 mix-blend-screen"></div>
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 mix-blend-screen"></div>

        <div className="max-w-[1000px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="bg-[#2d2d30]/30 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl reveal-on-scroll">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                    <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-gradient-to-br from-[#0071e3] to-cyan-400 rounded-full flex items-center justify-center p-1 shadow-[0_0_30px_rgba(0,113,227,0.3)] relative overflow-hidden">
                        <div className="w-full h-full bg-[#1d1d1f] rounded-full flex items-center justify-center overflow-hidden relative">
                             <Image src="/FotoPersonal.jpg" alt="Jonathan Chavez" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="text-center md:text-left flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-4 uppercase tracking-widest">
                            Sobre mí
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Soy Jonathan Chávez.</h2>
                        <div className="text-slate-300 text-[17px] leading-relaxed space-y-5 font-medium">
                            <p>Vivo en <strong className="text-white">Barrancabermeja</strong>. Actualmente estoy estudiando <strong className="text-white">Ingeniería de Software en la Uniminuto</strong>, y en paralelo llevo más de 2 años creando soluciones tecnológicas reales para negocios locales.</p>
                            <p>No soy una consultora corporativa ni una agencia de marketing genérica. Soy una persona real que se sienta a entender cómo funciona tu negocio, identifica qué procesos te están quitando tiempo, y construye sistemas con IA que los resuelvan. Así de simple.</p>
                            <p>Mi enfoque es práctico: <strong className="text-cyan-400">si algo no te ahorra tiempo o no te genera plata, no lo propongo</strong>. Trabajo con tecnologías modernas como Python, Next.js, Supabase y APIs de inteligencia artificial para crear herramientas que funcionen de verdad.</p>
                        </div>

                        {/* Skills + Education Tags */}
                        <div className="mt-8 space-y-4">
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                <span className="px-4 py-2 bg-white/5 rounded-lg text-slate-300 text-sm font-semibold border border-white/10 flex items-center gap-2"><span className="material-symbols-outlined text-sm">smart_toy</span> Automatización con IA</span>
                                <span className="px-4 py-2 bg-white/5 rounded-lg text-slate-300 text-sm font-semibold border border-white/10 flex items-center gap-2"><span className="material-symbols-outlined text-sm">code</span> Desarrollo Web</span>
                                <span className="px-4 py-2 bg-white/5 rounded-lg text-slate-300 text-sm font-semibold border border-white/10 flex items-center gap-2"><span className="material-symbols-outlined text-sm">insights</span> Análisis de Datos</span>
                            </div>
                            <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                <span className="px-4 py-2 bg-blue-500/10 rounded-lg text-blue-300 text-sm font-semibold border border-blue-500/20 flex items-center gap-2"><span className="material-symbols-outlined text-sm">school</span> Ing. Software — Uniminuto</span>
                                <span className="px-4 py-2 bg-white/5 rounded-lg text-slate-300 text-sm font-semibold border border-white/10 flex items-center gap-2"><span className="material-symbols-outlined text-sm">location_on</span> Barrancabermeja, Santander</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 9. CONTACTO — WhatsApp CTA */}
      <section id="contacto" className="py-24 md:py-32 bg-gradient-to-b from-white to-blue-50 relative z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-[640px] mx-auto px-6 lg:px-8 reveal-on-scroll relative z-20 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 tracking-tight">¿Empezamos?</h2>
            <p className="text-lg md:text-xl text-slate-600 mb-8 font-medium">Contame tu problema por WhatsApp y te envío una propuesta en <strong className="text-slate-900">24 horas</strong>.</p>
            
            <a href="https://wa.me/573223663275" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-4 bg-emerald-50 text-emerald-600 hover:bg-emerald-500 hover:text-white border border-emerald-200 px-10 py-5 rounded-full text-xl font-bold shadow-[0_12px_40px_rgba(16,185,129,0.15)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.3)] hover:scale-[1.02] active:scale-95 transition-all mb-8 group">
                <svg className="w-8 h-8 fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                Escribime por WhatsApp
            </a>
            
            <p className="text-slate-400 text-sm flex items-center justify-center gap-2 mb-10">
                <span className="material-symbols-outlined text-base">schedule</span>
                Respondo en menos de 1 hora
            </p>

            <div className="pt-8 border-t border-slate-200">
                <p className="text-slate-400 text-sm">O escríbeme al correo:</p>
                <a href="mailto:joticachavez69@gmail.com" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">joticachavez69@gmail.com</a>
            </div>
        </div>
      </section>

      {/* 7. CIERRE DE SEGURIDAD Y CONFIANZA */}
      <footer className="bg-[#f4f7fc] pt-24 pb-12 md:pb-16 border-t border-blue-100 relative overflow-hidden">
        {/* Abstract footer glow */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#0071e3]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-20 md:mb-24">
                <div className="text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                        <Image src="/logo.png" alt="Jonathan Chavez Logo" width={40} height={40} className="object-contain filter brightness-0" />
                        <span className="font-extrabold text-3xl text-slate-800 tracking-tight">Jonathan Chavez</span>
                    </div>
                    <h3 className="text-[#1d1d1f] font-bold text-xl mb-1 tracking-tight">Jonathan Chávez</h3>
                    <p className="text-[#0071e3]/80 font-semibold mb-5">Especialista en Automatizaciones y Ecosistemas con IA</p>
                    <div className="space-y-2 text-slate-500 font-medium text-sm">
                        <p className="flex items-center justify-center md:justify-start gap-2"><span className="material-symbols-outlined text-[18px]">location_on</span> Barrancabermeja, Santander</p>
                        <p className="flex items-center justify-center md:justify-start gap-2"><span className="material-symbols-outlined text-[18px]">public</span> Operación 100% remota</p>
                    </div>
                </div>
                <div className="text-center md:text-right">
                    <p className="text-slate-500 font-semibold mb-3">Contacto directo:</p>
                    <a href="https://wa.me/573223663275" className="block text-[#0071e3] hover:text-[#0077ED] transition-colors text-3xl font-black tracking-tight mb-2">+57 322 366 3275</a>
                    <a href="mailto:joticachavez69@gmail.com" className="block text-slate-700 hover:text-[#0071e3] transition-colors font-bold">joticachavez69@gmail.com</a>
                </div>
            </div>
            
            <div className="border-t border-blue-100/50 pt-16 pb-8 text-center max-w-4xl mx-auto">
                <p className="mb-12 text-[#1d1d1f] text-xl md:text-2xl leading-relaxed font-semibold tracking-tight">
                    "Lo que hoy haces a mano, mañana se hace solo.<br/>
                    <span className="text-[#0071e3] font-black">Ahorra tiempo. Gana dinero. Deja que la IA trabaje por ti.</span>"
                </p>
                <p className="text-xs text-slate-400 font-bold tracking-widest uppercase">&copy; 2026 Jonathan Chávez</p>
            </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/573223663275" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 group">
        <span className="bg-white text-slate-700 text-sm font-semibold px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
          ¿Hablamos?
        </span>
        <span className="w-14 h-14 md:w-16 md:h-16 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_8px_40px_rgba(16,185,129,0.6)] hover:scale-110 active:scale-95 transition-all animate-[bounce_2s_ease-in-out_infinite]">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        </span>
      </a>
    </>
  );
}
