

const tagHtml = `fd924-cookie-cosent`;
const tempHtml = 
`
<div class=${tagHtml}>
	<div class="fd924-model-cookie">
		<div class="fd924-model-content">
			<div class="fd924-model-header">
				<div class="fd924-model-logo">Logo</div>
				<div class="fd924-model-icon-x">X</div>
			</div>
			<div class="fd924-model-body" >
				<div class="fd924-purpose-box-title">
					<p> Manage Consent Preferences</p>
				</div>
				<div class="fd924-purpose-box-list">
					<div class="fd924-purpose-box-item">
						<div class="fd924-purpose-left-box">
							<div class="fd924-explad">+</div>
							<div class="fd924-tilte">test</div>
						</div>
						<div class="fd924-purpose-right-box">
              <label class="fd924-switch">
								<input type="checkbox">
								<span class="fd924-slider round"></span>
							</label>

						</div>
					</div>
				</div>
			</div>
				<div class="fd924-model-footer">
					<div class="fd924-footer-btn">
						<button class="fd924-btn fd924-btn-left ">Reject All</button>
						<button class="fd924-btn fd924-btn-right">Confirm My Choices</button>
					</div>
					<div class="fd924-box-powered-by">
						<a>
							Powered by <span class="fd924-powerd-by">Test<span>
						</a>
					</div>
				</div>
		</div>
	</div>
	<div class="fd924-bg-overly"></div>
</div>
`


class CookieCosent extends HTMLElement {
	connectedCallback() {
		this.innerHTML = tempHtml;


		this.querySelector(`.fd924-model-icon-x`).addEventListener('click', event => {
			console.log("action exit");
		});
		// console.log(this.querySelector(`.${tagHtml}`))
			this.querySelector(`.fd924-bg-overly`).addEventListener('click', event => {
			console.log("action overly");
		});;
	}
}



var jsScript = {
	inititail: (options) => {
		if (!customElements.get(tagHtml)) {
			customElements.define(tagHtml, CookieCosent);
	  }

		let element = document.createElement(tagHtml);
		document.getElementsByTagName('body')[0].append(element)

	}
};