// app/lab/post/[slug]/page.jsx
import Link from "next/link";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default function LabPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return <main className="max-w-3xl mx-auto px-4 py-12">Post não encontrado.</main>;

  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/lab" className="text-sm underline">← Voltar ao Tomazela Lab</Link>
      <h1 className="mt-3 text-3xl md:text-4xl font-bold">{post.title}</h1>
      {post.date && <p className="mt-2 text-sm text-gray-500">{post.date}</p>}
      <article className="prose max-w-none mt-6">
        {post.content.split("\n").map((line, i) => {
          if (line.startsWith("# ")) return <h2 key={i}>{line.replace(/^#\s*/, "")}</h2>;
          if (line.startsWith("## ")) return <h3 key={i}>{line.replace(/^##\s*/, "")}</h3>;
          if (line.toLowerCase().startsWith("date:")) return null;
          if (!line.trim()) return <br key={i} />;
          return <p key={i}>{line}</p>;
        })}
      </article>
    </main>
  );
}
