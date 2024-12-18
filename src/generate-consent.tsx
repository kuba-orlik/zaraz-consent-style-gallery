import { TempstreamJSX } from 'tempstream'
import { defaultStyles } from './default-styles'
import { placeholder } from './front/placeholder-website'

function makeDialog(tcf: boolean, id: string) {
	if (tcf) {
		return (
			<dialog
				class="cf_modal"
				aria-modal="true"
				aria-labelledby="cf_modal_title"
				id={id}
			>
				<div class="css-path"></div>
				<div class="title_container">
					<h2 id="cf_modal_title">Cookie Settings</h2>
				</div>
				<div id="cf_modal_body" style="display: block;">
					<p class="cf_consent-intro">
						<strong>
							Some random <em>HTML</em> string
						</strong>
					</p>
					<hr />
					<ul class="cf_consent-container">
						<li class="cf_consent-element cf_consent-tcf-element">
							<label for="checkbox-0">
								<details>
									<summary>Remarketing</summary>
									<div>
										<p>you'll see ads of our service on other websites</p>
										<p></p>
										<details>
											<summary>1 partners</summary>
											<ul class="cf_consent-vendors-list cf_consent-compact">
												<li>
													<span>Seedtag Advertising S.L</span>
													<span class="cf_label">not IAB TCF</span>
												</li>
											</ul>
										</details>
									</div>
								</details>
							</label>
							<div>
								<input
									type="checkbox"
									data-purpose-id="8155"
									data-purpose-tcf-id="-"
									class="cf-checkbox"
									id="checkbox-0"
								/>
							</div>
						</li>
						<li class="cf_consent-element cf_consent-tcf-element">
							<label for="checkbox-1">
								<details>
									<summary>Store and/or access information on a device</summary>
									<div>
										<p>
											Cookies, device or similar online identifiers (e.g.
											login-based identifiers, randomly assigned identifiers,
											network based identifiers) together with other information
											(e.g. browser type and information, language, screen size,
											supported technologies etc.) can be stored or read on your
											device to recognise it each time it connects to an app or
											to a website, for one or several of the purposes presented
											here.
										</p>
										<p></p>
										<div class="cf_consent-illustrations">
											<h3>Examples:</h3>
											<ul class="cf_consent-compact">
												<li>
													Most purposes explained in this notice rely on the
													storage or accessing of information from your device
													when you use an app or visit a website. For example, a
													vendor or publisher might need to store a cookie on
													your device during your first visit on a website, to
													be able to recognise your device during your next
													visits (by accessing this cookie each time).
												</li>
											</ul>
										</div>
										<p></p>
										<details>
											<summary>5 partners</summary>
											<ul class="cf_consent-vendors-list cf_consent-compact">
												<li>
													<span>Google Advertising Products</span>
													<span class="cf_label">IAB TCF</span>
												</li>
												<li>
													<span>impact.com</span>
													<span class="cf_label">IAB TCF</span>
												</li>
												<li>
													<span>Tatari</span>
													<span class="cf_label">not IAB TCF</span>
												</li>
												<li>
													<span>Google Advertising Products</span>
													<span class="cf_label">IAB TCF</span>
												</li>
												<li>
													<span>impact.com</span>
													<span class="cf_label">IAB TCF</span>
												</li>
											</ul>
										</details>
									</div>
								</details>
							</label>
							<div>
								<input
									type="checkbox"
									data-purpose-id="2f3b"
									data-purpose-tcf-id="purposes-1"
									class="cf-checkbox"
									id="checkbox-1"
								/>
							</div>
						</li>
						<li class="cf_consent-element cf_consent-tcf-element">
							<label for="checkbox-2">
								<details>
									<summary>
										Create profiles for personalised advertising
									</summary>
									<div>
										<p>
											Information about your activity on this service (such as
											forms you submit, content you look at) can be stored and
											combined with other information about you (for example,
											information from your previous activity on this service
											and other websites or apps) or similar users. This is then
											used to build or improve a profile about you (that might
											include possible interests and personal aspects). Your
											profile can be used (also later) to present advertising
											that appears more relevant based on your possible
											interests by this and other entities.
										</p>
										<p></p>
										<div class="cf_consent-illustrations">
											<h3>Examples:</h3>
											<ul class="cf_consent-compact">
												<li>
													If you read several articles about the best bike
													accessories to buy, this information could be used to
													create a profile about your interest in bike
													accessories. Such a profile may be used or improved
													later on, on the same or a different website or app to
													present you with advertising for a particular bike
													accessory brand. If you also look at a configurator
													for a vehicle on a luxury car manufacturer website,
													this information could be combined with your interest
													in bikes to refine your profile and make an assumption
													that you are interested in luxury cycling gear.
												</li>
												<li>
													An apparel company wishes to promote its new line of
													high-end baby clothes. It gets in touch with an agency
													that has a network of clients with high income
													customers (such as high-end supermarkets) and asks the
													agency to create profiles of young parents or couples
													who can be assumed to be wealthy and to have a new
													child, so that these can later be used to present
													advertising within partner apps based on those
													profiles.
												</li>
											</ul>
										</div>
										<p></p>
										<details>
											<summary>2 partners</summary>
											<ul class="cf_consent-vendors-list cf_consent-compact">
												<li>
													<span>Google Advertising Products</span>
													<span class="cf_label">IAB TCF</span>
												</li>
												<li>
													<span>impact.com</span>
													<span class="cf_label">IAB TCF</span>
												</li>
											</ul>
										</details>
									</div>
								</details>
							</label>
							<div>
								<input
									type="checkbox"
									data-purpose-id="tcf-purposes-3"
									data-purpose-tcf-id="purposes-3"
									class="cf-checkbox"
									id="checkbox-2"
								/>
							</div>
						</li>
						<li class="cf_consent-element cf_consent-tcf-element">
							<label for="checkbox-3">
								<details>
									<summary>
										Use profiles to select personalised advertising
									</summary>
									<div>
										<p>
											Advertising presented to you on this service can be based
											on your advertising profiles, which can reflect your
											activity on this service or other websites or apps (like
											the forms you submit, content you look at), possible
											interests and personal aspects.
										</p>
										<p></p>
										<div class="cf_consent-illustrations">
											<h3>Examples:</h3>
											<ul class="cf_consent-compact">
												<li>
													An online retailer wants to advertise a limited sale
													on running shoes. It wants to target advertising to
													users who previously looked at running shoes on its
													mobile app. Tracking technologies might be used to
													recognise that you have previously used the mobile app
													to consult running shoes, in order to present you with
													the corresponding advertisement on the app.
												</li>
												<li>
													A profile created for personalised advertising in
													relation to a person having searched for bike
													accessories on a website can be used to present the
													relevant advertisement for bike accessories on a
													mobile app of another organisation.
												</li>
											</ul>
										</div>
										<p></p>
										<details>
											<summary>2 partners</summary>
											<ul class="cf_consent-vendors-list cf_consent-compact">
												<li>
													<span>Google Advertising Products</span>
													<span class="cf_label">IAB TCF</span>
												</li>
												<li>
													<span>impact.com</span>
													<span class="cf_label">IAB TCF</span>
												</li>
											</ul>
										</details>
									</div>
								</details>
							</label>
							<div>
								<input
									type="checkbox"
									data-purpose-id="tcf-purposes-4"
									data-purpose-tcf-id="purposes-4"
									class="cf-checkbox"
									id="checkbox-3"
								/>
							</div>
						</li>
						<li class="cf_consent-element cf_consent-tcf-element">
							<label for="checkbox-4">
								<details>
									<summary>Use limited data to select advertising</summary>
									<div>
										<p>
											Advertising presented to you on this service can be based
											on limited data, such as the website or app you are using,
											your non-precise location, your device type or which
											content you are (or have been) interacting with (for
											example, to limit the number of times an ad is presented
											to you).
										</p>
										<p></p>
										<div class="cf_consent-illustrations">
											<h3>Examples:</h3>
											<ul class="cf_consent-compact">
												<li>
													A car manufacturer wants to promote its electric
													vehicles to environmentally conscious users living in
													the city after office hours. The advertising is
													presented on a page with related content (such as an
													article on climate change actions) after 6:30 p.m. to
													users whose non-precise location suggests that they
													are in an urban zone.
												</li>
												<li>
													A large producer of watercolour paints wants to carry
													out an online advertising campaign for its latest
													watercolour range, diversifying its audience to reach
													as many amateur and professional artists as possible
													and avoiding showing the ad next to mismatched content
													(for instance, articles about how to paint your
													house). The number of times that the ad has been
													presented to you is detected and limited, to avoid
													presenting it too often.
												</li>
											</ul>
										</div>
										<p></p>
										<details>
											<summary>2 partners</summary>
											<ul class="cf_consent-vendors-list cf_consent-compact">
												<li>
													<span>Google Advertising Products</span>
													<span class="cf_label">IAB TCF</span>
												</li>
												<li>
													<span>impact.com</span>
													<span class="cf_label">IAB TCF</span>
												</li>
											</ul>
										</details>
									</div>
								</details>
							</label>
							<div>
								<input
									type="checkbox"
									data-purpose-id="tcf-purposes-2"
									data-purpose-tcf-id="purposes-2"
									class="cf-checkbox"
									id="checkbox-4"
								/>
							</div>
						</li>
						<li class="cf_consent-element cf_consent-tcf-element">
							<label for="checkbox-5">
								<details>
									<summary>Measure advertising performance</summary>
									<div>
										<p>
											Information regarding which advertising is presented to
											you and how you interact with it can be used to determine
											how well an advert has worked for you or other users and
											whether the goals of the advertising were reached. For
											instance, whether you saw an ad, whether you clicked on
											it, whether it led you to buy a product or visit a
											website, etc. This is very helpful to understand the
											relevance of advertising campaigns.
										</p>
										<p></p>
										<div class="cf_consent-illustrations">
											<h3>Examples:</h3>
											<ul class="cf_consent-compact">
												<li>
													You have clicked on an advertisement about a “black
													Friday” discount by an online shop on the website of a
													publisher and purchased a product. Your click will be
													linked to this purchase. Your interaction and that of
													other users will be measured to know how many clicks
													on the ad led to a purchase.
												</li>
												<li>
													You are one of very few to have clicked on an
													advertisement about an “international appreciation
													day” discount by an online gift shop within the app of
													a publisher. The publisher wants to have reports to
													understand how often a specific ad placement within
													the app, and notably the “international appreciation
													day” ad, has been viewed or clicked by you and other
													users, in order to help the publisher and its partners
													(such as agencies) optimise ad placements.
												</li>
											</ul>
										</div>
										<p></p>
										<details>
											<summary>2 partners</summary>
											<ul class="cf_consent-vendors-list cf_consent-compact">
												<li>
													<span>Google Advertising Products</span>
													<span class="cf_label">IAB TCF</span>
												</li>
												<li>
													<span>impact.com</span>
													<span class="cf_label">IAB TCF</span>
												</li>
											</ul>
										</details>
									</div>
								</details>
							</label>
							<div>
								<input
									type="checkbox"
									data-purpose-id="tcf-purposes-7"
									data-purpose-tcf-id="purposes-7"
									class="cf-checkbox"
									id="checkbox-5"
								/>
							</div>
						</li>
						<li class="cf_consent-element cf_consent-tcf-element">
							<label for="checkbox-6">
								<details>
									<summary>
										Understand audiences through statistics or combinations of
										data from different sources
									</summary>
									<div>
										<p>
											Reports can be generated based on the combination of data
											sets (like user profiles, statistics, market research,
											analytics data) regarding your interactions and those of
											other users with advertising or (non-advertising) content
											to identify common characteristics (for instance, to
											determine which target audiences are more receptive to an
											ad campaign or to certain contents).
										</p>
										<p></p>
										<div class="cf_consent-illustrations">
											<h3>Examples:</h3>
											<ul class="cf_consent-compact">
												<li>
													The owner of an online bookstore wants commercial
													reporting showing the proportion of visitors who
													consulted and left its site without buying, or
													consulted and bought the last celebrity autobiography
													of the month, as well as the average age and the
													male/female distribution of each category. Data
													relating to your navigation on its site and to your
													personal characteristics is then used and combined
													with other such data to produce these statistics.
												</li>
												<li>
													An advertiser wants to better understand the type of
													audience interacting with its adverts. It calls upon a
													research institute to compare the characteristics of
													users who interacted with the ad with typical
													attributes of users of similar platforms, across
													different devices. This comparison reveals to the
													advertiser that its ad audience is mainly accessing
													the adverts through mobile devices and is likely in
													the 45-60 age range.
												</li>
											</ul>
										</div>
										<p></p>
										<details>
											<summary>1 partners</summary>
											<ul class="cf_consent-vendors-list cf_consent-compact">
												<li>
													<span>Google Advertising Products</span>
													<span class="cf_label">IAB TCF</span>
												</li>
											</ul>
										</details>
									</div>
								</details>
							</label>
							<div>
								<input
									type="checkbox"
									data-purpose-id="tcf-purposes-9"
									data-purpose-tcf-id="purposes-9"
									class="cf-checkbox"
									id="checkbox-6"
								/>
							</div>
						</li>
						<li class="cf_consent-element cf_consent-tcf-element">
							<label for="checkbox-7">
								<details open="">
									<summary>Develop and improve services</summary>
									<div>
										<p>
											Information about your activity on this service, such as
											your interaction with ads or content, can be very helpful
											to improve products and services and to build new products
											and services based on user interactions, the type of
											audience, etc. This specific purpose does not include the
											development or improvement of user profiles and
											identifiers.
										</p>
										<p></p>
										<div class="cf_consent-illustrations">
											<h3>Examples:</h3>
											<ul class="cf_consent-compact">
												<li>
													A technology platform working with a social media
													provider notices a growth in mobile app users, and
													sees based on their profiles that many of them are
													connecting through mobile connections. It uses a new
													technology to deliver ads that are formatted for
													mobile devices and that are low-bandwidth, to improve
													their performance.
												</li>
												<li>
													An advertiser is looking for a way to display ads on a
													new type of consumer device. It collects information
													regarding the way users interact with this new kind of
													device to determine whether it can build a new
													mechanism for displaying advertising on this type of
													device.
												</li>
											</ul>
										</div>
										<p></p>
										<details>
											<summary>1 partners</summary>
											<ul class="cf_consent-vendors-list cf_consent-compact">
												<li>
													<span>Google Advertising Products</span>
													<span class="cf_label">IAB TCF</span>
												</li>
											</ul>
										</details>
									</div>
								</details>
							</label>
							<div>
								<input
									type="checkbox"
									data-purpose-id="tcf-purposes-10"
									data-purpose-tcf-id="purposes-10"
									class="cf-checkbox"
									id="checkbox-7"
								/>
							</div>
						</li>
						<li class="cf_consent-element cf_consent-tcf-element">
							<label for="checkbox-8">
								<details>
									<summary>Create profiles to personalise content</summary>
									<div>
										<p>
											Information about your activity on this service (for
											instance, forms you submit, non-advertising content you
											look at) can be stored and combined with other information
											about you (such as your previous activity on this service
											or other websites or apps) or similar users. This is then
											used to build or improve a profile about you (which might
											for example include possible interests and personal
											aspects). Your profile can be used (also later) to present
											content that appears more relevant based on your possible
											interests, such as by adapting the order in which content
											is shown to you, so that it is even easier for you to find
											content that matches your interests.
										</p>
										<p></p>
										<div class="cf_consent-illustrations">
											<h3>Examples:</h3>
											<ul class="cf_consent-compact">
												<li>
													You read several articles on how to build a treehouse
													on a social media platform. This information might be
													added to a profile to mark your interest in content
													related to outdoors as well as do-it-yourself guides
													(with the objective of allowing the personalisation of
													content, so that for example you are presented with
													more blog posts and articles on treehouses and wood
													cabins in the future).
												</li>
												<li>
													You have viewed three videos on space exploration
													across different TV apps. An unrelated news platform
													with which you have had no contact builds a profile
													based on that viewing behaviour, marking space
													exploration as a topic of possible interest for other
													videos.
												</li>
											</ul>
										</div>
										<p></p>
										<details>
											<summary>1 partners</summary>
											<ul class="cf_consent-vendors-list cf_consent-compact">
												<li>
													<span>impact.com</span>
													<span class="cf_label">IAB TCF</span>
												</li>
											</ul>
										</details>
									</div>
								</details>
							</label>
							<div>
								<input
									type="checkbox"
									data-purpose-id="tcf-purposes-5"
									data-purpose-tcf-id="purposes-5"
									class="cf-checkbox"
									id="checkbox-8"
								/>
							</div>
						</li>
						<li class="cf_consent-element cf_consent-tcf-element">
							<label for="checkbox-9">
								<details>
									<summary>Use profiles to select personalised content</summary>
									<div>
										<p>
											Content presented to you on this service can be based on
											your content personalisation profiles, which can reflect
											your activity on this or other services (for instance, the
											forms you submit, content you look at), possible interests
											and personal aspects. This can for example be used to
											adapt the order in which content is shown to you, so that
											it is even easier for you to find (non-advertising)
											content that matches your interests.
										</p>
										<p></p>
										<div class="cf_consent-illustrations">
											<h3>Examples:</h3>
											<ul class="cf_consent-compact">
												<li>
													You read articles on vegetarian food on a social media
													platform and then use the cooking app of an unrelated
													company. The profile built about you on the social
													media platform will be used to present you vegetarian
													recipes on the welcome screen of the cooking app.
												</li>
												<li>
													You have viewed three videos about rowing across
													different websites. An unrelated video sharing
													platform will recommend five other videos on rowing
													that may be of interest to you when you use your TV
													app, based on a profile built about you when you
													visited those different websites to watch online
													videos.
												</li>
											</ul>
										</div>
										<p></p>
										<details>
											<summary>1 partners</summary>
											<ul class="cf_consent-vendors-list cf_consent-compact">
												<li>
													<span>impact.com</span>
													<span class="cf_label">IAB TCF</span>
												</li>
											</ul>
										</details>
									</div>
								</details>
							</label>
							<div>
								<input
									type="checkbox"
									data-purpose-id="tcf-purposes-6"
									data-purpose-tcf-id="purposes-6"
									class="cf-checkbox"
									id="checkbox-9"
								/>
							</div>
						</li>
						<li class="cf_consent-element cf_consent-tcf-element">
							<label for="checkbox-10">
								<details open="">
									<summary>Use limited data to select content</summary>
									<div>
										<p>
											Content presented to you on this service can be based on
											limited data, such as the website or app you are using,
											your non-precise location, your device type, or which
											content you are (or have been) interacting with (for
											example, to limit the number of times a video or an
											article is presented to you).
										</p>
										<p></p>
										<div class="cf_consent-illustrations">
											<h3>Examples:</h3>
											<ul class="cf_consent-compact">
												<li>
													A travel magazine has published an article on its
													website about the new online courses proposed by a
													language school, to improve travelling experiences
													abroad. The school’s blog posts are inserted directly
													at the bottom of the page, and selected on the basis
													of your non-precise location (for instance, blog posts
													explaining the course curriculum for different
													languages than the language of the country you are
													situated in).
												</li>
												<li>
													A sports news mobile app has started a new section of
													articles covering the most recent football games. Each
													article includes videos hosted by a separate streaming
													platform showcasing the highlights of each match. If
													you fast-forward a video, this information may be used
													to select a shorter video to play next.
												</li>
											</ul>
										</div>
										<p></p>
										<details>
											<summary>1 partners</summary>
											<ul class="cf_consent-vendors-list cf_consent-compact">
												<li>
													<span>impact.com</span>
													<span class="cf_label">IAB TCF</span>
												</li>
											</ul>
										</details>
									</div>
								</details>
							</label>
							<div>
								<input
									type="checkbox"
									data-purpose-id="tcf-purposes-11"
									data-purpose-tcf-id="purposes-11"
									class="cf-checkbox"
									id="checkbox-10"
								/>
							</div>
						</li>
						<li class="cf_consent-element cf_consent-tcf-element">
							<label for="checkbox-11">
								<details>
									<summary>Measure content performance</summary>
									<div>
										<p>
											Information regarding which content is presented to you
											and how you interact with it can be used to determine
											whether the (non-advertising) content e.g. reached its
											intended audience and matched your interests. For
											instance, whether you read an article, watch a video,
											listen to a podcast or look at a product description, how
											long you spent on this service and the web pages you visit
											etc. This is very helpful to understand the relevance of
											(non-advertising) content that is shown to you.{' '}
										</p>
										<p></p>
										<div class="cf_consent-illustrations">
											<h3>Examples:</h3>
											<ul class="cf_consent-compact">
												<li>
													You have read a blog post about hiking on a mobile app
													of a publisher and followed a link to a recommended
													and related post. Your interactions will be recorded
													as showing that the initial hiking post was useful to
													you and that it was successful in interesting you in
													the related post. This will be measured to know
													whether to produce more posts on hiking in the future
													and where to place them on the home screen of the
													mobile app.
												</li>
												<li>
													You were presented a video on fashion trends, but you
													and several other users stopped watching after 30
													seconds. This information is then used to evaluate the
													right length of future videos on fashion trends.
												</li>
											</ul>
										</div>
										<p></p>
										<details>
											<summary>1 partners</summary>
											<ul class="cf_consent-vendors-list cf_consent-compact">
												<li>
													<span>impact.com</span>
													<span class="cf_label">IAB TCF</span>
												</li>
											</ul>
										</details>
									</div>
								</details>
							</label>
							<div>
								<input
									type="checkbox"
									data-purpose-id="tcf-purposes-8"
									data-purpose-tcf-id="purposes-8"
									class="cf-checkbox"
									id="checkbox-11"
								/>
							</div>
						</li>
					</ul>
					<button
						id="cf_consent-buttons__view-partners"
						class="cf_consent-vendorlist-button"
					>
						View bla bla (4)
					</button>
				</div>
				<div id="cf_modal_vendors" style="display: none;">
					<button
						id="cf_consent-buttons__hide-partners"
						class="cf_consent-vendorlist-button"
					>
						←
					</button>
					<ul class="cf_consent-container">
						<li class="cf_consent-element cf_consent-tcf-element">
							<label for="vendor-checkbox-0">
								<details>
									<summary>
										Google Advertising Products
										<span class="cf_label">IAB TCF</span>
									</summary>
									<div>
										<details data-show="Purposes">
											<summary>Purposes</summary>
											<ul class="cf_consent-compact cf_consent-vendors-list">
												<li>
													<span>
														Store and/or access information on a device
													</span>
													<span>Retention time: 548 days</span>
												</li>
												<li>
													<span>
														Create profiles for personalised advertising
													</span>
													<span>Retention time: 180 days</span>
												</li>
												<li>
													<span>
														Use profiles to select personalised advertising
													</span>
													<span>Retention time: 180 days</span>
												</li>
												<li>
													<span>Use limited data to select advertising</span>
													<span>Retention time: 548 days</span>
												</li>
												<li>
													<span>Measure advertising performance</span>
													<span>Retention time: 548 days</span>
												</li>
												<li>
													<span>
														Understand audiences through statistics or
														combinations of data from different sources
													</span>
													<span>Retention time: 548 days</span>
												</li>
												<li>
													<span>Develop and improve services</span>
													<span>Retention time: 548 days</span>
												</li>
											</ul>
										</details>
										<details data-show="Special purposes" open="">
											<summary>Special purposes</summary>
											<ul class="cf_consent-compact cf_consent-vendors-list">
												<li>
													<span>
														Ensure security, prevent and detect fraud, and fix
														errors
													</span>
													<span>Retention time: 1096 days</span>
												</li>
												<li>
													<span>
														Deliver and present advertising and content
													</span>
													<span>Retention time: 548 days</span>
												</li>
											</ul>
										</details>
										<details data-show="Features" open="">
											<summary>Features</summary>
											<ul class="cf_consent-compact cf_consent-vendors-list">
												<li>
													<span>
														Match and combine data from other data sources
													</span>
													<span></span>
												</li>
												<li>
													<span>Link different devices</span>
													<span></span>
												</li>
											</ul>
										</details>
										<details data-show="">
											<summary></summary>
											<ul class="cf_consent-compact cf_consent-vendors-list"></ul>
										</details>
										<details data-show="Data categories" open="">
											<summary>Data categories</summary>
											<ul class="cf_consent-compact cf_consent-vendors-list">
												<li>IP addresses</li>
												<li>Device characteristics</li>
												<li>Device identifiers</li>
												<li>Authentication-derived identifiers</li>
												<li>Browsing and interaction data</li>
												<li>User-provided data</li>
												<li>Non-precise location data</li>
												<li>Users’ profiles</li>
												<li>Privacy choices</li>
											</ul>
										</details>
										<details data-show="Device storage" open="">
											<summary>Device storage</summary>
											<ul class="cf_consent-compact cf_consent-vendors-list">
												<li>
													<details>
														<summary>cfz_google-analytics_v4</summary>
														<div>
															<p>
																Maximum storage duration:
																zaraz.consent_manager.duration.cfz_
															</p>
															<p>
																Purposes: Store and/or access information on a
																device, Create profiles for personalised
																advertising, Use profiles to select personalised
																advertising, Use limited data to select
																advertising, Measure advertising performance,
																Understand audiences through statistics or
																combinations of data from different sources,
																Develop and improve services
															</p>
														</div>
													</details>
												</li>
											</ul>
										</details>
										<div>
											<a
												href="https://business.safety.google/privacy/"
												target="_blank"
											>
												Read Privacy Policy
											</a>
										</div>
										<div>
											<a
												href="https://policies.google.com/privacy#europeanrequirements"
												target="_blank"
											>
												Read Legitimate Interest Claim
											</a>
										</div>
									</div>
								</details>
							</label>
							<div>
								<input
									type="checkbox"
									data-vendor-id="755"
									class="cf-checkbox"
									id="vendor-checkbox-0"
									$checked=""
								/>
							</div>
						</li>
						<li class="cf_consent-element cf_consent-tcf-element">
							<label for="vendor-checkbox-1">
								<details open="">
									<summary>
										impact.com<span class="cf_label">IAB TCF</span>
									</summary>
									<div>
										<details data-show="Purposes">
											<summary>Purposes</summary>
											<ul class="cf_consent-compact cf_consent-vendors-list">
												<li>
													<span>
														Store and/or access information on a device
													</span>
													<span>Retention time: 365 days</span>
												</li>
												<li>
													<span>
														Create profiles for personalised advertising
													</span>
													<span>Retention time: 365 days</span>
												</li>
												<li>
													<span>
														Use profiles to select personalised advertising
													</span>
													<span>Retention time: 365 days</span>
												</li>
												<li>
													<span>Use limited data to select advertising</span>
													<span>Retention time: 365 days</span>
												</li>
												<li>
													<span>Measure advertising performance</span>
													<span>Retention time: 365 days</span>
												</li>
												<li>
													<span>Create profiles to personalise content</span>
													<span>Retention time: 365 days</span>
												</li>
												<li>
													<span>
														Use profiles to select personalised content
													</span>
													<span>Retention time: 365 days</span>
												</li>
												<li>
													<span>Use limited data to select content</span>
													<span>Retention time: 365 days</span>
												</li>
												<li>
													<span>Measure content performance</span>
													<span>Retention time: 365 days</span>
												</li>
											</ul>
										</details>
										<details data-show="Special purposes">
											<summary>Special purposes</summary>
											<ul class="cf_consent-compact cf_consent-vendors-list">
												<li>
													<span>
														Ensure security, prevent and detect fraud, and fix
														errors
													</span>
													<span>Retention time: 365 days</span>
												</li>
												<li>
													<span>
														Deliver and present advertising and content
													</span>
													<span>Retention time: 365 days</span>
												</li>
											</ul>
										</details>
										<details data-show="Features">
											<summary>Features</summary>
											<ul class="cf_consent-compact cf_consent-vendors-list">
												<li>
													<span>
														Match and combine data from other data sources
													</span>
													<span></span>
												</li>
												<li>
													<span>
														Identify devices based on information transmitted
														automatically
													</span>
													<span></span>
												</li>
											</ul>
										</details>
										<details data-show="">
											<summary></summary>
											<ul class="cf_consent-compact cf_consent-vendors-list"></ul>
										</details>
										<details data-show="Data categories">
											<summary>Data categories</summary>
											<ul class="cf_consent-compact cf_consent-vendors-list">
												<li>IP addresses</li>
												<li>Device characteristics</li>
												<li>Device identifiers</li>
												<li>Browsing and interaction data</li>
											</ul>
										</details>
										<details data-show="Device storage">
											<summary>Device storage</summary>
											<ul class="cf_consent-compact cf_consent-vendors-list">
												<li>
													<details>
														<summary>cfz_impact-radius</summary>
														<div>
															<p>
																Maximum storage duration:
																zaraz.consent_manager.duration.cfz_
															</p>
															<p>
																Purposes: Store and/or access information on a
																device, Create profiles for personalised
																advertising, Use profiles to select personalised
																advertising, Use limited data to select
																advertising, Measure advertising performance,
																Create profiles to personalise content, Use
																profiles to select personalised content, Use
																limited data to select content, Measure content
																performance
															</p>
														</div>
													</details>
												</li>
											</ul>
										</details>
										<div>
											<a
												href="https://www.engageya.com/privacy"
												target="_blank"
											>
												Read Privacy Policy
											</a>
										</div>
										<div>
											<a
												href="https://www.engageya.com/privacy"
												target="_blank"
											>
												Read Legitimate Interest Claim
											</a>
										</div>
									</div>
								</details>
							</label>
							<div>
								<input
									type="checkbox"
									data-vendor-id="721"
									class="cf-checkbox"
									id="vendor-checkbox-1"
									$checked=""
								/>
							</div>
						</li>
						<li class="cf_consent-element cf_consent-tcf-element">
							<label for="vendor-checkbox-2">
								<details open="">
									<summary>
										Seedtag Advertising S.L
										<span class="cf_label">not IAB TCF</span>
									</summary>
									<div>
										<details data-show="Purposes">
											<summary>Purposes</summary>
											<ul class="cf_consent-compact cf_consent-vendors-list">
												<li>
													<span>Remarketing</span>
													<span></span>
												</li>
											</ul>
										</details>
										<details data-show="">
											<summary></summary>
											<ul class="cf_consent-compact cf_consent-vendors-list"></ul>
										</details>
										<details data-show="">
											<summary></summary>
											<ul class="cf_consent-compact cf_consent-vendors-list"></ul>
										</details>
										<details data-show="">
											<summary></summary>
											<ul class="cf_consent-compact cf_consent-vendors-list"></ul>
										</details>
										<details data-show="">
											<summary></summary>
											<ul class="cf_consent-compact cf_consent-vendors-list"></ul>
										</details>
										<details data-show="">
											<summary></summary>
											<ul class="cf_consent-compact cf_consent-vendors-list"></ul>
										</details>
										<div>
											<a href="https://google.com" target="_blank">
												Read Privacy Policy
											</a>
										</div>
										<div>
											<a href="" target="_blank"></a>
										</div>
									</div>
								</details>
							</label>
							<div>
								<input
									type="checkbox"
									data-vendor-id="nonTcf-Seedtag Advertising S.L"
									class="cf-checkbox"
									id="vendor-checkbox-2"
									$checked=""
								/>
							</div>
						</li>
						<li class="cf_consent-element cf_consent-tcf-element">
							<label for="vendor-checkbox-3">
								<details open="">
									<summary>
										Tatari<span class="cf_label">not IAB TCF</span>
									</summary>
									<div>
										<details data-show="Purposes">
											<summary>Purposes</summary>
											<ul class="cf_consent-compact cf_consent-vendors-list">
												<li>
													<span>
														Store and/or access information on a device
													</span>
													<span></span>
												</li>
											</ul>
										</details>
										<details data-show="">
											<summary></summary>
											<ul class="cf_consent-compact cf_consent-vendors-list"></ul>
										</details>
										<details data-show="">
											<summary></summary>
											<ul class="cf_consent-compact cf_consent-vendors-list"></ul>
										</details>
										<details data-show="">
											<summary></summary>
											<ul class="cf_consent-compact cf_consent-vendors-list"></ul>
										</details>
										<details data-show="">
											<summary></summary>
											<ul class="cf_consent-compact cf_consent-vendors-list"></ul>
										</details>
										<details data-show="Device storage">
											<summary>Device storage</summary>
											<ul class="cf_consent-compact cf_consent-vendors-list">
												<li>
													<details>
														<summary>cfz_tatari</summary>
														<div>
															<p>
																Maximum storage duration:
																zaraz.consent_manager.duration.cfz_
															</p>
															<p>
																Purposes: Store and/or access information on a
																device
															</p>
														</div>
													</details>
												</li>
											</ul>
										</details>
										<div>
											<a
												href="https://www.tatari.tv/privacy-policy"
												target="_blank"
											>
												Read Privacy Policy
											</a>
										</div>
										<div>
											<a href="" target="_blank"></a>
										</div>
									</div>
								</details>
							</label>
							<div>
								<input
									type="checkbox"
									data-vendor-id="nonTcf-Tatari"
									class="cf-checkbox"
									id="vendor-checkbox-3"
									$checked=""
								/>
							</div>
						</li>
					</ul>
				</div>
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
						Confirm my choices
					</button>
				</div>
			</dialog>
		)
	}
	return (
		<dialog
			class="cf_modal"
			aria-modal="true"
			aria-labelledby="cf_modal_title"
			id={id}
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
							checked
						/>
					</div>
					<label for="checkbox-0">
						<h3>Behavior analysis</h3>
						<p>Pomiar popularności elementów strony oraz jej intuicyjności.</p>
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
				<button class="cf_button cf_button--save" id="cf_consent-buttons__save">
					Confirm My Choices
				</button>
			</div>
		</dialog>
	)
}

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

							dialog:not(:has(.has-hover)):not(.has-hover) {
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

									.content {
										display: inline-block;

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

										&:not(:has(*)) {
											opacity: 0;
										}
									}

									.copied {
										color: hsl(102 69% 60% / 1);
									}
								}
							}
						</style>`
					}
					{defaultStyles}
					<style id="customStyle">{`@layer consent {${customStyle}}`}</style>
					{makeDialog(false, 'dialog--regular')}
					{makeDialog(true, 'dialog--tcf')}
				</template>
				<script>
					document.getElementById("shadowroot").shadowRoot.querySelector("#dialog--regular").showModal();
				</script>
			</div>
		</>
	)
}
