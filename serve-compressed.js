// Servidor HTTP con compresión Gzip/Brotli para testing
const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = 8080;

// Enable Brotli & Gzip compression
app.use(compression({
  level: 9,
  threshold: 0,
  filter: () => true
}));

// Serve static files
app.use(express.static(__dirname, {
  maxAge: '1y',
  etag: true,
  lastModified: true
}));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server with compression running on http://localhost:${PORT}`);
  console.log(`📊 Run Lighthouse now to see REAL production scores!`);
});
