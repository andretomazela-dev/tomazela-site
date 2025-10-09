'use client';
import { useState, useEffect } from 'react';

const nav = [
  { href: '#servicos', label: 'Serviços' },
  { href: '#conteudos', label: 'Insight Flow' },
  { href: '#sobre', label: 'Quem somos' },
  { href: '#contato', label: 'Contato' },
];

const servicos = [
  { title: 'Relações com a imprensa', desc: 'Criação de pautas e materiais estratégicos para fortalecer sua marca na mídia.', icon: '📰' },
  { title: 'Redes sociais', desc: 'Planejamento e execução do conteúdo alinhado ao seu público.', icon: '📱' },
  { title: 'Parcerias com influenciadores', desc: 'Conexões estratégicas para amplificar sua mensagem.', icon: '🤝' },
  { title: 'Planejamento de eventos', desc: 'Organização e divulgação de ações que destaquem sua marca.', icon: '🥂' },
  { title: 'Criação de conteúdo', desc: 'Artigos, textos e materiais que posicionam sua organização no mercado.', icon: '✍️' },
  { title: 'O que mais você precisa?', desc: 'Montamos um pacote sob medida, de acordo com suas necessidades.', icon: '🧩' },
];

const depoimentos = [
  { quote: 'Profissional ágil, estratégico e colaborativo. Nossas entregas ganharam clareza e tração.', author: 'Erika Martins de Figueiredo', role: 'via LinkedIn' },
  { quote: 'Visão integrada e capacidade de execução acima da média. Recomendo o trabalho.', author: 'Elaine Nishiwaki', role: 'via LinkedIn' },
];

