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
