import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import sharp from 'sharp';

const MAX_LENGTH = 24;

function splitText(text) {
  const words = text.split(' ');

  let part1 = '';
  let part2 = '';

  words.some((word, i) => {
    if (part1.length + word.length + (part1 ? 1 : 0) <= MAX_LENGTH) {
      part1 += (part1 ? ' ' : '') + word;
    } else {
      part2 = words.slice(i).join(' ');
      return true;
    }
    return false;
  });

  if (part2.length > MAX_LENGTH) {
    part2 = `${part2.slice(0, MAX_LENGTH - 3)}...`;
  }

  return [part1, part2];
}

function generateBuffer(dark, titles) {
  const backgroundGradientStart = dark ? '#1a202c' : '#f8fafc';
  const backgroundGradientEnd = dark ? '#2d3748' : '#e2e8f0';
  const textGradientStart = dark ? '#4a90e2' : '#3b82f6';
  const textGradientEnd = dark ? '#67a9f5' : '#60a5fa';
  const textColor = dark ? '#e2e8f0' : '#64748b';

  return Buffer.from(`
    <svg viewBox="0 0 2400 1260" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" width="2400" height="1260">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${backgroundGradientStart}" />
          <stop offset="100%" stop-color="${backgroundGradientEnd}" />
        </linearGradient>
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${textGradientStart}" />
          <stop offset="100%" stop-color="${textGradientEnd}" />
        </linearGradient>
        <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#94a3b8" fill-opacity="0.2" />
        </pattern>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="100%" height="100%" fill="url(#grad)" />
      <rect width="100%" height="100%" fill="url(#dots)" opacity="0.1" />
      <g transform="translate(1200, 400)">
        <text x="0" y="0" text-anchor="middle" font-family="Poppins, Arial, sans-serif" font-size="96px" letter-spacing="0.05em" fill="${textColor}">
          A closer look at...
        </text>
        <text x="0" y="192px" text-anchor="middle" fill="url(#textGrad)" filter="url(#glow)" font-family="Roboto, Arial, sans-serif" font-size="168px" font-weight="bold" letter-spacing="0.02em" style="text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);">
          <tspan x="0" dy="0">${titles[0]}</tspan>
          <tspan x="0" dy="168px">${titles[1]}</tspan>
        </text>
        <text x="0" y="520" text-anchor="middle" font-family="Montserrat, Arial, sans-serif" font-size="64px" letter-spacing="0.05em" fill="${textColor}" opacity="0.7">
          jakubjereczek.com
        </text>
      </g>
    </svg>
  `);
}

function generateImage(filename, buffer) {
  sharp({
    create: {
      width: 2400,
      height: 1260,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: buffer, top: 0, left: 0 }])
    .png({ quality: 100, compressionLevel: 0, adaptiveFiltering: true })
    .toFile(
      path.join(process.cwd(), `public/articles/images/${filename}.png`),
      (err, info) => {
        if (err) {
          console.error('prebuild: error creating image:', err);
        } else {
          console.log('prebuild: image saved:', info);
        }
      },
    );
}

function execute() {
  const directory = path.join(process.cwd(), 'public/articles');
  const slugs = fs
    .readdirSync(directory)
    .filter((filename) => filename.endsWith('.mdx'))
    .map((filename) => filename.replace(/\.mdx$/, ''));

  for (const slug of slugs) {
    const pathname = path.join(directory, `${slug}.mdx`);
    const { data } = matter(fs.readFileSync(pathname, 'utf8'));
    const titles = splitText(data.title);

    generateImage(`${slug}-dark`, generateBuffer(true, titles));
    generateImage(`${slug}`, generateBuffer(false, titles));
  }
}

execute();
