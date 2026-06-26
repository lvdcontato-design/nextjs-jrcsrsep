'use client';

import React from 'react';

export default function PatrocinadoresPage() {
  const apoios = [
    'Jardineira - Passeios no Polo',
    'Sítio Mayumi',
    'Clube e Park Rincão',
    'Rincão Resort',
    'Estância Animal'
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <a
          href="/"
          className="text-[#0D6EFD] font-bold text-sm hover:underline mb-6 inline-block"
        >
          ← Voltar para a Home
        </a>
        
        <h1 className="text-4xl font-extrabold text-[#0A2540] mb-4 text-center">
          Patrocinadores e Parceiros
        </h1>
        <p className="text-slate-500 text-center mb-12">
          Conheça as marcas e instituições que tornam este evento possível.
        </p>

        {/* ÁREA DE PATROCÍNIOS (Apenas Texto por enquanto) */}
        <div className="space-y-10 mb-16 text-center">
          <div className="bg-white border border-slate-200/60 p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-slate-700">Patrocínio Diamante</h2>
            <p className="text-slate-400 mt-2 text-sm italic">Espaço reservado</p>
          </div>
          
          <div className="bg-white border border-slate-200/60 p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-slate-700">Patrocínio Ouro</h2>
            <p className="text-slate-400 mt-2 text-sm italic">Espaço reservado</p>
          </div>

          <div className="bg-white border border-slate-200/60 p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-bold text-slate-700">Patrocínio Prata</h2>
            <p className="text-slate-400 mt-2 text-sm italic">Espaço reservado</p>
          </div>

          <div className="bg-white border border-slate-200/60 p-6 rounded-xl shadow-sm">
            <h2 className="text-base font-bold text-slate-700">Patrocínio Bronze</h2>
            <p className="text-slate-400 mt-2 text-sm italic">Espaço reservado</p>
          </div>
        </div>

        {/* ÁREA DE APOIO */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#0A2540] mb-6 text-center border-b border-slate-200 pb-4">
            Apoio
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {apoios.map((nome, index) => (
              <span 
                key={index} 
                className="bg-white border border-slate-200 px-5 py-2.5 rounded-full text-sm text-[#0A2540] font-semibold shadow-sm"
              >
                {nome}
              </span>
            ))}
          </div>
        </div>

        {/* ÁREA DO ORGANIZADOR (Com logo e fundo azul claro) */}
        <div className="text-center mt-20">
          <h2 className="text-2xl font-bold text-[#0A2540] mb-6 border-b border-slate-200 pb-4">
            Realização e Organização
          </h2>
          <div className="inline-block bg-blue-100 p-8 rounded-2xl shadow-sm border border-blue-200 hover:shadow-md transition-shadow">
            <img 
              src="/logo_grupo_jogo.png" 
              alt="Logo Grupo Jogo" 
              className="max-h-32 w-auto object-contain mx-auto"
            />
          </div>
        </div>

      </div>
    </div>
  );
}