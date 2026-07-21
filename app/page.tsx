'use client';

import { useEffect, useRef, useState, type MouseEvent, type PointerEvent } from 'react';
import {
  atracoes,
  destaques,
  eventoConfig,
  palestrantes,
  patrocinadores,
  programacaoManha,
  programacaoTarde,
} from './data';

const heroImage =
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1800&q=85';

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function smoothScrollToSection(href: string) {
  const target = document.querySelector(href);
  if (!target) return;
  const startY = window.scrollY;
  const headerH = 84;
  const targetY = target.getBoundingClientRect().top + startY - headerH;
  const distance = targetY - startY;
  const duration = 750;
  const startTime = performance.now();
  const ease = (p: number) => 1 - Math.pow(1 - p, 3);
  const step = (time: number) => {
    const progress = Math.min((time - startTime) / duration, 1);
    window.scrollTo({ top: startY + distance * ease(progress), left: 0, behavior: 'auto' });
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function ProgramacaoCard({
  titulo,
  periodo,
  itens,
}: {
  titulo: string;
  periodo: string;
  itens: Array<{ horario: string; atividade: string }>;
}) {
  return (
    <div data-reveal className="overflow-hidden rounded-2xl bg-white shadow-[0_2px_10px_rgba(18,63,42,0.06)]">
      <div className="bg-[#123F2A] px-6 py-5 md:px-7">
        <h3 className="text-xl font-extrabold text-white md:text-2xl">
          {titulo} <span className="text-sm font-medium text-[#B9D6C4]">{periodo}</span>
        </h3>
      </div>
      <div className="flex flex-col gap-5 p-6 md:gap-6 md:p-7">
        {itens.map((item, index) => (
          <div key={`${item.horario}-${item.atividade}`} className="flex items-start gap-4">
            <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#E7F0E4] text-xs font-extrabold text-[#123F2A]">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <span className="inline-flex rounded-md bg-[#F2F6EF] px-2.5 py-1 text-xs font-bold text-[#123F2A]">
                {item.horario}
              </span>
              <p className="mt-2 text-[0.96rem] font-medium leading-6 text-[#243128]">{item.atividade}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PalestranteCard({ palestrante }: { palestrante: (typeof palestrantes)[number] }) {
  const [expandido, setExpandido] = useState(false);
  return (
    <article className="w-[min(84vw,336px)] flex-none snap-start overflow-hidden rounded-2xl border border-[#123F2A]/10 bg-white shadow-[0_1px_4px_rgba(18,63,42,0.05)]">
      <div className="relative aspect-[4/3] bg-[#E7F0E4]">
        <img src={palestrante.foto} alt={palestrante.nome} className="h-full w-full object-cover object-top" />
        {palestrante.horario && (
          <span className="absolute right-3 top-3 rounded-md bg-white px-2.5 py-1 text-xs font-extrabold text-[#123F2A]">
            {palestrante.horario}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-[1.12rem] font-extrabold leading-tight text-[#123F2A]">{palestrante.nome}</h3>
        <p className="mt-2 border-b border-[#EEF2EC] pb-3.5 text-[0.86rem] font-bold text-[#1F6B45]">
          {palestrante.tema}
        </p>
        <button
          type="button"
          onClick={() => setExpandido((v) => !v)}
          className="mt-4 flex w-full items-center justify-between rounded-lg border border-[#E7ECE5] bg-[#F7F9F5] px-3.5 py-3 text-[0.84rem] font-bold text-[#123F2A] transition hover:bg-[#EAF3E8]"
        >
          <span>Conheça o especialista</span>
          <span className={`transition-transform duration-300 ${expandido ? 'rotate-180' : ''}`}>▼</span>
        </button>
        {expandido && (
          <p className="mt-3.5 whitespace-pre-line rounded-lg bg-[#F7F9F5] p-3.5 text-[0.84rem] leading-6 text-[#4B564E]">
            {palestrante.bio}
          </p>
        )}
      </div>
    </article>
  );
}

function useCarousel<T>(items: T[]) {
  const ref = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ x: number; left: number } | null>(null);
  const loop = [...items, ...items, ...items];

  const getStep = () => {
    const el = ref.current;
    const first = el?.firstElementChild as HTMLElement | null;
    if (!el || !first) return 0;
    const gap = parseFloat(window.getComputedStyle(el).columnGap || '0');
    return first.getBoundingClientRect().width + gap;
  };

  const normalize = () => {
    const el = ref.current;
    const step = getStep();
    if (!el || !step) return;
    const cycle = step * items.length;
    if (el.scrollLeft >= cycle * 2) el.scrollLeft -= cycle;
    else if (el.scrollLeft < cycle * 0.5) el.scrollLeft += cycle;
  };

  const smoothTo = (left: number) => {
    const el = ref.current;
    if (!el) return;
    el.style.scrollSnapType = 'none';
    el.scrollTo({ left, behavior: 'smooth' });
    setTimeout(() => {
      el.style.scrollSnapType = '';
      normalize();
    }, 480);
  };

  const byItem = (dir: 1 | -1) => {
    const el = ref.current;
    const step = getStep();
    if (!el || !step) return;
    smoothTo(el.scrollLeft + step * dir);
  };

  useEffect(() => {
    const step = getStep();
    if (ref.current && step) ref.current.scrollLeft = step * items.length;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement && e.target.closest('button, a')) return;
    dragRef.current = { x: e.clientX, left: e.currentTarget.scrollLeft };
    e.currentTarget.setPointerCapture(e.pointerId);
    e.currentTarget.style.scrollSnapType = 'none';
    e.currentTarget.style.cursor = 'grabbing';
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    const d = dragRef.current;
    if (!d) return;
    e.currentTarget.scrollLeft = d.left - (e.clientX - d.x);
  };
  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    const d = dragRef.current;
    if (!d) return;
    dragRef.current = null;
    e.currentTarget.style.cursor = 'grab';
    e.currentTarget.style.scrollSnapType = '';
    const moved = e.currentTarget.scrollLeft - d.left;
    const step = getStep();
    if (!step) return;
    const dir = Math.abs(moved) > 30 ? (moved > 0 ? 1 : -1) : 0;
    const nearest = Math.round(e.currentTarget.scrollLeft / step);
    smoothTo((nearest + dir) * step);
  };

  return { ref, loop, prev: () => byItem(-1), next: () => byItem(1), onPointerDown, onPointerMove, onPointerUp };
}

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [loaded, setLoaded] = useState(false);
  useReveal();

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 650);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    const onResize = () => setIsDesktop(window.innerWidth >= 1024);
    onResize();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const mapsQuery = encodeURIComponent(`${eventoConfig.local}, ${eventoConfig.endereco}`);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const menuLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#programacao', label: 'Programação' },
    { href: '#palestrantes', label: 'Palestrantes' },
    { href: '#atracoes', label: 'Atrações' },
    { href: '#local', label: 'Local' },
  ];
  const handleSectionClick = (href: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuAberto(false);
    smoothScrollToSection(href);
    window.history.pushState(null, '', href);
  };

  const palestrantesCarousel = useCarousel(palestrantes);
  const atracoesCarousel = useCarousel(atracoes);
  const showFloatingCta = !isDesktop && scrolled;

  return (
    <main className="min-h-screen bg-[#FAF8F2] text-[#1B2420] antialiased">
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0A2417] transition-opacity duration-700"
        style={{ opacity: loaded ? 0 : 1, visibility: loaded ? 'hidden' : 'visible', pointerEvents: 'none' }}
      >
        <div className="text-center" style={{ animation: 'logoIntro .9s ease both' }}>
          <p className="m-0 text-[clamp(1.3rem,4vw,2.1rem)] font-extrabold text-[#EAF3E8]">2º Fórum Estancieiro</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#EAF3E8]/65">carregando</p>
        </div>
      </div>

      <header
        className="fixed inset-x-0 top-0 z-[100] transition-[background,box-shadow] duration-300"
        style={{
          background: scrolled ? 'rgba(10,36,24,0.94)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 8px 24px rgba(0,0,0,0.18)' : 'none',
        }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <a href="#inicio" onClick={handleSectionClick('#inicio')} className="text-[clamp(0.95rem,2.1vw,1.15rem)] font-extrabold text-white">
            2º Fórum Estancieiro
          </a>

          {isDesktop ? (
            <nav className="flex items-center gap-7">
              {menuLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={handleSectionClick(link.href)} className="text-[0.94rem] font-semibold text-white/90 hover:text-white">
                  {link.label}
                </a>
              ))}
              <a
                href={eventoConfig.linkInscricao}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white px-5 py-2.5 text-[0.88rem] font-extrabold text-[#123F2A] hover:bg-emerald-50"
              >
                Inscrever-se
              </a>
            </nav>
          ) : (
            <button
              type="button"
              onClick={() => setMenuAberto((v) => !v)}
              aria-label="Abrir menu"
              className="flex h-11 w-11 flex-none items-center justify-center rounded-lg border border-white/30 bg-white/10 text-xl text-white"
            >
              {menuAberto ? '✕' : '≡'}
            </button>
          )}
        </div>

        {menuAberto && !isDesktop && (
          <nav className="flex flex-col gap-0.5 bg-[#0F3524] px-5 pb-6 pt-1.5">
            {menuLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleSectionClick(link.href)} className="border-b border-white/10 py-3.5 text-[1.05rem] font-semibold text-white">
                {link.label}
              </a>
            ))}
            <a
              href={eventoConfig.linkInscricao}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3.5 rounded-lg bg-white py-3.5 text-center font-extrabold text-[#123F2A]"
            >
              Inscrever-se
            </a>
          </nav>
        )}
      </header>

      <section id="inicio" className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#123F2A]">
        <img src={heroImage} alt="Mãos segurando terra e uma muda" className="absolute inset-0 h-full w-full object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(100deg, rgba(9,33,22,0.96) 6%, rgba(18,63,42,0.84) 42%, rgba(18,63,42,0.32) 88%)' }}
        />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 pt-32">
          <div className="max-w-xl">
            <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[0.82rem] font-bold text-[#EAF3E8]">
              {eventoConfig.data} · {eventoConfig.horario}
            </span>
            <h1 className="mt-5 text-[clamp(2.1rem,6vw,4.2rem)] font-extrabold leading-[1.06] tracking-tight text-white">
              {eventoConfig.titulo}
            </h1>
            <p className="mt-5 max-w-lg text-[clamp(1rem,2.2vw,1.32rem)] font-medium leading-[1.55] text-[#E7F0E4]">
              {eventoConfig.slogan}
            </p>
            <div className="mt-9 flex flex-wrap gap-3.5">
              <a
                href={eventoConfig.linkInscricao}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white px-7 py-4 text-[0.95rem] font-extrabold text-[#123F2A] hover:bg-emerald-50"
              >
                Garantir inscrição
              </a>
              <a
                href="#programacao"
                onClick={handleSectionClick('#programacao')}
                className="rounded-lg border-[1.5px] border-white/50 px-7 py-4 text-[0.95rem] font-bold text-white hover:bg-white/10"
              >
                Ver programação
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-2xl text-white/70" style={{ animation: 'bounceArrow 2.2s ease-in-out infinite' }}>
          ↓
        </div>
      </section>

      <section id="sobre" className="scroll-mt-[84px] px-5 py-16 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-12">
          <div data-reveal className="min-w-[260px] flex-[1_1_300px]">
            <p className="m-0 text-[0.85rem] font-bold uppercase tracking-[0.18em] text-[#1F6B45]">Sobre o fórum</p>
            <h2 className="mt-3.5 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-[1.16] text-[#123F2A]">
              Natureza, educação e troca prática em um único dia.
            </h2>
          </div>
          <div data-reveal className="min-w-[280px] flex-[1.3_1_360px]">
            <p className="m-0 text-[1.05rem] leading-[1.75] text-[#3F4A43]">{eventoConfig.sobre}</p>
            <div className="mt-8 grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
              {destaques.map((item) => (
                <article key={item.titulo} className="rounded-xl border border-[#123F2A]/10 bg-white p-5 shadow-sm">
                  <h3 className="m-0 text-[1.05rem] font-bold leading-tight text-[#123F2A]">{item.titulo}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-[#5B665F]">{item.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="programacao" className="scroll-mt-[84px] bg-[#E7F0E4] px-5 py-16 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="max-w-xl">
            <p className="m-0 text-[0.85rem] font-bold uppercase tracking-[0.18em] text-[#1F6B45]">Programação</p>
            <h2 className="mt-3.5 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-[1.16] text-[#123F2A]">
              Cronograma oficial do evento.
            </h2>
          </div>
          <div className="mt-10 grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))' }}>
            <ProgramacaoCard titulo="Manhã" periodo="(08h20 às 11h45)" itens={programacaoManha} />
            <ProgramacaoCard titulo="Tarde" periodo="(13h às 18h)" itens={programacaoTarde} />
          </div>
        </div>
      </section>

      <section id="palestrantes" className="scroll-mt-[84px] overflow-hidden px-5 py-16 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="max-w-xl">
            <p className="m-0 text-[0.85rem] font-bold uppercase tracking-[0.18em] text-[#1F6B45]">Palestrantes</p>
            <h2 className="mt-3.5 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-[1.16] text-[#123F2A]">
              Especialistas e convidados confirmados.
            </h2>
          </div>
          <div data-reveal className="relative mt-10">
            <div
              ref={palestrantesCarousel.ref}
              onPointerDown={palestrantesCarousel.onPointerDown}
              onPointerMove={palestrantesCarousel.onPointerMove}
              onPointerUp={palestrantesCarousel.onPointerUp}
              onPointerCancel={palestrantesCarousel.onPointerUp}
              className="flex cursor-grab gap-5 overflow-x-auto p-0.5 pb-2.5 [scrollbar-width:none]"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {palestrantesCarousel.loop.map((p, i) => (
                <PalestranteCard key={i} palestrante={p} />
              ))}
            </div>
            <button type="button" onClick={palestrantesCarousel.prev} aria-label="Voltar" className="absolute -left-1.5 top-[36%] flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-extrabold text-[#123F2A] shadow-lg">‹</button>
            <button type="button" onClick={palestrantesCarousel.next} aria-label="Próximo" className="absolute -right-1.5 top-[36%] flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-extrabold text-[#123F2A] shadow-lg">›</button>
          </div>
        </div>
      </section>

      <section id="atracoes" className="scroll-mt-[84px] overflow-hidden bg-white px-5 py-16 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="max-w-xl">
            <p className="m-0 text-[0.85rem] font-bold uppercase tracking-[0.18em] text-[#1F6B45]">Atrações e oficinas</p>
            <h2 className="mt-3.5 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-[1.16] text-[#123F2A]">
              Vivências para sentir o parque de perto.
            </h2>
          </div>
          <div data-reveal className="relative mt-10">
            <div
              ref={atracoesCarousel.ref}
              onPointerDown={atracoesCarousel.onPointerDown}
              onPointerMove={atracoesCarousel.onPointerMove}
              onPointerUp={atracoesCarousel.onPointerUp}
              onPointerCancel={atracoesCarousel.onPointerUp}
              className="flex cursor-grab gap-5 overflow-x-auto p-0.5 pb-2.5 [scrollbar-width:none]"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {atracoesCarousel.loop.map((a, i) => (
                <article key={i} className="flex w-[min(90vw,720px)] flex-none flex-wrap overflow-hidden rounded-2xl border border-[#123F2A]/10 bg-[#F7F9F5]" style={{ scrollSnapAlign: 'start' }}>
                  <img src={a.imagem} alt={a.titulo} className="min-h-[240px] min-w-[260px] flex-[1_1_280px] object-cover" />
                  <div className="flex min-w-[260px] flex-[1_1_280px] flex-col justify-center p-8">
                    <h3 className="m-0 text-[1.55rem] font-extrabold leading-tight text-[#123F2A]">{a.titulo}</h3>
                    <p className="mt-4 text-[1.02rem] leading-[1.65] text-[#40493F]">{a.descricao}</p>
                  </div>
                </article>
              ))}
            </div>
            <button type="button" onClick={atracoesCarousel.prev} aria-label="Voltar" className="absolute -left-1.5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl font-extrabold text-[#123F2A] shadow-lg">‹</button>
            <button type="button" onClick={atracoesCarousel.next} aria-label="Próximo" className="absolute -right-1.5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl font-extrabold text-[#123F2A] shadow-lg">›</button>
          </div>
        </div>
      </section>

      <section id="local" className="scroll-mt-[84px] bg-[#123F2A] px-5 py-16 text-white md:py-28">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-10">
          <div data-reveal className="min-w-[260px] flex-[1_1_300px]">
            <p className="m-0 text-[0.85rem] font-bold uppercase tracking-[0.18em] text-[#B9D6C4]">Como chegar</p>
            <h2 className="mt-3.5 text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold leading-[1.16]">Endereço do evento</h2>
            <div className="mt-8 rounded-xl bg-[#1B4E33] p-6">
              <p className="m-0 text-[1.1rem] font-extrabold">{eventoConfig.local}</p>
              <p className="mt-3 leading-[1.6] text-[#DCEAE1]">{eventoConfig.endereco}</p>
            </div>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-lg bg-white px-6 py-4 text-[0.92rem] font-extrabold text-[#123F2A]">
              Abrir no Google Maps
            </a>
          </div>
          <div data-reveal className="min-w-[280px] flex-[1.2_1_340px] overflow-hidden rounded-2xl border border-white/15 bg-white/5">
            <iframe
              title="Mapa da Estância e Parque Ecológico das Águas"
              src={`https://www.google.com/maps?q=${mapsQuery}&z=15&output=embed`}
              className="h-full min-h-[340px] w-full border-0"
              style={{ filter: 'saturate(0.6) hue-rotate(60deg)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section id="realizacao" className="bg-[#0F3524] px-5 py-14">
        <div data-reveal className="mx-auto max-w-7xl text-center">
          <p className="m-0 text-[0.85rem] font-bold uppercase tracking-[0.18em] text-[#B9D6C4]">Realização</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-6">
            {patrocinadores.map((p) => (
              <img key={p.id} src={p.logotipo} alt={p.nome} className="max-h-[88px] max-w-[260px] object-contain" />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#0A2417] px-5 py-7 text-[0.88rem] text-[#DCEAE1]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2">
          <p className="m-0 font-bold text-white">{eventoConfig.titulo}</p>
          <p className="m-0">
            {eventoConfig.data} · {eventoConfig.local}
          </p>
        </div>
      </footer>

      {showFloatingCta && (
        <div className="fixed inset-x-4 bottom-4 z-[90]" style={{ animation: 'ctaSlideUp .4s ease' }}>
          <a
            href={eventoConfig.linkInscricao}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-xl bg-[#123F2A] py-4 text-center font-extrabold text-white shadow-[0_8px_24px_rgba(18,63,42,0.35)]"
          >
            Garantir inscrição
          </a>
        </div>
      )}
    </main>
  );
}
