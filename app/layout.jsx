// app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Tomazela | Estratégia & Comunicação",
  description: "Comunicação sob medida para marcas e organizações de impacto.",
  // Se usar favicon clássico (public/favicon.ico), descomente:
  // icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="text-gray-900">
        {/* HEADER (global) */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3" aria-label="Voltar para a Home">
              {/* Logo com largura controlada (200 → 260) */}
              <div className="w-[200px] md:w-[260px]">
                <img
                  src="/logo-tomazela.png?v=9"
                  alt="Logo Tomazela | Estratégia & Comunicação"
                  className="block w-full h-auto object-contain"
                />
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="/#servicos" className="hover:text-[#FF4D00]">Serviços</a>
              <a href="/lab" className="hover:text-[#FF4D00]">Tomazela Lab</a>
              <a href="/#sobre" className="hover:text-[#FF4D00]">Quem somos</a>
              <a
                href="/#contato"
                className="bg-[#FF4D00] text-white px-4 py-2 rounded-md hover:opacity-90 transition"
              >
                Fale com a gente
              </a>
            </nav>
          </div>
        </header>

        {/* CONTEÚDO */}
        <main>{children}</main>

        {/* FOOTER (global) */}
        <footer className="bg-[#FF4D00] py-10 text-center text-white mt-16">
          {/* Logo branco com largura controlada (220 → 300) */}
          <div className="mx-auto mb-4 w-[220px] md:w-[300px]">
            <img
              src="/logo-tomazela-br-fundotransp.png?v=9"
              alt="Logo Tomazela branco"
              className="block w-full h-auto object-contain"
            />
          </div>
          <p className="text-sm">Santa Cecília | São Paulo-SP</p>
          <p className="text-sm mt-1">
            <a className="underline" href="mailto:andre@andretomazela.com.br">
              andre@andretomazela.com.br
            </a>{" "}
            ·{" "}
            <a className="underline" href="https://wa.me/message/TUNCL3KFQIECM1" target="_blank" rel="noreferrer">
              WhatsApp
            </a>{" "}
            ·{" "}
            <a className="underline" href="https://www.linkedin.com/in/tomazela/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>{" "}
            ·{" "}
            <a className="underline" href="https://www.instagram.com/tomazela.comunica/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </p>
          <p className="text-xs mt-3 opacity-90">
            © {new Date().getFullYear()} Tomazela | Estratégia & Comunicação
          </p>
        </footer>
      </body>
    </html>
  );
}
