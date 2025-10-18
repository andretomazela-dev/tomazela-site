export const metadata = {
  title: "Tomazela | Estratégia & Comunicação",
  description: "Comunicação sob medida para marcas e organizações de impacto.",
  icons: { icon: "/icon.png" },
};
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
