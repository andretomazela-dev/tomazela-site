// app/lab/page.jsx
import Link from "next/link";
import { getPaginatedPosts } from "@/lib/posts";

export const metadata = {
  title: "Tomazela Lab — Página 1",
};

export default function LabIndex() {
  const { items, totalPages } = getPaginatedPosts(1, 6);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold">Tomazela Lab</h1>
      <p className="mt-2 text-gray-600">Artigos sobre comunicação, estratégia e impacto.</p>
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
      {totalPages > 1 && (
        <div className="mt-10 flex items-center gap-2">
          <Link href="/lab/page/2" className="px-4 py-2 border rounded-md hover:bg-gray-50">Próxima página →</Link>
        </div>
      )}
    </main>
  );
}
