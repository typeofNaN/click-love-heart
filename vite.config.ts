import { defineConfig } from 'vite'
import viteDts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [viteDts({
    rollupTypes: true,
    copyDtsFiles: true
  })],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'ClickLoveHeart',
      formats: ['es', 'umd', 'cjs']
    }
  }
})
