import { Controller } from '@hotwired/stimulus'

// this is used both for thumbnails and for the big preview

export class ConsentPreviewIFrameController extends Controller<HTMLIFrameElement> {
	activateVariant(variant: string) {
		this.element.contentWindow?.postMessage(
			JSON.stringify({
				type: 'variant-change',
				variant: variant,
			}),
			'*',
		)
	}
}
