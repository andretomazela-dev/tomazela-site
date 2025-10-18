import Link from "next/link";
import { labPosts } from "../../lib/labData";

export const metadata = {
  title: "Tomazela Lab — Tomazela | Estratégia & Comunicação",
  description: "Artigos e ideias sobre comunicação estratégica."
};

export default function LabIndex(){
  return (
    <main className="lab">
      <div className="container">
        <div className="lab-head">
          <h1 className="title-sec">Tomazela Lab</h1>
          <span className="chip">Artigos e ideias</span>
        </div>
        <div className="grid lab-grid">
          {labPosts.map((p)=>(
            <article key={p.slug} className="post-card card" style={{padding:16}}>
              <div className="post-thumb"><img src={p.image} alt={p.title} /></div>
              <h3 style={{marginTop:10}}>{p.title}</h3>
              <p className="date">{p.date}</p>
              <p className="muted" style={{margin:"6px 0 8px 0"}}>{p.excerpt}</p>
              <Link className="btn-link" href={`/lab/${p.slug}`}>Ler mais →</Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
