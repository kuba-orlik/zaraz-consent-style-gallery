import { Controller } from '@hotwired/stimulus'
import { ConsentPreviewIFrameController } from './consent-iframe.js'

export class PurposesAmountController extends Controller<HTMLButtonElement> {
	static outlets = ['preview-iframe']

	declare previewIframeOutlets: ConsentPreviewIFrameController[]
	declare previewIframeOutlet: ConsentPreviewIFrameController

	increment() {
		console.log('Sending to outlet!!', this.previewIframeOutlets)
		this.previewIframeOutlets.forEach((outlet) => {
			outlet.incrementPurposes()
		})
	}

	decrement() {
		this.previewIframeOutlets.forEach((outlet) => {
			outlet.decrementPurposes()
		})
	}
}
