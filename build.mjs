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

const frame_config = {
	bundle: true,
	target: 'es2022',
	platform: 'node',
	format: 'iife',
	entryPoints: ['src/front/frame.ts'],
	outdir: 'public/dist',
}

const configs = [backend_config, frontend_config, frame_config]

if (process.argv.includes('--watch')) {
	for (const config of configs) {
		const ctx = await esbuild.context(config)
		await ctx.watch()
	}
	console.log('watching...')
} else {
	for (const config of configs) {
		await esbuild.build(config)
	}
}
