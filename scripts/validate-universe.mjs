import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const storySource = readFileSync(resolve(root, 'src/lib/stories.ts'), 'utf8');
const characterSource = readFileSync(resolve(root, 'src/lib/characters.ts'), 'utf8');
const errors = [];

const names = new Set([...characterSource.matchAll(/nameZh:'([^']+)'/g)].map((match) => match[1]));
const storyStarts = [...storySource.matchAll(/\n\s*slug: '([^']+)'/g)];

for (let index = 0; index < storyStarts.length; index += 1) {
  const start = storyStarts[index].index;
  const end = storyStarts[index + 1]?.index ?? storySource.indexOf('\n];', start);
  const block = storySource.slice(start, end);
  const slug = storyStarts[index][1];
  const zhStart = block.indexOf('sectionsZh:');
  const zhEnd = block.indexOf('sectionsEn:', zhStart);
  const zh = block.slice(zhStart, zhEnd);
  const count = (zh.match(/[\u3400-\u9fff]/g) ?? []).length;
  if (count < 20_000) errors.push(`${slug}: 中文正文 ${count} 字，低于 20000 字`);

  const listed = [...block.matchAll(/charactersZh:\s*\[([^\]]+)\]/g)]
    .flatMap((match) => [...match[1].matchAll(/'([^'｜]+)(?:｜[^']+)?'/g)].map((item) => item[1]));
  for (const name of listed) {
    if (!names.has(name)) errors.push(`${slug}: 角色“${name}”未登记于人物圣经`);
  }
}

const ids = [...characterSource.matchAll(/id:'([^']+)'/g)].map((match) => match[1]);
const portraitsById = new Map();
for (const match of characterSource.matchAll(/id:'([^']+)'[^\n]*?portrait:'([^']+)'/g)) portraitsById.set(match[1], match[2]);
const mapStart = characterSource.indexOf('characterPortraits');
const mapEnd = characterSource.indexOf('};', mapStart);
const portraitMap = characterSource.slice(mapStart, mapEnd);
for (const match of portraitMap.matchAll(/^\s*(?:'([^']+)'|([a-z-]+)):\s*'([^']+)'/gm)) portraitsById.set(match[1] ?? match[2], match[3]);
for (const id of ids) {
  const portrait = portraitsById.get(id);
  if (!portrait) errors.push(`${id}: 未登记独立人物肖像`);
  else if (!existsSync(resolve(root, `public${portrait}`))) errors.push(`${id}: 肖像文件不存在 ${portrait}`);
}

const registered = ids.length;
const portraits = portraitsById.size;

if (errors.length) {
  console.error(`\n宇宙校验失败（${errors.length} 项）：\n- ${errors.join('\n- ')}\n`);
  process.exit(1);
}

console.log(`宇宙校验通过：${storyStarts.length} 篇长篇，${registered} 位具名角色。`);
