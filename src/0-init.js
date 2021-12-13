var storeDatafd924 = {
	
	state: {
		cookieID: '',
		titleModal: '',
		priveryModal: '',
		purposes: []
	},
	loadDataFromPersistence() {
		var storeData = localStorage.getItem('storeDatafd924');
		if(!storeData) return { emptyData: true };
		var item = JSON.parse(storeData);
		if(!item) return { emptyData: true};
		return {
			emptyData: false,
			data: item,
		};
	},
	mapperStateAllow(oldState, newState) {
		return newState.map((item) => {
			var found = oldState.find((o) => {
				return o.id === item.id
			})
			if(found) item.hasAllow = found.hasAllow
			return item;
		})
	},
	createNewState(oldState, newState) {
		var purposes = storeDatafd924.mapperStateAllow(oldState, newState);
		return {
			purposes,
		}
	},
	setInitState(input) {
		storeDatafd924.state.titleModal = input.titleModal;
		storeDatafd924.state.priveryModal = input.priveryModal;
		storeDatafd924.state.purposes = input.purposes;
		var localStore = storeDatafd924.loadDataFromPersistence();
		if(!localStore.emptyData) {
			var newState = storeDatafd924.createNewState(localStore.data.purposes, input.purposes);
			console.log(newState)
			storeDatafd924.state.purposes = newState.purposes;
		}
	},
	saveState() {
		localStorage.setItem('storeDatafd924',JSON.stringify({
			purposes: storeDatafd924.state.purposes,
			cookieID: storeDatafd924.state.cookieID
		}));
	},
}

var CSent = {
	inititail: (options) => {
		CSent.regsiterComponents();
		storeDatafd924.setInitState(options);
		if(CSent.hasCookie(document.cookie)) {
			CSent.renderIconCookieConnset();
		} else {
			CSent.renderFooterPrivacy(options);
		}
	},
	renderIconCookieConnset(options) {
		let element = document.createElement(iconCookieCosent);
		document.getElementsByTagName('body')[0].append(element);
	},
	renderFooterPrivacy(options) {
		let element = document.createElement(footerPrivacy);
		element.setAttribute('moreUrl', options.link || '');
		element.setAttribute('textPrivary', options.text || '');
		element.setAttribute('webkit', options.webkit || '');
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
