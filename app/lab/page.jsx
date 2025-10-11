// app/lab/page.jsx
export const metadata = {
  title: "Tomazela Lab — Blog",
};

const posts = [
  {
    id: "gaslighting-no-trabalho",
    title: "Gaslighting no trabalho: como reconhecer e agir",
    date: "24/09/2025",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Como identificar manipulação emocional no ambiente de trabalho e caminhos práticos para agir com segurança.",
  },
  {
    id: "subjetividade-sequestrada",
    title: "Subjetividade sequestrada e saúde mental",
    date: "08/09/2025",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Quando a performance contínua consome nossa identidade — e como reconstruir autonomia e bem-estar.",
  },
  {
    id: "etarismo-nas-empresas",
    title: "Etarismo nas empresas: o preconceito invisível",
    date: "26/08/2025",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop",
    excerpt:
      "Sinais de etarismo nas organizações e práticas para ambientes de trabalho realmente inclusivos.",
  },
];

export default function LabPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12" id="lab">
      <div className="flex items-baseline justify-between">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#FF4D00]">Tomazela Lab</h1>
        <a href="/" className="text-sm underline hover:text-orange-700">Voltar para a Home</a>
      </div>
      <p className="text-gray-700 mt-3 max-w-2xl">
        Ensaios e reflexões sobre comunicação, cultura e impacto — com método, honestidade e curiosidade.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {posts.map((p) => (
          <article key={p.id} id={p.id} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
            <div className="rounded-xl overflow-hidden aspect-[4/3] bg-gray-100">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h2 className="mt-4 font-semibold leading-snug">{p.title}</h2>
            <p className="text-xs text-gray-500 mt-1">{p.date}</p>
            <p className="text-sm text-gray-700 mt-2">{p.excerpt}</p>
          </article>
        ))}
      </div>

      <div className="mt-10">
        <a href="/" className="inline-block border px-5 py-3 rounded-xl hover:bg-gray-50">Voltar para a Home</a>
      </div>
    </div>
  );
}
