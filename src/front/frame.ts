window.onmessage = function (e) {
	const data = JSON.parse(e.data)
	const shadowroot = document.getElementById('shadowroot')?.shadowRoot
	if (!shadowroot) {
		return
	}
	if (data.type == 'new-style') {
		const animation_style = document.createElement('style')
		animation_style.classList.add('transition')
		const stagger_step = 100
		// 		animation_style.innerHTML = `* {transition: all 200ms; transition-timing-function: cubic-bezier(0.64, 0.57, 0.67, 1.53); transition-delay: ${3 * stagger_step}ms;}
		// 			.cf_modal {transition-delay: ${0}ms}
		// 			.cf_modal > * {transition-delay: ${stagger_step * 1}ms}
		// 			.cf_modal > * > * {transition-delay: ${stagger_step * 2}ms}
		// 			.cf_modal > * > * > * {transition-delay: ${stagger_step * 3}ms}
		// 			.cf_modal > * > * > * > * {transition-delay: ${stagger_step * 4}ms}
		// 			.cf_modal > * > * > * > * > * {transition-delay: ${stagger_step * 5}ms}
		// 			.cf_modal > * > * > * > * > * > * {transition-delay: ${stagger_step * 6}ms}
		// `
		animation_style.innerHTML = `* {transition: all 200ms; transition-timing-function: cubic-bezier(0.64, 0.57, 0.67, 1.53);}`
		shadowroot.appendChild(animation_style)
		shadowroot.querySelectorAll('.customStyle').forEach((style) => {
			style.innerHTML = data.style
		})
		setTimeout(() => {
			animation_style.remove()
		}, 700)
	}
	if (data.type == 'variant-change') {
		const variant = data.variant
		document
			.getElementById('shadowroot')
			.shadowRoot.querySelectorAll(`dialog`)
			.forEach((dialog) => {
				dialog.close()
			})
		const dialog = document
			.getElementById('shadowroot')
			.shadowRoot.querySelector(`#dialog--${variant}`)
			.showModal()
	}
}

function getHoveredElement(root: HTMLElement) {
	let element: HTMLElement | null = root.querySelector(
		'.has-hover:hover:not(:has(*:hover))',
	)
	return element
}

type PathSegment = { element?: string; class: string; modifiers?: string[] }

function getHoveredPath(root: HTMLElement) {
	const path: PathSegment[] = []
	const hovered_element = getHoveredElement(root)
	let element = hovered_element
	if (!element) {
		return
	}

	while (element != root) {
		if (!element) {
			break
		}
		const classes = Array.from(element!.classList)
			.filter((e) => e != 'has-hover')
			.map((e) => `.${e}`)
			.join('')
		const segment: PathSegment = { class: classes }
		if (
			!['DIV', 'BUTTON', 'INPUT', 'P'].includes(element.tagName) ||
			classes == ''
		) {
			segment.element = element.tagName.toLowerCase()
		}
		if (element instanceof HTMLInputElement && element.checked) {
			segment.modifiers = ['checked']
		}
		path.unshift(segment)
		element = element.parentNode! as HTMLElement
		if (segment.class) {
			break // no need to create more precise selectors
		}
	}

	window.parent.postMessage(JSON.stringify({ type: 'css-path-activate', path }))
	const dialog: HTMLElement = hovered_element.closest('dialog')
	const csspathTarget: HTMLElement = dialog.querySelector('.css-path')!
	const path_html = /* HTML */ `<div class="content">
		${path
			.map(
				({ element, class: cls, modifiers }) => /* HTML */ `
					<span class="element">${element || ''}</span
					><span class="class">${cls}</span>${(modifiers || []).map(
						(modifier) =>
							/* HTML */ `<span class="modifier">:${modifier}</span>`,
					)}
				`,
			)
			.join('<span> &gt; </span>')}
	</div>`
	csspathTarget.innerHTML = path_html

	const dialogRect = dialog!.getBoundingClientRect()
	const hoveredRect = hovered_element!.getBoundingClientRect()
	if (hovered_element == dialog) {
		csspathTarget.style.setProperty('top', `${dialog.scrollTop}px`)
		csspathTarget.style.setProperty('left', `${0}px`)
		csspathTarget.style.removeProperty('bottom')
	} else {
		const bottomOffset = dialogRect.bottom - hoveredRect.top - dialog.scrollTop
		const leftOffset = Math.min(
			dialogRect.width - 170,
			hoveredRect.x - dialog.getBoundingClientRect().x - 1,
		)
		csspathTarget.style.setProperty('bottom', `${bottomOffset}px`)
		csspathTarget.style.removeProperty('top')
		csspathTarget.style.setProperty('left', `${leftOffset}px`)
	}
}

window.addEventListener('load', () => {
	const shadowroot = document.getElementById('shadowroot')!
		.shadowRoot as unknown as HTMLElement
	if (!shadowroot) {
		throw new Error('Shadowroot not found')
	}

	shadowroot.querySelectorAll('dialog, * > *').forEach((element) => {
		element.setAttribute('title', 'Click to copy CSS selector')
		element.addEventListener('mouseenter', () => {
			element.classList.add('has-hover') // the class is necessary to differentiate between actual hover and the fake hover given to checkboxes when you hover over their labels
			getHoveredPath(shadowroot)
		})

		element.addEventListener('mouseleave', () => {
			element.classList.remove('has-hover')
			getHoveredPath(shadowroot)
		})

		element.addEventListener('click', (e: Event) => {
			e.stopPropagation()
			if (e.target.tagName == 'A') {
				e.preventDefault()
			}
			if (element.tagName == 'BUTTON') {
				setTimeout(() => element.closest('dialog').close(), 500)
			}
			const path_container = e.target
				.closest('dialog')
				.querySelector('.css-path')!
			shadowroot.querySelectorAll('.copied').forEach((e) => e.remove())

			const blob = new Blob(
				[(path_container.textContent || '').replace(/[ \n\t]+/g, ' ').trim()],
				{
					type: 'text/plain',
				},
			)
			const data = [new ClipboardItem({ ['text/plain']: blob })]
			void navigator.clipboard.write(data)

			const checkmark = document.createElement('div')
			checkmark.classList.add('copied')
			checkmark.textContent = '✔ Copied!'
			path_container.appendChild(checkmark)

			return null
		})
	})
})
