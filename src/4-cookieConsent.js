const cookieConsent = `fd924-cookie-cosent`;
class CookieCosent extends HTMLElement {
		state = {
			hasOpen: true,
			titleModal: '',
		}
		connectedCallback() {
		this.initValue();
		this.renderHtml();
		this.registerEvent();
	}
	initValue() {
		this.state.titleModal = storeDatafd924.state.titleModal
		this.state.description = this.getAttribute('data-description')
	}
	renderHtml() {
		this.innerHTML = /*html*/`
		<div class="fd924-cookie-cosent ">
			<div class="fd924-model-cookie fd924-modal">
				<div class="fd924-model-content ">
					<div class="fd924-model-header">
						<p class="fd924-text-title-header">${this.state.titleModal}</p>
						<div class="fd924-model-icon-x">
							<button type="button" class="btn-close" aria-label="Close"></button>
						</div>
					</div>
					<div class="fd924-model-body" >
						<fd924-purpost-box  ></fd924-purpost-box>
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
			<div class="fd924-bg-overly fd924-modal-background"></div>
		</div>`

		var ci = storeDatafd924.getCiModalComponay();
		this.querySelector(`.fd924-cookie-cosent`).classList.add("fd924-anime");
		this.querySelector('.fd924-text-title-header').style.color = ci.modalTitleColor;
		this.querySelector('.fd924-text-privacy-text').style.color = ci.modelSubTitleColor;
		var btnLeft = this.querySelector('.fd924-btn-left')
		btnLeft.style.color = ci.btnRejectTextColor;
		btnLeft.style.background = ci.btnRejectBgColor;
		var btnRight = this.querySelector('.fd924-btn-right')
		btnRight.style.color = ci.btnConfireTextColor;
		btnRight.style.background = ci.btnConfireBgColor;
		this.querySelector('.fd924-powerd-by').style.color = ci.labeltextPower;
		this.querySelector('.fd924-powerd-link').style.color = ci.powerBy;
	}
	onToggleModal() {
		this.state.hasOpen = !this.state.hasOpen;
		if(!this.state.hasOpen) { 
				this.querySelector(`.fd924-cookie-cosent`).classList.add("fd924-out");
				setTimeout(() => {
					this.remove();
				}, 500);
		}
	}
	setStateSwitch(state) {
		for (let i = 0; i <  storeDatafd924.state.purposes.length; i++) {
			 storeDatafd924.state.purposes[i].hasAllow = state;
		}
	}
	onHandeRejactAll() {
		const myEvent = new CustomEvent("onEventRejectAll", { bubbles: true, });
		document.dispatchEvent(myEvent);
		this.setStateSwitch(false);
		storeDatafd924.saveState();
	}
	onHandeConfirmAll() {
		const myEvent = new CustomEvent("onEventConfirmAll", { bubbles: true, });
		document.dispatchEvent(myEvent);
		this.setStateSwitch(true);
		storeDatafd924.saveState();
	}
	
	
	registerEvent() {
		this.querySelector(`.fd924-model-icon-x`).addEventListener('click', this.onToggleModal.bind(this));
		this.querySelector(`.fd924-bg-overly`).addEventListener('click',this.onToggleModal.bind(this));
		this.querySelector(`.fd924-btn-left`).addEventListener('click', this.onHandeRejactAll.bind(this));
		this.querySelector(`.fd924-btn-right`).addEventListener('click',this.onHandeConfirmAll.bind(this));
		
	}
}