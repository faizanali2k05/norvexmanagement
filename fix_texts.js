const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.html')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));
files.push(path.join(__dirname, 'index.html'));

files.forEach((file) => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Remove em-dashes
  content = content.replace(/ — /g, ' ');
  content = content.replace(/—/g, ' ');
  
  // Remove the hardcoded gold lines
  content = content.replace(/<span className="w-8 h-px bg-gold" \/>/g, '');
  
  // Fix button outlines (make them primary if they have icons, but hard to do via regex. Let's just make all btn-outline filled with a different color if needed. Actually, I'll just change 'btn-outline' to 'btn-primary' globally just in case, but maybe they want some distinction. I'll just change btn-outline to a filled gray or secondary color. Or replace 'btn-outline ' with 'btn-primary '. Let's just do it manually for Hero if needed.)
  
  fs.writeFileSync(file, content, 'utf8');
});

console.log("Replaced dashes and removed lines.");
