"use client";

import { useState, useEffect } from "react";

/* =========================================================
   Tomazela | Estratégia & Comunicação — Página única
   - Logos com proporção correta
   - Hero com imagem remota
   - Serviços com ícones SVG embutidos (sem dependências)
   - Foto do André com object-contain (não corta o rosto)
   ========================================================= */

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#insight", label: "Insight Flow" },
  { href: "#sobre", label: "Quem somos" },
  { href: "#contato", label: "Contato" },
];

// SVGs simples, leves e na cor da marca
const Icon = {
  Press: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF4D00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" {...props}>
      <rect x="3" y="4" width="18" height="14" rx="2"></rect>
      <line x1="7" y1="8" x2="17" y2="8"></line>
      <line x1="7" y1="12" x2="17" y2="12"></line>
      <line x1="7" y1="16" x2="12" y2="16"></line>
    </svg>
  ),
  Social: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF4D00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" {...props}>
      <circle cx="7" cy="7" r="3"></circle>
      <circle cx="17" cy="7" r="3"></circle>
      <circle cx="12" cy="17" r="3"></circle>
      <line x1="9" y1="9" x2="11" y2="14"></line>
      <line x1="15" y1="9" x2="13" y2="14"></line>
    </svg>
  ),
  Influencers: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF4D00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" {...props}>
      <circle cx="8" cy="8" r="3"></circle>
      <circle cx="16" cy="8" r="3"></circle>
      <path d="M2 20c1.5-3 4-5 6-5s4.5 2 6 5"></path>
      <path d="M14 14c1.5 0 4.5 2 6 5"></path>
    </svg>
  ),
  Events: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF4D00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" {...props}>
      <rect x="3" y="4" width="18" height="17" rx="2"></rect>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
      <rect x="7" y="13" width="4" height="3" rx="0.5"></rect>
      <rect x="13" y="13" width="4" height="3" rx="0.5"></rect>
    </svg>
  ),
  Content: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF4D00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" {...props}>
      <path d="M4 4h12l4 4v12a2 2 0 0 1-2 2H4z"></path>
      <path d="M16 4v4h4"></path>
      <line x1="8" y1="12" x2="16" y2="12"></line>
      <line x1="8" y1="16" x2="16" y2="16"></line>
    </svg>
  ),
  Custom: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="#FF4D00" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" {...props}>
      <path d="M12 2l3 7 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"></path>
    </svg>
  ),
};

const servicos = [
  { icon: <Icon.Press />, title: "Relações com a imprensa", desc: "Criação de pautas e materiais estratégicos para fortalecer sua marca na mídia." },
  { icon: <Icon.Social />, title: "Redes sociais", desc: "Planejamento e execução de conteúdo alinhado ao seu público." },
  { icon: <Icon.Influencers />, title: "Parcerias com influenciadores", desc: "Conexões estratégicas para amplificar sua mensagem." },
  { icon: <Icon.Events />, title: "Planejamento de eventos", desc: "Organização e divulgação de ações que destaquem sua marca." },
  { icon: <Icon.Content />, title: "Criação de conteúdo", desc: "Artigos, textos e materiais que posicionam sua organização no mercado." },
  { icon: <Icon.Custom />, title: "O que mais você precisa?", desc: "Montamos um pacote sob medida, de acordo com suas necessidades." },
];

const depoimentos = [
  { quote: "Profissional ágil, estratégico e colaborativo. Nossas entregas ganharam clareza e tração.", author: "Erika Martins de Figueiredo", role: "via LinkedIn" },
  { quote: "Visão integrada e capacidade de execução acima da média. Recomendo o trabalho.", author: "Elaine Nishiwaki", role: "via LinkedIn" },
];

const posts = [
  { title: "Gaslighting no trabalho: como reconhecer e agir", date: "24/09/2025" },
  { title: "Subjetividade sequestrada e saúde mental", date: "08/09/2025" },
  { title: "Etarismo nas empresas: o preconceito invisível", date: "26/08/2025" },
];

