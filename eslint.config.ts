import {defineConfig} from '@bfra.me/eslint-config'

export default defineConfig({
  name: 'explore-react-tanstack',
  ignores: ['src/routeTree.gen.ts'],
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
})
