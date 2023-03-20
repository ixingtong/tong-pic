import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  theme: {},
  safelist: [],
  shortcuts: [],
  presets: [presetUno(), presetIcons()],
  transformers: [],
})
