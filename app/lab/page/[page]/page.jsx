// app/lab/page/[page]/page.jsx
import Link from "next/link";
import { getPaginatedPosts } from "@/lib/posts";

export async function generateStaticParams() {
  const { totalPages } = getPaginatedPosts(1, 6);
  const pages = Array.from({ length: Math.min(totalPages, 10) }, (_, i) => ({ page: String(i + 1) }));
  return pages;
}

export default function LabPaged({ params }) {
  const currentPage = Number(params.page || 1);
  const { items, totalPages, page } = getPaginatedPosts(currentPage, 6);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Tomazela Lab — Página {page}</h1>
      <section className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((p) => (
          <article key={p.slug} className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition">
            <div className="w-full h-36 rounded-md bg-gradient-to-b from-gray-100 to-white mb-4" />
            <h3 className="font-semibold text-[#FF4D00] leading-snug">{p.title}</h3>
            {p.date && <p className="text-xs text-gray-500 mt-1">{p.date}</p>}
            <p className="text-sm text-gray-600 mt-2">{p.excerpt}</p>
            <Link href={`/lab/post/${p.slug}`} className="inline-block mt-3 text-sm font-medium text-[#FF4D00] hover:text-orange-800">Ler mais →</Link>
          </article>
        ))}
      </section>
      <nav className="mt-10 flex items-center gap-2">
        {page > 1 && (
          <Link href={page - 1 === 1 ? "/lab" : `/lab/page/${page - 1}`} className="px-4 py-2 border rounded-md hover:bg-gray-50">← Anterior</Link>
        )}
        <span className="px-3 py-2 text-sm text-gray-600">Página {page} de {totalPages}</span>
        {page < totalPages && (
          <Link href={`/lab/page/${page + 1}`} className="px-4 py-2 border rounded-md hover:bg-gray-50">Próxima →</Link>
        )}
      </nav>
    </main>
  );
}
