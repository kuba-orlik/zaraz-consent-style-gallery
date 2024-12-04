import { Application } from '@hotwired/stimulus'
const application = Application.start()

import { Controller } from '@hotwired/stimulus'

import type * as Monaco from 'monaco-editor'

declare const require: any // this is the monaco loader's require function, not the UMD require
declare const monaco: { editor: typeof Monaco.editor }

export class MonacoController extends Controller<HTMLDivElement> {
	static targets = ['content']
	static outlets = ['preview']

	declare contentTarget: HTMLTextAreaElement
	declare previewOutlet: CMPPreview

	editor: ReturnType<typeof Monaco.editor.create> | null = null

	connect() {
		require.config({
			paths: { vs: `${document.location.origin}/dist/vs` },
		})
		this.contentTarget.style.setProperty('display', 'none')
		require(['vs/editor/editor.main'], () => {
			this.editor = monaco.editor.create(this.element, {
				value: this.contentTarget.innerHTML,
				language: 'css',
				minimap: { enabled: false },
				glyphMargin: false,
				folding: false,
				lineNumbers: 'off',
				lineDecorationsWidth: 0,
				lineNumbersMinChars: 0,
			})
			this.editor.onDidChangeModelContent((event) => {
				const style = this.editor?.getValue() || ''
				this.contentTarget.innerHTML = style
				this.previewOutlet.setStyle(style)
				console.log('SENT CHANGE')
			})
		})
	}
}

export class CMPPreview extends Controller<HTMLIFrameElement> {
	setStyle(style: string) {
		this.element.contentWindow?.postMessage(
			JSON.stringify({ type: 'new-style', style }),
			'*',
		)
		console.log('posted message')
	}
}

application.register('monaco', MonacoController)
application.register('preview', CMPPreview)
