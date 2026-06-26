// 1. CONFIGURAÇÕES INSTITUCIONAIS CENTRAIS (HOME)
export const eventoConfig = {
  titulo: '2º Fórum Estancieiro',
  slogan: 'Educação, Meio Ambiente e Sustentabilidade',
  data: '24/07/2026',
  horario: '09h às 18h',
  local: 'Estância e Parque Ecológico das Águas',
  endereco: 'Polo de Ecoturismo de São Paulo, São Paulo - SP',
  linkInscricao: '#',
  sobre: 'O Fórum Estancieiro é um evento pioneiro projetado para reunir educadores, gestores públicos, estudantes e defensores do meio ambiente. Nosso objetivo é debater práticas pedagógicas inovadoras, conservação da biodiversidade e soluções sustentáveis aplicáveis no dia a dia escolar e comunitário. Através de vivências práticas e painéis teóricos, construímos caminhos para um futuro consciente.'
};

export const carrosselSlides = [
  { id: 1, titulo: '2º Fórum Estancieiro', subtitulo: 'Inovação e práticas pedagógicas voltadas para a sustentabilidade e preservação.', imagem: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200' },
  { id: 2, titulo: 'Vivências Práticas e Oficinas', subtitulo: 'Aprenda na prática técnicas de manejo ecológico, trilhas guiadas e conservação.', imagem: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200' }
];

export const programacaoManha = [
  { horario: '08h20', atividade: 'Abertura do portão e estacionamento', icone: '🚪' },
  { horario: '08h30', atividade: 'Início do credenciamento', icone: '📝' },
  { horario: '08h30 às 09h', atividade: 'Coffee Break para networking (Arena Nascente)', icone: '☕' },
  { horario: '09h00', atividade: 'Palavra dos Fundadores', icone: '🎤' },
  { horario: '09h15', atividade: 'Abertura do Fórum', icone: '✨' },
  { horario: '09h30 às 11h45', atividade: 'Início das Palestras', icone: '🗣️' },
  { horario: '09h30 às 11h45', atividade: 'Atrações e Atividades de Aventura e Lazer', icone: '🧗‍♂️' },
  { horario: '09h30 e 11h45', atividade: 'Projeção do Documentário “Cratera da Colônia”', icone: '🎬' },
  { horario: '11h45 às 17h', atividade: 'Abertura do Restaurante', icone: '🍽️' }
];

export const programacaoTarde = [
  { horario: '13h10 às 16h', atividade: 'Retomada das Palestras', icone: '🎙️' },
  { horario: '13h10 às 17h', atividade: 'Retomada das Atrações e Atividades de Aventura e Lazer', icone: '🛶' },
  { horario: '13h15', atividade: 'Painel “Cratera da Colônia” com Dra. Simone S. S. Mantovanelli e Roberto Carlos da Silva (Gestor da APA Capivari – Monos)', icone: '🌍' },
  { horario: '14h15', atividade: 'Painel “Educação Ambiental na Rede Pública Municipal de Ensino” com SME/SP', icone: '🏫' },
  { horario: '14h20 e 15h20', atividade: 'Visita ao Sítio Mayumi com a Jardineira do Polo', icone: '🚌' },
  { horario: '15h15', atividade: 'Projeção do Documentário “Cratera da Colônia”', icone: '🎬' },
  { horario: '18h00', atividade: 'Brinde de Encerramento', icone: '🥂' }
];

export const programacao = { manha: programacaoManha, tarde: programacaoTarde };

export const palestrantes = [
  { id: 1, nome: 'Sr. Jorge e Sra. Vilma', tema: 'Palavra dos Mantenedores', horario: '09h00', bio: 'Fundadores do Grupo Jogo de Turismo...', foto: '/imagem01_mantenedores.jpg' },
  { id: 2, nome: 'Lucas Duarte', tema: 'Abertura do Evento', horario: '09h30', bio: 'Lucas iniciou sua trajetória...', foto: '/imagem02_lucasduarte.jpg' },
  { id: 3, nome: 'Jack Nogueira', tema: '', horario: '09h30', bio: 'Pioneiro em Educação Ambiental...', foto: '/imagem04_jacknogueira.jpg' },
  { id: 4, nome: 'Bianca Nunes', tema: '', horario: '11h00', bio: 'Profissional apaixonada pela educação bilíngue...', foto: '/imagem03_biancanunes.jpg' },
  { id: 5, nome: 'Walmir Fernandes', tema: 'Profissionalizando seu Evento Escolar', horario: '13h15', bio: 'Co-Founder Plataforma Festou', foto: '/imagem05_festou.jpg' },
  { id: 6, nome: 'Alessandro Alencar', tema: 'Rotary e Sustentabilidade', horario: '15h00', bio: 'Contador especializado no Terceiro Setor...', foto: '/imagem06_alessandroalencar.jpg' },
  { id: 7, nome: 'Projeção', tema: 'Projeção do Documentário “Cratera da Colônia”', horario: '09h30 / 11h45 / 15h15', bio: '', foto: '/imagem07_meteoro.jpg' },
  { id: 8, nome: 'Simone Sandra Sonvesso Mantovanelli, PhD', tema: 'Geo Parque Cratera da Colônia', horario: '13h15', bio: 'Geóloga formada pela USP...', foto: '/imagem08_simonesandra.jpg' },
  { id: 9, nome: 'Roberto Carlos da Silva', tema: 'Geo Parque Cratera da Colônia', horario: '13h15', bio: 'Atualmente Gestor na APA Capivari...', foto: '/imagem09_robertocarlos.jpg' },
  { id: 10, nome: 'Membro 1 Equipe SME', tema: 'Educação Ambiental na Rede Pública', horario: '14h15', bio: '', foto: '/imagem10_sme.jpg' },
  { id: 11, nome: 'Membro 2 Equipe SME', tema: 'Educação Ambiental na Rede Pública', horario: '14h15', bio: '', foto: '/imagem10_sme.jpg' }
];

export const atracoes = [
  { id: 1, titulo: 'Trilha Ecológica Guiada', descricao: 'Exploração da fauna e flora.', imagem: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800' },
  { id: 2, titulo: 'Oficina de Compostagem', descricao: 'Implantação de compostagem escolar.', imagem: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=800' },
  { id: 3, titulo: 'Manejo Agroecológico', descricao: 'Técnicas orgânicas.', imagem: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfacb?q=80&w=800' }
];
export const atracoesEOficinas = atracoes;

// --- A PARTE QUE FALTAVA ---
export const patrocinadores = [
  { id: 1, nome: 'EcoEnergia Brasil', logotipo: 'https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=150', tipo: 'Master' },
  { id: 2, nome: 'Verde Vida Embalagens', logotipo: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=150', tipo: 'Gold' }
];

export const parceiros = [
  { id: 1, nome: 'Secretaria do Meio Ambiente', logotipo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=150' },
  { id: 2, nome: 'Instituto Bioma Global', logotipo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=150' }
];