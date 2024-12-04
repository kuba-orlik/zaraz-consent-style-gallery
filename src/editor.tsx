import { TempstreamJSX } from 'tempstream'

export function editor(content: string) {
	return (
		<div
			data-controller="monaco"
			data-monaco-preview-outlet="#preview"
			style="height: 100%;"
			class="editor"
		>
			<textarea data-monaco-target="content">{content}</textarea>
		</div>
	)
}
