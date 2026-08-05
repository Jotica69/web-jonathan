"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { GlassEffect, GlassFilter } from '@/components/ui/liquid-glass';
import { MessageSquare, Lightbulb, Rocket, TrendingUp } from 'lucide-react';
import { BlurFade } from '@/components/ui/blur-fade';
import { TextScramble } from '@/components/ui/text-scramble';

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
      <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 rounded-[1.75rem] border border-white/10 bg-[#0b1121]/80 shadow-[0_24px_80px_-40px_rgba(7,11,20,0.9)] backdrop-blur-2xl transition-all duration-300" aria-label="Navegación principal">
        <div className="px-5 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 md:h-20 items-center">
                <a href="/" className="flex-shrink-0 flex items-center gap-3 rounded-full transition-transform hover:scale-[1.02]" aria-label="Ir al inicio">
                    <Image src="/logo.png" alt="Jonathan Chavez Logo" width={32} height={32} className="object-contain" />
                    <span className="font-bold text-lg md:text-xl tracking-tight text-white">Jonathan Chavez</span>
                </a>
                <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
                    <a className="link-underline text-slate-300 hover:text-white font-medium transition-colors text-sm" href="#autoridad">Mis Servicios</a>
                    <a className="link-underline text-slate-300 hover:text-white font-medium transition-colors text-sm" href="/soluciones">Soluciones</a>
                    <a className="link-underline text-slate-300 hover:text-white font-medium transition-colors text-sm" href="/proyectos">Proyectos</a>
                    <a className="link-underline text-slate-300 hover:text-white font-medium transition-colors text-sm" href="/testimonios">Testimonios</a>
                    <a className="link-underline text-slate-300 hover:text-white font-medium transition-colors text-sm" href="#sobre-mi">Sobre Mí</a>
                </div>
                <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                    <a className="btn-press inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-5 lg:px-6 py-2.5 text-sm font-bold text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.12)] transition-all hover:border-emerald-300/40 hover:bg-emerald-400 hover:text-slate-950" href="https://wa.me/573223663275" target="_blank" rel="noopener noreferrer">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                        Escribime
                    </a>
                </div>
                <div className="md:hidden flex items-center">
                    <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-expanded={mobileMenuOpen} aria-controls="mobile-navigation" aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'} className="btn-press rounded-full p-2 text-white transition-colors hover:bg-white/10">
                        <span className="material-symbols-outlined text-xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </div>

        </div>
        {mobileMenuOpen && (
            <div id="mobile-navigation" className="md:hidden absolute top-full left-0 mt-4 w-full rounded-[1.5rem] border border-white/10 bg-[#0b1121]/95 shadow-2xl backdrop-blur-2xl overflow-hidden p-2">
                <div className="space-y-1 rounded-[1.25rem] bg-white/[0.03] px-2 pt-2 pb-4">
                    <a onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white" href="#autoridad">Mis Servicios</a>
                    <a onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white" href="/soluciones">Soluciones</a>
                    <a onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white" href="/proyectos">Proyectos</a>
                    <a onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white" href="/testimonios">Testimonios</a>
                    <a onClick={() => setMobileMenuOpen(false)} className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white" href="#sobre-mi">Sobre Mí</a>
                    <a onClick={() => setMobileMenuOpen(false)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-5 py-3 text-sm font-bold text-emerald-200 transition-all hover:bg-emerald-400 hover:text-slate-950" href="https://wa.me/573223663275" target="_blank" rel="noopener noreferrer">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                        Escribime por WhatsApp
                    </a>
                </div>
            </div>
        )}
      </nav>

      <main id="contenido">
      <section className="relative z-0 flex min-h-[100dvh] flex-col justify-center overflow-hidden bg-[#0b1121] pb-20 pt-28 text-left lg:pb-28 lg:pt-32">
        <div className="absolute inset-0 opacity-70" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,110,230,0.26),transparent_34%),radial-gradient(circle_at_75%_20%,rgba(94,234,212,0.12),transparent_24%),linear-gradient(180deg,#0b1121_0%,#0d1528_100%)]"></div>
          <div className="absolute inset-y-0 right-0 w-full bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:96px_100%]"></div>
        </div>
        
        <div className="relative z-10 mx-auto mt-6 flex w-full max-w-7xl flex-col items-center gap-14 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-10 lg:px-8">
            <div className="relative z-20 max-w-3xl flex-1">
                <BlurFade delay={0.1} className="mb-8">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 shadow-lg backdrop-blur-md">
                        <span className="h-2 w-2 rounded-full bg-emerald-300"></span>
                        <TextScramble className="text-sm font-semibold text-slate-200" duration={1.2} speed={0.03}>
                            Barrancabermeja, Santander
                        </TextScramble>
                    </div>
                </BlurFade>

                <BlurFade delay={0.3} className="mb-6">
                    <h1 className="max-w-3xl text-balance text-[2.75rem] font-bold leading-[0.98] tracking-[-0.04em] text-white sm:text-5xl lg:text-[4.9rem]">
                        Automatizo negocios con IA en Barrancabermeja.
                    </h1>
                </BlurFade>

                <BlurFade delay={0.5} className="mb-8">
                    <p className="max-w-2xl text-lg font-medium leading-8 text-slate-300 md:text-xl md:leading-9">
                        Ahorras 20+ horas por semana automatizando procesos manuales en tu negocio. En menos de 15 días.
                    </p>
                </BlurFade>

                <BlurFade delay={0.7}>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <a href="https://wa.me/573223663275" target="_blank" rel="noopener noreferrer" className="btn-press inline-flex items-center justify-center gap-3 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-8 py-4 text-lg font-bold text-emerald-100 shadow-[0_0_30px_rgba(16,185,129,0.14)] transition-all hover:bg-emerald-400 hover:text-slate-950 group">
                            <svg className="h-6 w-6 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                            <span>Escribime por WhatsApp</span>
                        </a>
                        <a href="/proyectos" className="btn-press inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-4 text-base font-semibold text-slate-200 transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:text-white group">
                            Ver proyectos reales <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
                        </a>
                    </div>
                </BlurFade>

                <BlurFade delay={0.9} className="mt-10">
                    <div className="grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="border-l border-white/10 pl-4">
                            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Base local</p>
                            <p className="mt-2 text-lg font-semibold text-white">Barrancabermeja</p>
                        </div>
                        <div className="border-l border-white/10 pl-4">
                            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Respuesta</p>
                            <p className="mt-2 text-lg font-semibold text-white">Menos de 1 hora</p>
                        </div>
                        <div className="border-l border-white/10 pl-4">
                            <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Objetivo</p>
                            <p className="mt-2 text-lg font-semibold text-white">20+ horas ahorradas</p>
                        </div>
                    </div>
                </BlurFade>
            </div>

            <BlurFade delay={0.3} className="relative mt-4 flex w-full flex-1 justify-center lg:mt-0 lg:justify-end">
                <div className="absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#006ee6]/30 blur-[110px]" aria-hidden="true"></div>
                <div className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5eead4]/20 blur-[90px]" aria-hidden="true"></div>

                <div className="relative z-10 w-full max-w-[620px]">
                    <div className="surface-navy rounded-[2rem] p-4 md:p-5">
                        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d1528]">
                            <div className="relative aspect-[4/5] w-full" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 72%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 72%, transparent 100%)' }}>
                                <Image 
                                    src="/HeroCols.png"
                                    alt="Infraestructuras de IA"
                                    fill
                                    className="object-cover object-bottom transition-transform duration-1000 hover:scale-[1.02]"
                                    priority
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between px-2 pb-1 pt-4 text-left">
                            <div>
                                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Sistemas operativos</p>
                                <p className="mt-1 text-base font-semibold text-white">IA aplicada a operación real</p>
                            </div>
                            <span className="material-symbols-outlined text-2xl text-cyan-200">deployed_code</span>
                        </div>
                    </div>
                </div>
            </BlurFade>
        </div>
      </section>

      {/* 2. EL EFECTO DIAGNÓSTICO */}
      <section id="features" className="surface-light relative overflow-hidden py-24 md:py-32">
        <div className="rule-dots absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true"></div>
        <div className="absolute right-[-10%] top-[-12%] h-[540px] w-[540px] rounded-full bg-[#dff0ff] blur-[140px]" aria-hidden="true"></div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
            <BlurFade className="mb-16 max-w-3xl">
                <span className="eyebrow mb-6">Diagnóstico operativo</span>
                <h2 className="text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-[#172033] md:text-5xl lg:text-6xl">
                    Lo que hoy haces a mano, mañana se hace solo.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6c7b] md:text-xl md:leading-9">
                    Las tareas manuales están frenando tu crecimiento. Al implementar sistemas de Inteligencia Artificial, eliminas los cuellos de botella operativos y liberas tiempo para enfocarte en lo que realmente importa: vender y escalar.
                </p>
            </BlurFade>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <BlurFade delay={0.1} className="lg:col-span-7">
                    <article className="surface-paper h-full rounded-[2rem] p-8 transition-transform duration-500 hover:-translate-y-1 md:p-10">
                        <div className="flex h-full flex-col justify-between gap-12">
                            <div className="flex items-start justify-between gap-6">
                                <span className="font-editorial text-7xl leading-none text-[#006ee6]/20 md:text-8xl">01</span>
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#006ee6]/10 bg-[#dff0ff] text-[#006ee6]">
                                    <span className="material-symbols-outlined text-3xl">timer_off</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold tracking-tight text-[#172033]">Tiempo que no vuelve</h3>
                                <p className="mt-4 max-w-2xl text-base leading-8 text-[#5f6c7b] md:text-lg">
                                    Cada tarea que sigues haciendo a mano es tiempo valioso que <span className="font-bold text-[#006ee6]">podrías estar usando para vender más</span>. Y mientras tanto, la competencia ya automatizó sus procesos.
                                </p>
                            </div>
                        </div>
                    </article>
                </BlurFade>

                <BlurFade delay={0.2} className="lg:col-span-5">
                    <article className="surface-navy h-full rounded-[2rem] p-8 text-white transition-transform duration-500 hover:-translate-y-1 md:p-10">
                        <div className="flex h-full flex-col justify-between gap-12">
                            <div className="flex items-start justify-between gap-6">
                                <span className="font-editorial text-7xl leading-none text-white/10 md:text-8xl">02</span>
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200">
                                    <span className="material-symbols-outlined text-3xl">visibility_off</span>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold tracking-tight text-white">Decisiones a ciegas</h3>
                                <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
                                    Si no sabes cuál es tu producto estrella, cuánto vendiste esta semana o cuántos clientes perdiste, estás adivinando. Y adivinar es la forma más cara de gestionar un negocio.
                                </p>
                            </div>
                        </div>
                    </article>
                </BlurFade>

                <BlurFade delay={0.3} className="lg:col-span-12">
                    <article className="surface-paper rounded-[2rem] p-8 transition-transform duration-500 hover:-translate-y-1 md:p-10 lg:p-12">
                        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                            <div>
                                <span className="font-editorial text-7xl leading-none text-[#006ee6]/20 md:text-8xl">03</span>
                                <h3 className="mt-4 text-3xl font-bold tracking-tight text-[#172033]">Tu negocio depende de ti</h3>
                            </div>
                            <div className="max-w-2xl">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#006ee6]/10 bg-[#dff0ff] text-[#006ee6]">
                                    <span className="material-symbols-outlined text-3xl">account_tree</span>
                                </div>
                                <p className="text-base leading-8 text-[#5f6c7b] md:text-lg">
                                    Si tú no estás presente, ¿tu negocio sigue funcionando? Si la respuesta es no, no tienes una empresa estructurada, tienes un empleo que tú mismo te creaste.
                                </p>
                            </div>
                        </div>
                    </article>
                </BlurFade>
            </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="relative w-full overflow-hidden bg-[#0b1121]">
        <div className="relative h-[56vh] min-h-[420px] w-full">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
                poster="/Video_pagina_alcaldia.jpg"
                aria-label="Video de operación empresarial automatizada"
            >
                <source src="/Video_pagina_alcaldia.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,17,33,0.25),rgba(11,17,33,0.72))]"></div>
            <div className="absolute inset-x-0 bottom-0 z-20 px-6 pb-10 md:pb-14">
                <div className="mx-auto max-w-[1200px]">
                    <BlurFade className="max-w-3xl">
                        <span className="eyebrow mb-5 !text-cyan-200">Operación visible</span>
                        <h2 className="text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-5xl lg:text-6xl">
                            Operación sin esfuerzo. Sistemas que trabajan por ti.
                        </h2>
                    </BlurFade>
                </div>
            </div>
        </div>
      </section>

      {/* 3. AUTORIDAD IMPLÍCITA */}
      <section id="autoridad" className="surface-light relative overflow-hidden py-24 md:py-32">
        <div className="rule-dots absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true"></div>
        <div className="absolute left-[-10%] top-[20%] h-[520px] w-[520px] rounded-full bg-[#dff0ff] blur-[140px]" aria-hidden="true"></div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
            <BlurFade>
                <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <span className="eyebrow mb-5">Servicios complementarios</span>
                        <h3 className="text-4xl font-semibold tracking-[-0.04em] text-[#172033] md:text-5xl">Lo esencial para que la automatización convierta.</h3>
                    </div>
                    <p className="max-w-md text-base leading-8 text-[#5f6c7b] md:text-lg">
                        Web, contenido y datos conectados a la misma lógica: menos fricción, más control, más ventas.
                    </p>
                </div>
            </BlurFade>
                
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {/* Pilar 1: Webs */}
                    <BlurFade delay={0.1} className="group surface-paper relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] transition-transform duration-500 hover:-translate-y-1">
                        <div className="relative aspect-[16/10] w-full overflow-hidden">
                            <Image src="/Webs de Alta Conversión.png" alt="Webs de alta conversión" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="flex flex-1 flex-col p-8 md:p-9">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#006ee6]/10 bg-[#dff0ff] text-[#006ee6] transition-transform duration-300 group-hover:scale-105">
                                <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                            </div>
                            <h4 className="text-2xl font-bold leading-tight tracking-tight text-[#172033]">Webs de alta conversión</h4>
                            <p className="mt-4 text-base leading-8 text-[#5f6c7b]">Páginas rápidas para que tus clientes te encuentren en Google y <span className="font-bold text-[#006ee6]">te compren sin dar tantas vueltas</span>.</p>
                        </div>
                    </BlurFade>

                    {/* Pilar 2: Video */}
                    <BlurFade delay={0.2} className="group surface-paper relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] transition-transform duration-500 hover:-translate-y-1">
                        <div className="relative aspect-[16/10] w-full overflow-hidden">
                            <Image src="/Celular.jpg" alt="Edición de Video" fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="flex flex-1 flex-col p-8 md:p-9">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#006ee6]/10 bg-[#dff0ff] text-[#006ee6] transition-transform duration-300 group-hover:scale-105">
                                <span className="material-symbols-outlined text-2xl">movie_edit</span>
                            </div>
                            <h4 className="text-2xl font-bold leading-tight tracking-tight text-[#172033]">Edición de Video</h4>
                            <p className="mt-4 text-base leading-8 text-[#5f6c7b]">Reels y TikToks editados para enganchar. <span className="font-bold text-[#006ee6]">Vende más</span> con el mismo Instagram que ya tienes.</p>
                        </div>
                    </BlurFade>

                    {/* Pilar 3: Datos */}
                    <BlurFade delay={0.3} className="group surface-paper relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] transition-transform duration-500 hover:-translate-y-1">
                        <div className="relative aspect-[16/10] w-full overflow-hidden">
                            <Image src="/Inteligencia Ejecutiva.png" alt="Análisis de Datos" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                        </div>
                        <div className="flex flex-1 flex-col p-8 md:p-9">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#006ee6]/10 bg-[#dff0ff] text-[#006ee6] transition-transform duration-300 group-hover:scale-105">
                                <span className="material-symbols-outlined text-2xl">query_stats</span>
                            </div>
                            <h4 className="text-2xl font-bold leading-tight tracking-tight text-[#172033]">Análisis de Datos</h4>
                            <p className="mt-4 text-base leading-8 text-[#5f6c7b]">Paneles visuales donde ves <span className="font-bold text-[#006ee6]">qué se vende, cuándo y a quién</span>. Decides con números, no con suposiciones.</p>
                        </div>
                    </BlurFade>
                </div>
            </div>
      </section>

      {/* EXPLORA MI ECOSISTEMA */}
      <section className="surface-light relative overflow-hidden py-24 md:py-32">
        <div className="rule-dots absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true"></div>
        <div className="absolute right-[-8%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[#dff0ff] blur-[140px]" aria-hidden="true"></div>
        
        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8 reveal-on-scroll">
            <div className="mb-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                    <span className="eyebrow mb-5">Ecosistema</span>
                    <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#172033] md:text-5xl">Todo mi ecosistema</h2>
                </div>
                <p className="max-w-xl text-lg leading-8 text-[#5f6c7b] md:text-xl">Casos de éxito, proyectos y soluciones empaquetadas listas para integrarse en tu operación.</p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="flex w-full flex-col">
                    <a href="/soluciones" className="group relative flex min-h-[420px] w-full flex-col justify-end overflow-hidden rounded-[2rem] border border-[#172033]/10 shadow-[0_24px_80px_-40px_rgba(23,32,51,0.35)] transition-transform duration-500 hover:-translate-y-1">
                        <Image src="/DashboardDatos.jpg" alt="Ecosistema de Soluciones" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,17,33,0)_0%,rgba(11,17,33,0.72)_60%,rgba(11,17,33,0.92)_100%)]"></div>
                        <div className="relative z-10 p-8 md:p-10">
                            <span className="eyebrow mb-4 !text-cyan-200">Soluciones listas</span>
                            <h3 className="text-3xl font-bold tracking-tight text-white">Sistemas preconstruidos</h3>
                            <p className="mt-4 max-w-lg text-lg leading-8 text-slate-200">Sistemas que puedes conectar hoy mismo a tu empresa.</p>
                            <span className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-all group-hover:gap-3">
                                Ver soluciones <span className="material-symbols-outlined text-base">arrow_forward</span>
                            </span>
                        </div>
                    </a>
                </div>

                <div className="flex w-full flex-col gap-6">
                    <a href="/proyectos" className="surface-paper group flex h-full items-start justify-between gap-6 rounded-[2rem] p-8 transition-transform duration-500 hover:-translate-y-1 md:p-10">
                        <div className="flex-1">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#006ee6]/10 bg-[#dff0ff] text-[#006ee6]">
                                <span className="material-symbols-outlined text-3xl">work</span>
                            </div>
                            <h3 className="text-3xl font-bold tracking-tight text-[#172033]">Proyectos reales</h3>
                            <p className="mt-4 max-w-md text-base leading-8 text-[#5f6c7b] md:text-lg">Mira lo que ya construí: desde SaaS con IA hasta sistemas integrales de datos.</p>
                        </div>
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#006ee6]/10 bg-white text-[#006ee6] transition-transform duration-300 group-hover:translate-x-1">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </div>
                    </a>

                    <a href="/testimonios" className="surface-navy group flex h-full items-start justify-between gap-6 rounded-[2rem] p-8 text-white transition-transform duration-500 hover:-translate-y-1 md:p-10">
                        <div className="flex-1">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-cyan-200">
                                <span className="material-symbols-outlined text-3xl">forum</span>
                            </div>
                            <h3 className="text-3xl font-bold tracking-tight text-white">Casos de éxito</h3>
                            <p className="mt-4 max-w-md text-base leading-8 text-slate-300 md:text-lg">Descubre las experiencias de otros empresarios que transformaron sus operaciones.</p>
                        </div>
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-200 transition-transform duration-300 group-hover:translate-x-1">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
      </section>

      {/* 5. EL CAMINO DEFINIDO (Roadmap) */}
      <section id="roadmap" className="surface-light relative z-10 overflow-hidden py-24 md:py-32">
        <div className="rule-dots absolute inset-0 opacity-25 pointer-events-none" aria-hidden="true"></div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="mb-16 max-w-3xl reveal-on-scroll md:mb-20">
                <span className="eyebrow mb-5">Proceso</span>
                <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#172033] md:text-5xl lg:text-6xl">Así funciona el proceso</h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6c7b] md:text-xl">4 pasos claros. Sin sorpresas, sin letra pequeña.</p>
            </div>

            <div className="relative grid grid-cols-1 gap-6 reveal-on-scroll md:grid-cols-2 lg:grid-cols-4 stagger-children">
                <div className="absolute left-[12.5%] top-6 hidden h-px w-[75%] bg-[#172033]/10 lg:block" aria-hidden="true"></div>

                {/* Fase 1 */}
                <div className="reveal-on-scroll flex h-full flex-col">
                    <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#006ee6]/15 bg-white text-sm font-bold text-[#006ee6] shadow-sm">1</div>
                    <article className="surface-paper flex-1 rounded-[2rem] p-8 transition-transform duration-500 hover:-translate-y-1">
                        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#006ee6]/10 bg-[#dff0ff] text-[#006ee6]">
                            <MessageSquare className="h-7 w-7" strokeWidth={1.5} />
                        </div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#5f6c7b]">Fase 1</p>
                        <h4 className="mt-3 text-2xl font-bold tracking-tight text-[#172033]">Entiendo tu negocio</h4>
                        <p className="mt-4 text-base leading-8 text-[#5f6c7b]">Me siento contigo, entiendo cómo funciona tu operación y encuentro exactamente dónde estás perdiendo tiempo y dinero.</p>
                    </article>
                </div>

                {/* Fase 2 */}
                <div className="reveal-on-scroll flex h-full flex-col">
                    <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#006ee6]/15 bg-white text-sm font-bold text-[#006ee6] shadow-sm">2</div>
                    <article className="surface-paper flex-1 rounded-[2rem] p-8 transition-transform duration-500 hover:-translate-y-1">
                        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#006ee6]/10 bg-[#dff0ff] text-[#006ee6]">
                            <Lightbulb className="h-7 w-7" strokeWidth={1.5} />
                        </div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#5f6c7b]">Fase 2</p>
                        <h4 className="mt-3 text-2xl font-bold tracking-tight text-[#172033]">Diseño tu solución</h4>
                        <p className="mt-4 text-base leading-8 text-[#5f6c7b]">Armo un plan a medida para tu negocio: qué automatizar, qué herramientas usar, cómo conectar todo.</p>
                    </article>
                </div>

                {/* Fase 3 */}
                <div className="reveal-on-scroll flex h-full flex-col">
                    <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#006ee6]/15 bg-white text-sm font-bold text-[#006ee6] shadow-sm">3</div>
                    <article className="surface-paper flex-1 rounded-[2rem] p-8 transition-transform duration-500 hover:-translate-y-1">
                        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#006ee6]/10 bg-[#dff0ff] text-[#006ee6]">
                            <Rocket className="h-7 w-7" strokeWidth={1.5} />
                        </div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#5f6c7b]">Fase 3</p>
                        <h4 className="mt-3 text-2xl font-bold tracking-tight text-[#172033]">Lo construyo y lo activo</h4>
                        <p className="mt-4 text-base leading-8 text-[#5f6c7b]">Desarrollo todo, lo conecto a tus sistemas, lo pruebo y lo dejo funcionando sin que tengas que hacer nada técnico.</p>
                    </article>
                </div>

                {/* Fase 4 */}
                <div className="reveal-on-scroll flex h-full flex-col">
                    <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#006ee6]/15 bg-white text-sm font-bold text-[#006ee6] shadow-sm">4</div>
                    <article className="surface-paper flex-1 rounded-[2rem] p-8 transition-transform duration-500 hover:-translate-y-1">
                        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#006ee6]/10 bg-[#dff0ff] text-[#006ee6]">
                            <TrendingUp className="h-7 w-7" strokeWidth={1.5} />
                        </div>
                        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#5f6c7b]">Fase 4</p>
                        <h4 className="mt-3 text-2xl font-bold tracking-tight text-[#172033]">Crecimiento continuo</h4>
                        <p className="mt-4 text-base leading-8 text-[#5f6c7b]">Recuperás tu tiempo. Tu negocio empieza a funcionar con menos esfuerzo y listo para escalar.</p>
                    </article>
                </div>
            </div>
        </div>
      </section>

      {/* 6. MECANISMO DE EXCLUSIÓN */}
      <section id="exclusion" className="relative overflow-hidden border-t border-white/5 bg-[#070b14] py-24 md:py-32">
        <div className="absolute inset-0 opacity-70" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,110,230,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(94,234,212,0.08),transparent_24%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-16 px-6 reveal-on-scroll lg:flex-row lg:gap-20 lg:px-8">
            <div className="flex-1 text-left">
                <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-cyan-100 transition-colors hover:bg-cyan-300/15">
                    <span className="h-2 w-2 rounded-full bg-cyan-300"></span>
                    <span className="text-xs font-bold uppercase tracking-[0.22em] md:text-sm">Nota importante</span>
                </div>
                
                <h2 className="max-w-xl text-balance text-4xl font-bold leading-[1.02] tracking-[-0.04em] text-white md:text-5xl lg:text-[4.4rem]">
                    Esto no es para todos.
                </h2>
                
                <div className="mt-8 max-w-xl space-y-6 text-lg leading-9 text-slate-300">
                    <p>La inteligencia artificial y las automatizaciones no son píldoras mágicas para negocios rotos. Son aceleradores para negocios que quieren ir más rápido.</p>
                    <p>Trabajo exclusivamente con emprendedores y dueños de negocio que entienden que <span className="font-bold text-cyan-200">la innovación es una obligación, no una opción</span>. Si estás dispuesto a transformar tu operación y dejar de ser un empleado en tu propia empresa, podemos trabajar juntos.</p>
                </div>
            </div>
            
            <div className="relative mt-12 flex w-full max-w-[500px] flex-1 justify-center reveal-on-scroll lg:mt-0">
                <div className="absolute left-1/2 top-1/2 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#006ee6]/20 blur-[110px]" aria-hidden="true"></div>
                <div className="surface-navy relative z-10 w-full max-w-[450px] rounded-[2rem] p-5">
                    <div className="relative aspect-square w-full overflow-hidden rounded-[1.5rem]" style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 68%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 68%, transparent 100%)' }}>
                        <Image 
                            src="/CristoElemento3D.png"
                            alt="Innovación y tecnología 3D"
                            fill
                            className="object-contain transition-transform duration-700 hover:-translate-y-2"
                        />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="relative overflow-hidden bg-[#070b14] py-20 md:py-28">
        <div className="absolute inset-0 opacity-70" aria-hidden="true">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="absolute left-[-10%] top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-[#006ee6]/10 blur-[130px]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-[1000px] px-6 lg:px-8">
            <div className="surface-navy reveal-on-scroll rounded-[2rem] p-8 md:p-12 lg:p-14">
                <div className="flex flex-col gap-10 md:flex-row md:items-start">
                    <div className="relative mx-auto h-32 w-32 shrink-0 overflow-hidden rounded-full border border-cyan-300/20 bg-white/5 p-1 md:mx-0 md:h-40 md:w-40">
                        <div className="relative h-full w-full overflow-hidden rounded-full">
                             <Image src="/FotoPersonal.jpg" alt="Jonathan Chavez" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <span className="eyebrow mb-4 !text-cyan-200">Sobre mí</span>
                        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Soy Jonathan Chávez.</h2>
                        <div className="mt-6 space-y-5 text-lg leading-8 text-slate-300">
                            <p>Vivo en <strong className="text-white">Barrancabermeja</strong>. Actualmente estoy estudiando <strong className="text-white">Ingeniería de Software en la Uniminuto</strong>, y en paralelo llevo más de 2 años creando soluciones tecnológicas reales para negocios locales.</p>
                            <p>No soy una consultora corporativa ni una agencia de marketing genérica. Soy una persona real que se sienta a entender cómo funciona tu negocio, identifica qué procesos te están quitando tiempo, y construye sistemas con IA que los resuelvan. Así de simple.</p>
                            <p>Mi enfoque es práctico: <strong className="text-cyan-200">si algo no te ahorra tiempo o no te genera plata, no lo propongo</strong>. Trabajo con tecnologías modernas como Python, Next.js, Supabase y APIs de inteligencia artificial para crear herramientas que funcionen de verdad.</p>
                        </div>

                        <div className="mt-8 space-y-4">
                            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                                <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200"><span className="material-symbols-outlined text-sm">smart_toy</span> Automatización con IA</span>
                                <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200"><span className="material-symbols-outlined text-sm">code</span> Desarrollo Web</span>
                                <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200"><span className="material-symbols-outlined text-sm">insights</span> Análisis de Datos</span>
                            </div>
                            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                                <span className="flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100"><span className="material-symbols-outlined text-sm">school</span> Ing. Software, Uniminuto</span>
                                <span className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200"><span className="material-symbols-outlined text-sm">location_on</span> Barrancabermeja, Santander</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 9. CONTACTO — WhatsApp CTA */}
      <section id="contacto" className="surface-light relative z-10 overflow-hidden py-24 md:py-32">
        <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[#dff0ff] blur-[130px]" aria-hidden="true"></div>
        
        <div className="relative z-20 mx-auto max-w-[760px] px-6 text-center reveal-on-scroll lg:px-8">
            <span className="eyebrow mb-5 justify-center">Contacto</span>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-[#172033] md:text-5xl">¿Empezamos?</h2>
            <p className="mt-5 text-lg leading-8 text-[#5f6c7b] md:text-xl">Contame tu problema por WhatsApp y te envío una propuesta en <strong className="text-[#172033]">24 horas</strong>.</p>
            
            <a href="https://wa.me/573223663275" target="_blank" rel="noopener noreferrer" className="btn-press group mt-9 inline-flex items-center justify-center gap-4 rounded-full border border-emerald-200 bg-white px-10 py-5 text-xl font-bold text-emerald-700 shadow-[0_20px_50px_-24px_rgba(16,185,129,0.35)] transition-all hover:bg-emerald-500 hover:text-white">
                <svg className="h-8 w-8 fill-current transition-transform group-hover:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                Escribime por WhatsApp
            </a>
            
            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-[#5f6c7b]">
                <span className="material-symbols-outlined text-base">schedule</span>
                Respondo en menos de 1 hora
            </p>

            <div className="mt-10 border-t border-[#172033]/10 pt-8">
                <p className="text-sm text-[#5f6c7b]">O escríbeme al correo:</p>
                <a href="mailto:joticachavez69@gmail.com" className="mt-1 inline-block text-sm font-semibold text-[#006ee6] transition-colors hover:text-[#005bb8]">joticachavez69@gmail.com</a>
            </div>
        </div>
      </section>
      </main>

      {/* 7. CIERRE DE SEGURIDAD Y CONFIANZA */}
      <footer className="relative overflow-hidden border-t border-[#172033]/10 bg-[#f7f9fc] pb-12 pt-20 md:pb-16">
        <div className="absolute right-1/4 top-0 h-[360px] w-[360px] rounded-full bg-[#dff0ff] blur-[120px]" aria-hidden="true"></div>

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-8">
            <div className="mb-16 flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
                <div className="text-center md:text-left">
                    <div className="mb-5 flex items-center justify-center gap-3 md:justify-start">
                        <Image src="/logo.png" alt="Jonathan Chavez Logo" width={40} height={40} className="object-contain" />
                        <span className="text-3xl font-bold tracking-tight text-[#172033]">Jonathan Chavez</span>
                    </div>
                    <p className="font-semibold text-[#006ee6]">Especialista en Automatizaciones y Ecosistemas con IA</p>
                    <div className="mt-5 space-y-2 text-sm font-medium text-[#5f6c7b]">
                        <p className="flex items-center justify-center gap-2 md:justify-start"><span className="material-symbols-outlined text-[18px]">location_on</span> Barrancabermeja, Santander</p>
                        <p className="flex items-center justify-center gap-2 md:justify-start"><span className="material-symbols-outlined text-[18px]">public</span> Operación 100% remota</p>
                    </div>
                </div>
                <div className="text-center md:text-right">
                    <p className="mb-3 font-semibold text-[#5f6c7b]">Contacto directo:</p>
                    <a href="https://wa.me/573223663275" className="mb-2 block text-3xl font-black tracking-tight text-[#006ee6] transition-colors hover:text-[#005bb8]">+57 322 366 3275</a>
                    <a href="mailto:joticachavez69@gmail.com" className="block font-bold text-[#172033] transition-colors hover:text-[#006ee6]">joticachavez69@gmail.com</a>
                </div>
            </div>
            
            <div className="mx-auto max-w-4xl border-t border-[#172033]/10 pb-8 pt-12 text-center">
                <p className="mb-8 text-xl font-semibold leading-relaxed tracking-tight text-[#172033] md:text-2xl">
                    "Lo que hoy haces a mano, mañana se hace solo.<br/>
                    <span className="font-black text-[#006ee6]">Ahorra tiempo. Gana dinero. Deja que la IA trabaje por ti.</span>"
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#5f6c7b]">&copy; 2026 Jonathan Chávez</p>
            </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/573223663275" target="_blank" rel="noopener noreferrer" aria-label="Abrir conversación por WhatsApp" className="group fixed bottom-6 right-6 z-[100] flex items-center gap-3">
        <span className="pointer-events-none whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
          ¿Hablamos?
        </span>
        <span className="btn-press flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_18px_40px_-18px_rgba(16,185,129,0.7)] transition-all hover:bg-emerald-400 md:h-16 md:w-16">
          <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        </span>
      </a>
    </>
  );
}
