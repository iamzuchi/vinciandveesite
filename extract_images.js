const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const sourceDir = path.join(__dirname, 'stitch_vinci_and_vee_group_website');
const imagesDir = path.join(__dirname, 'images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.html') || file.endsWith('.md')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = getAllFiles(sourceDir);
console.log(`Found ${files.length} files to scan.`);

const imageMap = new Map(); // url -> metadata { alt, page }
const srcRegex = /<img[^>]+src=["'](https?:\/\/[^"']+)["'][^>]*>/gi;
const altRegex = /data-alt=["']([^"']+)["']|alt=["']([^"']+)["']/i;

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = srcRegex.exec(content)) !== null) {
    const fullTag = match[0];
    const url = match[1];
    
    // Extract alt description
    const altMatch = altRegex.exec(fullTag);
    const altText = altMatch ? (altMatch[1] || altMatch[2]) : 'Vinci & Vee Image Asset';

    if (!imageMap.has(url)) {
      imageMap.set(url, {
        url: url,
        alt: altText,
        sourceFile: path.relative(sourceDir, file)
      });
    }
  }
}

console.log(`Found ${imageMap.size} unique image URLs from <img> tags.`);

const downloadedList = [];

function downloadImage(item, index) {
  return new Promise((resolve) => {
    const filename = `vinci_asset_${String(index).padStart(3, '0')}.jpg`;
    const destPath = path.join(imagesDir, filename);

    const protocol = item.url.startsWith('https') ? https : http;
    const req = protocol.get(item.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadImage({ ...item, url: res.headers.location }, index).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.log(`Failed [${res.statusCode}]: ${item.url.substring(0, 60)}`);
        return resolve(null);
      }

      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Saved [${index}/${imageMap.size}] -> ${filename}`);
        resolve({
          id: index,
          filename: filename,
          path: `images/${filename}`,
          alt: item.alt,
          sourcePage: item.sourceFile,
          originalUrl: item.url
        });
      });
    });

    req.on('error', (err) => {
      console.log(`Error downloading image ${index}:`, err.message);
      resolve(null);
    });

    req.setTimeout(15000, () => {
      req.destroy();
      resolve(null);
    });
  });
}

async function run() {
  const items = Array.from(imageMap.values());
  for (let i = 0; i < items.length; i++) {
    const res = await downloadImage(items[i], i + 1);
    if (res) downloadedList.push(res);
  }

  fs.writeFileSync(
    path.join(__dirname, 'image_manifest.json'),
    JSON.stringify(downloadedList, null, 2)
  );

  let mdContent = `# Vinci & Vee Group - Image Asset Inventory\n\n`;
  mdContent += `Total Images Extracted and Saved: ${downloadedList.length}\n\n`;
  mdContent += `| # | Filename | Source Page | Visual Description / Alt Text | Original Source URL |\n`;
  mdContent += `|---|---|---|---|---|\n`;
  downloadedList.forEach(item => {
    mdContent += `| ${item.id} | \`${item.filename}\` | \`${item.sourcePage}\` | ${item.alt.replace(/\|/g, '-')} | [View Original](${item.originalUrl}) |\n`;
  });

  fs.writeFileSync(path.join(__dirname, 'image_asset_inventory.md'), mdContent);
  console.log(`Successfully stored ${downloadedList.length} images and generated manifest!`);
}

run();
