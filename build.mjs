import esbuild from 'esbuild'
import { resolve } from 'path'
import { promises as fs } from 'fs'
// const glob = require('tiny-glob');

const project_dir = new URL('./', import.meta.url).pathname

const from = 'node_modules/monaco-editor/min/vs'
const to = 'dist/vs'

try {
	await fs.stat(resolve(project_dir, 'public', to))
} catch (e) {
	await fs.mkdir(resolve(project_dir, 'public', to, '../'), {
		recursive: true,
	})
	await fs.symlink(
		resolve(project_dir, from),
		resolve(project_dir, 'public', to),
	)
}

const config = {
	bundle: false,
	target: 'es2022',
	platform: 'node',
	format: 'esm',
	entryPoints: ['src/**/*.tsx', 'src/**/*.ts'],
	outdir: 'dist',
	jsxFactory: 'TempstreamJSX.createElement',
}

if (process.argv.includes('--watch')) {
	const ctx = await esbuild.context(config)
	await ctx.watch()
	console.log('watching...')
} else {
	await esbuild.build(config)
}