export default function Home() {
  const [open, setOpen] = useState(false);

  const onNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3" onClick={(e)=>onNavClick(e,'#home')}>
            {/* LOGO: largura controlada + object-contain */}
            <div className="w-[200px] md:w-[260px]">
              <img
                src="/logo-tomazela.png?v=8"
                alt="Logo Tomazela | Estratégia & Comunicação"
                className="block w-full h-auto object-contain"
              />
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map(n => (
              <a key={n.href} href={n.href} onClick={(e)=>onNavClick(e, n.href)} className="hover:text-[#FF4D00]">
                {n.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={(e)=>onNavClick(e,'#contato')}
              className="bg-[#FF4D00] text-white px-4 py-2 rounded-md hover:opacity-90 transition"
            >
              Fale com a gente
            </a>
          </nav>

          <button className="md:hidden p-2 border rounded-md" onClick={()=>setOpen(!open)} aria-label="Abrir menu">☰</button>
        </div>

        {open && (
          <div className="md:hidden border-t">
            <div className="px-4 py-3 flex flex-col gap-3">
              {nav.map(n => (
                <a key={n.href} href={n.href} onClick={(e)=>onNavClick(e,n.href)} className="py-1">
                  {n.label}
                </a>
              ))}
              <a href="#contato" onClick={(e)=>onNavClick(e,'#contato')} className="py-2 bg-[#FF4D00] text-white text-center rounded-md">
                Fale com a gente
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Comunicação sob medida para marcas e organizações de impacto.
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Estratégia que posiciona, conteúdo que entrega e relações que abrem portas.
            Clareza, método e impacto em cada projeto.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#servicos" onClick={(e)=>onNavClick(e,'#servicos')} className="bg-[#FF4D00] text-white px-5 py-3 rounded-md hover:opacity-90">
              Ver serviços
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            São Paulo • Brasil •{" "}
            <a className="underline" href="mailto:andre@andretomazela.com.br">andre@andretomazela.com.br</a>
          </p>
        </div>

        {/* Imagem remota estável (não depende de arquivo local) */}
        <div className="rounded-xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1600&auto=format&fit=crop"
            alt="Equipe em reunião criativa"
            className="block w-full h-full object-cover max-h-[320px]"
            loading="lazy"
          />
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">O que podemos fazer por você</h2>
          <p className="mt-2 text-gray-600 max-w-prose">
            Serviços pensados para empresas e organizações de impacto. Objetivo: ampliar visibilidade,
            fortalecer reputação e criar relações consistentes.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicos.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border p-5 shadow-sm hover:shadow-md transition">
                <div className="mb-3">{s.icon}</div>
                <h3 className="font-semibold">{s.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
          <a href="#contato" onClick={(e)=>onNavClick(e,'#contato')} className="inline-block mt-8 bg-[#FF4D00] text-white px-5 py-3 rounded-md hover:opacity-90">
            Montar meu pacote
          </a>
        </div>
      </section>

      {/* O QUE DIZEM */}
      <section id="legado" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">O que dizem sobre nosso trabalho</h2>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {depoimentos.map((d, i) => (
              <figure key={i} className="p-6 rounded-xl border bg-gray-50">
                <blockquote className="italic text-gray-800">“{d.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-gray-600">— {d.author}, {d.role}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section id="sobre" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Sua foto SEM cortar o rosto */}
          <div className="rounded-2xl overflow-hidden shadow bg-white flex items-center justify-center">
            <img
              src="/AE4C2D2A-8E9D-438F-A285-37420BCDA4FF.jpeg"
              alt="André Tomazela"
              className="block w-full h-auto object-contain max-h-[480px]"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Quem é André Tomazela</h2>
            <p className="mt-4 text-gray-700">
              Jornalista e estrategista de comunicação com experiência em empresas, agências e projetos editoriais.
              Entrega clara, sem enrolação, com foco em resultado.
            </p>
            <p className="mt-3 text-gray-700">
              Pós-graduação em Gestão da Comunicação em Mídias Digitais (Senac-SP). Reportagens e especiais para o Valor Econômico.
              Atuação com organizações de impacto e negócios.
            </p>
            <a href="#contato" onClick={(e)=>onNavClick(e,'#contato')} className="inline-block mt-5 px-5 py-3 border rounded-md hover:bg-gray-50">
              Falar com o André
            </a>
          </div>
        </div>
      </section>

      {/* INSIGHT FLOW */}
      <section id="insight" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FF4D00]">Insight Flow</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {posts.map((p, i) => (
              <article key={i} className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition">
                <div className="w-full h-36 rounded-md bg-gradient-to-b from-gray-100 to-white mb-4" />
                <h3 className="font-semibold text-[#FF4D00] leading-snug">{p.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{p.date}</p>
                <a href="#" className="inline-block mt-3 text-sm font-medium text-[#FF4D00] hover:text-orange-800">Ler mais →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-16 bg-gradient-to-t from-orange-50 to-white border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Vamos conversar?</h2>
          <p className="mt-2 text-gray-700 max-w-prose">
            Conte rápido seu objetivo. Eu respondo com um caminho claro e um pacote de soluções sob medida.
          </p>

          <form className="mt-6 grid md:grid-cols-3 gap-4">
            <input className="rounded-md border px-4 py-3" placeholder="Nome" required />
            <input type="email" className="rounded-md border px-4 py-3" placeholder="E-mail" required />
            <input className="rounded-md border px-4 py-3" placeholder="Telefone (opcional)" />
            <textarea className="md:col-span-3 rounded-md border px-4 py-3 min-h-[120px]" placeholder="Como posso ajudar?" required />
            <button className="rounded-md px-5 py-3 bg-[#FF4D00] text-white font-semibold hover:opacity-90 w-fit">Enviar</button>
          </form>

          <div className="mt-6 text-sm text-gray-600 flex flex-wrap gap-4 items-center">
            <a className="underline" href="mailto:andre@andretomazela.com.br">andre@andretomazela.com.br</a>
            <span>•</span>
            <a className="underline" href="#">WhatsApp</a>
            <span>•</span>
            <a className="underline" href="#">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#FF4D00] py-10 text-center text-white">
        <div className="mx-auto mb-4 w-[220px] md:w-[300px]">
          <img
            src="/logo-tomazela-br-fundotransp.png?v=8"
            alt="Logo Tomazela branco"
            className="block w-full h-auto object-contain"
          />
        </div>
        <p className="text-sm">Santa Cecília | São Paulo-SP</p>
        <p className="text-sm mt-1">
          <a className="underline" href="mailto:andre@andretomazela.com.br">andre@andretomazela.com.br</a> · <a className="underline" href="#">WhatsApp</a>
        </p>
        <p className="text-xs mt-3 opacity-90">© {new Date().getFullYear()} Tomazela | Estratégia & Comunicação</p>
      </footer>
    </div>
  );
}
