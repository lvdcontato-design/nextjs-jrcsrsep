import './globals.css';

export const metadata = {
  metadataBase: new URL('https://www.estancieiro.com.br'),
  title: '2º Fórum Estancieiro | Educação, Meio Ambiente e Sustentabilidade',
  description:
    'Participe do 2º Fórum Estancieiro na Estância e Parque Ecológico das Águas, em São Paulo. Um dia de palestras, oficinas, vivências ambientais e networking.',
  keywords: [
    'Fórum Estancieiro',
    'Estância das Águas',
    'Educação ambiental',
    'Ecoturismo São Paulo',
    'Sustentabilidade',
    'Turismo pedagógico',
  ],
  openGraph: {
    title: '2º Fórum Estancieiro',
    description:
      'Educação, meio ambiente e experiências que transformam na Estância e Parque Ecológico das Águas.',
    url: 'https://www.estancieiro.com.br',
    siteName: 'Fórum Estancieiro',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: 'Área verde representando o Fórum Estancieiro',
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
