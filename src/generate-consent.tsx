import { TempstreamJSX } from 'tempstream'
import { defaultStyles } from './default-styles'
import { placeholder } from './front/placeholder-website'

export default function makeConsentModal(customStyle: string = '') {
	return (
		<>
			<style>{`body {background-color: white;}`}</style>
			<script>
				{`window.onmessage = function(e) {
				const data = JSON.parse(e.data);
				console.log("Received new data");
				if (data.type == 'new-style') {
				console.log(document.getElementById("shadowroot").shadowRoot);
	            document.getElementById("shadowroot").shadowRoot.querySelector("#customStyle").innerHTML = data.style
					}
				};`}
			</script>
			<div>
				<p>{placeholder()}</p>
			</div>
			<div class="cf_modal_container" id="shadowroot">
				<template shadowrootmode="open">
					<style>{defaultStyles}</style>
					<style id="customStyle">{customStyle}</style>
					<dialog
						class="cf_modal"
						aria-modal="true"
						aria-labelledby="cf_modal_title"
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
				</template>
				<script>
					document.getElementById("shadowroot").shadowRoot.querySelector("dialog").showModal()
				</script>
			</div>
		</>
	)
}
