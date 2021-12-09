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

