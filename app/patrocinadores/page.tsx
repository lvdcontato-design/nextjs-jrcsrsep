'use client';

import React from 'react';
import * as dadosEvento from '../data';

export default function PatrocinadoresPage() {
  const config = dadosEvento?.eventoConfig || {
    titulo: '2º Fórum Estancieiro',
  };
  const listaPatrocinadores = dadosEvento?.patrocinadores || [];

  const diamantes = listaPatrocinadores.filter(
    (p) => p.categoria === 'Diamante'
  );
  const apoios = listaPatrocinadores.filter((p) => p.categoria === 'Apoio');

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-left">
          <a
            href="/"
            className="text-[#0D6EFD] font-bold text-sm hover:underline"
          >
            ← Voltar para a Home
          </a>
        </div>
        <h1 className="text-4xl font-extrabold text-[#0A2540] mt-4">
          Parceiros e Apoiadores
        </h1>
        <p className="text-slate-500 mt-2 max-w-xl mx-auto">
          Empresas e instituições comprometidas com o desenvolvimento da
          educação ambiental no {config.titulo}
        </p>

        {/* Categoria Diamante */}
        {diamantes.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-[#0D6EFD] bg-blue-50 px-4 py-1.5 rounded-full inline-block">
              Patrocínio Diamante
            </h2>
            <div className="flex flex-wrap justify-center gap-8 mt-6">
              {diamantes.map((p) => (
                <div
                  key={p.id}
                  className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm w-44 h-32 flex items-center justify-center hover:scale-105 transition"
                >
                  <img
                    src={p.logo}
                    alt={p.nome}
                    className="max-h-20 max-w-full object-contain filter grayscale hover:grayscale-0 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categoria Apoio */}
        {apoios.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 bg-slate-100 px-4 py-1.5 rounded-full inline-block">
              Apoio Institucional
            </h2>
            <div className="flex flex-wrap justify-center gap-8 mt-6">
              {apoios.map((p) => (
                <div
                  key={p.id}
                  className="bg-white p-4 rounded-xl border border-slate-200/60 shadow-xs w-36 h-24 flex items-center justify-center hover:scale-105 transition"
                >
                  <img
                    src={p.logo}
                    alt={p.nome}
                    className="max-h-14 max-w-full object-contain filter grayscale hover:grayscale-0 transition"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
