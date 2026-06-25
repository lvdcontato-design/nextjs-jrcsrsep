'use client';

import React from 'react';
import { palestrantes, eventoConfig } from '../data.js';

export default function PalestrantesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <a
          href="/"
          className="text-[#0D6EFD] font-bold text-sm hover:underline"
        >
          ← Voltar para a Home
        </a>
        <h1 className="text-4xl font-extrabold text-[#0A2540] mt-4">
          Especialistas Confirmados
        </h1>
        <p className="text-slate-500 mt-2">
          Conheça as mentes que guiarão os painéis e debates no{' '}
          {eventoConfig.titulo}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {palestrantes.map((palestrante) => (
            <div
              key={palestrante.id}
              className="bg-white p-8 rounded-2xl border border-slate-200/60 flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 shadow-sm"
            >
              <div
                className="w-24 h-24 rounded-full bg-cover bg-center shrink-0 shadow-inner"
                style={{ backgroundImage: `url(${palestrante.foto})` }}
              ></div>
              <div>
                <h3 className="font-bold text-[#0A2540] text-xl">
                  {palestrante.nome}
                </h3>
                <span className="text-[#14532D] text-xs font-bold uppercase tracking-wider block mt-1">
                  {palestrante.cargo}
                </span>
                <p className="text-slate-600 mt-3 text-sm leading-relaxed text-justify">
                  {palestrante.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
