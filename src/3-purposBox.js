const purpostBox = `fd924-purpost-box`;
class PurpostBox extends HTMLElement {
	connectedCallback() {
		this.renderHtml();
	}
	renderHtml() {
		// const ci = storeDatafd924.getCiFooterPrivacyCompany();
		this.innerHTML = /*html*/`
		<div class="fd924-purpost-box">
			<div class="fd924-purpose-box-title ">
				<p class="fd924-text-privacy-text">${storeDatafd924.state.subtitleModal}</p>
			</div>
			<div class="fd924-purpose-box-list">
				${this.renderContent()}
			</div>
		</div>
		`
		var dom = this.querySelector('.fd924-privacy-link');
		if(!dom) return;
		dom.style.color = 'black';
	}
	renderContent() {
		var html = '';
		for (let i = 0; i <  storeDatafd924.state.purposes.length; i++) {
			html += `<fd924-purpost-item data-index=${i} ></fd924-purpost-item>`;
		}
		return html;
	}
	

}

