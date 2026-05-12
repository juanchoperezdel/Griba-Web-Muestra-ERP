const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/**/*.tsx');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/bg-\[#050505\]/g, 'bg-black');
  
  // also revert other colors
  content = content.replace(/bg-\[#111111\]/g, 'bg-[#111]');
  content = content.replace(/bg-\[#0a0a0a\]/g, 'bg-[#0a0a0a]');
  
  fs.writeFileSync(file, content, 'utf8');
});
