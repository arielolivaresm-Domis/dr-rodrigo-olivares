import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '..', 'dist');
const shellPath = path.join(distDir, 'index.html');

if (!fs.existsSync(shellPath)) {
  console.error('[prerender] dist/index.html not found — run `vite build` first.');
  process.exit(1);
}

// Routes to prerender, mapped to their output file relative to dist/.
const ROUTES = [
  { route: '/', out: 'index.html' },
  { route: '/cita', out: 'cita/index.html' },
  { route: '/blog', out: 'blog/index.html' },
  { route: '/blog/artrosis-cadera-sintomas-tratamiento', out: 'blog/artrosis-cadera-sintomas-tratamiento/index.html' },
  { route: '/blog/necrosis-avascular-cadera', out: 'blog/necrosis-avascular-cadera/index.html' },
  { route: '/blog/fractura-cadera', out: 'blog/fractura-cadera/index.html' },
  { route: '/blog/cadera-deportista-artroscopia', out: 'blog/cadera-deportista-artroscopia/index.html' },
  { route: '/blog/cirugia-revision-cadera', out: 'blog/cirugia-revision-cadera/index.html' },
  { route: '/blog/displasia-cadera-adulto', out: 'blog/displasia-cadera-adulto/index.html' },
  { route: '/blog/reemplazo-total-cadera-artroplastia', out: 'blog/reemplazo-total-cadera-artroplastia/index.html' },
  { route: '/blog/recuperacion-reemplazo-cadera', out: 'blog/recuperacion-reemplazo-cadera/index.html' },
  { route: '/blog/cuando-operar-cadera', out: 'blog/cuando-operar-cadera/index.html' },
];

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
  '.mov': 'video/quicktime',
};

// The pristine build shell, served for every route so the SPA can boot and
// render client-side before we capture and persist its output. Cached up
// front so overwriting dist/index.html mid-run doesn't affect later routes.
const shellHtml = fs.readFileSync(shellPath, 'utf-8');

function startServer() {
  const server = http.createServer((req, res) => {
    const pathname = decodeURIComponent((req.url || '/').split('?')[0]);
    const ext = path.extname(pathname);
    const filePath = path.join(distDir, pathname);

    if (ext && fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
      fs.createReadStream(filePath).pipe(res);
      return;
    }

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(shellHtml);
  });

  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

async function prerenderRoute(browser, baseUrl, route) {
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    if (req.url().startsWith(baseUrl)) {
      req.continue();
    } else {
      req.abort();
    }
  });

  await page.goto(`${baseUrl}${route}`, { waitUntil: 'networkidle0', timeout: 30000 });
  await page.waitForSelector('h1', { timeout: 10000 });
  await new Promise((resolve) => setTimeout(resolve, 500));

  const html = await page.content();
  await page.close();
  // Strip ephemeral local server origin so no dead 127.0.0.1:<port> refs
  // end up baked into the captured HTML.
  return html.split(baseUrl).join('');
}

// Vercel's build environment (Amazon Linux) needs puppeteer-core +
// @sparticuz/chromium. Locally (macOS/dev) plain puppeteer works fine.
async function getBrowser() {
  if (process.env.VERCEL) {
    const chromium = (await import('@sparticuz/chromium')).default;
    const puppeteerCore = (await import('puppeteer-core')).default;
    return puppeteerCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  }
  const puppeteer = (await import('puppeteer')).default;
  return puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
}

async function main() {
  const server = await startServer();
  const { port } = server.address();
  const baseUrl = `http://127.0.0.1:${port}`;

  const browser = await getBrowser();

  const results = [];
  try {
    for (const { route, out } of ROUTES) {
      process.stdout.write(`[prerender] rendering ${route} ... `);
      const html = await prerenderRoute(browser, baseUrl, route);
      results.push({ route, out, html });
      console.log(`${html.length} bytes`);
    }
  } finally {
    await browser.close();
    server.close();
  }

  for (const { out, html } of results) {
    const outPath = path.join(distDir, out);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html);
  }

  console.log(`[prerender] wrote ${results.length} prerendered pages to dist/.`);
}

main().catch((err) => {
  console.error('[prerender] failed:', err);
  process.exit(1);
});
