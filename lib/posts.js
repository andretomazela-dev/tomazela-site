// lib/posts.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const CONTENT_DIR = path.join(process.cwd(), "content", "lab");

export function getAllPostSlugs() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith(".md"));
  return files.map(f => f.replace(/\.md$/, ""));
}

export function getAllPostsMeta() {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith(".md"));
  const posts = files.map(filename => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(CONTENT_DIR, filename);
    const file = fs.readFileSync(filePath, "utf8");
    const { data } = matter(file);
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      cover: data.cover || "",
    };
  });
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return posts;
}

export function getPostsByPage(page = 1, pageSize = 6) {
  const all = getAllPostsMeta();
  const total = all.length;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const items = all.slice(start, end);
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  return { items, total, totalPages };
}

export async function getPostBySlug(slug) {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const file = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(file);
  const processed = await remark().use(html).process(content);
  const htmlContent = processed.toString();
  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    cover: data.cover || "",
    html: htmlContent,
  };
}
