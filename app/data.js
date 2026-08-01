export const eventoConfig = {
  titulo: '2º Fórum Estancieiro',
  slogan: 'Educação, meio ambiente e experiências que transformam',
  data: '01/08 - Sábado',
  horario: '09h às 18h',
  local: 'Estância e Parque Ecológico das Águas',
  endereco: 'Estrada do Caibro, 1494 - Colônia, São Paulo - SP, 04898-030',
  linkInscricao: 'https://festou.com.br/loja/evento/19021',
  sobre:
    'Um encontro para educadores, gestores, estudantes e pessoas interessadas em sustentabilidade, turismo pedagógico e conservação ambiental. A programação combina palestras, painéis, oficinas, vivências práticas e momentos de conexão em meio à natureza.',
};

export const destaques = [
  {
    titulo: 'Educação ambiental aplicada',
    texto:
      'Conversas e práticas voltadas para escolas, projetos pedagógicos e experiências de aprendizagem fora da sala de aula.',
  },
  {
    titulo: 'Vivências no parque',
    texto:
      'Atividades de aventura, lazer, trilhas, oficinas e contato direto com o território da Cratera da Colônia.',
  },
  {
    titulo: 'Conexões estratégicas',
    texto:
      'Um dia para aproximar educadores, especialistas, instituições, mantenedores e iniciativas ligadas ao meio ambiente.',
  },
];

export const programacaoManha = [
  { horario: '08h20', atividade: 'Abertura do portão e estacionamento' },
  { horario: '08h30', atividade: 'Início do credenciamento' },
  { horario: '08h30 às 09h', atividade: 'Coffee break para networking na Arena Nascente' },
  { horario: '09h00', atividade: 'Palavra dos fundadores' },
  { horario: '09h15', atividade: 'Abertura do Fórum' },
  { horario: '09h30 às 11h45', atividade: 'Palestras e painéis da manhã' },
  { horario: '09h30 às 11h45', atividade: 'Atrações, aventura e lazer no parque' },
  { horario: '09h30 e 11h45', atividade: 'Projeção do documentário “Cratera da Colônia”' },
  { horario: '11h45 às 17h', atividade: 'Abertura do restaurante' },
];

export const programacaoTarde = [
  { horario: '13h10 às 16h', atividade: 'Retomada das palestras' },
  { horario: '13h10 às 17h', atividade: 'Retomada das atrações, aventura e lazer' },
  {
    horario: '13h15',
    atividade:
      'Painel “Cratera da Colônia” com Dra. Simone S. S. Mantovanelli e Roberto Carlos da Silva',
  },
  {
    horario: '14h15',
    atividade: 'Painel “Educação Ambiental na Rede Pública Municipal de Ensino” com SME/SP',
  },
  { horario: '14h20 e 15h20', atividade: 'Visita ao Sítio Mayumi com a jardineira do Polo' },
  { horario: '15h15', atividade: 'Projeção do documentário “Cratera da Colônia”' },
  { horario: '18h00', atividade: 'Brinde de encerramento' },
];

export const programacao = { manha: programacaoManha, tarde: programacaoTarde };

