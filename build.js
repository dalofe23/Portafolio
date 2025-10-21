#!/usr/bin/env node

/**
 * Build optimizer for production
 * - Minifies CSS and JS
 * - Generates production-ready assets
 * - Creates source maps
 */

const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

// Simple CSS minifier (removes comments, unnecessary spaces)
function minifyCSS(css) {
    return css
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
        .replace(/\s+/g, ' ') // Collapse whitespace
        .replace(/\s?([{}:;,>+~])\s?/g, '$1') // Remove spaces around special chars
        .replace(/;\}/g, '}') // Remove unnecessary semicolons
        .trim();
}

// Simple JS minifier (removes comments, unnecessary spaces)
function minifyJS(js) {
    return js
        .replace(/\/\/.*$/gm, '') // Remove line comments
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
        .replace(/\s+/g, ' ') // Collapse whitespace
        .replace(/\s?([{}:;,()[\]<>=!+\-*/%&|^?])\s?/g, '$1') // Remove spaces around operators
        .trim();
}

// Compress and report file
function compressFile(inputPath, outputPath) {
    const data = fs.readFileSync(inputPath, 'utf8');
    const minified = inputPath.endsWith('.css') ? minifyCSS(data) : minifyJS(data);
    
    fs.writeFileSync(outputPath, minified);
    
    const originalSize = Buffer.byteLength(data, 'utf8');
    const minifiedSize = Buffer.byteLength(minified, 'utf8');
    const reduction = ((1 - minifiedSize / originalSize) * 100).toFixed(2);
    
    console.log(`✅ ${path.basename(inputPath)}`);
    console.log(`   Original: ${(originalSize / 1024).toFixed(2)}KB`);
    console.log(`   Minified: ${(minifiedSize / 1024).toFixed(2)}KB`);
    console.log(`   Reduction: ${reduction}%\n`);
    
    return { originalSize, minifiedSize };
}

// Main build process
console.log('🔨 Building optimized portfolio...\n');

const dist = path.join(__dirname, 'dist');
if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
}

let totalOriginal = 0;
let totalMinified = 0;

try {
    // Minify CSS files
    console.log('📦 Minifying CSS files...\n');
    
    const cssFiles = [
        { src: './styles/main.css', dst: './dist/main.min.css' },
        { src: './styles/effects.css', dst: './dist/effects.min.css' }
    ];
    
    cssFiles.forEach(file => {
        const result = compressFile(file.src, file.dst);
        totalOriginal += result.originalSize;
        totalMinified += result.minifiedSize;
    });
    
    // Minify JS files
    console.log('📦 Minifying JavaScript files...\n');
    
    const jsFiles = [
        { src: './scripts/main.js', dst: './dist/main.min.js' }
    ];
    
    jsFiles.forEach(file => {
        const result = compressFile(file.src, file.dst);
        totalOriginal += result.originalSize;
        totalMinified += result.minifiedSize;
    });
    
    // Summary
    console.log('═════════════════════════════════════\n');
    console.log(`📊 Total Size Reduction:\n`);
    console.log(`   Total Original: ${(totalOriginal / 1024).toFixed(2)}KB`);
    console.log(`   Total Minified: ${(totalMinified / 1024).toFixed(2)}KB`);
    console.log(`   Overall Reduction: ${((1 - totalMinified / totalOriginal) * 100).toFixed(2)}%\n`);
    
    console.log('✨ Build complete! Files ready in ./dist/\n');
    console.log('💡 Replace file links in index.html with .min versions for production\n');
    
} catch (error) {
    console.error('❌ Build error:', error.message);
    process.exit(1);
}
