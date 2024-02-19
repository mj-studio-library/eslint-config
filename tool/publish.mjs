#!/usr/bin/env zx
const v = process.argv[3];
import path from 'path';

if (!v || !/^\d+\.\d+\.\d+$/.test(v)) {
  console.log('version required');
  await $`exit 1`;
}

const paths = ['packages/node/package.json', 'packages/react/package.json', 'packages/react-native/package.json'];

for (const p of paths) {
  const f = await fs.readFile(p, 'utf-8');
  const c = JSON.parse(f);
  c.version = v;
  await fs.writeFile(p, JSON.stringify(c, null, 2));
}

await $`git add .`;
await $`git commit -m ${v}`;
await $`git tag ${v}`;
await $`git push && git push origin --tags`;

const cur = $`pwd`;
const ps = [path.join(cur, 'packages/node'), path.join(cur, 'packages/react'), path.join(cur, 'packages/react-native')];
for (const p of ps) {
  await $`cd ${p} && yarn publish`;
}
