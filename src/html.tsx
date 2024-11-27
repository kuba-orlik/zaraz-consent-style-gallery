import { tempstream } from 'tempstream'
import { TempstreamJSX } from 'tempstream'

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
				<script src="/dist/turbo-umd.js"></script>
				<script src="/dist/index.js"></script>
				<script src="/dist/vs/loader.js"></script>
			</head>
			<body>
				${body}
			</body>
			<style id="custom-style">
				${activeCustomStyle}
			</style>
			<script></script>
		</html>`
}
export async function HTMLResponse(...args: Parameters<typeof html>) {
	return new Response(await html(...args), {
		headers: { 'Content-Type': 'text/html' },
	})
}
