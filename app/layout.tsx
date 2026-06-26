import './globals.css';
// Copie e cole este bloco de metadados no topo ou substitua o arquivo layout

export const metadata = {
  title: '2º Fórum Estancieiro | Educação, Meio Ambiente e Sustentabilidade',
  description:
    'Participe do maior fórum de ecoturismo e vivências pedagógicas no Polo de Ecoturismo de São Paulo. Dia 23 de Julho de 2025 na Estância e Parque Ecológico das Águas.',
  keywords: [
    'Fórum Estancieiro',
    'Estância das Águas',
    'Ecoturismo São Paulo',
    'Pedagogia Ambiental',
    'Sustentabilidade',
    'BNCC',
    'Visita Escolar',
  ],

  // Tags para Redes Sociais e WhatsApp (Open Graph)
  openGraph: {
    title: '2º Fórum Estancieiro - Inscrições Abertas',
    description:
      'Uma jornada prática de descoberta e conexão com a natureza voltada para escolas, famílias e educadores.',
    url: 'https://www.estancieiro.com.br', // Substitua pela URL final quando publicar
    siteName: 'Fórum Estancieiro',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&h=630&q=80', // Miniatura padrão de alta qualidade
        width: 1200,
        height: 630,
        alt: 'Cenário do 2º Fórum Estancieiro',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
