import { fixtures } from './fixtures/index.js'

async function benchmark(name, fn) {
  const times = 1000
  const start = Date.now()

  for (let i = 0; i < times; i++)
    await fn()

  console.log(`${name}: ${Date.now() - start}ms`)
}

for (const i of fixtures)
  await benchmark(Object.keys(i)[0], Object.values(i)[0])
