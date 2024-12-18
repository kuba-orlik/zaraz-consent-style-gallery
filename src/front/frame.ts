window.onmessage = function (e) {
	const data = JSON.parse(e.data)
	if (data.type == 'new-style') {
		const shadowroot = document.getElementById('shadowroot')?.shadowRoot
		if (!shadowroot) {
			return
		}
		const animation_style = document.createElement('style')
		animation_style.classList.add('transition')
		animation_style.innerHTML = '* {transition: all 200ms;}'
		shadowroot.appendChild(animation_style)
		shadowroot.querySelector('#customStyle')!.innerHTML = data.style
		setTimeout(() => {
			animation_style.remove()
		}, 200)
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
	console.log(path)
	// document.dispatchEvent(new CustomEvent('css-path', { detail: { path } }))
	window.parent.postMessage(JSON.stringify({ type: 'css-path-activate', path }))
	const dialog: HTMLElement = root.querySelector('dialog')!
	const csspathTarget: HTMLElement = root.querySelector('.css-path')!
	const path_html = /* HTML */ `<div class="content">
		${path
			.map(
				({ element, class: cls, modifiers }) => /* HTML */ `
					<span class="element">${element || ''}</span>
					<span class="class">${cls}</span>
					${(modifiers || []).map(
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
			const path_container = shadowroot.querySelector('.css-path')!
			shadowroot.querySelectorAll('.copied').forEach((e) => e.remove())

			const blob = new Blob([path_container.textContent || ''], {
				type: 'text/plain',
			})
			const data = [new ClipboardItem({ ['text/plain']: blob })]
			void navigator.clipboard.write(data)

			const checkmark = document.createElement('div')
			checkmark.classList.add('copied')
			checkmark.textContent = '✔ Copied!'
			path_container.appendChild(checkmark)
			e.preventDefault()
			return null
		})
	})
})

document.addEventListener(
	'css-path',
	(event: CustomEvent<{ path: PathSegment[] }>) => {
		console.log(event)
		const path_container = document.querySelector('.path-display')!
		path_container.innerHTML = `${(event.detail.path as string[]).map((segment) => `<span class="class">${segment}</span>${segment.modifiers?.map((modifier) => `<span class="modifier">:${modifier}</span>`)}`).join('<span>&gt;</span>')}`
	},
)
