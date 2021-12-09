const iconCookieCosent = `fd924-icon-cookie-cookie`;
class IconCookieCosent extends HTMLElement {
		connectedCallback() {
		this.renderHtml();
		this.registerEvent();
	}
	renderHtml() {
		this.innerHTML = /*html*/`
		<a class="fd924-icon-cookie-cookie" href="#">
			<div class="fd924-box-icon-consent"  >Icon</div>
		</a>`
	}

	registerEvent() {
		this.querySelector(`.fd924-box-icon-consent`).addEventListener('click',(e) => {
			e.preventDefault()
			let element = document.createElement(cookieConsent);
			document.getElementsByTagName('body')[0].append(element)
		});
	}
}