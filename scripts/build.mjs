import fs from 'fs';
import path from 'path';
import ADMZip from 'adm-zip';

console.log(`[BUILD] Building Chrome extension...`);

fs.mkdirSync('./dist', { recursive: true });

// Chrome
fs.mkdirSync('./dist/chrome', { recursive: true });
fs.copyFileSync(
  './extension/manifests/chrome.json',
  './dist/chrome/manifest.json',
);
fs.copyFileSync('./extension/index.html', './dist/chrome/index.html');
fs.copyFileSync('./extension/script.js', './dist/chrome/script.js');
fs.cpSync('./extension/images', './dist/chrome/images', {
  recursive: true,
});

const chromeDotZip = new ADMZip();
chromeDotZip.addLocalFolder('./dist/chrome');
chromeDotZip.writeZip(`./dist/chrome.zip`);

console.log(`[BUILD] Building Firefox extension...`);

// Firefox
fs.mkdirSync('./dist/firefox', { recursive: true });
fs.copyFileSync(
  './extension/manifests/firefox.json',
  './dist/firefox/manifest.json',
);
fs.copyFileSync('./extension/index.html', './dist/firefox/index.html');
fs.copyFileSync('./extension/script.js', './dist/firefox/script.js');
fs.cpSync('./extension/images', './dist/firefox/images', {
  recursive: true,
});

const firefoxDotZip = new ADMZip();
firefoxDotZip.addLocalFolder('./dist/firefox');
firefoxDotZip.writeZip(`./dist/firefox.zip`);

console.log('[BUILD] Done 🦜');
