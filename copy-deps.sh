#!/bin/bash

# Script para copiar dependencias locales
echo "📦 Copiando dependencias locales..."

# Crear directorios
mkdir -p assets/fontawesome
mkdir -p assets/gsap

# Copiar Font Awesome
echo "🔤 Copiando Font Awesome..."
cp -r node_modules/@fortawesome/fontawesome-free/webfonts assets/fontawesome/
cp node_modules/@fortawesome/fontawesome-free/css/all.min.css assets/fontawesome/

# Copiar GSAP
echo "🎬 Copiando GSAP..."
cp node_modules/gsap/dist/gsap.min.js assets/gsap/

echo "✅ ¡Dependencias copiadas exitosamente!"
echo ""
echo "📝 Ahora actualiza index.html para usar:"
echo "   - ./assets/fontawesome/all.min.css"
echo "   - ./assets/gsap/gsap.min.js"
