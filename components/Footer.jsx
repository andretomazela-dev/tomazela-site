export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="logo">
        <img src="/logo-tomazela-br-fundotransp.png" alt="Tomazela (logo branco)" />
      </div>
      <p>Santa Cecília | São Paulo-SP</p>
      <p>
        <a href="mailto:andre@andretomazela.com.br">andre@andretomazela.com.br</a> ·{" "}
        <a href="https://wa.me/message/TUNCL3KFQIECM1" target="_blank" rel="noopener">WhatsApp</a> ·{" "}
        <a href="https://www.linkedin.com/in/tomazela/" target="_blank" rel="noopener">LinkedIn</a> ·{" "}
        <a href="https://www.instagram.com/tomazela.comunica/" target="_blank" rel="noopener">Instagram</a>
      </p>
      <p className="chip">© {new Date().getFullYear()} Tomazela | Estratégia & Comunicação</p>
    </footer>
  );
}
