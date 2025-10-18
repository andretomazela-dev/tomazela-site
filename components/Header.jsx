"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header(){
  const [open, setOpen] = useState(false);
  useEffect(()=>{
    const onResize = () => { if(window.innerWidth > 900) setOpen(false); };
    const onScroll = () => {
      const h = document.querySelector('header.header');
      if(!h) return;
      if(window.scrollY > 12) h.classList.add('shrink'); else h.classList.remove('shrink');
    };
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return ()=>{
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  },[]);
  return (
    <header className="header">
      <div className="container row">
        <Link href="/" className="brand" aria-label="Ir para a página inicial">
          <img src="/logo-tomazela.png" alt="Tomazela | Estratégia & Comunicação"/>
        </Link>
        <nav aria-label="Principal">
          <a href="/#servicos">Serviços</a>
          <a href="/#lab">Tomazela Lab</a>
          <a href="/#sobre">Quem somos</a>
          <a className="btn" href="/#contato">Fale com a gente</a>
        </nav>
        <button className="hamburger" aria-label="Abrir menu" aria-expanded={open ? "true":"false"} onClick={()=>setOpen(!open)}>
          <svg viewBox="0 0 24 24" fill="none">
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
      </div>
      <div className="mobile-wrapper" hidden={!open}>
        <div className="mobile-menu">
          <a href="/#servicos" onClick={()=>setOpen(false)}>Serviços</a>
          <a href="/#lab" onClick={()=>setOpen(false)}>Tomazela Lab</a>
          <a href="/#sobre" onClick={()=>setOpen(false)}>Quem somos</a>
          <a className="btn" href="/#contato" onClick={()=>setOpen(false)}>Fale com a gente</a>
        </div>
        <div className="mobile-backdrop" onClick={()=>setOpen(false)} />
      </div>
    </header>
  );
}
