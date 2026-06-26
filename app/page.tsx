'use client';

import React, { useState } from 'react';
import { programacaoManha, programacaoTarde } from './data';
import * as dadosEvento from './data';

export default function Home() {
  const [slideAtual, setSlideAtual] = useState(0);

  // Garantia de dados caso a importação falhe temporariamente
  const config = dadosEvento?.eventoConfig || {
    titulo: '2º Estancieiro Fórum de Educação e Meio Ambiente',
    slogan: 'Experiências que Transformam',
    data: '24/07/2026',
    horario: '09h as 18h',
    local: 'Estância e Parque Ecológico das Águas',
    endereco: 'Polo de Ecoturismo de São Paulo, São Paulo - SP',
    linkInscricao: '#',
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

  const palestrantesLista = dadosEvento?.palestrantes || [];
  const oficinasLista = dadosEvento?.atracoes || dadosEvento?.atracoesEOficinas || [];
  const patrocinadoresLista = dadosEvento?.patrocinadores || dadosEvento?.parceiros || [];

  const proximoSlide = () => {
    setSlideAtual((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slideAnterior = () => {
    setSlideAtual((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans antialiased">
      {/* CABEÇALHO COM MENU */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a
            href="/"
            className="text-lg font-black text-[#0D6EFD] tracking-tight hover:opacity-90 transition"
          >
            {config.titulo.toUpperCase()}
          </a>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-600">
            {/* O link agora aponta para a âncora na mesma página */}
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
            href={config.linkInscricao}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#14532D] text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-emerald-800 transition shadow-md"
          >
            Inscrever-se
          </a>
        </div>
      </header>

      {/* CARROSSEL PRINCIPAL */}
      <section className="relative bg-[#0A2540] text-white overflow-hidden min-h-[520px] flex items-center">
        {slides[slideAtual] && (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 transition-all duration-700 ease-in-out"
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
                href={config.linkInscricao}
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

      {/* INTRODUÇÃO & HISTÓRICO */}
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

      {/* SEÇÃO DE PROGRAMAÇÃO COM ÂNCORA (Movida para o lugar certo) */}
      <section id="programacao" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] tracking-tight">Programação</h2>
            <p className="mt-3 text-base text-slate-600 font-medium">Confira o line up do evento</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Coluna Manhã */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-[#0D6EFD] px-6 py-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  ☀️ Período da Manhã <span className="text-blue-200 text-sm font-normal">(08h20 às 11h45)</span>
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

            {/* Coluna Tarde */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-[#14532D] px-6 py-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  🌤️ Período da Tarde <span className="text-emerald-200 text-sm font-normal">(13h às 18h)</span>
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

      {/* PREVIEW DE ATRAÇÕES */}
      {oficinasLista.length > 0 && (
        <section className="py-20 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#14532D]">
                  Vivências Práticas
                </span>
                <h2 className="text-3xl font-extrabold text-[#0A2540] mt-1">
                  Destaques da Edição
                </h2>
              </div>
              <a
                href="/atracoes-e-oficinas"
                className="text-sm font-bold text-[#0D6EFD] hover:underline mt-4 md:mt-0 inline-block"
              >
                Ver todas as atrações →
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {oficinasLista.slice(0, 2).map((oficina: any) => (
                <div
                  key={oficina.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col md:flex-row h-full"
                >
                  <div
                    className="md:w-48 h-48 md:h-full bg-cover bg-center shrink-0"
                    style={{ backgroundImage: `url(${oficina.imagem || 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400'})` }}
                  ></div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#0A2540]">
                        {oficina.titulo}
                      </h3>
                      <p className="text-slate-500 text-xs mt-2 line-clamp-3">
                        {oficina.descricao}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PATROCINADORES */}
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

      {/* RODAPÉ */}
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