export const palestrantes = [
  {
    id: 1,
    nome: 'Sr. Jorge e Sra. Vilma',
    tema: 'Palavra dos mantenedores',
    horario: '09h00',
    bio:
      'Fundadores do Grupo Jogo de Turismo, representam a história empreendedora por trás do parque e da valorização da região.',
    foto: '/imagem01_mantenedores.jpg',
  },
  {
    id: 2,
    nome: 'Lucas Duarte',
    tema: 'Abertura do evento',
    horario: '09h30',
    bio:
      'Gestor na Estância e Parque Ecológico das Águas, atua com educação ambiental, ecoturismo e experiências pedagógicas.',
    foto: '/imagem02_lucasduarte.jpg',
  },
  {
    id: 3,
    nome: 'Jack Nogueira',
    tema: 'Turismo pedagógico e eventos educativos',
    horario: '09h30',
    bio:
      'Profissional de Educação Física e gestão empresarial, fundador da Planeta Terra Tur e referência em turismo pedagógico.',
    foto: '/imagem04_jacknogueira.jpg',
  },
  {
    id: 17,
    nome: 'Nara Sá',
    tema: 'Descubra o Polo de Ecoturismo de São Paulo',
    horario: '11h00',
    bio:
      'Promoção do Turismo — São Paulo Turismo / Prefeitura de São Paulo.\n\nAtua na promoção do turismo na empresa municipal de turismo e eventos da capital paulista, promovendo os atrativos turísticos do Polo de Ecoturismo de São Paulo.\n\nNesta palestra, será possível conhecer os atrativos do Polo de Ecoturismo de São Paulo, seus circuitos turísticos, os produtos turísticos do território e as perspectivas para o desenvolvimento do ecoturismo na região.\n\nAtuante no setor público desde 2001, a jornalista trabalha com ações de promoção do Polo de Ecoturismo de São Paulo desde a criação do território, em 2014, incluindo marketing, treinamentos e eventos. É jornalista, com expertise em web content development, social media, press relations, relações governamentais e assessoria política. É também ativista da causa animal há dezoito anos. Sua formação inclui pós-graduação em Relações Internacionais, Ética e Filosofia Política e Audiovisual, além de MBA em Mercado Pet, e é mestre em Letras Africanas.',
    foto: '/palestrante-nara-sa.jpeg',
  },
  {
    id: 4,
    nome: 'Bianca Nunes',
    tema: 'Educação bilíngue e práticas pedagógicas',
    horario: '11h00',
    bio:
      'Educadora com experiência em instituições certificadas pelo International Baccalaureate e formação em pedagogia, letras e neurociências.',
    foto: '/imagem03_biancanunes.jpg',
  },
  {
    id: 5,
    nome: 'Alessandro Alencar',
    tema: 'Rotary e sustentabilidade',
    horario: '15h00',
    bio:
      'Contador especializado no terceiro setor, escoteiro e rotariano com atuação ligada à ética, comunidade e sustentabilidade.',
    foto: '/imagem06_alessandroalencar.jpg',
  },
  {
    id: 6,
    nome: 'Simone Sandra Sonvesso Mantovanelli, PhD',
    tema: 'Geo Parque Cratera da Colônia',
    horario: '13h15',
    bio:
      'Geóloga, pesquisadora e especialista em ciência de dados aplicada ao meio ambiente, geoprocessamento e patrimônio geológico.',
    foto: '/imagem08_simonesandra.jpg',
  },
  {
    id: 7,
    nome: 'Roberto Carlos da Silva',
    tema: 'Geo Parque Cratera da Colônia',
    horario: '13h15',
    bio:
      'Gestor na APA Capivari-Monos, professor e empresário com trajetória em ecoturismo, educação e políticas públicas.',
    foto: '/imagem09_robertocarlos.jpg',
  },
  {
    id: 8,
    nome: 'Hilda Medeiros',
    tema: 'Liderança consciente e mudança essencial',
    horario: '',
    bio:
      'Hilda Medeiros é palestrante e especialista em comportamento humano, com mais de 25.000 horas de atuação no desenvolvimento de líderes e equipes.\n\nSeu trabalho ajuda empresas a lidar com fatores emocionais que impactam decisões, relações e resultados, muitas vezes invisíveis no dia a dia organizacional.\n\nCriadora do Programa Mudança Essencial, desenvolve líderes mais conscientes e preparados para lidar com pressão, desafios e tomada de decisão no ambiente corporativo.\n\nFormada em Filosofia pela PUC-SP e com especialização em escrita e comportamento humano, reúne prática e conhecimento para gerar transformação aplicável nas organizações.',
    foto: '/palestrante-hilda-medeiros.png',
  },
  {
    id: 9,
    nome: 'Walmir Fernandes',
    tema: 'Sua escola tem apenas um motor?',
    horario: '',
    bio:
      'A educação vive uma das maiores transformações de sua história. Enquanto o ensino continua sendo a essência da escola, as expectativas das famílias, dos estudantes e da sociedade mudaram profundamente. Hoje, formar bons alunos já não é suficiente. É preciso construir comunidades, gerar pertencimento e criar experiências que fortaleçam a relação entre escola, famílias e estudantes.\n\nNesta palestra, o empreendedor e especialista em inovação educacional Walmir Fernandes apresenta o Método M2 (Motor 2), um conceito que propõe uma nova forma de pensar o crescimento institucional das escolas. A partir da experiência de anos acompanhando centenas de instituições de ensino em todo o Brasil, Walmir mostra por que muitas escolas concentram todos os seus esforços no desenvolvimento acadêmico, o Motor 1, e deixam de investir em um segundo motor responsável por impulsionar retenção de alunos, fortalecimento da comunidade escolar, novas matrículas e sustentabilidade institucional.\n\nMais do que falar sobre eventos ou projetos complementares, a palestra apresenta uma visão estratégica sobre como transformar experiências, relacionamento, cultura e pertencimento em ativos permanentes para o desenvolvimento da escola.\n\nUma reflexão prática e provocadora para mantenedores, diretores e gestores que desejam preparar suas instituições para os desafios da próxima década.\n\nWalmir Fernandes é co-founder da Plataforma Festou, criador do site Guia Eventos Escolares e do evento Expo Eventos Escolares.',
    foto: '/palestrante-walmir-fernandes.png',
  },
  {
    id: 10,
    nome: 'Luciano França Marinho',
    tema: 'Educação, território e práticas pedagógicas contemporâneas',
    horario: '',
    bio:
      'Luciano França Marinho é doutorando em Educação pela Universidade Municipal de São Caetano do Sul, mestre em Educação pela PUC-SP, pedagogo e professor de Geografia do ensino médio técnico e anos finais do Ensino Fundamental II do Colégio Santa Maria e Senac Nações Unidas.',
    foto: '/palestrante-luciano-franca-marinho.png',
  },
  {
    id: 11,
    nome: 'Felipe Bertolini',
    tema: 'IA na escola: formar pilotos, não dependentes — o que sua escola precisa decidir agora',
    horario: '',
    bio:
      'Felipe Bertolini não fala de IA por tendência — constrói. Engenheiro de software pela USP, com passagens por Magazine Luiza e Samsung, cofundou a edtech Questione — que levou IA a estudantes da rede pública em 2023 — e hoje lidera a Brevia, criadora da Lumi: IA que opera empresas reais, incluindo as do Grupo anfitrião deste fórum. Educação e tecnologia, aplicadas juntas há duas décadas.',
    foto: '/palestrante-felipe-bertolini.png',
  },
  {
    id: 12,
    nome: 'Vitor H. Schvartz',
    tema: 'Filosofia, território e desenvolvimento sustentável',
    horario: '',
    bio:
      'Licenciado em Filosofia e Geografia, Doutor em Filosofia pela USP com pós-doutorado na Johns Hopkins University, foi pesquisador visitante na Columbia University e leciona Geografia e Filosofia.\n\nÉ oficial da reserva da Marinha do Brasil e foi coordenador de desenvolvimento sustentável da SMRI/SP, além de possuir vasta experiência docente em instituições públicas e privadas.',
    foto: '/palestrante-vitor-schvartz.png',
  },
  {
    id: 13,
    nome: 'Eduardo Murakami',
    tema: 'Educação ambiental e direitos humanos nas escolas',
    horario: '',
    bio:
      'Especialista em Educação Ambiental e Direitos Humanos. Biólogo (UNESP) e pós-graduado pela UFABC, é professor da RME e atua na gestão do Núcleo de Educação Ambiental da Secretaria Municipal de Educação de São Paulo (SME/SP), liderando iniciativas de formação de professores e políticas públicas educacionais focadas em sustentabilidade.',
    foto: '/palestrante-eduardo-murakami.png',
  },
  {
    id: 14,
    nome: 'Renato Gil Carneiro dos Santos',
    tema: 'Educação alimentar e nutricional na rede pública',
    horario: '',
    bio:
      'Graduado em Comunicação Social – Jornalismo (Universidade Nove de Julho, 2008), licenciado em Pedagogia (Faculdade Aldeia de Carapicuíba, 2015), bacharel em Direito (Universidade Nove de Julho, 2022) e especialista em Políticas Públicas e Municipalidade (Universidade Cesumar, 2023).\n\nAtua como Diretor da Divisão de Educação Alimentar e Nutricional na Coordenadoria de Alimentação Escolar da Secretaria Municipal de Educação de São Paulo.',
    foto: '/palestrante-renato-gil.png',
  },
  {
    id: 15,
    nome: 'Aldo Rebelo',
    tema: 'Código Florestal e políticas ambientais no Brasil',
    horario: '',
    bio:
      'Jornalista e escritor. Presidiu a Câmara dos Deputados, foi relator do Código Florestal Brasileiro e ministro nas pastas de Coordenação Política e Relações Institucionais; do Esporte; da Ciência, Tecnologia e Inovação e da Defesa; secretário da Casa Civil do Governo de São Paulo e secretário de Relações Internacionais do município de São Paulo.',
    foto: '/palestrante-aldo-rebelo.png',
  },
  {
    id: 16,
    nome: 'André Ortega',
    tema: 'Educomunicação e desenvolvimento sustentável',
    horario: '',
    bio:
      'Formado em Educomunicação (USP). Atuação em políticas públicas, relações internacionais e desenvolvimento sustentável.',
    foto: '/palestrante-andre-ortega.png',
  },
];

