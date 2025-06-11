const fs = require('fs');
const postcss = require('postcss');
const scss = require('postcss-scss');
/**
 * Parse các biến SCSS mới từ txt
 */
function parseVariablesWithComments(txtContent) {
  const lines = txtContent.split('\n').map(line => line.trim());
  const result = [];

  for (const line of lines) {
    if (line.startsWith('//')) {
      result.push({ type: 'comment', value: line });
    } else {
      const regex = /--([\w-]+):\s*([^;]+);/;
      const match = line.match(regex);
      if (match) {
        result.push({
          type: 'variable',
          key: match[1],
          value: match[2].trim(),
        });
      }
    }
  }

  return result;
}

async function updateScssMixin(filePath, txtFilePath) {
  const scssContent = fs.readFileSync(filePath, 'utf8');
  const txtContent = fs.readFileSync(txtFilePath, 'utf8');
  const newItems = parseVariablesWithComments(txtContent);

  const root = postcss.parse(scssContent, { syntax: scss });

  let duplicatedKeys = [];
  let foundMixin = false;

  root.walkAtRules('mixin', atRule => {
    if (atRule.params === 'lighten()') {
      foundMixin = true;

      // Bước 1: Thu thập biến cũ
      const existingKeys = new Set();
      atRule.walkDecls(decl => {
        const match = decl.prop.match(/^--([\w-]+)$/);
        if (match) {
          existingKeys.add(match[1]);
        }
      });

      // Bước 2: Kiểm tra trùng key
      duplicatedKeys = newItems
        .filter(item => item.type === 'variable' && existingKeys.has(item.key))
        .map(item => item.key);

      if (duplicatedKeys.length > 0) {
        console.error(`❌ Trùng key: ${duplicatedKeys.join(', ')}`);
        console.error(`⛔ Dừng lại. Không cập nhật.`);
        return;
      }

      // Bước 3: Thêm biến mới + comment
      newItems.forEach(item => {
        if (item.type === 'comment') {
          atRule.append({ text: item.value });
        } else if (item.type === 'variable') {
          atRule.append({ prop: `--${item.key}`, value: item.value });
        }
      });
    }
  });

  if (!foundMixin) {
    // Nếu chưa có mixin lighten thì thêm mới
    const newMixin = postcss.atRule({
      name: 'mixin',
      params: 'lighten()',
    });

    newItems.forEach(item => {
      if (item.type === 'comment') {
        newMixin.append({ text: item.value });
      } else if (item.type === 'variable') {
        newMixin.append({ prop: `--${item.key}`, value: item.value });
      }
    });

    root.append(newMixin);
  }

  if (duplicatedKeys.length === 0) {
    fs.writeFileSync(filePath, root.toResult().css, 'utf8');
    console.log(`✅ Cập nhật SCSS thành công: ${filePath}`);
  }
}

// Ví dụ dùng:
updateScssMixin('../../../assets/scss/theme/light.scss','../config.txt');
