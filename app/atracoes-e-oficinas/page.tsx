'use client';
import React from 'react';
import { atracoes } from '../data';

export default function AtracoesPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Atrações</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {atracoes.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden">
            <img src={item.imagem} alt={item.titulo} className="h-52 w-full object-cover" />
            <div className="p-6">
              <h3 className="font-bold text-xl">{item.titulo}</h3>
              <p className="text-slate-600 mt-2">{item.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}