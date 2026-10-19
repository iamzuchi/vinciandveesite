const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const rootDir = process.cwd();
  const sourceLogo = path.join(rootDir, 'public/images/vinci_and_vee_logo_transparent.png');

  if (!fs.existsSync(sourceLogo)) {
    throw new Error('Source logo not found at: ' + sourceLogo);
  }

  // 1. SVG Background badge (Luxury Dark Navy #0B1329 with Rich Gold Accent Border)
  const bgSvg = Buffer.from(`
    <svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#182238" />
          <stop offset="100%" stop-color="#090E1D" />
        </linearGradient>
        <linearGradient id="goldRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FCE588" />
          <stop offset="35%" stop-color="#D4AF37" />
          <stop offset="70%" stop-color="#9B6E3B" />
          <stop offset="100%" stop-color="#6B441B" />
        </linearGradient>
      </defs>
      <!-- Base shape with rounded corners -->
      <rect x="8" y="8" width="496" height="496" rx="108" fill="url(#bgGrad)" stroke="url(#goldRing)" stroke-width="14" />
    </svg>
  `);

  // Resize the transparent brand logo cleanly to fit inside the badge with balanced margins
  const logoForeground = await sharp(sourceLogo)
    .resize(360, 310, {
      fit: 'contain',
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    })
    .toBuffer();

  // Composite 512x512 Master PNG
  const master512 = await sharp(bgSvg)
    .composite([{ input: logoForeground, gravity: 'center' }])
    .png()
    .toBuffer();

  // Save 512x512 icons
  fs.writeFileSync(path.join(rootDir, 'public/icon-512.png'), master512);
  fs.writeFileSync(path.join(rootDir, 'public/icon.png'), master512);
  fs.writeFileSync(path.join(rootDir, 'src/app/icon.png'), master512);

  // 192x192 Android / Web App Icon
  const icon192 = await sharp(master512).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(rootDir, 'public/icon-192.png'), icon192);

  // 180x180 Apple Touch Icon
  const apple180 = await sharp(master512).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(rootDir, 'src/app/apple-icon.png'), apple180);
  fs.writeFileSync(path.join(rootDir, 'public/apple-touch-icon.png'), apple180);

  // 48x48, 32x32, 16x16 PNGs
  const p48 = await sharp(master512).resize(48, 48).png().toBuffer();
  const p32 = await sharp(master512).resize(32, 32).png().toBuffer();
  const p16 = await sharp(master512).resize(16, 16).png().toBuffer();

  fs.writeFileSync(path.join(rootDir, 'public/favicon-32x32.png'), p32);
  fs.writeFileSync(path.join(rootDir, 'public/favicon-16x16.png'), p16);

  // Build high-compatibility binary multi-size .ico (16, 32, 48)
  const images = [
    { width: 16, height: 16, buf: p16 },
    { width: 32, height: 32, buf: p32 },
    { width: 48, height: 48, buf: p48 }
  ];

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(images.length, 4); // Count of images

  let offset = 6 + images.length * 16;
  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width, 0);
    entry.writeUInt8(img.height, 1);
    entry.writeUInt8(0, 2); // Palette count
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel (32 = RGBA)
    entry.writeUInt32LE(img.buf.length, 8); // Image size in bytes
    entry.writeUInt32LE(offset, 12); // File offset of image data
    entries.push(entry);
    offset += img.buf.length;
  }

  const icoBuffer = Buffer.concat([header, ...entries, ...images.map(img => img.buf)]);
  fs.writeFileSync(path.join(rootDir, 'src/app/favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(rootDir, 'public/favicon.ico'), icoBuffer);

  // 2. Vector SVG Icon for modern browsers supporting SVG favicons
  const vectorSvg = `
<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="vvBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#182238" />
      <stop offset="100%" stop-color="#090E1D" />
    </linearGradient>
    <linearGradient id="vvGold" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FCE588" />
      <stop offset="45%" stop-color="#D4AF37" />
      <stop offset="80%" stop-color="#9B6E3B" />
      <stop offset="100%" stop-color="#6B441B" />
    </linearGradient>
  </defs>
  <rect x="2" y="2" width="60" height="60" rx="14" fill="url(#vvBg)" stroke="url(#vvGold)" stroke-width="2.5" />
  <!-- Stylized Monogram V & V -->
  <path d="M16 19L26 43L32 29L38 43L48 19H42L35 36L32 27L29 36L22 19H16Z" fill="url(#vvGold)" />
  <circle cx="32" cy="18" r="2.5" fill="#FCE588" />
</svg>
`.trim();

  fs.writeFileSync(path.join(rootDir, 'public/icon.svg'), vectorSvg);
  fs.writeFileSync(path.join(rootDir, 'src/app/icon.svg'), vectorSvg);

  console.log('Successfully generated full suite of Vinci & Vee favicons and icons!');
}

generateFavicons().catch(err => {
  console.error('Failed to generate favicons:', err);
  process.exit(1);
});
