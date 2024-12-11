import { Controller } from '@hotwired/stimulus'

export class CMPPreview extends Controller<HTMLDivElement> {
	static targets = ['frame', 'csspath']

	declare frameTarget: HTMLIFrameElement
	declare csspathTarget: HTMLDivElement

	setStyle(style: string) {
		this.frameTarget.contentWindow?.postMessage(
			JSON.stringify({
				type: 'new-style',
				style: `@layer consent {${style} }`,
			}),
			'*',
		)
	}

	setPointerActive(active: boolean) {
		if (active) {
			this.frameTarget.style.setProperty('pointer-events', 'all')
		} else {
			this.frameTarget.style.setProperty('pointer-events', 'none')
		}
	}
}
