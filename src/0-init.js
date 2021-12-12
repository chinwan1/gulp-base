var CSent = {

	inititail: (options) => {
		CSent.regsiterComponents();
		if(CSent.hasCookie(document.cookie)) {
			CSent.renderIconCookieConnset();
		} else {
			CSent.renderFooterPrivacy();
		}
	},
	renderIconCookieConnset() {
		let element = document.createElement(iconCookieCosent);
		document.getElementsByTagName('body')[0].append(element);
	},
	renderFooterPrivacy() {
		let element = document.createElement(footerPrivacy);
		document.getElementsByTagName('body')[0].append(element);
	},
	regsiterComponents() {
		const components = [
			{ tag: footerPrivacy, value: FooterPrivacy},
			{ tag: purpostBox, value: PurpostBox},
			{ tag: purpostItem, value: PurpostItem},
			{ tag: cookieConsent, value: CookieCosent},
			{ tag: iconCookieCosent, value: IconCookieCosent},
		];
		for (const item of components){
			if (!customElements.get(item.tag)) {
				customElements.define(item.tag, item.value);
			}
		}
	},
	hasCookie: (cname) => {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },

};
