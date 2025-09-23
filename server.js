const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const port = 8000;

const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.wav': 'audio/wav',
    '.mp4': 'video/mp4',
    '.woff': 'application/font-woff',
    '.ttf': 'application/font-ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.otf': 'application/font-otf',
    '.wasm': 'application/wasm'
};

const server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`);

    const parsedUrl = url.parse(req.url);
    let pathname = `.${parsedUrl.pathname}`;

    // Default to index.html for root requests
    if (pathname === './') {
        pathname = './index.html';
    }

    const ext = path.parse(pathname).ext;
    const map = mimeTypes[ext] || 'text/plain';

    fs.readFile(pathname, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('404 Not Found\n');
            res.end();
            return;
        }

        res.writeHead(200, { 'Content-Type': map });
        res.write(data);
        res.end();
    });
});

server.listen(port, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${port}`);
    console.log('📁 Sirviendo archivos desde:', __dirname);
    console.log('🎯 Abre tu navegador en: http://localhost:8000');
});