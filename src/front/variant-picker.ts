import { Controller } from '@hotwired/stimulus'
import { ConsentPreviewIFrameController } from './consent-iframe.js'

export class VariantPickerController extends Controller<HTMLSelectElement> {
	static outlets = ['preview-iframe']

	declare previewIframeOutlets: ConsentPreviewIFrameController[]
	declare previewIframeOutlet: ConsentPreviewIFrameController

	connect() {
		this.element.addEventListener('change', () => {
			this.previewIframeOutlets.forEach((outlet) => {
				outlet.activateVariant(this.element.value)
			})
		})
	}
}
