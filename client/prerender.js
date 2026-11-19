import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, 'dist');

// 1. यहाँ उन सभी पब्लिक पेजों के रूट्स (routes) जोड़ें जिन्हें Google पर रैंक करना है
// (ध्यान दें: /dashboard या /login यहाँ न डालें)
const routesToPrerender = [
    '/',
    '/pricing',
    '/blog',
    '/about'
];

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

async function prerender() {
    console.log('🚀 Prerendering प्रक्रिया शुरू हो रही है...');

    // लोकल सर्वर पर dist फोल्डर को चलाएं
    const server = spawn('npx', ['sirv', distDir, '--port', PORT, '--single'], {
        stdio: 'ignore',
        shell: true,
    });

    // सर्वर स्टार्ट होने के लिए 2 सेकंड रुकें
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    for (const route of routesToPrerender) {
        const url = `${BASE_URL}${route}`;
        console.log(`📄 रेंडर हो रहा है: ${route}`);

        // पेज खुलने और नेटवर्क शांत होने तक प्रतीक्षा करें
        await page.goto(url, { waitUntil: 'networkidle0' });

        // पेज का पूरा रेंडर हुआ HTML निकालें (Helmet के मेटा टैग्स के साथ)
        const html = await page.content();

        // सही फोल्डर पाथ तय करें
        const filePath =
            route === '/'
                ? path.join(distDir, 'index.html')
                : path.join(distDir, route.slice(1), 'index.html');

        // यदि फोल्डर मौजूद नहीं है, तो बनाएं
        fs.mkdirSync(path.dirname(filePath), { recursive: true });

        // तैयार HTML को फाइल में सेव करें
        fs.writeFileSync(filePath, html);
        console.log(`✅ सेव हो गया: ${filePath}`);
    }

    await browser.close();
    server.kill();
    console.log('🎉 सभी पब्लिक पेजों का Prerendering सफलतापूर्वक पूरा हुआ!');
    process.exit(0);
}

prerender().catch((err) => {
    console.error('❌ Prerendering में त्रुटि:', err);
    process.exit(1);
});
