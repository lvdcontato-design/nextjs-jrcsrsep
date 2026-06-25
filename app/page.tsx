'use client';

import React, { useState } from 'react';
// Importação flexível sem a extensão explícita
import * as dadosEvento from './data';

export default function Home() {
  const [slideAtual, setSlideAtual] = useState(0);

  // Garantia de dados caso a importação falhe temporariamente
  const config = dadosEvento?.eventoConfig || {
    titulo: '2º Fórum Estancieiro',
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
      titulo: '2º Fórum Estancieiro',
      subtitulo: 'Experiências que Transformam',
      imagem:
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  // Ajustado para buscar as chaves corretas e seguras exportadas do arquivo data
  const palestrantesLista = dadosEvento?.palestrantes || [];
  const oficinasLista =
    dadosEvento?.atracoes || dadosEvento?.atracoesEOficinas || [];
  const patrocinadoresLista =
    dadosEvento?.patrocinadores || dadosEvento?.parceiros || [];

  const proximoSlide = () => {
    setSlideAtual((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slideAnterior = () => {
    setSlideAtual((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen font-sans antialiased">
      {/* CABEÇALHO */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <a
            href="/"
            className="text-lg font-black text-[#0D6EFD] tracking-tight hover:opacity-90 transition"
          >
            {config.titulo.toUpperCase()}
          </a>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-semibold text-slate-600">
            <a href="/programacao" className="hover:text-[#0D6EFD] transition">
              Programação
            </a>
            <a href="/palestrantes" className="hover:text-[#0D6EFD] transition">
              Palestrantes
            </a>
            <a
              href="/atracoes-e-oficinas"
              className="hover:text-[#0D6EFD] transition"
            >
              Atrações & Oficinas
            </a>
            <a
              href="/patrocinadores"
              className="hover:text-[#0D6EFD] transition"
            >
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

      {/* CARROSSEL PRINCIPAL COM VERIFICAÇÃO */}
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
              {slides.length > 1 && (
                <div className="flex space-x-2">
                  <button
                    onClick={slideAnterior}
                    className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-lg border border-white/10 transition text-sm"
                  >
                    ◀
                  </button>
                  <button
                    onClick={proximoSlide}
                    className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-lg border border-white/10 transition text-sm"
                  >
                    ▶
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUÇÃO & HISTÓRICO */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#0D6EFD]">
          Apresentação
        </span>
        <h2 className="text-3xl Im font-extrabold text-[#0A2540] mt-2">
          Sobre o Fórum
        </h2>
        <div className="w-12 h-1 bg-[#0D6EFD] mx-auto mt-4 rounded-full"></div>
        <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed text-justify md:text-center">
          {config.sobre}
        </p>

        {config.historico && (
          <div className="mt-12 p-6 md:p-8 bg-blue-50/60 rounded-2xl border border-blue-100 text-left">
            <h3 className="text-lg font-bold text-[#0A2540] flex items-center gap-2">
              🌱 Nossa Trajetória
            </h3>
            <p className="mt-3 text-slate-600 text-sm md:text-base leading-relaxed">
              {config.historico}
            </p>
          </div>
        )}
      </section>

      {/* PREVIEW DE ATRAÇÕES */}
      {oficinasLista.length > 0 && (
        <section className="py-20 bg-slate-50 border-y border-slate-100">
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
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-xs flex flex-col md:flex-row h-full"
                >
                  <div
                    className="md:w-48 h-48 md:h-full bg-cover bg-center shrink-0"
                    style={{ backgroundImage: `url(${oficina.imagem})` }}
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
                    <span className="text-[11px] font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md inline-block mt-4 self-start">
                      {oficina.vagas}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* PATROCINADORES */}
      {patrocinadoresLista.length > 0 && (
        <section className="py-16 text-center max-w-5xl 'mx-auto' px-4">
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
                src={p.logo}
                alt={p.nome || 'Patrocinador'}
                className="h-12 md:h-14 object-contain max-w-[140px]"
              />
            ))}
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
