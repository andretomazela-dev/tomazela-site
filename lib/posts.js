// lib/posts.js
import fs from "fs";
import path from "path";

const POSTS_DIR = path.join(process.cwd(), "content", "lab");

export function getAllPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".md"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const full = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const lines = full.split("\n");
    const titleLine = lines.find((l) => l.trim().startsWith("# ")) || "";
    const title = titleLine.replace(/^#\s*/, "").trim() || slug;
    const dateLine = lines.find((l) => l.toLowerCase().startsWith("date:")) || "";
    const date = dateLine ? dateLine.split(":").slice(1).join(":").trim() : "";
    return { slug, title, date, excerpt: makeExcerpt(full), content: full };
  });
  posts.sort((a, b) => (b.date || "").localeCompare(a.date || "") || b.slug.localeCompare(a.slug));
  return posts;
}

export function getPaginatedPosts(page = 1, perPage = 6) {
  const all = getAllPosts();
  const total = all.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * perPage;
  const items = all.slice(start, start + perPage);
  return { items, page: current, total, totalPages, perPage };
}

export function getPostBySlug(slug) {
  const fullPath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const content = fs.readFileSync(fullPath, "utf-8");
  const lines = content.split("\n");
  const titleLine = lines.find((l) => l.trim().startsWith("# ")) || "";
  const title = titleLine.replace(/^#\s*/, "").trim() || slug;
  const dateLine = lines.find((l) => l.toLowerCase().startsWith("date:")) || "";
  const date = dateLine ? dateLine.split(":").slice(1).join(":").trim() : "";
  return { slug, title, date, content };
}

export function getAllSlugs() {
  return getAllPosts().map((p) => p.slug);
}

function makeExcerpt(md) {
  const line = md.split("\n").find((l) => l && !l.startsWith("#") && !l.toLowerCase().startsWith("date:")) || "";
  return line.length > 160 ? line.slice(0, 157) + "..." : line;
}
