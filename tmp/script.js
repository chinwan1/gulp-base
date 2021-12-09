
var jsScript = {
	inititail: (options) => {
		const components = [
			{ tag: purpostBox, value: PurpostBox},
			{ tag: purpostItem, value: PurpostItem},
			{ tag: cookieConsent, value: CookieCosent},
			{ tag: iconCookieCosent, value: IconCookieCosent},
		];
		for (item of components){
			if (!customElements.get(item.tag)) {
				customElements.define(item.tag, item.value);
			}
		}
		// if (!customElements.get(purpostItem)) {
		// 	customElements.define(purpostItem, PurpostItem);
	  // }
		// if (!customElements.get(cookieConsent)) {
		// 	customElements.define(cookieConsent, CookieCosent);
	  // }
		// if(!customElements.get(iconCookieCosent)) {
		// 	customElements.define(iconCookieCosent, IconCookieCosent);
		// }

		let element = document.createElement(iconCookieCosent);
		document.getElementsByTagName('body')[0].append(element)

	}
};
const purpostItem = `fd924-purpost-item`;
class PurpostItem extends HTMLElement {
	state = {
		title: "",
		hasExpland: false,
		hasAccept: false,
	}
	connectedCallback(options) {
		this.initValue()
		this.renderHtml();
		this.registerEvent();
	}
	renderHtml() {
		this.innerHTML = /*html*/`
				<div class="fd924-purpose-box-item">
					<div class="fd924-purpose-box-header">
						<div class="fd924-area-explad"></div>
						<div class="fd924-purpose-left-box">
            <div class="fd924-pupose-expand"><span></span><span></span></div>
							<p class="fd924-tilte fd924-text-title-card">${this.state.title}</p>
							</div>
							<div class="fd924-purpose-right-box">
							<label class="fd924-switch">
							<input type="checkbox" ${this.state.hasAccept ? "checked": ""} >	
							<span class="fd924-slider round"></span>
							</label>
							</div>
					</div>
					<div class="fd924-detail fd924-text-detail has-close-detail">
						These cookies allow us to count visits and traffic sources, so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies, we will not know when you have visited our site.
					</div>
				</div>
		`
	}

	initValue(input) {
		if(this.attributes["data-title"]) {
			this.state.title = this.attributes["data-title"].value;
		}
		if(this.attributes["data-has-expland"]) {
			this.state.hasExpland = this.attributes["data-has-expland"].value || false;
		}
		if(this.attributes[["data-has-accept"]]) {
			this.state.hasAccept = (this.attributes["data-has-accept"].value) === 'true' ? true: false;
		} else {
			this.state.hasAccept = this.attributes["data-has-accept"].value || false;
		}
	}

	onRejectAll() {
		const input = this.querySelector("input")
		input.checked = false;
		this.state.hasAccept = false;
	}
	onConfirmAll() {
		const input = this.querySelector("input")
		input.checked = true;
		this.state.hasAccept = true;
	}
	onToggleExpand() {
		this.state.hasExpland = !this.state.hasExpland;
		const domItem = this.querySelector(".fd924-detail");
		const domExpland = this.querySelector(".fd924-pupose-expand");
		if(this.state.hasExpland) {
			domItem.style["margin-top"] = "15px";
			domItem.classList.add("has-open-deatail");
			domItem.classList.remove("has-close-detail");
			domExpland.classList.add("subtract");
		} else {
			domItem.classList.remove("has-open-deatail");
			domItem.classList.add("has-close-detail");
			domExpland.classList.remove("subtract");
			setTimeout(() => {
				domItem.style["margin-top"] = "0";
			}, 200);
		}

	}

	registerEvent() {
		this.querySelector("input").addEventListener('click', (event) => { this.state.hasAccept = event.target.checked; })
		this.querySelector(".fd924-area-explad").addEventListener('click', this.onToggleExpand.bind(this))
		document.addEventListener("onEventRejectAll",this.onRejectAll.bind(this));
		document.addEventListener("onEventConfirmAll", this.onConfirmAll.bind(this));

	}
}

const purpostBox = `fd924-purpost-box`;
class PurpostBox extends HTMLElement {
	state = {
		title: "",
	}
	connectedCallback() {
		this.initValue()
		this.renderHtml();
	}
	renderHtml() {
		this.innerHTML = /*html*/`
		<div class="fd924-purpost-box">
			<div class="fd924-purpose-box-title ">
				<p class="fd924-text-privacy-text">${this.state.title}</p>
			</div>
			<div class="fd924-purpose-box-list">
				<fd924-purpost-item data-title='test' data-has-accept=false></fd924-purpost-item>
				<fd924-purpost-item data-title='op' data-has-accept=false></fd924-purpost-item>
			</div>
		</div>
		`
	}
	initValue(input) {
		this.state.title = "Who you talk to and what you share should be up to you. We’re dedicated to making sure Messenger is a safe, private, and secure place for you to connect with the people who matter. To do this, we’ve built tools that allow you to stay in control, secure your account, and stay safe on the platform."; }
}


const cookieConsent = `fd924-cookie-cosent`;
class CookieCosent extends HTMLElement {
		state = {
			hasOpen: true,
		}
		connectedCallback() {
		this.renderHtml();
		this.registerEvent();
	}
	renderHtml() {
		this.innerHTML = /*html*/`
		<div class="fd924-cookie-cosent ">
			<div class="fd924-model-cookie  modal">
				<div class="fd924-model-content ">
					<div class="fd924-model-header">
						<p class="fd924-text-title-header">Manage Consent Preferences</p>
						<div class="fd924-model-icon-x">
							<button type="button" class="btn-close" aria-label="Close"></button>
						</div>
					</div>
					<div class="fd924-model-body" >
						<fd924-purpost-box ></fd924-purpost-box>
					</div>
						<div class="fd924-model-footer">
							<div class="fd924-footer-btn">
								<button class="fd924-btn fd924-btn-left">
									Reject All
								</button>
								<button class="fd924-btn fd924-btn-right">
									Confirm My Choices
								</button>
							</div>
							<div class="fd924-box-powered-by">
								<a href="https://www.google.co.th/" >	
									<span class="fd924-powerd-by">Powered by</span> <span class="fd924-powerd-link">Test<span>
								</a>
							</div>
						</div>
				</div>
			</div>
			<div class="fd924-bg-overly modal-background"></div>
		</div>`
		this.querySelector(`.fd924-cookie-cosent`).classList.add("fd924-anime");
	}
	onToggleModal() {
		this.state.hasOpen = !this.state.hasOpen;
		if(!this.state.hasOpen) { 
				this.querySelector(`.fd924-cookie-cosent`).classList.add("out");
				setTimeout(() => {
					this.remove();
				}, 500);
		}
	}
	onHandeRejactAll() {
		const myEvent = new CustomEvent("onEventRejectAll", { bubbles: true, });
		document.dispatchEvent(myEvent);
	}
	onHandeConfirmAll() {
		const myEvent = new CustomEvent("onEventConfirmAll", { bubbles: true, });
		document.dispatchEvent(myEvent);
	}
	
	
	registerEvent() {
		this.querySelector(`.fd924-model-icon-x`).addEventListener('click', this.onToggleModal.bind(this));
		this.querySelector(`.fd924-bg-overly`).addEventListener('click',this.onToggleModal.bind(this));
		this.querySelector(`.fd924-btn-left`).addEventListener('click', this.onHandeRejactAll.bind(this));
		this.querySelector(`.fd924-btn-right`).addEventListener('click',this.onHandeConfirmAll.bind(this));
		
	}
}
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