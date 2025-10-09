import './globals.css';

export const metadata = {
  title: 'Tomazela | Estratégia & Comunicação',
  description: 'Comunicação sob medida para marcas e organizações de impacto.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon-tomazela.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}