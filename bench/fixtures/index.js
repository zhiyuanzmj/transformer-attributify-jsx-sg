import MagicString from 'magic-string'
import {
  presetAttributify,
  presetUno,
  transformerAttributifyJsx,
} from 'unocss'
import transformerAttributifyJsxBabel from '@unocss/transformer-attributify-jsx-babel'
import { createGenerator } from '@unocss/core'

import transformerAttributifyJsxSg from '../../dist/index.mjs'

let originalCode = `
<div h-full text-center flex select-none className={red ? 'text-red': 'text-green'}>
  <input value={ target ? '10px' : '20px'} style={{ height: '100px' }} />
  <div ma>
    <div text-5xl fw100 animate-bounce-alt animate-count-infinite animate-duration-1s key={index}>
      unocss
    </div>
    <div op30 text-lg fw300 m1 className={hidden && 'op0'}>
      The instant on-demand Atomic CSS engine.
    </div>
    <div m2 flex justify-center text-2xl op30 hover:op80 hover:text-2xl>
      <a
        i-carbon-logo-github
        text-inherit
        href="https://github.com/unocss/unocss"
        target="_blank"
      ></a>
      <router-link to={\`/path/\${1}\`}/>
    </div>
  </div>
  <section 
    className={cn({ 'c-red': variable > 0 }, 'mr-10')} 
    mr-10 
    className={cn({ 'c-red': variable > 0 }, 'mr-10')}
  ></section>
  <div 
    label={
      <b>1</b>
    }
  ></div>
  <div absolute bottom-5 right-0 left-0 text-center op30 fw300>
    on-demand · instant · fully customizable
  </div>
  <div components={<div absolute bottom-5></div>}></div>
  <h1 flex>h1</h1>
  <div {...{ flex }} />  
  <div {...{ onClick: () => { grid(); flex } }} flex />
  <div {...true ? flex : props.grid } {...grid || ( block ) && $flex } />  
  <div {...[, flex, [flex], !flex, -flex, +flex, ~flex, "flex", \`flex\` ] } />  
</div>
  `.trim().repeat(10)
originalCode = `<>${originalCode}`
originalCode += '</>'

const uno = createGenerator({
  presets: [presetUno(), presetAttributify()],
})

export const fixtures = [
  {
    async transformerAttributifyJsx() {
      const code = new MagicString(originalCode)
      await transformerAttributifyJsx().transform(code, 'app.tsx', {
        uno,
        tokens: new Set(),
      })
    },
  },
  {
    async transformerAttributifyJsxSg() {
      const code = new MagicString(originalCode)
      await transformerAttributifyJsxSg().transform(code, '/Users/zmj/Documents/transformer-attributify-jsx-sg/test/app.tsx', {
        uno,
        tokens: new Set(),
      })
    },
  },
  {
    async  transformerAttributifyJsxBabel() {
      const code = new MagicString(originalCode)
      await transformerAttributifyJsxBabel().transform(code, 'app.tsx', {
        uno,
        tokens: new Set(),
      })
    },
  },
]
