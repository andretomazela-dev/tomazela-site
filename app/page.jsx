"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const onNavClick = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          <a
            href="#home"
            className="flex items-center gap-3 font-bold text-xl tracking-tight"
            onClick={(e) => onNavClick(e, "#home")}
          >
            <div className="w-[200px] md:w-[260px]">
              <img
                src="/logo-tomazela.png?v=6"
                alt="Logo Tomazela | Estratégia & Comunicação"
                className="block w-full h-auto object-contain"
              />
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6 font-medium">
            <a href="#servicos" onClick={(e) => onNavClick(e, "#servicos")}>
              Serviços
            </a>
            <a href="#insight" onClick={(e) => onNavClick(e, "#insight")}>
              Insight Flow
            </a>
            <a href="#sobre" onClick={(e) => onNavClick(e, "#sobre")}>
              Quem somos
            </a>
            <a href="#contato" onClick={(e) => onNavClick(e, "#contato")}>
              Contato
            </a>
            <a
              href="#contato"
              onClick={(e) => onNavClick(e, "#contato")}
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
            >
              Fale com a gente
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Comunicação sob medida para marcas e organizações de impacto.
          </h1>
          <p className="text-lg text-neutral-700 mb-6">
            Estratégia que posiciona, conteúdo que entrega e relações que abrem
            portas. Clareza, método e impacto em cada projeto.
          </p>
          <a
            href="#servicos"
            onClick={(e) => onNavClick(e, "#servicos")}
            className="inline-block bg-orange-500 text-white px-5 py-3 rounded-md hover:bg-orange-600 transition"
          >
            Ver serviços
          </a>
          <p className="text-sm text-neutral-500 mt-6">
            São Paulo • Brasil •{" "}
            <a
              href="mailto:andre@andretomazela.com.br"
              className="underline hover:text-orange-500"
            >
              andre@andretomazela.com.br
            </a>
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="/hero-meeting.jpg"
            alt="Equipe em reunião criativa"
            className="rounded-lg shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-neutral-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            O que podemos fazer por você
          </h2>
          <p className="text-neutral-600 mb-10">
            Serviços pensados para empresas e organizações de impacto. Objetivo:
            ampliar visibilidade, fortalecer reputação e criar relações
            consistentes.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Relações com a imprensa",
                text: "Criação de pautas e materiais estratégicos para fortalecer sua marca na mídia.",
              },
              {
                title: "Redes sociais",
                text: "Planejamento e execução de conteúdo alinhado ao seu público.",
              },
              {
                title: "Parcerias com influenciadores",
                text: "Conexões estratégicas para amplificar sua mensagem.",
              },
              {
                title: "Planejamento de eventos",
                text: "Organização e divulgação de ações que destaquem sua marca.",
              },
              {
                title: "Criação de conteúdo",
                text: "Artigos, textos e materiais que posicionam sua organização no mercado.",
              },
              {
                title: "O que mais você precisa?",
                text: "Montamos um pacote sob medida, de acordo com suas necessidades.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-neutral-600">{item.text}</p>
              </div>
            ))}
          </div>

          <a
            href="#contato"
            onClick={(e) => onNavClick(e, "#contato")}
            className="inline-block mt-10 bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
          >
            Montar meu pacote
          </a>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Quem é André Tomazela
          </h2>
          <p className="text-neutral-700 mb-4">
            Jornalista e estrategista de comunicação com experiência em
            empresas, agências e projetos editoriais. Entrega clara, sem
            enrolação, com foco em resultado.
          </p>
          <p className="text-neutral-700 mb-6">
            Pós-graduado em Gestão da Comunicação em Mídias Digitais (Senac-SP).
            Reportagens e especiais para o Valor Econômico. Atuação com
            organizações de impacto e negócios.
          </p>
          <a
            href="#contato"
            onClick={(e) => onNavClick(e, "#contato")}
            className="bg-orange-500 text-white px-5 py-3 rounded-md hover:bg-orange-600 transition"
          >
            Falar com o André
          </a>
        </div>
      </section>

      {/* INSIGHT FLOW */}
      <section id="insight" className="bg-neutral-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-10">
            Insight Flow
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Gaslighting no trabalho: como reconhecer e agir",
              "Subjetividade sequestrada e saúde mental",
              "Etarismo nas empresas: o preconceito invisível",
            ].map((title, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition text-left"
              >
                <div className="w-full h-36 bg-neutral-100 rounded-md mb-4" />
                <h3 className="font-semibold text-neutral-800 mb-2">{title}</h3>
                <p className="text-sm text-orange-500">Ler mais →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Vamos conversar?</h2>
        <p className="text-neutral-600 mb-8">
          Conte rápido seu objetivo. Eu respondo com um caminho claro e um
          pacote de soluções sob medida.
        </p>
        <form className="grid md:grid-cols-3 gap-4">
          <input type="text" placeholder="Nome" className="border p-3 rounded-md" />
          <input type="email" placeholder="E-mail" className="border p-3 rounded-md" />
          <input type="tel" placeholder="Telefone (opcional)" className="border p-3 rounded-md" />
          <textarea
            placeholder="Como posso ajudar?"
            className="md:col-span-3 border p-3 rounded-md h-32"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-5 py-3 rounded-md hover:bg-orange-600 transition md:col-span-3"
          >
            Enviar
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-orange-500 text-white text-center py-10">
        <div className="mx-auto mb-4 w-[220px] md:w-[300px]">
          <img
            src="/logo-tomazela-br-fundotransp.png?v=6"
            alt="Logo Tomazela branco"
            className="block w-full h-auto object-contain"
          />
        </div>
        <p className="text-sm opacity-90">
          Santa Cecília • São Paulo-SP •{" "}
          <a href="mailto:andre@andretomazela.com.br" className="underline">
            andre@andretomazela.com.br
          </a>{" "}
          •{" "}
          <a href="https://wa.me/5511999999999" className="underline">
            WhatsApp
          </a>
        </p>
        <p className="text-xs opacity-80 mt-4">
          © 2025 Tomazela | Estratégia & Comunicação
        </p>
      </footer>
    </main>
  );
}
