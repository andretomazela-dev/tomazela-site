"use client";

import { useState, useEffect } from "react";

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#insight", label: "Insight Flow" },
  { href: "#sobre", label: "Quem somos" },
  { href: "#contato", label: "Contato" },
];

const servicos = [
  { title: "Relações com a imprensa", desc: "Criação de pautas e materiais estratégicos para fortalecer sua marca na mídia." },
  { title: "Redes sociais", desc: "Planejamento e execução do conteúdo alinhado ao seu público." },
  { title: "Parcerias com influenciadores", desc: "Conexões estratégicas para amplificar sua mensagem." },
  { title: "Planejamento de eventos", desc: "Organização e divulgação de ações que destaquem sua marca." },
  { title: "Criação de conteúdo", desc: "Artigos, textos e materiais que posicionam sua organização no mercado." },
  { title: "O que mais você precisa?", desc: "Montamos um pacote sob medida, de acordo com suas necessidades." },
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
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  useEffect(() => {
    // fecha o menu ao redimensionar para desktop
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
                src="/logo-tomazela.png?v=7"
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
        <div className="rounded-xl shadow-lg overflow-hidden">
          {/* Imagem remota (não depende de arquivo local) */}
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
          <div className="rounded-2xl overflow-hidden shadow">
            {/* sua foto que está em /public */}
            <img
              src="/AE4C2D2A-8E9D-438F-A285-37420BCDA4FF.jpeg"
              alt="André Tomazela"
              className="block w-full h-full object-cover max-h-[420px]"
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
            src="/logo-tomazela-br-fundotransp.png?v=7"
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
