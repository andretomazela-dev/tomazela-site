import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tomazela | Estratégia & Comunicação",
  description: "Comunicação sob medida para marcas e organizações de impacto.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-white text-gray-900`}>
        {/* CONTEÚDO PRINCIPAL */}
        {children}

        {/* FOOTER GLOBAL */}
        <footer className="bg-[#FF4D00] py-10 text-center text-white mt-16">
          <div className="mx-auto">
            <img
              src="/logo-tomazela-br-fundotransp.png?v=9"
              alt="Logo Tomazela branco"
              className="block mx-auto h-12 md:h-16 w-auto object-contain"
            />
          </div>

          <p className="text-sm mt-4">Santa Cecília | São Paulo-SP</p>

          <p className="text-sm mt-1">
            <a
              className="underline"
              href="mailto:andre@andretomazela.com.br"
            >
              andre@andretomazela.com.br
            </a>{" "}
            ·{" "}
            <a
              className="underline"
              href="https://wa.me/message/TUNCL3KFQIECM1"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>{" "}
            ·{" "}
            <a
              className="underline"
              href="https://www.linkedin.com/in/tomazela/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            ·{" "}
            <a
              className="underline"
              href="https://www.instagram.com/tomazela.comunica/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
