const fs = require('fs');
const path = require('path');
const glob = require('glob');

const registryDir = '../app/config_registry/destination/scss';
const outputFile = '../app/config_registry/destination/generated-theme-imports.scss';


console.log('Generating combined registry file...');

glob(`${registryDir}/*.scss`, (err, files) => {
  if (err) {
    console.error('Error finding registry files:', err);
    return;
  }
  let importStatements = '';
  let combinedListNames = [];
  files.forEach(file => {
    const fileName = path.basename(file, '.scss');
    importStatements += `@import "scss/${fileName}";\n`;
    const listVariableName = `$list-${fileName.replace(/\./g, '-')}`;
    combinedListNames.push(listVariableName);
  });

  const combinedListDeclaration = `\n$all-combined-lists: ${combinedListNames.join(', ')};`;

  const finalContent = importStatements + combinedListDeclaration;

  fs.writeFile(outputFile, finalContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing combined registry file:', err);
      return;
    }
    console.log(`Successfully generated ${outputFile}.`);
  });
});