import { Controller } from '@hotwired/stimulus'
import type { CMPPreview } from './CMPPreview'

export class Resizer extends Controller<HTMLDivElement> {
	static outlets = ['preview']
	declare previewOutlet: CMPPreview

	connect() {
		this.element.addEventListener('mousedown', (e) => {
			e.preventDefault()

			const handleMove = (e: MouseEvent) => {
				const padding = 2 * 8
				const new_width = document.documentElement.clientWidth - e.x - padding
				document.body.style.setProperty('--preview-width', `${new_width}px`)
				document.body.classList.add('dragging')
				this.previewOutlet.setPointerActive(false)
			}

			const clearHandlers = (e: MouseEvent) => {
				document.removeEventListener('mousemove', handleMove)
				document.removeEventListener('mouseup', clearHandlers)
				this.previewOutlet.setPointerActive(true)
				document.body.classList.remove('dragging')
			}

			document.addEventListener('mousemove', handleMove)
			document.addEventListener('mouseup', clearHandlers)
		})
	}
}
