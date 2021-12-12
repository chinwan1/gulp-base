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