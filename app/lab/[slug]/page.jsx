import { notFound } from "next/navigation";
import Link from "next/link";
import { labPosts } from "../../../lib/labData";

export async function generateStaticParams(){ return labPosts.map(p=>({ slug:p.slug })); }

export default function LabPost({ params }){
  const post = labPosts.find(p=>p.slug===params.slug);
  if(!post) return notFound();
  return (
    <main className="lab">
      <div className="container" style={{maxWidth:860}}>
        <p className="chip"><Link className="btn-link" href="/lab">← Voltar para o Tomazela Lab</Link></p>
        <h1 className="title-sec" style={{marginTop:6}}>{post.title}</h1>
        <p className="date" style={{marginTop:4}}>{post.date}</p>
        <div className="card" style={{margin:"16px 0", overflow:"hidden"}}>
          <img src={post.image} alt={post.title} style={{width:"100%", height:"auto", display:"block"}}/>
        </div>
        {post.content.map((para, i)=>(
          <p key={i} className="muted" style={{fontSize:16, lineHeight:1.7}}>{para}</p>
        ))}
        <p className="chip" style={{marginTop:16}}>Gostou? Compartilhe ou <a className="btn-link" href="/#contato">fale com a gente</a>.</p>
      </div>
    </main>
  );
}
