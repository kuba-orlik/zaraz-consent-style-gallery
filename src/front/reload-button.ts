import { Controller } from '@hotwired/stimulus'
import { ConsentPreviewIFrameController } from './consent-iframe.js'
import { VariantPickerController } from './variant-picker.js'

export class ReloadButton extends Controller<HTMLButtonElement> {
	static outlets = ['preview-iframe', 'variant-picker']

	declare previewIframeOutlets: ConsentPreviewIFrameController[]
	declare variantPickerOutlet: VariantPickerController

	reload() {
		this.previewIframeOutlets.forEach((outlet) => {
			console.log('activating')
			outlet.activateVariant(this.variantPickerOutlet.element.value)
		})
	}
}
