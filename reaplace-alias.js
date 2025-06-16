const fs = require('fs');
const path = require('path');

// Định nghĩa alias và thư mục thực tế
const aliases = {
  '@pipes': 'src/app/shared/pipes',
  '@assets': 'src/assets',
  '@media': 'src/assets/media',
  '@enums': 'src/app/shared/enums',
  '@components': 'src/app/shared/components',
  '@services': 'src/app/shared/services',
  '@constants': 'src/app/shared/constants',
  '@directives': 'src/app/shared/directives',
  // Thêm alias khác nếu cần
};

// Đệ quy tìm tất cả file .ts, .js, .tsx, .jsx trong thư mục
function getAllFiles(dir, exts, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, exts, files);
    } else if (exts.includes(path.extname(fullPath))) {
      files.push(fullPath);
    }
  });
  return files;
}

// Chuyển alias sang path tuyệt đối từ gốc project (src/...)
function replaceAliasInFile(filePath, aliases) {
  let content = fs.readFileSync(filePath, 'utf8');
  let replaced = false;

  for (const [alias, realPath] of Object.entries(aliases)) {
    // Regex: import ... from '@pipes/abc'
    const regex = new RegExp(`(['"\`])${alias}\\/([^'"\`]+)\\1`, 'g');
    content = content.replace(regex, (match, quote, importPath) => {
      // Đường dẫn thực tế của file được import
      let absPath = path.join(realPath, importPath).replace(/\\/g, '/');
      // Đảm bảo path bắt đầu từ src/
      const srcIndex = absPath.indexOf('src/');
      if (srcIndex !== -1) absPath = absPath.slice(srcIndex);
      replaced = true;
      return `${quote}${absPath}${quote}`;
    });
  }

  if (replaced) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Replaced alias in: ${filePath}`);
  }
}

// Chạy script
const targetDir = 'src/app/shared'; // Thay đổi nếu cần
const files = getAllFiles(targetDir, ['.ts', '.js', '.tsx', '.jsx']);

files.forEach(file => replaceAliasInFile(file, aliases));

console.log('Done replacing aliases!');