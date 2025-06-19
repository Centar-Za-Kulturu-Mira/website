import fs from 'fs';
import path from 'path';

export default function() {
  const galleryDir = 'content/gallery/images';
  const files = fs.readdirSync(galleryDir);
  
  return files
    .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
    .map(file => ({
      url: `/gallery/images/${file}`,
      alt: path.parse(file).name
    }));
}
