const iconCookieCosent = `fd924-icon-cookie`;
class IconCookieCosent extends HTMLElement {
		connectedCallback() {
		this.renderHtml();
		this.registerEvent();
		
		setTimeout(() => {
			const divIcon = this.querySelector(".fd924-icon-cookie");
			if(divIcon.classList.contains("fd924-icon-cookie-close")) {
				divIcon.classList.remove("fd924-icon-cookie-close")
				divIcon.classList.add("fd924-icon-cookie-open")
			}
		}, 10);
		
	}
	renderHtml() {
		this.innerHTML = /*html*/`
		<a class="fd924-icon-cookie fd924-icon-cookie-close" href="#">
			Icon
		</a>`
	}

	registerEvent() {
		this.querySelector(`.fd924-icon-cookie`).addEventListener('click',(e) => {
			e.preventDefault()
			let element = document.createElement(cookieConsent);
			document.getElementsByTagName('body')[0].append(element)
			if(storeDatafd924.state.preview)  storeDatafd924.sendEventToPreview({ model: 'Open'});
		});
	}
}