"use client";

import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    const form = e.target;

    const data = {
      Nome: form.Nome.value,
      Email: form.Email.value,
      Telefone: form.Telefone.value,
      Mensagem: form.Mensagem.value,
    };

    try {
      const response = await fetch("https://formspree.io/f/meorrlvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else throw new Error("Erro ao enviar");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-4">
      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 items-center min-h-[60vh] py-20">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Comunicação sob medida para marcas e organizações de impacto.
          </h1>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Estratégia que posiciona, conteúdo que entrega e relações que abrem
            portas. Clareza, método e impacto em cada projeto.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#servicos"
              className="bg-[#FF4D00] text-white font-semibold px-6 py-3 rounded-xl shadow hover:shadow-lg"
            >
              Ver serviços
            </a>
            <a
              href="/lab"
              className="border font-semibold px-6 py-3 rounded-xl hover:bg-gray-50"
            >
              Tomazela Lab
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-600">
            São Paulo • Brasil •{" "}
            <a
              href="mailto:andre@andretomazela.com.br"
              className="underline hover:text-orange-700"
            >
              andre@andretomazela.com.br
            </a>
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img
            src="/andre-tomazela-foto.png"
            alt="André Tomazela"
            className="w-full h-full object-contain"
          />
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-16 border-t">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          O que podemos fazer por você
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Relações com a imprensa",
              desc: "Criação de pautas e materiais estratégicos para fortalecer sua marca na mídia.",
            },
            {
              title: "Redes sociais",
              desc: "Planejamento e execução de conteúdo alinhado ao seu público.",
            },
            {
              title: "Parcerias com influenciadores",
              desc: "Conexões estratégicas para amplificar sua mensagem.",
            },
            {
              title: "Planejamento de eventos",
              desc: "Organização e divulgação de ações que destaquem sua marca.",
            },
            {
              title: "Criação de conteúdo",
              desc: "Textos e materiais que posicionam sua marca no mercado.",
            },
            {
              title: "Outras soluções sob medida",
              desc: "Montamos um pacote conforme sua necessidade.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold mb-2 text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="py-16 border-t">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          O que dizem sobre nosso trabalho
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <blockquote className="bg-white border rounded-2xl p-6 shadow-sm">
            <p className="italic text-gray-700">
              “Profissional ágil, estratégico e colaborativo. Nossas entregas
              ganharam clareza e tração.”
            </p>
            <footer className="mt-4 text-sm text-gray-600">
              — Érika Martins de Figueiredo, via LinkedIn
            </footer>
          </blockquote>
          <blockquote className="bg-white border rounded-2xl p-6 shadow-sm">
            <p className="italic text-gray-700">
              “Visão integrada e capacidade de execução acima da média.
              Recomendo o trabalho.”
            </p>
            <footer className="mt-4 text-sm text-gray-600">
              — Elaine Nishiwaki, via LinkedIn
            </footer>
          </blockquote>
        </div>
      </section>

      {/* NOVA SEÇÃO: TOMAZELA LAB */}
      <section className="py-16 border-t">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#FF4D00]">
            Tomazela Lab
          </h2>
          <a
            href="/lab"
            className="text-sm underline text-gray-700 hover:text-orange-700"
          >
            Ver todos os artigos →
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              slug: "gaslighting-no-trabalho",
              title: "Gaslighting no trabalho: como reconhecer e agir",
              date: "24/09/2025",
              image:
                "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
            },
            {
              slug: "subjetividade-sequestrada",
              title: "Subjetividade sequestrada e saúde mental",
              date: "08/09/2025",
              image:
                "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
            },
            {
              slug: "etarismo-nas-empresas",
              title: "Etarismo nas empresas: o preconceito invisível",
              date: "26/08/2025",
              image:
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
            },
          ].map((post) => (
            <article
              key={post.slug}
              className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <a href={`/lab/${post.slug}`} aria-label={post.title}>
                <div className="rounded-xl overflow-hidden aspect-[4/3] bg-gray-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 font-semibold leading-snug text-gray-900 hover:underline">
                  {post.title}
                </h3>
              </a>
              <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              <a
                href={`/lab/${post.slug}`}
                className="inline-block mt-3 text-sm font-medium text-[#FF4D00] hover:text-orange-800"
              >
                Ler mais →
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section className="py-16 border-t">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Vamos conversar?
        </h2>

        <p className="text-gray-700 mb-6 max-w-2xl">
          Conte rápido seu objetivo. Eu respondo com um caminho claro e um
          pacote de soluções sob medida.
        </p>

        {status === "error" && (
          <p className="text-red-600 mb-4 bg-red-50 border border-red-200 rounded-md p-3">
            Não foi possível enviar agora. Tente novamente ou escreva para{" "}
            <a
              href="mailto:andre@andretomazela.com.br"
              className="underline text-red-700"
            >
              andre@andretomazela.com.br
            </a>
            .
          </p>
        )}

        {status === "success" && (
          <p className="text-green-700 mb-4 bg-green-50 border border-green-200 rounded-md p-3">
            Mensagem enviada com sucesso! Em breve entrarei em contato.
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-3 gap-4 max-w-3xl"
        >
          <input
            name="Nome"
            className="col-span-1 rounded-xl border px-4 py-3"
            placeholder="Nome"
            required
          />
          <input
            name="Email"
            type="email"
            className="col-span-1 rounded-xl border px-4 py-3"
            placeholder="E-mail"
            required
          />
          <input
            name="Telefone"
            className="col-span-1 rounded-xl border px-4 py-3"
            placeholder="Telefone (opcional)"
          />
          <textarea
            name="Mensagem"
            className="md:col-span-3 rounded-xl border px-4 py-3 min-h-[120px]"
            placeholder="Como posso ajudar?"
            required
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-2xl px-5 py-3 bg-[#FF4D00] text-white font-semibold shadow hover:shadow-lg w-fit disabled:opacity-60"
          >
            {status === "loading" ? "Enviando..." : "Enviar"}
          </button>
        </form>

        {/* Links sociais */}
        <div className="mt-8 flex items-center gap-4 text-sm text-gray-700">
          <a
            href="https://wa.me/message/TUNCL3KFQIECM1"
            className="hover:text-[#FF4D00]"
          >
            WhatsApp
          </a>
          <span>•</span>
          <a
            href="https://www.linkedin.com/in/tomazela/"
            className="hover:text-[#FF4D00]"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href="https://www.instagram.com/tomazela.comunica/"
            className="hover:text-[#FF4D00]"
          >
            Instagram
          </a>
        </div>
      </section>
    </main>
  );
}
