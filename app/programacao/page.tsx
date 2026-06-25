'use client';

import React from 'react';
import * as dadosEvento from '../data';

export default function ProgramacaoPage() {
  const config = dadosEvento?.eventoConfig || {
    titulo: '2º Fórum Estancieiro',
  };

  // Lista oficial ou dados reservas imediatos
  const listaProgramacao = dadosEvento?.programacao || [
    {
      horario: '09:00',
      atividade: 'Credenciamento e Welcome Coffee',
      tipo: 'Geral',
    },
    {
      horario: '10:30',
      atividade: 'Palestra de Abertura com Jack Nogueira',
      tipo: 'Palestra',
    },
    {
      horario: '14:00',
      atividade: 'Início das Oficinas Ecológicas Práticas',
      tipo: 'Oficina',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <a
          href="/"
          className="text-[#0D6EFD] font-bold text-sm hover:underline"
        >
          ← Voltar para a Home
        </a>
        <h1 className="text-4xl font-extrabold text-[#0A2540] mt-4">
          Cronograma Oficial
        </h1>
        <p className="text-slate-500 mt-2">
          Fique por dentro de todos os horários e atividades do {config.titulo}
        </p>

        <div className="mt-8 space-y-4">
          {listaProgramacao.map((item, index) => (
            <div
              key={index}
              className="flex bg-white border border-slate-200/60 p-6 rounded-xl justify-between items-center shadow-sm"
            >
              <div>
                <span className="text-sm font-bold text-[#0D6EFD]">
                  {item.horario}
                </span>
                <h4 className="font-bold text-[#0A2540] text-lg mt-1">
                  {item.atividade}
                </h4>
              </div>
              <span className="bg-[#14532D]/10 text-[#14532D] px-4 py-1.5 rounded-full text-xs font-bold uppercase">
                {item.tipo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
