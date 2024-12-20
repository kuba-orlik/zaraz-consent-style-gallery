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
				{message ? <div class="message">{message}</div> : ''}
				<form method="POST" id="submit-style-form">
					<label>
						Your nickname:{' '}
						<input type="text" name="author" placeholder="couscous_eater68" />
					</label>
					<label>
						Name for your design:{' '}
						<input type="text" name="name" placeholder="Blueberry blue" />
					</label>
					<input type="submit" />
				</form>
			</turbo-frame>
		</div>
	)
}
