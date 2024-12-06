import { Controller } from '@hotwired/stimulus'
import type * as Monaco from 'monaco-editor'
import type { CMPPreview } from './index.js'

export declare const require: any // this is the monaco loader's require function, not the UMD require
export declare const monaco: { editor: typeof Monaco.editor }

export class MonacoController extends Controller<HTMLDivElement> {
	static targets = ['content']
	static outlets = ['preview']

	declare contentTarget: HTMLTextAreaElement
	declare previewOutlet: CMPPreview

	editor: ReturnType<typeof Monaco.editor.create> | null = null

	connect() {
		const content = this.contentTarget.innerHTML
		require.config({
			paths: { vs: `${document.location.origin}/dist/vs` },
		})
		this.contentTarget.style.setProperty('display', 'none')
		require(['vs/editor/editor.main'], () => {
			this.editor = monaco.editor.create(this.element, {
				value: content,
				language: 'css',
				minimap: { enabled: false },
				glyphMargin: false,
				folding: false,
				automaticLayout: true,
				lineNumbers: 'off',
				lineDecorationsWidth: 0,
				lineNumbersMinChars: 0,
			})
			this.editor.onDidChangeModelContent(() => {
				this.sendNewStyle()
			})
		})
		this.sendNewStyle()
	}

	sendNewStyle() {
		const style = this.editor?.getValue() || ''
		this.contentTarget.innerHTML = style
		console.log('SENT CHANGE')
		this.previewOutlet.setStyle(style)
	}
}
