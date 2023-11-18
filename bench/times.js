import { fixtures } from './fixtures/index'

async function benchmark(name, fn) {
  let times = 0
  const start = Date.now()

  while (Date.now() - start < 1000) {
    await fn()
    times++
  }

  console.log(`${name}: ${times} times`)
}

for (const i of fixtures)
  await benchmark(Object.keys(i)[0], Object.values(i)[0])
