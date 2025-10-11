// app/lab/page/[page]/page.jsx
import Link from "next/link";
import { getPostsByPage } from "../../../../lib/posts";

const PAGE_SIZE = 6;

export const metadata = {
  title: "Tomazela Lab – Artigos",
  description: "Conteúdos do Tomazela Lab.",
};

export default function LabPage({ params }) {
  const current = Number(params.page || "1");
  const { items, totalPages } = getPostsByPage(current, PAGE_SIZE);

  return (
    <main className="max-w-6xl mx-auto px-4 py-14">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold">Tomazela Lab</h1>
        <p className="text-gray-600 mt-2">Artigos, ideias e aprendizados.</p>
      </header>

      <section className="grid md:grid-cols-3 gap-6">
        {items.map((p) => (
          <article key={p.slug} className="rounded-2xl border bg-white p-4 shadow-sm hover:shadow-md transition">
            {p.cover ? (
              <div className="mb-3 rounded-lg overflow-hidden">
                <img src={p.cover} alt={p.title} className="w-full h-40 object-cover" loading="lazy" />
              </div>
            ) : (
              <div className="w-full h-40 rounded-lg bg-gradient-to-b from-gray-100 to-white mb-3" />
            )}

            <h2 className="font-semibold leading-snug">{p.title}</h2>
            {p.date && <p className="text-xs text-gray-500 mt-1">{p.date}</p>}
            {p.excerpt && <p className="text-sm text-gray-700 mt-2">{p.excerpt}</p>}

            <Link href={`/lab/${p.slug}`} className="inline-block mt-3 text-sm font-medium text-[#FF4D00] hover:text-orange-800">
              Ler mais →
            </Link>
          </article>
        ))}
      </section>

      <nav className="flex items-center justify-center gap-3 mt-10">
        <Link
          href={`/lab/page/${Math.max(1, current - 1)}`}
          aria-disabled={current <= 1}
          className={`px-3 py-2 rounded border ${current <= 1 ? "pointer-events-none opacity-40" : "hover:bg-gray-50"}`}
        >
          ← Anterior
        </Link>
        <span className="text-sm text-gray-600">Página {current} de {totalPages}</span>
        <Link
          href={`/lab/page/${Math.min(totalPages, current + 1)}`}
          aria-disabled={current >= totalPages}
          className={`px-3 py-2 rounded border ${current >= totalPages ? "pointer-events-none opacity-40" : "hover:bg-gray-50"}`}
        >
          Próxima →
        </Link>
      </nav>

      <div className="text-center mt-10">
        <Link href="/" className="underline text-sm text-gray-600 hover:text-gray-900">← Voltar para o site</Link>
      </div>
    </main>
  );
}