export const atracoes = [
  {
    id: 1,
    titulo: 'Trilha ecológica guiada',
    descricao:
      'Uma experiência de observação da fauna, flora e paisagem local, conectando aprendizagem e território.',
    imagem: '/imagem12_atracoes.jpg',
  },
  {
    id: 2,
    titulo: 'Visita ao Sítio Mayumi',
    descricao:
      'Vivência acompanhada pela jardineira do Polo, com olhar para cultivo, natureza e práticas sustentáveis.',
    imagem: '/imagem11_sitiomayumi.jpg',
  },
  {
    id: 3,
    titulo: 'Horta e agroecologia',
    descricao:
      'Contato com técnicas simples de manejo, cuidado com o solo e possibilidades para projetos escolares.',
    imagem: '/imagem14_horta.jpg',
  },
  {
    id: 4,
    titulo: 'Restaurante e convivência',
    descricao:
      'Espaços preparados para pausa, alimentação, networking e troca entre os participantes ao longo do dia.',
    imagem: '/imagem13_restaurante.jpg',
  },
];

export const atracoesEOficinas = atracoes;

export const patrocinadores = [
  {
    id: 1,
    nome: 'Grupo Jogo',
    logotipo: '/logo_grupo_jogo.png',
    tipo: 'Realização',
  },
];

export const parceiros = patrocinadores;
