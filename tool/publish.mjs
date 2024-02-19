#!/usr/bin/env zx
const v = process.argv[3];

if (!v || !/^\d+\.\d+\.\d+$/.test(v)) {
  console.log('version required');
  await $`exit 1`;
}

const ps = ['packages/node', 'packages/react', 'packages/react-native'];
for (const p of ps) {
  await $`cd ${p}`;
  const f = await fs.readFile('package.json', 'utf-8');
  const c = JSON.parse(f);

  c.version = v;
  if('@mj-studio/eslint-config-node' in c.dependencies) {
    c.dependencies['@mj-studio/eslint-config-node'] = v;
  }
  if('@mj-studio/eslint-config-react' in c.dependencies) {
    c.dependencies['@mj-studio/eslint-config-react'] = v;
  }

  await fs.writeFile('package.json', JSON.stringify(c, null, 2));


  await $`pwd`;
  // await $`yarn && npm publish`;
  // await $`cd ../..`
}

await $`git add .`;
await $`git commit -m ${v}`;
await $`git tag ${v}`;
await $`git push && git push origin --tags`;


