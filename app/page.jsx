"use client";
import { Icon } from "../lib/icons";

const servicos = [
  { icon: <Icon.Press />, title: "Relações com a imprensa", desc: "Criação de pautas e materiais estratégicos para fortalecer sua marca na mídia." },
  { icon: <Icon.Social />, title: "Redes sociais", desc: "Planejamento e execução de conteúdo alinhado ao seu público." },
  { icon: <Icon.Influencers />, title: "Parcerias com influenciadores", desc: "Conexões estratégicas para amplificar sua mensagem." },
  { icon: <Icon.Events />, title: "Planejamento de eventos", desc: "Organização e divulgação de ações que destaquem sua marca." },
  { icon: <Icon.Content />, title: "Criação de conteúdo", desc: "Artigos, textos e materiais que posicionam sua organização no mercado." },
  { icon: <Icon.Custom />, title: "O que mais você precisa?", desc: "Montamos um pacote sob medida, de acordo com suas necessidades." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div>
            <h1 className="title-hero">Comunicação sob medida para marcas e organizações de impacto.</h1>
            <p className="muted" style={{fontSize:18, margin:"14px 0 20px 0"}}>
              Estratégia que posiciona, conteúdo que entrega e relações que abrem portas. Clareza, método e impacto em cada projeto.
            </p>
            <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
              <a className="btn" href="#servicos">Ver serviços</a>
              <a className="btn-outline" href="#lab">Visitar o Tomazela Lab</a>
            </div>
            <p className="chip" style={{marginTop:14}}>São Paulo • Brasil •{" "}
              <a className="btn-link" href="mailto:andre@andretomazela.com.br">andre@andretomazela.com.br</a></p>
          </div>
          <div className="media card">
            <img src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop" alt="Equipe em reunião criativa" />
          </div>
        </div>
      </section>
      <section id="servicos" className="services">
        <div className="container">
          <h2 className="title-sec">O que podemos fazer por você</h2>
          <p className="muted" style={{maxWidth:"68ch", margin:"8px 0 18px 0"}}>
            Soluções pensadas para empresas e organizações de impacto. Objetivo: ampliar visibilidade, fortalecer reputação e criar relações consistentes.
          </p>
          <div className="grid services-grid">
            {servicos.map((s, i) => (
              <article key={i} className="card service-card">
                {s.icon}
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </article>
            ))}
          </div>
          <a className="btn" href="#contato" style={{marginTop:20}}>Montar meu pacote</a>
        </div>
      </section>
      <section id="lab" className="lab">
        <div className="container">
          <div className="lab-head">
            <h2 className="title-sec">Tomazela Lab</h2>
            <a className="btn-link" href="/lab">Ver todos os artigos</a>
          </div>
          <div className="grid lab-grid">
            <article className="post-card">
              <div className="post-thumb"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop" alt="Gaslighting no trabalho"/></div>
              <h3>Gaslighting no trabalho: como reconhecer e agir</h3>
              <span className="date">24/09/2025</span>
              <a className="btn-link" href="/lab/gaslighting-no-trabalho">Ler mais →</a>
            </article>
            <article className="post-card">
              <div className="post-thumb"><img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" alt="Subjetividade e saúde mental"/></div>
              <h3>Subjetividade sequestrada e saúde mental</h3>
              <span className="date">08/09/2025</span>
              <a className="btn-link" href="/lab/subjetividade-e-saude-mental">Ler mais →</a>
            </article>
            <article className="post-card">
              <div className="post-thumb"><img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop" alt="Etarismo nas empresas"/></div>
              <h3>Etarismo nas empresas: o preconceito invisível</h3>
              <span className="date">26/08/2025</span>
              <a className="btn-link" href="/lab/etarismo-nas-empresas">Ler mais →</a>
            </article>
          </div>
        </div>
      </section>
      <section id="sobre" className="about">
        <div className="container about-grid">
          <div className="photo card">
            <img src="/AE4C2D2A-8E9D-438F-A285-37420BCDA4FF.jpeg" alt="André Tomazela" />
          </div>
          <div>
            <h2 className="title-sec">Quem é André Tomazela</h2>
            <p className="muted" style={{marginTop:10, fontSize:16, lineHeight:1.6}}>
              Jornalista e estrategista de comunicação com experiência em empresas, agências e projetos editoriais. Entrega clara, sem enrolação, com foco em resultado.
            </p>
            <p className="muted" style={{fontSize:16, lineHeight:1.6}}>
              Pós-graduação em Gestão da Comunicação em Mídias Digitais (Senac-SP). Reportagens e especiais para o Valor Econômico. Atuação com organizações de impacto e negócios.
            </p>
            <a className="btn-outline" href="#contato">Falar com o André</a>
          </div>
        </div>
      </section>
      <section id="contato" className="contact">
        <div className="container">
          <h2 className="title-sec">Vamos conversar?</h2>
          <p className="muted">Conte rápido seu objetivo. Eu respondo com um caminho claro e um pacote de soluções sob medida.</p>
          <form className="form" action="https://formspree.io/f/meorrlvp" method="POST">
            <input name="Nome" placeholder="Nome" required />
            <input type="email" name="Email" placeholder="E-mail" required />
            <input name="Telefone" placeholder="Telefone (opcional)" />
            <textarea name="Mensagem" placeholder="Como posso ajudar?" required></textarea>
            <div><button className="btn" type="submit">Enviar</button></div>
          </form>
          <p className="chip" style={{marginTop:12}}>
            <a className="btn-link" href="mailto:andre@andretomazela.com.br">andre@andretomazela.com.br</a> ·{" "}
            <a className="btn-link" href="https://wa.me/message/TUNCL3KFQIECM1" target="_blank" rel="noopener">WhatsApp</a> ·{" "}
            <a className="btn-link" href="https://www.linkedin.com/in/tomazela/" target="_blank" rel="noopener">LinkedIn</a> ·{" "}
            <a className="btn-link" href="https://www.instagram.com/tomazela.comunica/" target="_blank" rel="noopener">Instagram</a>
          </p>
        </div>
      </section>
    </div>
  );
}
