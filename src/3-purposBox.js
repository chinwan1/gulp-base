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
				${this.renderContent()}
			</div>
		</div>
		`
	}
	renderContent() {
		var html = '';
		for (let i = 0; i <  storeDatafd924.state.purposes.length; i++) {
			html += `<fd924-purpost-item data-index=${i} ></fd924-purpost-item>`;
		}
		return html;
	}
	
	initValue(input) {
		this.state.title = storeDatafd924.state.priveryModal;
	 }
}

