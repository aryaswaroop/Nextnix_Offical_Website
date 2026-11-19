import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';
import viteCompression from 'vite-plugin-compression';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Google SEO के लिए ऑटोमेटिक Sitemap (यहाँ अपने पब्लिक रूट्स जोड़ते जाएं)
    Sitemap({
      hostname: 'http://localhost:5173',
      dynamicRoutes: ['/', '/pricing', '/blog', '/about'],
    }),
    // सुपरफास्ट लोडिंग के लिए फाइल कम्प्रेशन
    viteCompression({
      algorithm: 'gzip',
    }),
  ],
  build: {
    // कोड को छोटे टुकड़ों में बांटने के लिए
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
});
