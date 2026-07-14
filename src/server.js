import { serve } from "bun";
import { join } from "path";
import { readFileSync, existsSync } from "fs";
import { compileSolidity } from "./compiler/solc.js";

const PUBLIC_DIR = join(import.meta.dir, "../docs");

const MIME = {
  ".html": "text/html",
  ".css":  "text/css",
  ".js":   "application/javascript",
  ".json": "application/json",
  ".png":  "image/png",
  ".svg":  "image/svg+xml",
};

function serveFile(path) {
  if (!existsSync(path)) return new Response("Not Found", { status: 404 });
  const ext = path.slice(path.lastIndexOf("."));
  const mime = MIME[ext] ?? "application/octet-stream";
  return new Response(readFileSync(path), {
    headers: { "Content-Type": mime },
  });
}

serve({
  port: 3000,

  async fetch(req) {
    const url = new URL(req.url);

    // ── API: compile Solidity ─────────────────────────────────────────────────
    if (url.pathname === "/api/compile" && req.method === "POST") {
      try {
        const { source } = await req.json();
        const result = await compileSolidity(source);
        return Response.json(result);
      } catch (e) {
        return Response.json({ error: e.message }, { status: 500 });
      }
    }

    // ── Static files ──────────────────────────────────────────────────────────
    let filePath = url.pathname === "/" ? "/index.html" : url.pathname;
    return serveFile(join(PUBLIC_DIR, filePath));
  },
});

console.log("Chipicao running at http://localhost:3000");
