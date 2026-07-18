'use client';

import {
  Children,
  Fragment,
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
  type ReactNode,
} from 'react';
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

const iconesManha = ['🚪', '📝', '☕', '🎤', '✨', '🗣️', '🧗', '🎬', '🍽️'];
const iconesTarde = ['🎙️', '🚣', '🌎', '🏫', '🚌', '🎬', '🥂'];

function ProgramacaoCard({
  titulo,
  periodo,
  itens,
  icones,
}: {
  titulo: string;
  periodo: string;
  itens: Array<{ horario: string; atividade: string }>;
  icones: string[];
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-emerald-900/10 bg-white shadow-sm">
      <div className="bg-[#135C35] px-6 py-5">
        <h3 className="text-2xl font-black text-white">
          {titulo}{' '}
          <span className="text-base font-medium text-emerald-100">{periodo}</span>
        </h3>
      </div>

      <div className="space-y-7 p-6 md:p-8">
        {itens.map((item, index) => (
          <div key={`${item.horario}-${item.atividade}`} className="grid grid-cols-[36px_1fr] gap-4">
            <div className="pt-1 text-2xl leading-none">{icones[index] || '•'}</div>
            <div>
              <span className="inline-flex rounded-lg border border-emerald-900/10 bg-[#F1F6F0] px-3 py-1 text-sm font-black text-[#123F2A]">
                {item.horario}
              </span>
              <p className="mt-2 text-base font-semibold leading-7 text-slate-900">
                {item.atividade}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PalestranteCard({ palestrante }: { palestrante: any }) {
  const [expandido, setExpandido] = useState(false);

  return (
    <article className="min-w-[84vw] snap-start overflow-hidden rounded-lg border border-emerald-900/10 bg-white shadow-sm sm:min-w-[46%] lg:min-w-[calc((100%_-_40px)/3)]">
      <div className="relative aspect-[4/3] bg-emerald-100">
        <img
          src={palestrante.foto}
          alt={`Foto de ${palestrante.nome}`}
          className="h-full w-full object-cover object-top"
        />
        {palestrante.horario && (
          <p className="absolute right-3 top-3 rounded-lg bg-white px-3 py-1 text-xs font-black text-[#123F2A] shadow-sm">
            {palestrante.horario}
          </p>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-black leading-tight text-[#123F2A]">{palestrante.nome}</h3>
        <p className="mt-2 border-b border-slate-100 pb-4 text-sm font-bold text-[#1F6B45]">{palestrante.tema}</p>

        <button
          type="button"
          onClick={() => setExpandido((valor) => !valor)}
          className="mt-5 flex w-full items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm font-black text-[#123F2A] transition hover:bg-[#EAF3E8]"
        >
          <span>Conheça o Especialista</span>
          <span className={`transition-transform duration-300 ${expandido ? 'rotate-180' : ''}`}>▼</span>
        </button>

        <div
          className={`grid transition-all duration-300 ease-out ${
            expandido ? 'mt-4 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <p className="rounded-lg bg-slate-50 p-4 text-sm leading-6 text-slate-600 whitespace-pre-line">
              {palestrante.bio}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

function AutoCarousel({
  children,
  label,
  auto = false,
  loop = false,
}: {
  children: ReactNode;
  label: string;
  auto?: boolean;
  loop?: boolean;
}) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const initializedRef = useRef(false);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    startScrollLeft: number;
  } | null>(null);
  const items = Children.toArray(children);
  const visibleItems = loop ? [...items, ...items, ...items] : items;

  const getStep = () => {
    const carousel = carouselRef.current;
    const firstItem = carousel?.firstElementChild as HTMLElement | null;

    if (!carousel || !firstItem) {
      return 0;
    }

    const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap || '0');
    return firstItem.offsetWidth + gap;
  };

  const normalizeLoop = () => {
    const carousel = carouselRef.current;
    const step = getStep();

    if (!loop || !carousel || !step || items.length === 0) {
      return;
    }

    const fullCycle = step * items.length;

    if (carousel.scrollLeft >= fullCycle * 2) {
      carousel.scrollLeft -= fullCycle;
    }

    if (carousel.scrollLeft < fullCycle * 0.5) {
      carousel.scrollLeft += fullCycle;
    }
  };

  const smoothScrollTo = (left: number) => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    carousel.style.scrollSnapType = 'none';
    carousel.scrollTo({
      left,
      behavior: 'smooth',
    });

    window.setTimeout(() => {
      carousel.style.scrollSnapType = '';
      normalizeLoop();
    }, 560);
  };

  const scrollByItem = (direction: 1 | -1) => {
    const carousel = carouselRef.current;
    const step = getStep();

    if (!carousel || !step) {
      return;
    }

    smoothScrollTo(carousel.scrollLeft + step * direction);
  };

  const snapAfterDrag = (direction: 1 | -1 | 0) => {
    const carousel = carouselRef.current;
    const step = getStep();

    if (!carousel || !step) {
      return;
    }

    const nearestIndex = Math.round(carousel.scrollLeft / step);
    const targetIndex = direction === 0 ? nearestIndex : nearestIndex + direction;

    smoothScrollTo(targetIndex * step);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    const step = getStep();

    if (loop && carousel && step && !initializedRef.current) {
      carousel.scrollLeft = step * items.length;
      initializedRef.current = true;
    }
  }, [loop, items.length]);

  useEffect(() => {
    if (!auto) {
      return;
    }

    const interval = window.setInterval(() => {
      const carousel = carouselRef.current;

      if (!carousel) {
        return;
      }

      scrollByItem(1);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [auto]);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (
      event.target instanceof HTMLElement &&
      event.target.closest('button, a, input, textarea, select, label')
    ) {
      dragRef.current = null;
      return;
    }

    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: event.currentTarget.scrollLeft,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.style.scrollSnapType = 'none';
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;

    if (!drag) {
      return;
    }

    event.currentTarget.scrollLeft = drag.startScrollLeft - (event.clientX - drag.startX);
  };

  const handlePointerEnd = (event: PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;

    if (!drag) {
      return;
    }

    const movedBy = event.currentTarget.scrollLeft - drag.startScrollLeft;
    const direction = Math.abs(movedBy) > 32 ? (movedBy > 0 ? 1 : -1) : 0;

    dragRef.current = null;
    event.currentTarget.style.scrollSnapType = '';
    snapAfterDrag(direction);
  };

  return (
    <div className="relative">
      <div
        ref={carouselRef}
        aria-label={label}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerEnd}
        onPointerCancel={handlePointerEnd}
        className="-mx-4 mt-10 flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-5 [scrollbar-width:none] active:cursor-grabbing sm:-mx-6 sm:px-6 [&::-webkit-scrollbar]:hidden"
      >
        {visibleItems.map((item, index) => (
          <Fragment key={index}>
            {item}
          </Fragment>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-20 hidden items-center justify-between lg:flex">
        <button
          type="button"
          onClick={() => scrollByItem(-1)}
          className="pointer-events-auto -ml-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-black text-[#123F2A] shadow-lg ring-1 ring-emerald-900/10 transition hover:scale-105 hover:bg-[#EAF3E8]"
          aria-label="Voltar"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => scrollByItem(1)}
          className="pointer-events-auto -mr-3 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-black text-[#123F2A] shadow-lg ring-1 ring-emerald-900/10 transition hover:scale-105 hover:bg-[#EAF3E8]"
          aria-label="Próximo"
        >
          ›
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);
  const mapsQuery = encodeURIComponent(`${eventoConfig.local}, ${eventoConfig.endereco}`);
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
  const menuLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#programacao', label: 'Programação' },
    { href: '#palestrantes', label: 'Palestrantes' },
    { href: '#atracoes', label: 'Atrações' },
    { href: '#local', label: 'Local' },
  ];
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    const startY = window.scrollY;
    const headerHeight = 84;
    const targetY = target.getBoundingClientRect().top + startY - headerHeight;
    const distance = targetY - startY;
    const duration = 720;
    const startTime = performance.now();

    const easeInOutCubic = (progress: number) =>
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const animate = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, startY + distance * easeInOutCubic(progress));

      if (progress < 1) {
        window.requestAnimationFrame(animate);
      }
    };

    window.requestAnimationFrame(animate);
  };
  const handleSectionClick = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setMenuAberto(false);
    scrollToSection(href);
    window.history.pushState(null, '', href);
  };

  return (
    <main className="min-h-screen bg-[#F7FAF4] text-slate-800 antialiased">
      <header className="sticky top-0 z-50 border-b border-emerald-950/10 bg-[#F7FAF4]/95 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:grid-cols-[1fr_auto_1fr]">
          <a href="#inicio" onClick={handleSectionClick('#inicio')} className="text-base font-black tracking-tight text-[#123F2A] sm:text-lg">
            2º Fórum Estancieiro
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 lg:flex">
            {menuLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={handleSectionClick(link.href)} className="transition hover:text-[#1F6B45]">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={eventoConfig.linkInscricao}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden justify-self-end rounded-lg bg-[#123F2A] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#1F6B45] lg:inline-flex"
          >
            Inscrever-se
          </a>

          <button
            type="button"
            onClick={() => setMenuAberto((aberto) => !aberto)}
            className={`inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-lg border border-emerald-900/10 bg-white text-2xl font-black leading-none text-[#123F2A] shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-md active:scale-95 lg:hidden ${
              menuAberto ? 'rotate-90 bg-[#EAF3E8]' : 'rotate-0'
            }`}
            aria-expanded={menuAberto}
            aria-label="Abrir menu"
          >
            ≡
          </button>
        </div>

        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity,transform,margin] duration-300 ease-out lg:hidden ${
            menuAberto ? 'mb-4 grid-rows-[1fr] opacity-100 translate-y-0' : 'mb-0 grid-rows-[0fr] opacity-0 -translate-y-3'
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <nav className="mx-4 rounded-lg bg-white p-4 shadow-xl ring-1 ring-emerald-900/10 sm:mx-6">
              <div className="flex flex-col gap-4 text-base font-bold text-slate-700">
                {menuLinks.map((link, index) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleSectionClick(link.href)}
                    className={`transition duration-300 hover:translate-x-1 hover:text-[#1F6B45] ${
                      menuAberto ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                    }`}
                    style={{ transitionDelay: menuAberto ? `${index * 35}ms` : '0ms' }}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href={eventoConfig.linkInscricao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-2 rounded-lg bg-[#123F2A] px-5 py-3 text-center text-sm font-black text-white transition duration-300 hover:bg-[#1F6B45] ${
                    menuAberto ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                  }`}
                  style={{ transitionDelay: menuAberto ? '180ms' : '0ms' }}
                >
                  Inscrever-se
                </a>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden bg-[#123F2A] text-white">
        <img
          src={heroImage}
          alt="Mãos segurando terra e uma muda"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C2B1D]/95 via-[#123F2A]/82 to-[#123F2A]/42" />

        <div className="relative mx-auto flex min-h-[460px] max-w-7xl items-center px-4 py-14 sm:px-6 md:min-h-[540px] md:py-16">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-lg bg-white/10 px-3 py-2 text-sm font-bold text-emerald-50 ring-1 ring-white/20">
              {eventoConfig.data} · {eventoConfig.horario}
            </p>
            <h1 className="mt-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              {eventoConfig.titulo}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-emerald-50 sm:text-xl">
              {eventoConfig.slogan}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={eventoConfig.linkInscricao}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white px-6 py-3 text-center text-sm font-black text-[#123F2A] transition hover:bg-emerald-50"
              >
                Garantir inscrição
              </a>
              <a
                href="#programacao"
                onClick={handleSectionClick('#programacao')}
                className="rounded-lg border border-white/35 px-6 py-3 text-center text-sm font-black text-white transition hover:bg-white/10"
              >
                Ver programação
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="scroll-mt-28 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1F6B45]">Sobre o fórum</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#123F2A] md:text-5xl">
              Natureza, educação e troca prática em um único dia.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-700">{eventoConfig.sobre}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {destaques.map((item) => (
                <article key={item.titulo} className="rounded-lg border border-emerald-900/10 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-black text-[#123F2A]">{item.titulo}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="programacao" className="scroll-mt-28 bg-[#EAF3E8] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1F6B45]">Programação</p>
            <h2 className="mt-3 text-3xl font-black text-[#123F2A] md:text-5xl">
              Cronograma oficial do evento.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <ProgramacaoCard
              titulo="Período da Manhã"
              periodo="(08h20 às 11h45)"
              itens={programacaoManha}
              icones={iconesManha}
            />
            <ProgramacaoCard
              titulo="Período da Tarde"
              periodo="(13h às 18h)"
              itens={programacaoTarde}
              icones={iconesTarde}
            />
          </div>
        </div>
      </section>

      <section id="palestrantes" className="scroll-mt-28 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1F6B45]">Palestrantes</p>
            <h2 className="mt-3 text-3xl font-black text-[#123F2A] md:text-5xl">
              Especialistas e convidados confirmados.
            </h2>
          </div>

          <AutoCarousel label="Carrossel de palestrantes" auto loop>
            {palestrantes.map((palestrante) => (
              <PalestranteCard key={palestrante.id} palestrante={palestrante} />
            ))}
          </AutoCarousel>
        </div>
      </section>

      <section id="atracoes" className="scroll-mt-28 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1F6B45]">Atrações e oficinas</p>
            <h2 className="mt-3 text-3xl font-black text-[#123F2A] md:text-5xl">
              Vivências para sentir o parque de perto.
            </h2>
          </div>

          <AutoCarousel label="Carrossel de atrações" loop>
            {atracoes.map((atracao) => (
              <article
                key={atracao.id}
                className="grid min-w-[86vw] snap-start overflow-hidden rounded-lg border border-emerald-900/10 bg-[#F7FAF4] shadow-sm md:min-h-[360px] md:min-w-[78%] md:grid-cols-[1.15fr_0.85fr] xl:min-w-[74%]"
              >
                <img src={atracao.imagem} alt={atracao.titulo} className="h-72 w-full object-cover md:h-full" />
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <h3 className="text-3xl font-black leading-tight text-[#123F2A]">{atracao.titulo}</h3>
                  <p className="mt-5 text-lg leading-8 text-slate-700">{atracao.descricao}</p>
                </div>
              </article>
            ))}
          </AutoCarousel>
        </div>
      </section>

      <section id="local" className="scroll-mt-28 bg-[#123F2A] py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-100">Como chegar</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Endereço do evento</h2>
            <div className="mt-8 rounded-lg bg-[#265F42] p-5 shadow-sm">
              <p className="text-lg font-black">{eventoConfig.local}</p>
              <p className="mt-3 leading-7">{eventoConfig.endereco}</p>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-black text-[#123F2A] transition hover:bg-emerald-50"
            >
              Abrir no Google Maps
            </a>
          </div>

          <div className="overflow-hidden rounded-lg border border-white/15 bg-white/10">
            <iframe
              title="Mapa da Estância e Parque Ecológico das Águas"
              src={`https://www.google.com/maps?q=${mapsQuery}&z=15&output=embed`}
              className="h-[360px] w-full border-0 saturate-50 hue-rotate-60 md:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section id="realizacao" className="scroll-mt-28 bg-[#123F2A] py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-100">Realização</p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-6">
            {patrocinadores.map((patrocinador) => (
              <div key={patrocinador.id} className="p-2">
                <img
                  src={patrocinador.logotipo}
                  alt={patrocinador.nome}
                  className="max-h-24 max-w-[280px] object-contain drop-shadow-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#0C2B1D] py-8 text-sm text-emerald-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p className="font-bold">{eventoConfig.titulo}</p>
          <p>
            {eventoConfig.data} · {eventoConfig.local}
          </p>
        </div>
      </footer>
    </main>
  );
}
