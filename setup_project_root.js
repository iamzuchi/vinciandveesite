const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const vinciAppDir = path.join(rootDir, 'vinci-app');
const imagesSource = path.join(rootDir, 'images');
const imagesTarget = path.join(rootDir, 'public', 'images');

// 1. Move files from vinci-app to root
if (fs.existsSync(vinciAppDir)) {
  const items = fs.readdirSync(vinciAppDir);
  for (const item of items) {
    const srcPath = path.join(vinciAppDir, item);
    const destPath = path.join(rootDir, item);
    if (fs.existsSync(destPath)) {
      if (fs.statSync(destPath).isDirectory()) {
        fs.rmSync(destPath, { recursive: true, force: true });
      } else {
        fs.unlinkSync(destPath);
      }
    }
    fs.renameSync(srcPath, destPath);
    console.log(`Moved ${item} to root`);
  }
  fs.rmdirSync(vinciAppDir);
  console.log('Removed vinci-app directory');
}

// 2. Ensure public/images directory exists and copy images
if (!fs.existsSync(imagesTarget)) {
  fs.mkdirSync(imagesTarget, { recursive: true });
}

if (fs.existsSync(imagesSource)) {
  const files = fs.readdirSync(imagesSource);
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.svg') || file.endsWith('.webp')) {
      const srcFile = path.join(imagesSource, file);
      const destFile = path.join(imagesTarget, file);
      fs.copyFileSync(srcFile, destFile);
    }
  }
  console.log(`Copied ${files.length} images into public/images/`);
}

console.log('Project root setup complete!');
