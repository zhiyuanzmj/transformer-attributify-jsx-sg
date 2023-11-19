import b from 'benny'
import { fixtures } from './fixtures/index.js'

await b.suite(
  'unocss transform jsx',
  ...fixtures.map(f => b.add(f.name, f)),
  b.cycle(),
  b.complete(),
)

function concurrent(n, f) {
  return () => Promise.all(Array(n).fill().map(f))
}

await b.suite(
  'unocss concurrent transform jsx',
  ...fixtures.map(f => b.add(f.name, concurrent(5, f))),
  b.cycle(),
  b.complete(),
)
