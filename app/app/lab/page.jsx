// app/lab/page.jsx

// Lista de posts do Tomazela Lab (vitrine + paginação)
const ALL_POSTS = [
  {
    slug: "gaslighting-no-trabalho",
    title: "Gaslighting no trabalho: como reconhecer e agir",
    date: "2025-09-24",
    image: "/lab/gaslighting.jpg",
    fallback:
      "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "subjetividade-e-saude-mental",
    title: "Subjetividade sequestrada e saúde mental",
    date: "2025-09-08",
    image: "/lab/saude-mental.jpg",
    fallback:
      "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "etarismo-nas-empresas",
    title: "Etarismo nas empresas: o preconceito invisível",
    date: "2025-08-26",
    image: "/lab/etarismo.jpg",
    fallback:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "comunicacao-inclusiva",
    title: "Comunicação inclusiva: compromisso que vai além",
    date: "2025-08-10",
    image: "/lab/inclusiva.jpg",
    fallback:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "estrategias-para-startups",
    title: "5 estratégias de comunicação para startups",
    date: "2025-07-25",
    image: "/lab/startups.jpg",
    fallback:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "tendencias-2025",
    title: "Tendências de comunicação 2025",
    date: "2025-07-10",
    image: "/lab/tendencias.jpg",
    fallback:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop",
  },
];

const PAGE_SIZE = 6;

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

const chooseImage = (p) => p.image || p.fallback;

export default function LabPage({ searchParams }) {
  const page = Math.max(parseInt(searchParams?.page ?? "1", 10) || 1, 1);
  const totalPages = Math.max(Math.ceil(ALL_POSTS.length / PAGE_SIZE), 1);
  const start = (page - 1) * PAGE_SIZE;
  const items = ALL_POSTS.slice(start, start + PAGE_SIZE);

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#FF4D00]">
        Tomazela Lab
      </h1>
      <p className="mt-2 text-gray-700 max-w-prose">
        Ideias, provocações e reflexões sobre comunicação, mercado e cultura
        contemporânea.
      </p>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((p) => (
          <article
            key={p.slug}
            className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition"
          >
            <a href={`/lab/${p.slug}`} className="block rounded-lg overflow-hidden">
              <div className="aspect-[16/9] w-full bg-gray-100">
                <img
                  src={chooseImage(p)}
                  alt={p.title}
                  className="block w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </a>
            <h2 className="mt-4 font-semibold text-[#FF4D00] leading-snug">
              <a href={`/lab/${p.slug}`} className="hover:text-orange-800">
                {p.title}
              </a>
            </h2>
            <p className="text-xs text-gray-500 mt-1">{formatDate(p.date)}</p>
            <a
              href={`/lab/${p.slug}`}
              className="inline-block mt-2 text-sm font-medium text-[#FF4D00] hover:text-orange-800"
            >
              Ler mais →
            </a>
          </article>
        ))}
      </div>

      {/* Paginação */}
      <div className="mt-10 flex items-center justify-center gap-2">
        <a
          href={`/lab?page=${Math.max(page - 1, 1)}`}
          aria-disabled={page <= 1}
          className={`px-3 py-2 rounded-md border ${
            page <= 1 ? "pointer-events-none opacity-50" : "hover:bg-gray-50"
          }`}
        >
          ← Anterior
        </a>
        <span className="text-sm text-gray-600 px-2">
          Página {page} de {totalPages}
        </span>
        <a
          href={`/lab?page=${Math.min(page + 1, totalPages)}`}
          aria-disabled={page >= totalPages}
          className={`px-3 py-2 rounded-md border ${
            page >= totalPages ? "pointer-events-none opacity-50" : "hover:bg-gray-50"
          }`}
        >
          Próxima →
        </a>
      </div>
    </main>
  );
}

