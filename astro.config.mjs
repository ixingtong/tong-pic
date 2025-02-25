// @ts-check

import process from 'node:process'
import netlify from '@astrojs/netlify'
import node from '@astrojs/node'
import SolidJS from '@astrojs/solid-js'
import vercel from '@astrojs/vercel'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

const envAdapter = () => {
  if (process.env.OUTPUT === 'vercel') {
    return vercel()
  } else if (process.env.OUTPUT === 'netlify') {
    return netlify()
  } else {
    return node({
      mode: 'standalone',
    })
  }
}

export default defineConfig({
  adapter: envAdapter(),

  integrations: [UnoCSS(), SolidJS()],

  output: 'server',

  devToolbar: {
    enabled: false,
  },

  // site: 'https://tong-pic.vercel.app',

  vite: {
    plugins: [],
  },
})
