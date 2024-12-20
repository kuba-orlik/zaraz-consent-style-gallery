import { Controller } from '@hotwired/stimulus'
import type * as Monaco from 'monaco-editor'
import type { CMPPreview } from './CMPPreview.js'
import * as prettier from 'prettier/standalone'
import prettierPluginCSS from 'prettier/plugins/postcss'

export declare const require: any // this is the monaco loader's require function, not the UMD require
export declare const monaco: { editor: typeof Monaco.editor }

export class MonacoController extends Controller<HTMLDivElement> {
	static targets = ['content', 'editor']
	static outlets = ['preview']

	declare contentTarget: HTMLTextAreaElement
	declare editorTarget: HTMLDivElement
	declare previewOutlet: CMPPreview

	private resizeObserver: ResizeObserver

	editor: ReturnType<typeof Monaco.editor.create> | null = null

	async format(
		css: string,
		cursorOffset = 0,
	): Promise<{ css: string; cursorOffset: number }> {
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
			this.editor = monaco.editor.create(this.editorTarget, {
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
			this.sendNewStyle()
		})
		this.resizeObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				this.editorTarget.style.setProperty(
					'height',
					`${this.element.closest('#editor-container').getBoundingClientRect().height - document.getElementById('submit-form').getBoundingClientRect().height - 16}px`,
				)
			}
		})

		this.resizeObserver.observe(document.getElementById('submit-form'))
	}

	sendNewStyle() {
		const style = this.editor?.getValue() || ''
		this.contentTarget.innerHTML = style
		this.previewOutlet.setStyle(style)
	}

	disconnect() {
		this.resizeObserver.unobserve(document.getElementById('submit-form'))
	}
}
