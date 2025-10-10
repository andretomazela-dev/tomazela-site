"use client";

import { useMemo } from "react";

// Mock: posts do Tomazela Lab (troque por sua origem real depois)
const ALL_POSTS = [
  {
    slug: "gaslighting-no-trabalho",
    title: "Gaslighting no trabalho: como reconhecer e agir",
    date: "24/09/2025",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Entenda sinais de gaslighting no ambiente corporativo e como agir com segurança.",
  },
  {
    slug: "subjetividade-sequestrada",
    title: "Subjetividade sequestrada e saúde mental",
    date: "08/09/2025",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Reflexões sobre trabalho, autonomia e estratégias para preservar o bem-estar.",
  },
  {
    slug: "etarismo-nas-empresas",
    title: "Etarismo nas empresas: o preconceito invisível",
    date: "26/08/2025",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Como combater o etarismo e construir equipes mais diversas e eficazes.",
  },
  {
    slug: "comunicacao-inclusiva",
    title: "Comunicação Inclusiva: compromisso que vai além das palavras",
    date: "19/08/2025",
    image:
      "https://images.unsplash.com/photo-1520975979651-7f4c1cfed5af?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Práticas e critérios para uma comunicação que respeita e representa as pessoas.",
  },
];

export default function LabPage({ searchParams }) {
  // Paginação básica via query ?page=1
  const page = Number(searchParams?.page ?? 1) || 1;
  const pageSize = 9;
  const start = (page - 1) * pageSize;
  const current = useMemo(() => ALL_POSTS.slice(start, start + pageSize), [start]);
  const totalPages = Math.ceil(ALL_POSTS.length / pageSize);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      {/* Título do Lab */}
      <div className="flex items-baseline justify-between gap-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#FF4D00]">
          Tomazela Lab
        </h1>
        <a
          href="/"
          className="text-sm underline hover:text-orange-700"
          aria-label="Voltar para a Home"
        >
          Voltar para a Home
        </a>
      </div>
      <p className="mt-2 text-gray-700 max-w-2xl">
        Artigos curtos, ideias em teste e aprendizados práticos sobre comunicação
        estratégica, conteúdo e reputação.
      </p>

      {/* Grid de posts */}
      <section className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {current.map((post) => (
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
              <h2 className="mt-4 font-semibold leading-snug text-gray-900 hover:underline">
                {post.title}
              </h2>
            </a>
            <p className="text-xs text-gray-500 mt-1">{post.date}</p>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">{post.excerpt}</p>
            <a
              href={`/lab/${post.slug}`}
              className="inline-block mt-3 text-sm font-medium text-[#FF4D00] hover:text-orange-800"
            >
              Ler mais →
            </a>
          </article>
        ))}
      </section>

      {/* Paginação */}
      {totalPages > 1 && (
        <nav className="mt-10 flex items-center justify-center gap-3" aria-label="Paginação">
          <a
            href={`/lab?page=${Math.max(1, page - 1)}`}
            className={`px-3 py-2 rounded-md border ${
              page === 1 ? "pointer-events-none opacity-50" : "hover:bg-gray-50"
            }`}
          >
            Anterior
          </a>
          <span className="text-sm text-gray-600">
            Página {page} de {totalPages}
          </span>
          <a
            href={`/lab?page=${Math.min(totalPages, page + 1)}`}
            className={`px-3 py-2 rounded-md border ${
              page === totalPages ? "pointer-events-none opacity-50" : "hover:bg-gray-50"
            }`}
          >
            Próxima
          </a>
        </nav>
      )}
    </main>
  );
}
