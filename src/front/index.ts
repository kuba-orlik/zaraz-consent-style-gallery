import { Application } from '@hotwired/stimulus'
const application = Application.start()

import { Controller } from '@hotwired/stimulus'

import { Resizer } from './Resizer.js'
import { MonacoController } from './MonacoController.js'

export class CMPPreview extends Controller<HTMLIFrameElement> {
	setStyle(style: string) {
		this.element.contentWindow?.postMessage(
			JSON.stringify({ type: 'new-style', style }),
			'*',
		)
	}
}

application.register('monaco', MonacoController)
application.register('preview', CMPPreview)
application.register('resizer', Resizer)
