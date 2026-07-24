import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const possiblePaths = [
    path.join(process.cwd(), 'artifacts/mann-saathi/dist/public/index.html'),
    path.join(process.cwd(), 'artifacts/mann-saathi/dist/index.html'),
    path.join(process.cwd(), 'dist/public/index.html'),
    path.join(process.cwd(), 'dist/index.html'),
    path.join(process.cwd(), 'index.html'),
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      const html = fs.readFileSync(p, 'utf8');
      res.setHeader('Content-Type', 'text/html');
      return res.status(200).send(html);
    }
  }

  return res.status(200).send('<!DOCTYPE html><html><head><title>Mann Saathi</title></head><body><div id="root"></div></body></html>');
}
