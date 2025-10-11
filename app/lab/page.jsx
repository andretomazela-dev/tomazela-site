// app/lab/page.jsx
import { redirect } from "next/navigation";

export const metadata = {
  title: "Tomazela Lab – Artigos",
  description: "Conteúdos do Tomazela Lab.",
};

export default function LabIndex() {
  redirect("/lab/1");
}
