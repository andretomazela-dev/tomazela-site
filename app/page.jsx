"use client";

import { useState, useEffect } from "react";

const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "/lab", label: "Tomazela Lab", external: true },
  { href: "#sobre", label: "Quem somos" },
  { href: "#contato", label: "Contato" },
];

// Ícones (iguais aos atuais)
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

// *** Posts do Lab para a vitrine (3 mais recentes) ***
// Coloque imagens em /public/lab/*.jpg ou use as URLs abaixo.
// Se quiser usar seus próprios arquivos, basta trocar o campo image.
const LAB_POSTS_HOME = [
  {
    slug: "gaslighting-no-trabalho",
    title: "Gaslighting no trabalho: como reconhecer e agir",
    date: "2025-09-24",
    image: "/lab/gaslighting.jpg", // fallback automático se não existir
    fallback: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "subjetividade-e-saude-mental",
    title: "Subjetividade sequestrada e saúde mental",
    date: "2025-09-08",
    image: "/lab/saude-mental.jpg",
    fallback: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "etarismo-nas-empresas",
    title: "Etarismo nas empresas: o preconceito invisível",
    date: "2025-08-26",
    image: "/lab/etarismo.jpg",
    fallback: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
];

function imgOrFallback(src, fallback) {
  // No Next.js estático, não dá para checar existência de arquivo no client;
  // aqui só mantemos a ordem: tenta local; se não subir os arquivos, deixe a URL externa.
  return src || fallback;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const onNavClick = (e, href, external = false) => {
    if (external) return; // /lab
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const res = await fetch("https://formspree.io/f/meorrlvp", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3" onClick={(e)=>onNavClick(e,'#home')}>
            <div className="w-[200px] md:w-[260px]">
              <img
                src="/logo-tomazela.png?v=9"
                alt="Logo Tomazela | Estratégia & Comunicação"
                className="block w-full h-auto object-contain"
              />
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {nav.map(n => (
              <a
                key={n.href}
                href={n.href}
                onClick={(e)=>onNavClick(e, n.href, !!n.external)}
                className="hover:text-[#FF4D00]"
              >
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
                <a key={n.href} href={n.href} onClick={(e)=>onNavClick(e,n.href, !!n.external)} className="py-1">
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
            <a href="/lab" className="px-5 py-3 rounded-md border hover:bg-gray-50">
              Visitar o Tomazela Lab
            </a>
          </div>
          <p className="mt-6 text-sm text-gray-600">
            São Paulo • Brasil •{" "}
            <a className="underline" href="mailto:andre@andretomazela.com.br">andre@andretomazela.com.br</a>
          </p>
        </div>

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

      {/* TOMAZELA LAB — vitrine com 3 artigos */}
      <section id="lab-teaser" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Tomazela Lab</h2>
            <a href="/lab" className="text-[#FF4D00] font-medium hover:underline whitespace-nowrap">
              Ver todos os artigos →
            </a>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {LAB_POSTS_HOME.slice(0, 3).map((p) => (
              <article key={p.slug} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
                <a href={`/lab/${p.slug}`} className="block rounded-lg overflow-hidden">
                  <div className="aspect-[16/9] w-full bg-gray-100">
                    <img
                      src={imgOrFallback(p.image, p.fallback)}
                      alt={p.title}
                      className="block w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </a>
                <h3 className="mt-4 font-semibold leading-snug">
                  <a href={`/lab/${p.slug}`} className="text-[#FF4D00] hover:text-orange-800">
                    {p.title}
                  </a>
                </h3>
                <a href={`/lab/${p.slug}`} className="inline-block mt-2 text-sm font-medium text-[#FF4D00] hover:text-orange-800">
                  Ler mais →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUEM SOMOS */}
      <section id="sobre" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
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

      {/* CONTATO */}
      <section id="contato" className="py-16 bg-gradient-to-t from-orange-50 to-white border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Vamos conversar?</h2>
          <p className="mt-2 text-gray-700 max-w-prose">
            Conte rápido seu objetivo. Eu respondo com um caminho claro e um pacote de soluções sob medida.
          </p>

          <div className="mt-4" aria-live="polite">
            {status === "success" && (<div className="rounded-xl border border-green-200 bg-green-50 text-green-800 px-4 py-3">Obrigado! Sua mensagem foi enviada. Em breve eu retorno.</div>)}
            {status === "error" && (<div className="rounded-xl border border-red-200 bg-red-50 text-red-800 px-4 py-3">Não foi possível enviar agora. Tente novamente em alguns segundos ou escreva para <a className="underline" href="mailto:andre@andretomazela.com.br">andre@andretomazela.com.br</a>.</div>)}
          </div>

          <form onSubmit={onSubmit} className="mt-6 grid md:grid-cols-3 gap-4">
            <input name="Nome" className="col-span-1 rounded-xl border px-4 py-3" placeholder="Nome" required />
            <input name="Email" type="email" className="col-span-1 rounded-xl border px-4 py-3" placeholder="E-mail" required />
            <input name="Telefone" className="col-span-1 rounded-xl border px-4 py-3" placeholder="Telefone (opcional)" />
            <textarea name="Mensagem" className="md:col-span-3 rounded-xl border px-4 py-3 min-h-[120px]" placeholder="Como posso ajudar?" required />
            <button type="submit" disabled={status === "loading"} className="rounded-2xl px-5 py-3 bg-[#FF4D00] text-white font-semibold shadow hover:shadow-lg w-fit disabled:opacity-60">
              {status === "loading" ? "Enviando..." : "Enviar"}
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-600 flex flex-wrap gap-4 items-center">
            <a className="underline" href="mailto:andre@andretomazela.com.br">andre@andretomazela.com.br</a>
            <span>•</span>
            <a className="underline" href="https://wa.me/message/TUNCL3KFQIECM1" target="_blank" rel="noreferrer">WhatsApp</a>
            <span>•</span>
            <a className="underline" href="https://www.linkedin.com/in/tomazela/" target="_blank" rel="noreferrer">LinkedIn</a>
            <span>•</span>
            <a className="underline" href="https://www.instagram.com/tomazela.comunica/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#FF4D00] py-10 text-center text-white">
        <div className="mx-auto mb-4 w-[220px] md:w-[300px]">
          <img
            src="/logo-tomazela-br-fundotransp.png?v=9"
            alt="Logo Tomazela branco"
            className="block w-full h-auto object-contain"
          />
        </div>
        <p className="text-sm">Santa Cecília | São Paulo-SP</p>
        <p className="text-sm mt-1">
          <a className="underline" href="mailto:andre@andretomazela.com.br">andre@andretomazela.com.br</a> ·{" "}
          <a className="underline" href="https://wa.me/message/TUNCL3KFQIECM1" target="_blank" rel="noreferrer">WhatsApp</a>
        </p>
        <p className="text-xs mt-3 opacity-90">© {new Date().getFullYear()} Tomazela | Estratégia & Comunicação</p>
      </footer>
    </div>
  );
}
