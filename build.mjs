import esbuild from 'esbuild'
import { resolve } from 'path'
import { promises as fs } from 'fs'
// const glob = require('tiny-glob');

const project_dir = new URL('./', import.meta.url).pathname

const assets = [
	{
		from: 'node_modules/monaco-editor/min/vs',
		to: 'dist/vs',
	},
	{
		from: 'node_modules/@hotwired/turbo/dist/turbo.es2017-umd.js',
		to: 'dist/turbo-umd.js',
	},
]

for (const { from, to } of assets) {
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
}

const backend_config = {
	bundle: false,
	target: 'es2022',
	platform: 'node',
	format: 'esm',
	entryPoints: ['src/**/*.tsx', 'src/**/*.ts'],
	outdir: 'dist',
	jsxFactory: 'TempstreamJSX.createElement',
}

const frontend_config = {
	bundle: true,
	target: 'es2022',
	platform: 'node',
	format: 'iife',
	entryPoints: ['src/front/index.ts'],
	outdir: 'public/dist',
}

if (process.argv.includes('--watch')) {
	const ctx_backend = await esbuild.context(backend_config)
	await ctx_backend.watch()
	const ctx_frontend = await esbuild.context(frontend_config)
	await ctx_frontend.watch()
	console.log('watching...')
} else {
	await esbuild.build(backend_config)
	await esbuild.build(frontend_config)
}
