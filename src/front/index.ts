import { Application } from '@hotwired/stimulus'
const application = Application.start()

import { Resizer } from './Resizer.js'
import { MonacoController } from './MonacoController.js'
import { CMPPreview } from './CMPPreview.js'

application.register('monaco', MonacoController)
application.register('preview', CMPPreview)
application.register('resizer', Resizer)
