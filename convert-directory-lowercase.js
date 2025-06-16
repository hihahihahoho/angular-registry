const fs = require('fs');

const manifestPath = 'src/app/shared/jsrepo-manifest.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// Hàm chuyển camelCase/PascalCase sang kebab-case
function toKebabCase(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

function convertDirectoryKebabCase(obj) {
  if (Array.isArray(obj)) {
    obj.forEach(convertDirectoryKebabCase);
  } else if (typeof obj === 'object' && obj !== null) {
    for (const key in obj) {
      if (key === 'directory' || key === 'name') {
        // Chuyển từng phần của path sang kebab-case
        obj[key] = obj[key]
          .split('/')
          .map(toKebabCase)
          .join('/');
      } else {
        convertDirectoryKebabCase(obj[key]);
      }
    }
  }
}

convertDirectoryKebabCase(manifest);

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
console.log('All directory fields converted to kebab-case!');