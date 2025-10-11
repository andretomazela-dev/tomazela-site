// app/lab/[slug]/page.jsx
import Link from "next/link";
import { getAllPostSlugs, getPostBySlug } from "../../../lib/posts";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: `${post.title} – Tomazela Lab`,
    description: post.excerpt || "",
    openGraph: {
      title: post.title,
      description: post.excerpt || "",
      images: post.cover ? [{ url: post.cover }] : [],
    },
  };
}

export default async function PostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  return (
    <main className="max-w-3xl mx-auto px-4 py-14">
      <Link href="/lab/page/1" className="text-sm underline text-gray-600 hover:text-gray-900">
        ← Voltar ao Tomazela Lab
      </Link>

      <article className="mt-4">
        <h1 className="text-3xl md:text-4xl font-extrabold">{post.title}</h1>
        {post.date && <p className="text-sm text-gray-500 mt-2">{post.date}</p>}

        {post.cover && (
          <div className="mt-6 rounded-xl overflow-hidden">
            <img src={post.cover} alt={post.title} className="w-full h-auto object-contain" loading="lazy" />
          </div>
        )}

        <div
          className="prose prose-lg max-w-none mt-6 prose-a:text-[#FF4D00] prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </main>
  );
}
