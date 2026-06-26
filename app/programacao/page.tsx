'use client';
import React from 'react';
import { programacao, eventoConfig } from '../data';

export default function ProgramacaoPage() {
  const atividades = [...programacao.manha, ...programacao.tarde];
  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <a href="/" className="text-[#0D6EFD] font-bold text-sm hover:underline">← Voltar para a Home</a>
        <h1 className="text-4xl font-extrabold text-[#0A2540] mt-4">Cronograma Oficial</h1>
        <div className="mt-8 space-y-4">
          {atividades.map((item, index) => (
            <div key={index} className="flex bg-white border p-6 rounded-xl shadow-sm items-center gap-4">
              <span className="text-2xl">{item.icone}</span>
              <div>
                <p className="text-sm font-bold text-[#0D6EFD]">{item.horario}</p>
                <h4 className="font-bold text-[#0A2540] text-lg">{item.atividade}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}