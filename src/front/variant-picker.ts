import { Controller } from '@hotwired/stimulus'

export class VariantPickerController extends Controller<HTMLSelectElement> {
	static outlets = ['preview-iframe']

	declare previewIframeOutlets: ConsentPReviewIFrameController[]
	declare previewIframeOutlet: ConsentPReviewIFrameController

	connect() {
		this.element.addEventListener('change', () => {
			this.previewIframeOutlets.forEach((outlet) => {
				outlet.activateVariant(this.element.value)
			})
		})
	}
}
