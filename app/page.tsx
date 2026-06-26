'use client';

import React, { useState } from 'react';
import { programacaoManha, programacaoTarde } from './data';
import * as dadosEvento from './data';

export default function Home() {
  const [slideAtual] = useState(0);
  const [atracaoAtual, setAtracaoAtual] = useState(0);
  const linkInscricao =
    'https://docs.google.com/forms/d/e/1FAIpQLScZQrnaJlvOFaUpzqHQV-Cpzy2Qx8oWgximC34FTWWRpDG_hg/viewform?usp=header';

  const config = dadosEvento?.eventoConfig || {
    titulo: '2º Estancieiro Fórum de Educação e Meio Ambiente',
    slogan: 'Experiências que Transformam',
    data: '24/07/2026',
    horario: '09h as 18h',
    local: 'Estância e Parque Ecológico das Águas',
    endereco: 'Polo de Ecoturismo de São Paulo, São Paulo - SP',
    linkInscricao,
    sobre: '',
    historico: '',
  };

  const slides = [
    {
      id: 1,
      titulo: '2º Estancieiro Fórum de Educação e Meio Ambiente',
      subtitulo: 'Experiências que Transformam',
      imagem:
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const oficinasLista = dadosEvento?.atracoes || dadosEvento?.atracoesEOficinas || [];
  const patrocinadoresLista = dadosEvento?.patrocinadores || dadosEvento?.parceiros || [];
  const enderecoMapa = encodeURIComponent(`${config.local}, ${config.endereco}`);
  const atracaoEmDestaque =
    oficinasLista.length > 0 ? oficinasLista[atracaoAtual % oficinasLista.length] : null;

  const proximaAtracao = () => {
    setAtracaoAtual((valorAtual) =>
      oficinasLista.length === 0 ? 0 : (valorAtual + 1) % oficinasLista.length
    );
  };

  const atracaoAnterior = () => {
    setAtracaoAtual((valorAtual) =>
      oficinasLista.length === 0
        ? 0
        : (valorAtual - 1 + oficinasLista.length) % oficinasLista.length
    );
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans antialiased">
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a
            href="/"
            className="text-lg font-black text-[#0D6EFD] tracking-tight hover:opacity-90 transition"
          >
            2° Estancieiro
          </a>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-600">
            <a href="/#programacao" className="hover:text-[#0D6EFD] transition">
              Programação
            </a>
            <a href="/palestrantes" className="hover:text-[#0D6EFD] transition">
              Palestrantes
            </a>
            <a href="/atracoes-e-oficinas" className="hover:text-[#0D6EFD] transition">
              Atrações & Oficinas
            </a>
            <a href="/patrocinadores" className="hover:text-[#0D6EFD] transition">
              Patrocinadores
            </a>
          </nav>

          <a
            href={linkInscricao}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#14532D] text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-emerald-800 transition shadow-md"
          >
            Inscrever-se
          </a>
        </div>
      </header>

      <section className="relative bg-[#0A2540] text-white overflow-hidden min-h-[520px] flex items-center">
        {slides[slideAtual] && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('${slides[slideAtual].imagem}')` }}
          ></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540] via-[#0A2540]/80 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-12 items-center w-full z-10 py-16">
          <div>
            <span className="bg-[#0D6EFD]/20 text-[#0D6EFD] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              {config.data} | {config.horario}
            </span>
            <h1 className="text-4xl md:text-5xl font-black mt-4 leading-tight">
              {slides[slideAtual]?.titulo || config.titulo}
            </h1>
            <p className="text-slate-300 mt-4 text-base md:text-lg max-w-xl">
              {slides[slideAtual]?.subtitulo || config.slogan}
            </p>
            <div className="mt-8 flex items-center space-x-4">
              <a
                href={linkInscricao}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0D6EFD] hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-blue-600/20"
              >
                Garantir Ingresso
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#0D6EFD]">
          Apresentação
        </span>
        <h2 className="text-3xl font-extrabold text-[#0A2540] mt-2">
          Sobre o Fórum
        </h2>
        <div className="w-12 h-1 bg-[#0D6EFD] mx-auto mt-4 rounded-full"></div>
        <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed text-justify md:text-center">
          {config.sobre}
        </p>
      </section>

      <section id="programacao" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tight">Programação</h2>
            <p className="mt-3 text-base text-slate-600 font-medium">Confira o line up do evento</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-[#0D6EFD] px-6 py-4">
                <h3 className="text-lg font-bold text-white">
                  Período da Manhã <span className="text-blue-200 text-sm font-normal">(08h20 às 11h45)</span>
                </h3>
              </div>
              <div className="p-6 space-y-6">
                {programacaoManha?.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="text-2xl pt-1">{item.icone}</div>
                    <div>
                      <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-md mb-1 border border-slate-200">
                        {item.horario}
                      </span>
                      <p className="text-sm font-semibold text-slate-900 leading-snug">{item.atividade}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-[#14532D] px-6 py-4">
                <h3 className="text-lg font-bold text-white">
                  Período da Tarde <span className="text-emerald-200 text-sm font-normal">(13h às 18h)</span>
                </h3>
              </div>
              <div className="p-6 space-y-6">
                {programacaoTarde?.map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="text-2xl pt-1">{item.icone}</div>
                    <div>
                      <span className="inline-block px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-md mb-1 border border-slate-200">
                        {item.horario}
                      </span>
                      <p className="text-sm font-semibold text-slate-900 leading-snug">{item.atividade}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {oficinasLista.length > 0 && (
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#14532D]">
                  Vivências Práticas
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mt-3">
                  Destaques da Edição
                </h2>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <button
                  type="button"
                  onClick={atracaoAnterior}
                  className="h-12 w-12 rounded-full border border-slate-200 bg-white text-[#0A2540] text-2xl shadow-sm hover:bg-slate-50 transition"
                  aria-label="Atração anterior"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={proximaAtracao}
                  className="h-12 w-12 rounded-full border border-slate-200 bg-white text-[#0A2540] text-2xl shadow-sm hover:bg-slate-50 transition"
                  aria-label="Próxima atração"
                >
                  ›
                </button>
              </div>
            </div>

            <div className="md:hidden -mr-4 overflow-x-auto pb-3 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex gap-4 pr-10">
                {oficinasLista.map((oficina: any) => (
                  <div
                    key={oficina.id}
                    className="snap-start shrink-0 w-[84%] bg-[#F7F6F4] rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm"
                  >
                    <div className="p-6 flex flex-col justify-center">
                      <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#14532D]">
                        Parque
                      </span>
                      <h3 className="text-3xl font-black text-[#0A2540] mt-4 leading-none">
                        {oficina.titulo}
                      </h3>
                      <p className="text-slate-600 text-base mt-4 min-h-[120px]">
                        {oficina.descricao}
                      </p>
                    </div>
                    <div
                      className="h-60 bg-cover bg-center"
                      style={{ backgroundImage: `url(${oficina.imagem || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200'})` }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>

            {atracaoEmDestaque && (
              <div
                key={atracaoAtual}
                className="hidden md:block bg-[#F7F6F4] rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm [animation:fadeSlideIn_360ms_ease]"
              >
                <div className="grid md:grid-cols-[0.95fr_1.05fr] items-stretch">
                  <div className="p-6 md:p-10 flex flex-col justify-center">
                    <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#14532D]">
                      Parque
                    </span>
                    <h3 className="text-3xl md:text-5xl font-black text-[#0A2540] mt-4 leading-none">
                      {atracaoEmDestaque.titulo}
                    </h3>
                    <p className="text-slate-600 text-base md:text-lg mt-4 max-w-xl">
                      {atracaoEmDestaque.descricao}
                    </p>
                  </div>
                  <div
                    className="h-72 md:min-h-[360px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${atracaoEmDestaque.imagem || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200'})` }}
                  ></div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {patrocinadoresLista.length > 0 && (
        <section className="py-16 bg-slate-50 text-center border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Parceiros Estratégicos
            </span>
            <h3 className="text-xl font-bold text-[#0A2540] mt-1">
              Apoio e Realização
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-10 opacity-70">
              {patrocinadoresLista.map((p: any) => (
                <img
                  key={p.id}
                  src={p.logo || p.logotipo}
                  alt={p.nome || 'Patrocinador'}
                  className="h-12 md:h-14 object-contain max-w-[140px]"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D6EFD]">
              Como chegar
            </span>
            <h3 className="text-3xl font-extrabold text-[#0A2540] mt-2">
              Endereço do evento
            </h3>
            <div className="w-12 h-1 bg-[#0D6EFD] mt-4 rounded-full"></div>
            <div className="mt-6 space-y-4 text-slate-600">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <p className="text-sm font-bold text-[#0A2540]">Local</p>
                <p className="mt-1">{config.local}</p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <p className="text-sm font-bold text-[#0A2540]">Endereço</p>
                <p className="mt-1">{config.endereco}</p>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${enderecoMapa}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#0D6EFD] hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-bold transition shadow-lg shadow-blue-600/20"
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 min-h-[360px]">
            <iframe
              title="Mapa do local do evento"
              src={`https://www.google.com/maps?q=${enderecoMapa}&z=15&output=embed`}
              className="w-full h-[360px] md:h-[420px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <footer className="bg-[#0A2540] text-slate-300 py-12 border-t border-slate-900 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-white font-bold text-base mb-2">
              {config.local}
            </h4>
            <p className="text-slate-400">{config.endereco}</p>
          </div>
          <div className="md:text-right">
            <p className="text-white font-semibold">Quando acontece?</p>
            <p className="text-[#0D6EFD] font-bold mt-1 text-base">
              {config.data}
            </p>
            <p className="text-slate-400 text-xs">{config.horario}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
