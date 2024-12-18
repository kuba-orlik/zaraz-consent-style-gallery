import { Controller } from '@hotwired/stimulus'
import type * as Monaco from 'monaco-editor'
import type { CMPPreview } from './CMPPreview.js'
import * as prettier from 'prettier/standalone'
import prettierPluginCSS from 'prettier/plugins/postcss'

export declare const require: any // this is the monaco loader's require function, not the UMD require
export declare const monaco: { editor: typeof Monaco.editor }

export class MonacoController extends Controller<HTMLDivElement> {
	static targets = ['content']
	static outlets = ['preview']

	declare contentTarget: HTMLTextAreaElement
	declare previewOutlet: CMPPreview

	editor: ReturnType<typeof Monaco.editor.create> | null = null

	async format(
		css: string,
		cursorOffset = 0,
	): Promise<{ css: string; cursorOffset: number }> {
		console.log(prettierPluginCSS)
		const { formatted: newCss, newCursorOffset } =
			await prettier.formatWithCursor(css, {
				cursorOffset: 2,
				parser: 'css',
				plugins: [prettierPluginCSS],
			})
		return { css: newCss, cursorOffset: newCursorOffset }
	}

	connect() {
		const content = this.contentTarget.textContent
		require.config({
			paths: { vs: `${document.location.origin}/dist/vs` },
		})
		this.contentTarget.style.setProperty('display', 'none')
		require(['vs/editor/editor.main'], async () => {
			this.editor = monaco.editor.create(this.element, {
				value: (await this.format(content || '')).css,
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
