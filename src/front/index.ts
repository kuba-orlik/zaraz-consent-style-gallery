import { Application } from '@hotwired/stimulus'
const application = Application.start()

import { Resizer } from './Resizer.js'
import { MonacoController } from './MonacoController.js'
import { CMPPreview } from './CMPPreview.js'
import { ConsentPreviewIFrameController } from './consent-iframe.js'
import { VariantPickerController } from './variant-picker.js'

application.register('monaco', MonacoController)
application.register('preview', CMPPreview)
application.register('resizer', Resizer)
application.register('preview-iframe', ConsentPreviewIFrameController)
application.register('variant-picker', VariantPickerController)

window.addEventListener('load', () => {
	console.log('setup listener')
	document.body.addEventListener('turbo:before-render', console.log)
})