const posts = [
  { title: 'Gaslighting no trabalho: como reconhecer e agir', date: '24/09/2025' },
  { title: 'Subjetividade sequestrada e saúde mental', date: '08/09/2025' },
  { title: 'Etarismo nas empresas: o preconceito invisível', date: '26/08/2025' },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const ids = ['#home', '#servicos', '#conteudos', '#sobre', '#contato'];
    const sections = ids.map((sel) => document.querySelector(sel)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(`#${entry.target.id}`); });
    }, { root: null, rootMargin: '0px 0px -60% 0px', threshold: [0.2, 0.6] });
    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const onNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const res = await fetch('https://formspree.io/f/mrgnkylr', { method: 'POST', headers: { Accept: 'application/json' }, body: data });
      if (res.ok) { setStatus('success'); form.reset(); } else { setStatus('error'); }
    } catch { setStatus('error'); }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform: translateY(12px); } to { opacity:1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
        .reveal-up { animation: fadeUp 0.7s ease-out both; }
        .reveal-fade { animation: fadeIn 0.9s ease-out 0.1s both; }
        .img-card { border-radius: 1.5rem; overflow: hidden; box-shadow: 0 8px 20px rgba(0,0,0,0.1); transition: transform 0.5s ease; }
        .img-card:hover { transform: scale(1.03); }
        .post-ph { background: linear-gradient(180deg, #F5F5F5 0%, #FFFFFF 100%); }
        .title-hover { transition: all 0.2s ease; }
        .title-hover:hover { text-decoration: underline; filter: brightness(1.08); }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 font-bold text-xl tracking-tight" onClick={(e)=>onNavClick(e,'#home')}>
            <img src="/logo-tomazela.png" alt="Logo Tomazela | Estratégia & Comunicação" className="h-22 w-auto max-h-22" />
          </a>
          <nav className="hidden md:flex gap-6 text-sm">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={(e)=>onNavClick(e,n.href)} aria-current={active===n.href?'page':undefined} className={active===n.href?'text-[#FF4D00] font-semibold':'text-gray-700 hover:text-[#FF4D00]'}>{n.label}</a>
            ))}
          </nav>
          <div className="md:hidden">
            <button aria-label="menu" onClick={()=>setOpen(!open)} className="p-2 rounded-lg border">☰</button>
          </div>
          <a href="#contato" onClick={(e)=>onNavClick(e,'#contato')} className="hidden md:inline-block rounded-2xl px-4 py-2 bg-[#FF4D00] text-white font-medium shadow hover:shadow-md">Fale com a gente</a>
        </div>
        {open && (
          <div className="md:hidden border-t">
            <div className="px-4 py-3 flex flex-col gap-3">
              {nav.map((n)=>(<a key={n.href} href={n.href} onClick={(e)=>onNavClick(e,n.href)} className="py-1">{n.label}</a>))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="anchor bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="reveal-up">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Comunicação sob medida para marcas e organizações de impacto.</h1>
            <p className="mt-4 text-lg text-gray-700 max-w-prose">Estratégia que posiciona, conteúdo que entrega e relações que abrem portas. Clareza, método e impacto em cada projeto.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#servicos" onClick={(e)=>onNavClick(e,'#servicos')} className="rounded-2xl px-5 py-3 bg-[#FF4D00] text-white font-semibold shadow hover:shadow-lg">Ver serviços</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <span>São Paulo • Brasil</span>
              <span>•</span>
              <a className="underline" href="mailto:andre@andretomazela.com.br">andre@andretomazela.com.br</a>
            </div>
          </div>
          <div className="relative img-card overflow-hidden reveal-fade">
            <div className="aspect-[4/3] w-full bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#FF4D00]/30 via-transparent to-white/10 mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="anchor py-16 bg-gradient-to-b from-white to-orange-50/40">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">O que podemos fazer por você</h2>
          <p className="mt-2 text-gray-600 max-w-prose">Serviços pensados para empresas e organizações de impacto. Objetivo: ampliar visibilidade, fortalecer reputação e criar relações consistentes.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicos.map((s,i)=>(
              <div key={i} className="rounded-2xl border p-5 bg-white shadow-sm hover:shadow-md transition">
                <div className="img-card post-ph mb-3 flex items-center justify-center text-4xl text-[#FF4D00]">{s.icon}</div>
                <h4 className="mt-2 font-semibold title-hover">{s.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href="#contato" onClick={(e)=>onNavClick(e,'#contato')} className="inline-block rounded-2xl px-5 py-3 bg-[#FF4D00] text-white font-semibold shadow hover:shadow-lg">Montar meu pacote</a>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="legado" className="py-14 border-t bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">O que dizem sobre nosso trabalho</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
            {depoimentos.map((d,i)=>(
              <figure key={i} className="p-6 rounded-2xl border bg-gray-50">
                <blockquote className="text-gray-800 italic leading-relaxed">“{d.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-gray-600">— {d.author}, <span className="opacity-80">{d.role}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="anchor py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div className="relative img-card">
            <div className="absolute inset-0 bg-[url('/AE4C2D2A-8E9D-438F-A285-37420BCDA4FF.jpeg')] bg-cover bg-center" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-white/60 to-transparent" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Quem é André Tomazela</h2>
            <p className="mt-4 text-gray-700">Jornalista e estrategista de comunicação com experiência em empresas, agências e projetos editoriais. Entrega clara, sem enrolação, com foco em resultado.</p>
            <p className="mt-3 text-gray-700">Pós-graduação em Gestão da Comunicação em Mídias Digitais (Senac-SP). Reportagens e especiais para o Valor Econômico. Atuação com organizações de impacto e negócios.</p>
            <a href="#contato" onClick={(e)=>onNavClick(e,'#contato')} className="inline-block mt-5 rounded-2xl px-5 py-3 border hover:border-gray-400">Falar com o André</a>
          </div>
        </div>
      </section>

      {/* Insight Flow */}
      <section id="conteudos" className="anchor py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FF4D00]">Insight Flow</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {posts.map((p,i)=>(
              <article key={i} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
                <div className="img-card post-ph mb-4"><div className="aspect-[4/3] w-full" /></div>
                <h3 className="font-semibold leading-snug text-[#FF4D00] title-hover">{p.title}</h3>
                <p className="text-xs text-gray-500 mt-1">{p.date}</p>
                <a href="#" className="inline-block mt-3 text-sm font-medium text-[#FF4D00] hover:text-orange-800 title-hover">Ler mais →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="anchor py-16 bg-gradient-to-t from-orange-50 to-white border-t">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Vamos conversar?</h2>
          <p className="mt-2 text-gray-700 max-w-prose">Conte rápido seu objetivo. Eu respondo com um caminho claro e um pacote de soluções sob medida.</p>

          <div className="mt-4" aria-live="polite">
            {status==='success' && (<div className="rounded-xl border border-green-200 bg-green-50 text-green-800 px-4 py-3">Obrigado! Sua mensagem foi enviada. Em breve eu retorno.</div>)}
            {status==='error' && (<div className="rounded-xl border border-red-200 bg-red-50 text-red-800 px-4 py-3">Não foi possível enviar agora. Tente novamente ou escreva para <a className="underline" href="mailto:andre@andretomazela.com.br">andre@andretomazela.com.br</a>.</div>)}
          </div>

          <form onSubmit={onSubmit} className="mt-6 grid md:grid-cols-3 gap-4">
            <input name="Nome" className="col-span-1 rounded-xl border px-4 py-3" placeholder="Nome" required />
            <input name="Email" type="email" className="col-span-1 rounded-xl border px-4 py-3" placeholder="E-mail" required />
            <input name="Telefone" className="col-span-1 rounded-xl border px-4 py-3" placeholder="Telefone (opcional)" />
            <textarea name="Mensagem" className="md:col-span-3 rounded-xl border px-4 py-3 min-h-[120px]" placeholder="Como posso ajudar?" required />
            <button type="submit" disabled={status==='loading'} className="rounded-2xl px-5 py-3 bg-[#FF4D00] text-white font-semibold shadow hover:shadow-lg w-fit disabled:opacity-60">{status==='loading'?'Enviando...':'Enviar'}</button>
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

      {/* Footer */}
      <footer className="bg-[#FF4D00] py-8 text-center">
        <img src="/logo-tomazela-br-fundotransp.png" alt="Logo Tomazela branco" className="mx-auto h-16 mb-4" />
        <p className="text-white text-sm">Santa Cecília | São Paulo-SP</p>
        <p className="text-white text-sm mt-1">
          <a className="underline" href="mailto:andre@andretomazela.com.br">andre@andretomazela.com.br</a> · <a className="underline" href="#">WhatsApp</a>
        </p>
        <p className="text-white text-xs mt-3">© {new Date().getFullYear()} Tomazela | Estratégia & Comunicação</p>
      </footer>
    </div>
  );
}
