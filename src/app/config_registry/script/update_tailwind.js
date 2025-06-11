import fs from 'fs';
import path from 'path';
import prettier from 'prettier';
import { fileURLToPath } from 'url';

/**
 * Hàm cập nhật tailwind.config.js
 * @param {string} configPath Đường dẫn đến tailwind.config.js
 * @param {string} extendJsonPath Đường dẫn đến file JSON chứa giá trị theme.extend mới
 */
async function updateTailwindConfig(configPath, extendJsonPath) {
  const filePath = path.resolve(configPath);
  const extendPath = path.resolve(extendJsonPath);

  // Đọc file JSON chứa theme.extend mới
  const extendContent = fs.readFileSync(extendPath, 'utf-8');
  const newExtend = JSON.parse(extendContent);

  // Đọc tailwind.config.js bằng import()
  const configUrl = pathToFileURL(filePath).href;
  const configModule = await import(configUrl);
  const config = configModule.default || configModule;

  // Nếu config là function, gọi nó
  const configData = typeof config === 'function' ? config() : config;

  // Đảm bảo có theme.extend
  configData.theme = configData.theme || {};
  configData.theme.extend = configData.theme.extend || {};

  // Merge các giá trị từ newExtend vào theme.extend
  for (const [key, value] of Object.entries(newExtend)) {
    if (typeof value === 'object' && !Array.isArray(value)) {
      configData.theme.extend[key] = {
        ...(configData.theme.extend[key] || {}),
        ...value,
      };
    } else {
      configData.theme.extend[key] = value;
    }
  }

  // Tạo JS module export lại config
  const updatedConfigContent = `export default ${JSON.stringify(configData, null, 2)};\n`;

  // Định dạng lại bằng prettier
  const formatted = await prettier.format(updatedConfigContent, { parser: 'babel' });

  // Ghi lại file
  fs.writeFileSync(filePath, formatted, 'utf-8');

  console.log(`✅ Đã cập nhật ${filePath} với dữ liệu từ ${extendPath}`);
}

// Chuyển đổi file path thành URL cho import()
function pathToFileURL(filePath) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const absolutePath = path.isAbsolute(filePath) ? filePath : path.join(__dirname, filePath);
  return new URL(`file://${absolutePath}`);
}

// Ví dụ sử dụng:
const configPath = '../../../../tailwind.config.js';
const extendJsonPath = '../tailwind.json';
updateTailwindConfig(configPath, extendJsonPath);
