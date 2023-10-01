import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [ ],
	base: './',
	build: {
		ssr: true,
		sourcemap: 'inline',
		outDir: './vite-build',
		lib: {
			entry: fileURLToPath(new URL('./index.ts', import.meta.url)),
			name: 'index',
			fileName: 'index',
			formats: [ 'cjs' ],
		},
		rollupOptions: {
			input: {
				backend: fileURLToPath(new URL('./index.ts', import.meta.url)),
			},
			output: {
				entryFileNames: '[name].cjs',
			},
		},
		watch: {},
	},
})

