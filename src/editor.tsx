import { TempstreamJSX } from 'tempstream'

export function editor(content: string, message = '') {
	return (
		<div
			id="editor-container"
			style=" display: flex; flex-flow: column;"
			class="editor"
		>
			<turbo-frame
				id="editor"
				class="editor__monaco"
				refresh="morph"
				style="flex-grow: 1"
			>
				<div
					data-monaco-preview-outlet="#preview"
					data-controller="monaco"
					style="height: 100%"
				>
					<div data-monaco-target="editor"></div>
					<textarea
						data-monaco-target="content"
						name="style"
						form="submit-style-form"
					>
						{content}
					</textarea>
				</div>
			</turbo-frame>
			<turbo-frame id="submit-form" refresh="morph">
				<div>{message}</div>
				<form method="POST" id="submit-style-form">
					<label>
						Your nickname: <input type="text" name="author" />
					</label>
					<label>
						Name for your design: <input type="text" name="name" />
					</label>
					<input type="submit" />
				</form>
			</turbo-frame>
		</div>
	)
}
