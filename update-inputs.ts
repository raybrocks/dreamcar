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

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let updated = false;

  // Let's replace `rounded-lg` with `rounded-md` for inputs/textareas
  // For other div boxes, rounded-lg is fine (often 8px or 12px)
  if (content.includes('rounded-lg')) {
    content = content.replace(/(<input[^>]*className="[^"]*)rounded-lg/g, '$1rounded-md');
    content = content.replace(/(<textarea[^>]*className="[^"]*)rounded-lg/g, '$1rounded-md');
    content = content.replace(/(<select[^>]*className="[^"]*)rounded-lg/g, '$1rounded-md');
    
    // Also, if any box was changed to rounded-lg, maybe rounded-2xl or rounded-xl is more modern?
    // Let's stick with rounded-lg.
    updated = true;
  }
  
  if (updated) {
    fs.writeFileSync(file, content);
    console.log('Updated inputs ' + file);
  }
});
