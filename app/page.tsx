"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { GlassEffect, GlassFilter } from '@/components/ui/liquid-glass';

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
                    <span className="material-symbols-outlined text-brand-light text-xl md:text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>widgets</span>
                    <span className="font-bold text-lg md:text-xl tracking-tight text-white">Jonathan.Ai</span>
                </div>
                <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
                    <a className="text-slate-300 hover:text-white font-medium transition-colors text-sm" href="#autoridad">Qué hago</a>
                    <a className="text-slate-300 hover:text-white font-medium transition-colors text-sm" href="/soluciones">Soluciones</a>
                    <a className="text-slate-300 hover:text-white font-medium transition-colors text-sm" href="/proyectos">Proyectos</a>
                    <a className="text-slate-300 hover:text-white font-medium transition-colors text-sm" href="#sobre-mi">Sobre Mí</a>
                </div>
                <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                    <a className="text-slate-300 hover:text-white font-medium transition-colors text-sm" href="#contacto">Contacto</a>
                    <a className="bg-green-600 text-white hover:bg-green-500 px-5 lg:px-6 py-2.5 rounded-full text-sm font-bold shadow-[0_8px_20px_rgba(5,150,105,0.3)] transition-all hover:scale-105" href="https://wa.me/573223663275" target="_blank" rel="noopener noreferrer">Escribime por WhatsApp</a>
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
                    <a onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors" href="#autoridad">Qué hago</a>
                    <a onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors" href="/soluciones">Soluciones</a>
                    <a onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors" href="/proyectos">Proyectos</a>
                    <a onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors" href="#sobre-mi">Sobre Mí</a>
                    <a onClick={() => setMobileMenuOpen(false)} className="block w-full text-center mt-4 bg-green-600 text-white px-5 py-3 rounded-xl text-sm font-bold shadow-md" href="https://wa.me/573223663275" target="_blank" rel="noopener noreferrer">Escribime por WhatsApp</a>
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
                <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold mb-6 text-white tracking-tight leading-[1.08]">
                    Automatizo negocios<br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">con IA en Barrancabermeja</span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-300 font-medium mb-8 leading-relaxed max-w-2xl">
                    Creo sistemas con inteligencia artificial que hacen el trabajo repetitivo por vos: cobrar, responder clientes, agendar citas, llevar registros. <strong className="text-white">Vos te enfocás en vender, la IA se encarga del resto.</strong>
                </p>

                <div className="flex items-center gap-4 mb-8 text-sm text-slate-400">
                    <span className="inline-flex items-center gap-1.5 bg-green-500/10 text-green-300 px-3 py-1.5 rounded-full font-semibold border border-green-500/20 shadow-[0_0_15px_rgba(5,150,105,0.2)]">
                        <span className="material-symbols-outlined text-base">check_circle</span> Probás 1 semana sin costo
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-base">schedule</span> Respondo en &lt;1 hora
                    </span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://wa.me/573223663275" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold shadow-[0_8px_30px_rgba(5,150,105,0.4)] hover:scale-[1.02] active:scale-95 transition-all">
                        <span className="material-symbols-outlined">chat</span>
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
                    Lo que hoy hacés a mano, <br className="hidden md:block" />mañana se hace solo.
                </h2>
                <div className="text-lg md:text-xl text-[#0071e3] font-medium leading-relaxed space-y-4 max-w-3xl mx-auto">
                    <p className="text-blue-900/70">No es falta de esfuerzo. Es un error de sistema.</p>
                    <p className="text-blue-900/60 text-base md:text-lg">Cada hora que gastás en cobrar por WhatsApp, responder dudas repetitivas, hacer seguimiento o tomar pedidos manuales, es una hora que no estás dedicando a hacer crecer tu negocio.</p>
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
                            <p className="text-slate-600 text-base lg:text-[17px] leading-relaxed font-medium">Cada tarea que seguís haciendo a mano — cobrar, responder, anotar pedidos — es tiempo que <span className="text-[#0071e3] font-bold">podrías estar usando para vender más</span>. Y mientras tanto, la competencia ya automatizó.</p>
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
                            <p className="text-slate-300 text-base lg:text-[17px] leading-relaxed font-medium">Si no sabés cuál es tu producto estrella, cuánto vendiste esta semana o cuántos clientes perdiste, estás adivinando. Y adivinar es la forma más cara de gestionar un negocio.</p>
                        </div>
                    </div>
                </div>

                {/* Tall Card 3: La pregunta incómoda */}
                <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                    <div className="relative h-full flex flex-col p-10 md:p-12 bg-white/60 backdrop-blur-3xl rounded-[2.5rem] border border-white/80 shadow-[0_20px_40px_rgba(0,113,227,0.05)] hover:bg-white/80 transition-all duration-500 group overflow-hidden">
                        <div className="absolute -top-10 -right-4 text-[150px] font-black text-blue-900/5 pointer-events-none group-hover:scale-110 transition-transform duration-700">03</div>
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-100/40 to-transparent pointer-events-none"></div>
                        
                        <div className="w-16 h-16 rounded-[1.2rem] bg-white flex items-center justify-center shadow-lg border border-blue-100 mb-auto relative z-10">
                            <span className="material-symbols-outlined text-[#0071e3] text-3xl">help_center</span>
                        </div>
                        
                        <div className="mt-16 relative z-10">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-5 text-[#1d1d1f] tracking-tight">Tu negocio depende de vos</h3>
                            <p className="text-blue-900/70 text-base lg:text-[17px] leading-relaxed font-bold">Si vos no estás presente, ¿tu negocio sigue funcionando? Si la respuesta es no, no tenés una empresa. Tenés un empleo que vos mismo te creaste.</p>
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
                        Dejá de apagar incendios. <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0071e3] to-cyan-500">Automatizá lo que te frena.</span>
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
                         Los Pilares del Sistema
                     </h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Pilar 1 */}
                    <GlassEffect className="w-full relative overflow-hidden p-0 !bg-white/20 backdrop-blur-[40px] !rounded-[2.5rem] border border-white/60 shadow-[0_8px_32px_rgba(0,113,227,0.1)] hover:shadow-[0_20px_50px_rgba(0,113,227,0.2)] transition-all duration-500 hover:-translate-y-2 flex flex-col group h-full min-h-[380px] md:min-h-[440px]">
                        <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-gradient-to-bl from-[#0071e3]/30 to-transparent rounded-full blur-[50px] pointer-events-none group-hover:scale-110 transition-transform duration-700 z-0"></div>
                        
                        <div className="absolute top-0 left-0 right-0 h-[70%] z-0" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}>
                            <Image src="/Ecosistemas de IA Operativa.png" alt="Ecosistemas de IA Operativa" fill className="object-cover object-top group-hover:scale-110 transition-transform duration-1000 opacity-[0.85] mix-blend-multiply" />
                        </div>
                        
                        {/* Nested Glassmorphism Text Card */}
                        <div className="relative z-10 m-3 mb-3 mt-[180px] md:mt-[220px] p-8 md:p-10 rounded-[2rem] bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(255,255,255,0.4)] flex flex-col justify-end h-full group-hover:bg-white/80 transition-colors duration-500">
                            <h4 className="text-xl md:text-[24px] font-extrabold mb-3 text-[#1d1d1f] tracking-tight leading-tight">Ecosistemas de IA</h4>
                            <p className="text-blue-950/80 text-[15px] leading-relaxed font-semibold">Tu negocio atendiendo y cobrando <span className="text-[#0071e3] font-bold">solo, 24/7</span>, sin que vos tengas que estar ahí.</p>
                        </div>
                    </GlassEffect>

                    {/* Pilar 2 */}
                    <GlassEffect className="w-full relative overflow-hidden p-0 !bg-white/20 backdrop-blur-[40px] !rounded-[2.5rem] border border-white/60 shadow-[0_8px_32px_rgba(0,113,227,0.1)] hover:shadow-[0_20px_50px_rgba(0,113,227,0.2)] transition-all duration-500 hover:-translate-y-2 flex flex-col group h-full min-h-[380px] md:min-h-[440px]">
                        <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-gradient-to-bl from-cyan-400/30 to-transparent rounded-full blur-[50px] pointer-events-none group-hover:scale-110 transition-transform duration-700 z-0"></div>
                        
                        <div className="absolute top-0 left-0 right-0 h-[70%] z-0" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}>
                            <Image src="/Webs de Alta Conversión.png" alt="Webs de Alta Conversión" fill className="object-cover object-top group-hover:scale-110 transition-transform duration-1000 opacity-[0.85] mix-blend-multiply" />
                        </div>
                        
                        <div className="relative z-10 m-3 mb-3 mt-[180px] md:mt-[220px] p-8 md:p-10 rounded-[2rem] bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(255,255,255,0.4)] flex flex-col justify-end h-full group-hover:bg-white/80 transition-colors duration-500">
                            <h4 className="text-xl md:text-[24px] font-extrabold mb-3 text-[#1d1d1f] tracking-tight leading-tight">Webs que Venden</h4>
                            <p className="text-blue-950/80 text-[15px] leading-relaxed font-semibold">Páginas que no solo se ven bien, sino que <span className="text-[#0071e3] font-bold">convierten visitantes en clientes</span> desde el primer clic.</p>
                        </div>
                    </GlassEffect>

                    {/* Pilar 3 */}
                    <GlassEffect className="w-full relative overflow-hidden p-0 !bg-white/20 backdrop-blur-[40px] !rounded-[2.5rem] border border-white/60 shadow-[0_8px_32px_rgba(0,113,227,0.1)] hover:shadow-[0_20px_50px_rgba(0,113,227,0.2)] transition-all duration-500 hover:-translate-y-2 flex flex-col group h-full min-h-[380px] md:min-h-[440px]">
                        <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-gradient-to-bl from-indigo-400/30 to-transparent rounded-full blur-[50px] pointer-events-none group-hover:scale-110 transition-transform duration-700 z-0"></div>
                        
                        <div className="absolute top-0 left-0 right-0 h-[70%] z-0" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}>
                            <Image src="/Inteligencia Ejecutiva.png" alt="Inteligencia Ejecutiva" fill className="object-cover object-top group-hover:scale-110 transition-transform duration-1000 opacity-[0.85] mix-blend-multiply" />
                        </div>
                        
                        <div className="relative z-10 m-3 mb-3 mt-[180px] md:mt-[220px] p-8 md:p-10 rounded-[2rem] bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_rgba(255,255,255,0.4)] flex flex-col justify-end h-full group-hover:bg-white/80 transition-colors duration-500">
                            <h4 className="text-xl md:text-[24px] font-extrabold mb-3 text-[#1d1d1f] tracking-tight leading-tight">Análisis de Datos</h4>
                            <p className="text-blue-950/80 text-[15px] leading-relaxed font-semibold">Paneles claros donde vés <span className="text-[#0071e3] font-bold">qué se vende, cuándo y a quién</span>. Decidís con números, no con intuición.</p>
                        </div>
                    </GlassEffect>
                </div>
            </div>

        </div>
      </section>

      {/* CTA BANNERS: Soluciones + Proyectos */}
      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 reveal-on-scroll">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Soluciones Banner */}
                <a href="/soluciones" className="group relative bg-gradient-to-br from-[#0b1121] to-blue-950 rounded-[2rem] p-8 md:p-10 border border-white/10 overflow-hidden hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between min-h-[200px]">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-[40px] group-hover:bg-blue-500/20 transition-colors"></div>
                    <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-3">Productos listos para usar</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">Soluciones SaaS</h3>
                        <p className="text-slate-300 font-medium">Mocia, QR Menu, CRM Simple, Agendamiento. Sistemas que ya funcionan y podés conectar a tu negocio hoy.</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-cyan-400 font-bold mt-6 group-hover:text-cyan-300 transition-colors">
                        Ver soluciones <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </span>
                </a>

                {/* Proyectos Banner */}
                <a href="/proyectos" className="group relative bg-[#f8fafc] rounded-[2rem] p-8 md:p-10 border border-slate-200 overflow-hidden hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,113,227,0.08)] transition-all duration-500 flex flex-col justify-between min-h-[200px]">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-[40px] group-hover:bg-blue-500/10 transition-colors"></div>
                    <div>
                        <div className="text-xs font-bold uppercase tracking-widest text-[#0071e3] mb-3">Portafolio</div>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#1d1d1f] tracking-tight mb-3">Proyectos reales</h3>
                        <p className="text-slate-600 font-medium">Mirá lo que ya construí: desde SaaS de cobranza con IA hasta tiendas online y dashboards financieros.</p>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[#0071e3] font-bold mt-6 group-hover:text-blue-700 transition-colors">
                        Ver proyectos <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </span>
                </a>
            </div>
        </div>
      </section>

      {/* OTROS SERVICIOS */}
      <section className="py-20 bg-[#f4f7fc] border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 reveal-on-scroll">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-[#1d1d1f] tracking-tight">Otros servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <span className="material-symbols-outlined text-[#0071e3] text-3xl mb-4">language</span>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Webs de Alto Impacto</h3>
                    <p className="text-slate-600 font-medium text-sm">Páginas y landing pages rápidas para que tus clientes te encuentren en Google y te compren sin dar tantas vueltas.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <span className="material-symbols-outlined text-[#9B51E0] text-3xl mb-4">movie_edit</span>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Edición de Video para Redes</h3>
                    <p className="text-slate-600 font-medium text-sm">Reels y TikToks editados para enganchar en los primeros 3 segundos. Vendé más con el mismo Instagram que ya tenés.</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <span className="material-symbols-outlined text-cyan-600 text-3xl mb-4">bar_chart</span>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Análisis de Datos</h3>
                    <p className="text-slate-600 font-medium text-sm">Paneles visuales donde ves qué se vende, cuándo y a quién. Para que tomes decisiones con números, no con suposiciones.</p>
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
                    <p>Si buscás "algo barato" o si creés que la tecnología no es para tu negocio, este servicio no es para vos. Y está perfecto.</p>
                    <p className="text-slate-300">Trabajo con dueños de negocios que entienden que <span className="text-cyan-400 font-bold drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]">adaptarse no es opcional</span>. Los que quieren dejar de trabajar más horas para ganar lo mismo y empezar a usar la tecnología a su favor.</p>
                </div>
            </div>
            
            <div className="flex-1 w-full max-w-[500px]">
                {/* Exclusion Deep Dark Glass Card */}
                <GlassEffect className="p-10 md:p-12 !bg-[#0f172a]/50 backdrop-blur-2xl rounded-[2.5rem] md:!rounded-[3rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-1 ring-inset ring-white/5 relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-700">
                    <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-cyan-500/10 rounded-full blur-[50px] transition-transform duration-700 group-hover:scale-150 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    <div className="w-16 h-16 rounded-[1.2rem] bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-10 shadow-inner group-hover:bg-blue-500/20 transition-colors">
                        <span className="material-symbols-outlined text-blue-400 text-3xl">shield_locked</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6 tracking-tight leading-tight">Si no querés cambiar nada en tu forma de trabajar...</h3>
                    <p className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed font-medium">
                        Entonces esto no es para vos. Sin resentimientos. Pero el mercado no espera a nadie.
                    </p>
                    
                    <div className="w-full h-px bg-gradient-to-r from-white/10 to-transparent mb-8"></div>
                    
                    <p className="text-cyan-400 font-bold text-sm md:text-[15px] flex items-center gap-3 uppercase tracking-widest group-hover:text-cyan-300 transition-colors">
                        <span className="material-symbols-outlined text-xl">electric_bolt</span>
                        Solo para los que quieren crecer
                    </p>
                </GlassEffect>
            </div>
        </div>
      </section>

      {/* 5. EL CAMINO DEFINIDO (Roadmap) */}
      <section id="roadmap" className="py-24 md:py-32 bg-[#f4f7fc] relative z-10 overflow-hidden">
        {/* Dynamic Blue Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0071e31a_1px,transparent_1px),linear-gradient(to_bottom,#0071e31a_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-blue-500/10 blur-[120px] pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 md:mb-24 reveal-on-scroll">
                <h2 className="text-4xl md:text-6xl font-semibold mb-6 text-[#1d1d1f] tracking-tighter">Así funciona el proceso</h2>
                <p className="text-[19px] text-[#0071e3] font-medium max-w-2xl mx-auto">4 pasos claros. Sin sorpresas, sin letra chica.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 reveal-on-scroll relative">
                {/* Connecting Line (Only visible on large screens) */}
                <div className="hidden lg:block absolute top-[110px] left-[12%] w-[76%] h-[2px] bg-gradient-to-r from-blue-300/0 via-[#0071e3]/40 to-blue-300/0"></div>
                
                <GlassEffect className="p-8 md:p-10 !bg-white/40 backdrop-blur-[40px] border border-white/60 shadow-[0_8px_32px_rgba(0,113,227,0.1)] ring-1 ring-inset ring-white/50 !rounded-[2.5rem] md:!rounded-[3rem] relative flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-16 h-16 rounded-[1.2rem] bg-gradient-to-br from-[#0071e3] to-cyan-400 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg relative z-10">1</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-blue-600 mb-3">Fase 1</div>
                    <h4 className="font-semibold text-[#1d1d1f] text-xl mb-4 tracking-tight">Entiendo tu negocio</h4>
                    <p className="text-blue-900/70 text-[15px] leading-relaxed font-medium">Me sentó con vos, entiendo cómo funciona tu operación y encuentro exactamente dónde estás perdiendo tiempo y plata por hacer las cosas a mano.</p>
                </GlassEffect>

                <GlassEffect className="p-8 md:p-10 !bg-white/40 backdrop-blur-[40px] border border-white/60 shadow-[0_8px_32px_rgba(0,113,227,0.1)] ring-1 ring-inset ring-white/50 !rounded-[2.5rem] md:!rounded-[3rem] relative flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-16 h-16 rounded-[1.2rem] bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg relative z-10">2</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-indigo-600 mb-3">Fase 2</div>
                    <h4 className="font-semibold text-[#1d1d1f] text-xl mb-4 tracking-tight">Diseño tu solución</h4>
                    <p className="text-blue-900/70 text-[15px] leading-relaxed font-medium">Armo un plan a medida para tu negocio: qué automatizar, qué herramientas usar, cómo conectar todo. Nada de plantillas genéricas.</p>
                </GlassEffect>

                <GlassEffect className="p-8 md:p-10 !bg-white/40 backdrop-blur-[40px] border border-white/60 shadow-[0_8px_32px_rgba(0,113,227,0.1)] ring-1 ring-inset ring-white/50 !rounded-[2.5rem] md:!rounded-[3rem] relative flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-16 h-16 rounded-[1.2rem] bg-gradient-to-br from-cyan-400 to-blue-500 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg relative z-10">3</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-cyan-700 mb-3">Fase 3</div>
                    <h4 className="font-semibold text-[#1d1d1f] text-xl mb-4 tracking-tight">Lo construyo y lo activo</h4>
                    <p className="text-blue-900/70 text-[15px] leading-relaxed font-medium">Desarrollo todo, lo conecto a tus sistemas, lo pruebo y lo dejo funcionando. Vos no tenés que hacer nada técnico.</p>
                </GlassEffect>

                <GlassEffect className="p-8 md:p-10 !bg-white/40 backdrop-blur-[40px] border border-white/60 shadow-[0_8px_32px_rgba(0,113,227,0.1)] ring-1 ring-inset ring-white/50 !rounded-[2.5rem] md:!rounded-[3rem] relative flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-500">
                    <div className="w-16 h-16 rounded-[1.2rem] bg-gradient-to-br from-[#0071e3] to-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg relative z-10">4</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-[#0071e3] mb-3">Fase 4</div>
                    <h4 className="font-semibold text-[#1d1d1f] text-xl mb-4 tracking-tight">Crecimiento continuo</h4>
                    <p className="text-blue-900/70 text-[15px] leading-relaxed font-medium">Recuperás tu tiempo. Tu negocio empieza a funcionar con menos esfuerzo. Y cuando necesités el siguiente nivel, tu infraestructura ya está lista para escalar.</p>
                </GlassEffect>
            </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="py-20 md:py-28 bg-[#1d1d1f] relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#0071e3]/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2"></div>

        <div className="max-w-[1000px] mx-auto px-6 lg:px-8 relative z-10">
            <div className="bg-[#2d2d30]/30 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 shadow-2xl reveal-on-scroll">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                    <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-gradient-to-br from-[#0071e3] to-cyan-400 rounded-full flex items-center justify-center p-1 shadow-[0_0_30px_rgba(0,113,227,0.3)]">
                        <div className="w-full h-full bg-[#1d1d1f] rounded-full flex items-center justify-center border-4 border-[#1d1d1f] overflow-hidden relative">
                             {/* Placeholder para foto */}
                             <span className="material-symbols-outlined text-white/20 text-6xl">person</span>
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
            
            <a href="https://wa.me/573223663275" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-4 bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-full text-xl font-bold shadow-[0_12px_40px_rgba(5,150,105,0.35)] hover:scale-[1.02] active:scale-95 transition-all mb-8">
                <span className="material-symbols-outlined text-2xl">chat</span>
                Escribime por WhatsApp
            </a>
            
            <p className="text-slate-400 text-sm flex items-center justify-center gap-2 mb-10">
                <span className="material-symbols-outlined text-base">schedule</span>
                Respondo en menos de 1 hora
            </p>

            <div className="pt-8 border-t border-slate-200">
                <p className="text-slate-400 text-sm">O escribime al correo:</p>
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
                        <span className="material-symbols-outlined text-[#0071e3] text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>widgets</span>
                        <span className="font-extrabold text-3xl text-slate-800 tracking-tight">Jonathan.Ai</span>
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
                    "Lo que hoy hacés a mano, mañana se hace solo.<br/>
                    <span className="text-[#0071e3] font-black">Ahorrá tiempo. Ganá plata. Dejá que la IA trabaje por vos.</span>"
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
        <span className="w-14 h-14 md:w-16 md:h-16 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(5,150,105,0.4)] hover:scale-110 active:scale-95 transition-all animate-[bounce_2s_ease-in-out_infinite]">
          <span className="material-symbols-outlined text-2xl md:text-3xl">chat</span>
        </span>
      </a>
    </>
  );
}
