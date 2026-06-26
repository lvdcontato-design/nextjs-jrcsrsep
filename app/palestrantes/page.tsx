'use client';

import React, { useState } from 'react';
import { palestrantes } from '../data';

const CardPalestrante = ({ palestrante }: { palestrante: any }) => {
  const [expandido, setExpandido] = useState(false);
  const curriculo =
    palestrante.bio ||
    palestrante.biografia ||
    palestrante.curriculo ||
    palestrante.currículo ||
    palestrante.resumo ||
    '';

  const cargo =
    palestrante.cargo ||
    palestrante.instituicao ||
    palestrante.instituição ||
    '';

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
      <div className="relative h-64 w-full bg-slate-100">
        {palestrante.foto ? (
          <img
            src={palestrante.foto}
            alt={`Foto de ${palestrante.nome}`}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400">
            Sem imagem
          </div>
        )}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
          {palestrante.horario}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[#0A2540]">{palestrante.nome}</h3>
        {cargo && <p className="text-sm text-slate-500 mt-1">{cargo}</p>}
        <p className="text-sm font-semibold text-emerald-700 mt-1 mb-4 border-b border-slate-100 pb-3">
          {palestrante.tema || 'Currículo e apresentação'}
        </p>

        {curriculo && (
          <div className="mt-auto pt-2">
            <button
              type="button"
              onClick={() => setExpandido((valorAtual) => !valorAtual)}
              className="w-full flex items-center justify-between bg-slate-50 hover:bg-slate-100 border border-slate-200 px-4 py-2.5 rounded-xl text-sm font-bold text-slate-700 transition-colors"
            >
              <span>Conheça o Especialista</span>
              <span className={`transition-transform duration-300 ${expandido ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                expandido ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0D6EFD] mb-2">
                    Currículo
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify whitespace-pre-line">
                    {curriculo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function PalestrantesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-sm font-bold text-slate-500 hover:text-blue-600 transition">
            Voltar para a Home
          </a>
          <span className="text-sm font-bold text-[#0A2540]">Palestrantes e Especialistas</span>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 mt-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-[#0A2540] tracking-tight">
            Nossos Convidados
          </h1>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Conheça os especialistas, educadores e mantenedores que guiarão nossas experiências e painéis no 2º Fórum Estancieiro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {palestrantes.map((palestrante) => (
            <CardPalestrante key={palestrante.id} palestrante={palestrante} />
          ))}
        </div>
      </main>
    </div>
  );
}
