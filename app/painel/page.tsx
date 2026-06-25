'use client';

import React, { useState } from 'react';
import * as dadosEvento from '../data';

export default function PainelAdmin() {
  // Estado para alternar as telas, inicializado direto para não falhar
  const [logado, setLogado] = useState(false);

  // Estados dos inputs gerenciados
  const config = dadosEvento?.eventoConfig || {
    titulo: '2º Fórum Estancieiro',
    slogan: '',
    data: '',
    local: '',
    sobre: '',
  };
  const [titulo, setTitulo] = useState(config.titulo);
  const [slogan, setSlogan] = useState(config.slogan);
  const [dataEvento, setDataEvento] = useState(config.data);
  const [local, setLocal] = useState(config.local);
  const [sobre, setSobre] = useState(config.sobre);
  const [salvoSucesso, setSalvoSucesso] = useState(false);

  // Função nativa pura vinculada ao clique do botão
  const tentarEntrar = () => {
    const userInput = (
      document.getElementById('input-user') as HTMLInputElement
    )?.value;
    const passInput = (
      document.getElementById('input-pass') as HTMLInputElement
    )?.value;

    if (userInput === 'admin' && passInput === 'estancia2026') {
      setLogado(true);
    } else {
      alert('Usuário ou senha incorretos! Digite admin e estancia2026.');
    }
  };

  const handleSalvar = (e: React.FormEvent) => {
    e.preventDefault();
    setSalvoSucesso(true);
    setTimeout(() => setSalvoSucesso(false), 3000);
  };

  // VISTA 1: PAINEL ADMINISTRATIVO ATIVO
  if (logado) {
    return (
      <div className="min-h-screen bg-slate-50 font-sans pb-12 text-slate-800">
        <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-xs">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-black text-slate-900 tracking-tight">
                ⚙️ Gestão de Conteúdo
              </h1>
              <p className="text-xs text-slate-500 font-medium">
                Modo Administrativo Ativo
              </p>
            </div>
            <button
              type="button"
              onClick={() => setLogado(false)}
              className="text-xs font-bold text-slate-600 hover:text-red-600 bg-slate-100 hover:bg-red-50 px-3 py-2 rounded-lg transition-colors border border-slate-200"
            >
              Sair com Segurança
            </button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 mt-8">
          <form onSubmit={handleSalvar} className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200 space-y-4">
              <h3 className="text-base font-bold text-slate-900 border-b pb-2">
                Informações Institucionais do Evento
              </h3>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Título da Página
                  </label>
                  <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-slate-300 p-2.5 text-sm text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Slogan Institucional
                  </label>
                  <input
                    type="text"
                    value={slogan}
                    onChange={(e) => setSlogan(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-slate-300 p-2.5 text-sm text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Data do Evento
                  </label>
                  <input
                    type="text"
                    value={dataEvento}
                    onChange={(e) => setDataEvento(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-slate-300 p-2.5 text-sm text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                    Espaço / Local
                  </label>
                  <input
                    type="text"
                    value={local}
                    onChange={(e) => setLocal(e.target.value)}
                    className="mt-1 block w-full rounded-lg border border-slate-300 p-2.5 text-sm text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Apresentação Pedagógica (Sobre o Fórum)
                </label>
                <textarea
                  rows={5}
                  value={sobre}
                  onChange={(e) => setSobre(e.target.value)}
                  className="mt-1 block w-full rounded-lg border border-slate-300 p-2.5 text-sm text-slate-900 leading-relaxed"
                />
              </div>
            </div>

            {salvoSucesso && (
              <div className="bg-emerald-600 text-white p-3 rounded-xl text-center font-bold text-sm shadow-md">
                ✓ Mudanças processadas com sucesso!
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all"
              >
                Publicar Atualizações
              </button>
            </div>
          </form>
        </main>
      </div>
    );
  }

  // VISTA 2: TELA DE LOGIN PADRÃO (CAPTURANDO ELEMENTOS DO DOM DIRETO)
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-4">
        <h2 className="text-3xl font-black text-white tracking-tight">
          2º Fórum Estancieiro
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Painel Administrativo da Equipe
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 shadow-2xl rounded-2xl border border-slate-200">
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Usuário
              </label>
              <input
                id="input-user"
                type="text"
                className="mt-1 block w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 text-sm"
                placeholder="admin"
                defaultValue="admin"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Senha
              </label>
              <input
                id="input-pass"
                type="password"
                className="mt-1 block w-full rounded-xl border border-slate-300 px-3 py-2.5 text-slate-900 text-sm"
                placeholder="••••••••"
                defaultValue="estancia2026"
              />
            </div>

            <button
              type="button"
              onClick={tentarEntrar}
              className="w-full flex justify-center py-3 px-4 rounded-xl shadow-md text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 transition-all cursor-pointer"
            >
              Acessar Painel →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
