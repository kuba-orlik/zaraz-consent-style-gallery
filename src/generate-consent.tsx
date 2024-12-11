import { TempstreamJSX } from 'tempstream'
import { defaultStyles } from './default-styles'
import { placeholder } from './front/placeholder-website'

export default function makeConsentModal(customStyle: string = '') {
	return (
		<>
			<script src="/dist/frame.js"></script>
			<div>{placeholder()}</div>
			<div class="cf_modal_container" id="shadowroot">
				<template shadowrootmode="open">
					{
						/* HTML */ `<style>
							@layer consent, gallery-ui;
							body {
								background-color: white;
							}

							.has-hover:hover:not(:has(*:hover)) {
								outline: 1px dashed blue;
							}

							dialog:not(:has(.has-hover)) {
								.css-path {
									opacity: 0;
								}
							}

							@layer gallery-ui {
								.css-path {
									position: absolute;

									left: 0;
									pointer-events: none;
									font-size: 10px;
									background-color: #002b36;
									padding: 8px 16px;
									border: 1px solid #000000;
									z-index: 99999999999999;
									box-shadow: 1px 1px 6px -1px #00000073;
									transition: all 100ms;
									& > * {
										color: #268bd2;
										font-family:
											Menlo,
											Consolas,
											Monaco,
											Liberation Mono,
											Lucida Console,
											monospace;
									}

									& > .class {
										color: #fdf6e3;
									}

									& > .element {
										color: hsl(68 100% 41% / 1);
										font-weight: bold;
									}

									& > .copied {
										color: hsl(102 69% 60% / 1);
									}

									&:not(:has(*)) {
										opacity: 0;
									}
								}
							}
						</style>`
					}
					<style>{`@layer consent { ${defaultStyles} }`}</style>
					<style id="customStyle">{`@layer consent {${customStyle}}`}</style>
					<dialog
						class="cf_modal"
						aria-modal="true"
						aria-labelledby="cf_modal_title"
					>
						<div class="css-path"></div>
						<div class="title_container">
							<h2 id="cf_modal_title">Cookie Settings</h2>
						</div>
						<p class="cf_consent-intro">
							This is our website and we use cookies on it. Read more in our{' '}
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
