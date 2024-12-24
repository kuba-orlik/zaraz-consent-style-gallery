import { tempstream } from 'tempstream'

export async function html({
	title,
	body,
}: {
	title: string
	body: string | Promise<string>
}): Promise<string> {
	return tempstream/* HTML */ `<!doctype html>
		<html>
			<head>
				<meta charset="utf-8" />
				<title>${title}</title>
				<link rel="icon" href="/logo.svg" />
				<link rel="stylesheet" href="/style.css" />
				<script src="/dist/turbo-umd.js"></script>
				<script src="/dist/index.js"></script>
				<script src="/dist/vs/loader.js"></script>
			</head>
			<body>
				${body}
			</body>
			<script></script>
		</html>`
}

export async function HTMLResponse(
	args: Parameters<typeof html>['0'],
	status = 200,
) {
	return new Response(await html(args), {
		headers: { 'Content-Type': 'text/html' },
		status,
	})
}
