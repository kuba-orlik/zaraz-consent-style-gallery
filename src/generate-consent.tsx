import { TempstreamJSX } from 'tempstream'
import { defaultStyles } from './default-styles'

export default function makeConsentModal(customStyle: string = '') {
	return (
		<>
			<style>{defaultStyles}</style>
			<style id="customStyle">{customStyle}</style>
			<script>
				{`window.onmessage = function(e) {
					const data = JSON.parse(e.data);
					if (data.type == 'new-style') {
	        	customStyle.innerHTML = data.style
					}
				};`}
			</script>
			<div>
				<p>{'Lorem ipsum ' + 'lorem ipsum '.repeat(1000)}</p>
			</div>
			<div class="cf_modal_container">
				<dialog
					class="cf_modal"
					aria-modal="true"
					aria-labelledby="cf_modal_title"
					open=""
				>
					<div class="title_container">
						<h2 id="cf_modal_title">Cookie Settings</h2>
					</div>
					<p class="cf_consent-intro">
						This is our website and we use cookies on it. Read more in our
						<a href="#">Privacy Policy</a>
					</p>
					<hr />
					<ul class="cf_consent-container">
						<li class="cf_consent-element">
							<div class="cf_consent-element__checkbox-wrapper">
								<input
									type="checkbox"
									data-purpose-id="uDLu"
									class="cf-checkbox"
									id="checkbox-0"
								/>
							</div>
							<label for="checkbox-0">
								<h3>Behavior analysis</h3>
								<p>
									Pomiar popularności elementów strony oraz jej intuicyjności.
								</p>
							</label>
						</li>
						<li class="cf_consent-element">
							<div class="cf_consent-element__checkbox-wrapper">
								<input
									type="checkbox"
									data-purpose-id="txkQ"
									class="cf-checkbox"
									id="checkbox-1"
								/>
							</div>
							<label for="checkbox-1">
								<h3>Traffic analysis</h3>
								<p>Checking which pages are the most popular</p>
							</label>
						</li>
					</ul>
					<div class="cf_consent-buttons">
						<button
							class="cf_button cf_button--accept"
							id="cf_consent-buttons__accept-all"
						>
							Accept All
						</button>
						<button
							class="cf_button cf_button--reject"
							id="cf_consent-buttons__reject-all"
						>
							Reject All
						</button>
						<button
							class="cf_button cf_button--save"
							id="cf_consent-buttons__save"
						>
							Confirm My Choices
						</button>
					</div>
				</dialog>
			</div>
		</>
	)
}
