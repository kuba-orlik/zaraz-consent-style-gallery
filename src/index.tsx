import { Router } from 'cloudworker-router'
import { TempstreamJSX } from 'tempstream'
import { HTMLResponse } from './html'
import { getStyles, Style, createStyle } from './styles.js'
import makeConsentModal from './generate-consent'
import makeIframe from './make-iframe'
import { editor } from './editor'

export interface Env {
	// If you set another name in wrangler.toml as the value for 'binding',
	// replace "DB" with the variable name you defined.
	DB: D1Database
}

const router = new Router<Env>()

async function bigPreview(css = '') {
	return (
		<div data-controller="preview" id="preview">
			{makeIframe(
				{
					'data-preview-target': 'frame',
					'data-controller': 'preview-iframe',
				},
				await makeConsentModal(css),
			)}
		</div>
	)
}

async function smallPreview({
	name,
	id,
	css,
	active,
	target_frame = '_top',
}: {
	name: string
	id: number
	css: string
	active: boolean
	target_frame?: string
}) {
	const content = (
		<>
			<div style="margin-bottom: 8px;">{name}: </div>
			<div style="width: calc(1024px / 4); height: calc(768px / 4)">
				{makeIframe(
					{
						'data-controller': 'preview-iframe',
						width: '1024',
						height: '768',
						style:
							'transform: scale(calc(1 / 4)); transform-origin: top left; pointer-events: none',
					},
					makeConsentModal(css),
				)}
			</div>
		</>
	)
	return (
		<a
			class={['small-preview', { active }]}
			href={`/${id}`}
			data-turbo-frame={target_frame}
			data-turbo-action="advance"
		>
			{content}
		</a>
	)
}

function Thumbnails({
	styles,
	picked_style,
	full_view,
}: {
	styles: Style[]
	picked_style?: number
	full_view: boolean
}) {
	return (
		<nav>
			<ul>
				{styles.map((style) => (
					<li class={{ active: picked_style == style.id }}>
						{smallPreview({
							...style,
							active: picked_style == style.id,
							target_frame: full_view ? '_top' : 'editor',
						})}
					</li>
				))}
			</ul>
		</nav>
	)
}

function Header() {
	return (
		<div class="header">
			<a class="header__inner" href="/">
				<img src="/logo.svg" width="173" height="56" />
				<div class="title">
					Cloudflare Zaraz
					<br />
					Consent Modal Designer
				</div>
			</a>
			<settings>
				<select
					id="variant-picker"
					name="variant"
					data-controller="variant-picker"
					data-variant-picker-preview-iframe-outlet="iframe"
				>
					<option value="regular">Regular, 2 purposes</option>
					<option value="tcf">TCF</option>
				</select>
			</settings>
		</div>
	)
}

function Divider() {
	return (
		<div
			class="divider"
			data-controller="resizer"
			data-resizer-preview-outlet="#preview"
		>
			<div class="dots">
				.<br />.<br />.<br />
			</div>
		</div>
	)
}

router.get('/', async (context) => {
	const styles = await getStyles(context.env.DB)
	return new Response('Redirecting...', {
		status: 302,
		headers: { Location: '/' + styles[0].id },
	})
})

async function mainView(context, message = '') {
	const styles = await getStyles(context.env.DB)
	const active_style = styles.find((e) => e.id == Number(context.params.id))
	return await HTMLResponse(
		{
			title: 'Zaraz CMP Style Gallery',
			body: (
				<div class="main-ui">
					<Header />
					{editor(active_style?.css || '', message)}
					{bigPreview(active_style?.css)}
					<Divider />
					<Thumbnails
						{...{
							styles,
							picked_style: Number(context.params.id),
							full_view: false,
						}}
					/>
				</div>
			),
		},
		message == '' ? 200 : 422,
	)
}

router.get('/:id', async (context) => {
	return mainView(context)
})

router.post('/:id', async (context) => {
	const formData = await context.request.formData()
	const css = formData.get('style')
	const author = formData.get('author')
	const name = formData.get('name')
	await createStyle(context.env.DB, { css, author, name })
	return mainView(
		context,
		"We've reveived your submission. We'll add it to the gallery when it passes our review process.",
	)
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
