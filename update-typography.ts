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
  
  if (content.includes('tracking-[0.2em]')) {
    content = content.replace(/tracking-\[0\.2em\]/g, 'tracking-widest');
    updated = true;
  }
  
  if (content.includes('tracking-[0.15em]')) {
    content = content.replace(/tracking-\[0\.15em\]/g, 'tracking-[0.1em]');
    updated = true;
  }

  if (content.includes('rounded-lg bg-transparent px-5 py-2')) {
    content = content.replace(/rounded-lg border border-white\/20/g, 'rounded-full border border-white/20');
    updated = true;
  }
  
  // also, the cards in page.tsx that had rounded-none are now rounded-lg.
  // let's ensure things like border are slightly softer if needed, or leave it.

  if (updated) {
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
