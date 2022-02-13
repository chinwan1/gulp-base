const purpostItem = `fd924-purpost-item`;
class PurpostItem extends HTMLElement {
	state = {
		index: 0,
		title: "",
		description: "",
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
							<p class="fd924-tilte fd924-text-title-card">${storeDatafd924.state.purposes[this.state.index].title}</p>
							</div>
							<div class="fd924-purpose-right-box">
							<label class="fd924-switch">
							<input type="checkbox" ${storeDatafd924.state.purposes[this.state.index].hasAllow ? "checked": ""} >	
							<span class="fd924-slider round"></span>
							</label>
							</div>
					</div>
					<div class="fd924-detail fd924-text-detail has-close-detail">
						${storeDatafd924.state.purposes[this.state.index].description}
					</div>
				</div>
		`
    var ci = storeDatafd924.getCiModalCompany();
		this.querySelector('.fd924-text-title-card').style.color = ci.purposeTextColor;
		this.querySelector('.fd924-text-detail').style.color = 	ci.purposeTextColor;
	}



	initValue(input) {
		this.state.index = this.getAttribute("data-index");
	}
	onRejectAll() {
		const input = this.querySelector("input")
		input.checked = false;
	}
	onConfirmAll() {
		const input = this.querySelector("input")
		input.checked = true;
	}
	onToggleExpand() {
		this.state.hasExpland = !this.state.hasExpland;
		const domItem = this.querySelector(".fd924-detail");
		const domExpland = this.querySelector(".fd924-pupose-expand");
		if(this.state.hasExpland) {
			domItem.style["margin-top"] = "18px";
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
		this.querySelector("input").addEventListener('click', (event) => { 
			this.state.hasAccept = event.target.checked;
			storeDatafd924.state.purposes[this.state.index].hasAllow = this.state.hasAccept;
			// storeDatafd924.saveState();
		 })
		this.querySelector(".fd924-area-explad").addEventListener('click', this.onToggleExpand.bind(this))
		document.addEventListener("onEventRejectAll",this.onRejectAll.bind(this));
		document.addEventListener("onEventConfirmAll", this.onConfirmAll.bind(this));

	}
}
