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
				<dialog>
					<h3>Share your design</h3>
					<p>
						By sharing your design you confirm that you agree that it will be
						published on this website and used by others freely.
					</p>
					{message ? (
						<div class="message">
							{message}
							<script>
								document.querySelector('#submit-form dialog').showModal()
							</script>
						</div>
					) : (
						''
					)}
					<form method="POST" action="/submit" id="submit-style-form">
						<label>
							Your nickname:{' '}
							<input
								required
								type="text"
								name="author"
								placeholder="couscous_eater68"
							/>
						</label>
						<label>
							Name for your design:{' '}
							<input
								required
								type="text"
								name="name"
								placeholder="Blueberry blue"
							/>
						</label>
						<div>
							<button
								type="button"
								class="special-button"
								onclick="document.querySelector('#submit-form dialog').close()"
							>
								Close
							</button>
							<input type="submit" class="special-button" value="Submit" />
						</div>
					</form>
				</dialog>
			</turbo-frame>
		</div>
	)
}
