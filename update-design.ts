import fs from 'fs';
import path from 'path';

function walk(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = [...walk('./app'), ...walk('./components')];

function isButtonContext(content: string, index: number) {
  const substr = content.slice(Math.max(0, index - 100), index + 50);
  return substr.includes('<button') || substr.includes('<Link') || substr.includes('<a ');
}

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let updated = false;
  
  if (content.includes('rounded-none')) {
    content = content.replace(/rounded-none/g, (match, offset, str) => {
      // If it looks like a button
      if (isButtonContext(str, offset)) {
        return 'rounded-full';
      }
      // If it looks like an input or textarea
      const prev = str.slice(Math.max(0, offset - 50), offset);
      if (prev.includes('<input') || prev.includes('<textarea') || prev.includes('<select')) {
        return 'rounded-sm';
      }
      // Boxes
      return 'rounded-lg';
    });
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
    updated = true;
  }
  
  // also update uppercase tracking to be less aggressive for modern look if necessary
});
