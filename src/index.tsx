import { Router } from 'cloudworker-router'
import { TempstreamJSX } from 'tempstream'
import { HTMLResponse } from './html'
import { getStyles, Style } from './styles.js'
import makeConsentModal from './generate-consent'
import makeIframe from './make-iframe'

export interface Env {
	// If you set another name in wrangler.toml as the value for 'binding',
	// replace "DB" with the variable name you defined.
	DB: D1Database
}

const router = new Router<Env>()

function navigation(styles: Style[], picked_style?: number) {
	return (
		<>
			Hello, world! Here are some Zaraz CMP themes you can use for free:
			<ul>
				{styles.map((style) => (
					<li>
						{picked_style == style.id ? (
							<span>{style.name}</span>
						) : (
							<a href={`/${style.id}`}>{style.name}</a>
						)}
					</li>
				))}
			</ul>
		</>
	)
}

function editor(content: string) {
	return (
		<div
			data-controller="monaco"
			data-monaco-preview-outlet="#preview"
			style="height: 200px;"
		>
			<textarea data-monaco-target="content">{content}</textarea>
		</div>
	)
}

router.get('/', async (context) => {
	const styles = await getStyles(context.env.DB)
	return await HTMLResponse({
		title: 'Zaraz CMP Style Gallery',
		body: <div>{navigation(styles)}</div>,
	})
})

router.get('/:id', async (context) => {
	const styles = await getStyles(context.env.DB)
	const active_style = styles.find((e) => e.id == Number(context.params.id))
	return await HTMLResponse({
		title: 'Zaraz CMP Style Gallery',
		body: (
			<div>
				{navigation(styles, Number(context.params.id))}
				{editor(active_style?.css || '')}
				{makeIframe(
					{ id: 'preview', 'data-controller': 'preview' },
					await makeConsentModal(active_style?.css),
				)}
			</div>
		),
		activeCustomStyle: `.fake-consent-modal-container {${active_style?.css}}`,
	})
})

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext,
	): Promise<Response> {
		return router.handle(request, env, ctx)
	},
}
