
class CookieCosent extends HTMLElement {
	connectedCallback() {
	}
}



var jsScript = {
	inititail: (options) => {
		const tagHtml = 'fd924-cookie-cosent';
		if (!customElements.get(tagHtml)) {
			customElements.define(tagHtml, CookieCosent);
	  }

		let element = document.createElement(tagHtml);
		document.getElementsByTagName('body')[0].append(element)

	}
};