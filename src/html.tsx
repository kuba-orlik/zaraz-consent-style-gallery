import { tempstream } from 'tempstream'
import { TempstreamJSX } from 'tempstream'
import { defaultStyles } from './default-styles'

export async function html({
	title,
	body,
	activeCustomStyle = '',
}: {
	title: string
	body: string | Promise<string>
	activeCustomStyle?: string
}): Promise<string> {
	return tempstream/* HTML */ `<!doctype html>
		<html>
			<head>
				<meta charset="utf-8" />
				<title>${title}</title>
				<script src="/dist/vs/loader.js"></script>
			</head>
			<body>
				${body}
			</body>
			<style>
				.fake-consent-modal-container{
				${defaultStyles}
				}
			</style>
			<style id="custom-style">
				${activeCustomStyle}
			</style>
			<script>
				require.config({
					paths: { vs: \`\${document.location.origin}/dist/vs\` },
				})
				const container = document.getElementById('editor')
				console.log(container)
				if (!container) {
					throw new Error("Didn't find the editor container element")
				}
				const content = container.querySelector('.content')
				require(['vs/editor/editor.main'], function () {
					var editor = monaco.editor.create(container, {
						value: content.innerHTML,
						language: 'css',
					})
				})
			</script>
		</html>`
}
export async function HTMLResponse(...args: Parameters<typeof html>) {
	return new Response(await html(...args), {
		headers: { 'Content-Type': 'text/html' },
	})
}
