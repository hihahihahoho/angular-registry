const fs = require('fs');
const path = require('path');

const enumDir = 'src/app/shared/enums'; // Thư mục chứa các file enum nhỏ
const mainEnumFile = path.join(enumDir, 'ui.enum.ts'); // File enum tổng

// Lấy danh sách file enum nhỏ (trừ file tổng)
const files = fs.readdirSync(enumDir)
  .filter(f => f.endsWith('.enum.ts') && f !== 'ui.enum.ts');

let mergedContent = fs.existsSync(mainEnumFile) ? fs.readFileSync(mainEnumFile, 'utf8') : '';

// Gộp nội dung các file nhỏ vào cuối file tổng và xóa file nhỏ nếu thành công
files.forEach(file => {
  const filePath = path.join(enumDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  // Kiểm tra nếu nội dung chưa có trong file tổng thì mới thêm
  if (!mergedContent.includes(content.trim())) {
    mergedContent += '\n' + content;
    fs.writeFileSync(mainEnumFile, mergedContent, 'utf8');
    fs.unlinkSync(filePath); // Xóa file nhỏ
    console.log(`Merged and deleted: ${file}`);
  } else {
    console.log(`Skipped (already exists): ${file}`);
  }
});

console.log('Done merging enums!');