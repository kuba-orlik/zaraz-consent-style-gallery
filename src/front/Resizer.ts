import { Controller } from '@hotwired/stimulus'

export class Resizer extends Controller<HTMLDivElement> {
	connect() {
		this.element.addEventListener('mousedown', (e) => {
			e.preventDefault()

			function handleMove(e: MouseEvent) {
				console.log('move!')
				const padding = 2 * 8
				const new_width = document.documentElement.clientWidth - e.x - padding
				document.body.style.setProperty('--preview-width', `${new_width}px`)
				document.body.classList.add('dragging')
				console.log(document.body.style)
			}

			function clearHandlers(e: MouseEvent) {
				document.removeEventListener('mousemove', handleMove)
				document.removeEventListener('mouseup', clearHandlers)
				document.body.classList.remove('dragging')
			}

			document.addEventListener('mousemove', handleMove)
			document.addEventListener('mouseup', clearHandlers)
		})
	}
}
