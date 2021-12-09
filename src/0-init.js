
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
		let element = document.createElement(iconCookieCosent);
		document.getElementsByTagName('body')[0].append(element)

	}
};