import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const srcDir = path.join(__dirname, 'src');

const replacements = [
  { regex: /Earning Sharthi/g, replacement: 'JS TECH solution' },
  { regex: /EarningSharthi/g, replacement: 'JSTECHsolution' },
  { regex: /@earningsharthi\.in/g, replacement: '@jstechsolution.in' },
  { regex: /@earningsharthi\.com/g, replacement: '@jstechsolution.in' },
  { regex: /Delhi, Gurugram, and Noida/g, replacement: 'Jaipur, Rajasthan' },
  { regex: /Delhi, Gurugram, Noida/g, replacement: 'Jaipur, Rajasthan' },
  { regex: /Delhi NCR/g, replacement: 'Rajasthan' },
  { regex: /Delhi/g, replacement: 'Jaipur' },
  { regex: /Khatima, Uttarakhand/g, replacement: 'Jaipur, Rajasthan' }
];

function walkSync(currentDirPath, callback) {
  fs.readdirSync(currentDirPath).forEach(function (name) {
    var filePath = path.join(currentDirPath, name);
    var stat = fs.statSync(filePath);
    if (stat.isFile()) {
      callback(filePath, stat);
    } else if (stat.isDirectory()) {
      walkSync(filePath, callback);
    }
  });
}

let modifiedCount = 0;

walkSync(srcDir, function (filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    replacements.forEach(item => {
      content = content.replace(item.regex, item.replacement);
    });

    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      modifiedCount++;
      console.log(`Updated: ${filePath}`);
    }
  }
});

console.log(`\nFinished updating ${modifiedCount} files.`);
