'use client';

import React from 'react';
import * as dadosEvento from '../data';

export default function AtracoesPage() {
  const config = dadosEvento?.eventoConfig || {
    titulo: '2º Fórum Estancieiro',
    linkInscricao: '#',
  };
  const listaOficinas = dadosEvento?.atracoes || [];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <a
          href="/"
          className="text-[#0D6EFD] font-bold text-sm hover:underline"
        >
          ← Voltar para a Home
        </a>
        <h1 className="text-4xl font-extrabold text-[#0A2540] mt-4">
          Atrações e Oficinas
        </h1>
        <p className="text-slate-500 mt-2">
          Vivências pedagógicas práticas integradas à natureza durante o{' '}
          {config.titulo}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {listaOficinas.length > 0 ? (
            listaOficinas.map((oficina) => (
              <div
                key={oficina.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm flex flex-col"
              >
                <div
                  className="h-52 bg-cover bg-center"
                  style={{ backgroundImage: `url(${oficina.imagem})` }}
                ></div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2540]">
                      {oficina.titulo}
                    </h3>
                    <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                      {oficina.descricao}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center">
                    <span className="text-xs font-bold bg-blue-50 text-[#0D6EFD] px-3 py-1 rounded-md">
                      📋 {oficina.vagas}
                    </span>
                    <a
                      href={config.linkInscricao}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-[#14532D] hover:underline"
                    >
                      Garantir vaga →
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-slate-400 col-span-2 text-center">
              Nenhuma oficina listada no momento.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
