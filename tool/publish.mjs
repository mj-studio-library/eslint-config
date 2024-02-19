#!/usr/bin/env zx
const v = process.argv[3];

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

const ps = ['packages/node', 'packages/react', 'packages/react-native'];
for (const p of ps) {
  await $`cd ${p} && yarn && npm publish && cd ../..`;
}

await $`git add .`;
await $`git commit -m ${v}`;
await $`git tag ${v}`;
await $`git push && git push origin --tags`;


