var storeDatafd954 = {
    statesFlow: {
      purposeExpired: 1,
    },
    state: {
        languages: {},
        defaultLanguage: "EN",
        language: "EN",
        autoDetectLanguage: true,
        consentCookieID: 0 ,
				categories: [],
        referenceId: "",
        stateFlow: 0,
        imageLogo: "",
        ciColor: {
            footerPrivacyCompany: {
                privacyTextLinkColor: "",
                privacyTextColor: "",
                privacySettingColor: "",
                bgBtnOkTextColor: "",
                LabelBtnTextOKBgColor: "",
            },
            iconCookie: {
                bgColor: "",
            },
            modalCompany: {
                modalTitleColor: "",
                modalSubTitleColor: "",
                btnRejectTextColor: "",
                btnRejectBgColor: "",
                btnRejectText: "",
                btnConfireBgColor: "",
                purposeTextColor: "",
                purposeDetailText: "",
                labeltextPowerColor: "",
                powerByColor: "",
            },
        },
    },
		hasFocusAllowAllPurpose(purpose) {
			return purpose.hasDispalyAllow && purpose.focusAllow;
		},
    hasStateFlowPurposeExpired() {
      return storeDatafd954.state.stateFlow === storeDatafd954.statesFlow.purposeExpired;
    },
    getCookieByName(name) {
        var cname = name + "=";
        var cookies = document.cookie.split("; ");
        let value = undefined;
        cookies.forEach((val) => {
            if (val.indexOf(cname) === 0) value = val.substring(cname.length).split("; path=/")[0];
        });
        return value;
    },
    generateUID() {
        let storageUID = localStorage.getItem('CookieHistoryUID');
        if (storageUID == null) {
            var uid, i, j;
            uid = '';
            for (j = 0; j < 32; j++) {
                if (j == 8 || j == 12 || j == 16 || j == 20)
                    uid = uid + '-';
                i = Math.floor(Math.random() * 16).toString(20).toUpperCase();
                uid = uid + i;
            }
            localStorage.setItem('CookieHistoryUID', uid);
        } else {
            uid = storageUID;
        }
        return uid;
    },
    sendHistoryToDatabase() {
        let dateNow = new Date();
        let purposeBody = [];
        storeDatafd954.state.categories.map((item) => {
          item.purposes.map((itemp) => {
            if(itemp.hasAllow) {
              purposeBody.push({ "ConsentCookiePurposeID": itemp.id, "HasAllow": true });
            }
          })
        })

        let body = {
            "UID": this.generateUID(),
            "IPAddress": `${{ipAddress}}`,
            "Referenceid": storeDatafd954.state.referenceId,
            "CreateDate": dateNow,
            "ConsentCookieID": storeDatafd954.state.consentCookieID,
            "HistoryList": purposeBody
        }
        this.sendToApiAddHistory(`${{domainUrl}}`, body)
    },
    async sendToApiAddHistory(url, body) {
        try {
            const response = await fetch(`${url}/api/CMSCookieConsent/AddCookieHistory`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            }).then((response) => {
                return response.json();

            })


            if (response.HasError) throw new Error(response.MessageError);
            return { hasError: false, data: response.data.Message };
        } catch (error) {
            return { hasError: false, message: error };
        }
    },
    getCiFooterPrivacyCompany() {
        return storeDatafd954.state.ciColor.footerPrivacyCompany;
    },
    getCiModalCompany() {
        return storeDatafd954.state.ciColor.modalCompany;
    },
    loadDataFromPersistence() {
      storeDatafd954.state.purposesExpired = [];
        var storeData = storeDatafd954.getCookieByName(`storeDatafd954-${storeDatafd954.state.consentCookieID}`);
        if (!storeData) return { emptyData: true };
        var item = JSON.parse(storeData);
        if (!item) return { emptyData: true };
        return {
            emptyData: false,
            data: item,
        };
    },
    mapperStateAllow(oldState, newState) {
      return newState.map((nitem) => {
        nitem.purposes = nitem.purposes.map((pitem) => {
          let oldItem = oldState.find(oitem => oitem.categoryID === nitem.id && oitem.id === pitem.id)
          if(oldItem) {
            pitem.hasAllow = oldItem.hasAllow;
          }
          return pitem;
        })
        return nitem;
      })
    },
    mappingPersistentToData(oldState, newState) {
        var categories = storeDatafd954.mapperStateAllow(oldState, newState);
        return {
            categories,
        };
    },
    hasPurposeExpired(purposes) {
      let currentDate = new Date();
      let result = purposes.find((item) => {
        return (new Date(item.expired) < currentDate && item.hasAllow);
      });
      if(result) return true;
      return false;
    },
    setInitState(input) {
        storeDatafd954.state.defaultLanguage = input.defaultLanguage || "EN";
        storeDatafd954.state.languages = input.languages;
        storeDatafd954.state.referenceId = input.referenceId;
        storeDatafd954.state.consentCookieID = input.consentCookieID;
        storeDatafd954.state.imageLogo = input.imageLogo;
        storeDatafd954.state.language = storeDatafd954.detectLanguage();
				storeDatafd954.state.categories = storeDatafd954.createInitDataCategories(input);
        if (Object.keys(input.ciColor).length) { storeDatafd954.state.ciColor = input.ciColor; }
        var localStore = storeDatafd954.loadDataFromPersistence();
        if (!localStore.emptyData) {
          var newState = storeDatafd954.mappingPersistentToData(
            localStore.data.purposes,
            storeDatafd954.state.categories
            );
            storeDatafd954.state.categories = newState.categories;
          }
          
    },
    detectLanguage() {
      let url = window.location.href.toUpperCase();
      let foundEn = url.match(new RegExp('/EN/'));
      let foundTH = url.match(new RegExp('/TH/'));
      if(foundEn) return "EN";
      if(foundTH) return "TH"
      return  storeDatafd954.state.defaultLanguage;
    },
    getTranslate(key, input) {
      if(!Object.keys(storeDatafd954.state.languages)) return "";
      if(input) {
        if(!Object.keys(input.languages)) return "";
        return input.languages[storeDatafd954.state.language.toUpperCase()][key] || "";
      }
      return storeDatafd954.state.languages[storeDatafd954.state.language.toUpperCase()][key];
    },
		createInitDataCategories(input) {
			let resp = [];
			if(input.categories.length) {
				let newCategories = input.categories.map((item) => {
					item.purpose = item.purposes.map(item => {
						if(storeDatafd954.hasFocusAllowAllPurpose(item)) item.hasAllow = true;
						else item.hasAllow = false;
					});
					item.active = false;

					return item;
				});
				newCategories[0].active = true;
				resp = newCategories;
			}
			return resp;
		},
    changeStateFlowToStateFlowExpired() {
        storeDatafd954.state.stateFlow = storeDatafd954.statesFlow.purposeExpired;
    },
    changeStateFlowExpiredToStateFlowNormal() {
      storeDatafd954.state.stateFlow = 0;
      storeDatafd954.state.hasStateFlowPurposeExpired = [];
    },
    mappingExternalCookie(collectionPointID, categories) {
      let purposes = [];

      storeDatafd954.state.categories.map((category) => {
        category.purposes.map((item) => {
          if(item.hasDispalyAllow) {
            purposes.push({
              code: item.code,
              purposeId: item.id,
              hasAllow: item.hasAllow,
              expired: item.expired
            })
          }
        });
      })
      return {
        collectionPointID,
        purposes,
      }
    },
    processKeepAliveDataToForm:(keepAliveData) => {
        if(!keepAliveData) return ['1','d'];
        let resultRex = /([a-z])/.exec(keepAliveData).index;
        let KeepAliveAmount = keepAliveData.slice(0, resultRex);
        let KeepAliveUnit = keepAliveData.slice(resultRex, resultRex+1);
        return [KeepAliveAmount || '1',KeepAliveUnit || 'd'];
    },
    calculateDate: (amount,unit) => {
      let [currentDate,result] = [new Date(), new Date()];
      let nAmount = Number(amount);
      if(unit.toLowerCase() === 'y') {
        result.setYear(currentDate.getFullYear() + nAmount);
      } else if(unit.toLowerCase() === 'm') {
        result.setMonth(currentDate.getMonth() + nAmount);
      } else {
        result.setDate(currentDate.getDate() + nAmount);
      }
      return result.toLocaleString("sv");
    },
    saveState() {
      if(this.hasStateFlowPurposeExpired()) {
        storeDatafd954.state.purposes = this.mappingPurposesExpired();
        storeDatafd954.changeStateFlowExpiredToStateFlowNormal();
      }
			let purposes = storeDatafd954.flattenPurpose(storeDatafd954.state.categories);
			let persistentPurposes = storeDatafd954.mappingDataToPersistent(purposes);
    	  document.cookie = `storeDatafd954-${storeDatafd954.state.consentCookieID}=${JSON.stringify({ purposes: persistentPurposes,
    	  cookieID: storeDatafd954.state.consentCookieID,
    	})}; path=/`;
      storeDatafd954.sendHistoryToDatabase();
    },
		flattenPurpose(categories) {
			let purposes = [];
			categories.map((category) => {
				let newItem = category.purposes.map((item) =>{ 
					item.categoryID = category.id
					return item;
				});
				purposes = [...purposes,...newItem];
			})
			return purposes;
		},
		mappingDataToPersistent(purposes) {
      return purposes.map((item) => {
        if(item.keepAliveData) {
          let [amount,unit] = storeDatafd954.processKeepAliveDataToForm(item.keepAliveData);
					if(item.hasAllow) { expired = storeDatafd954.calculateDate(amount,unit); }
					else {expired = "0000-00-00 00:00:00"};
				} else {
					expired = ""
				}
        return {
          id: item.id,
          code: item.code || '',
					categoryID: item.categoryID,
          hasAllow: item.hasAllow,
          expired,
        };
			})
		},
    mappingPurposesExpired() {
      return storeDatafd954.state.purposes.map((item) => {
        let codeItem = item.code;
        let fitem = storeDatafd954.state.purposesExpired.find((pe) => {
          return pe.code === codeItem
        })
        if(fitem) item.hasAllow = fitem.hasAllow;
        return item;
      })
    },

};

var CSent = {
    inititail: (options) => {
        storeDatafd954.setInitState(options);

        CSent.regsiterComponents();
        if (storeDatafd954.getCookieByName(`CONSENT-${storeDatafd954.state.consentCookieID}`)) {
            if(storeDatafd954.hasStateFlowPurposeExpired()) {
              let element = document.createElement(cookieConsent);
              document.getElementsByTagName('body')[0].append(element)
							document.querySelector('body').style.overflow = 'hidden';
            }
            CSent.renderIconCookieConnset();
        } else {
            CSent.renderFooterPrivacy();
        }
        window.cookieConsent = {
          getCookieData:  CSent.exportFunction,
        }

    },
    exportFunction()  {
      var consentCookieID = storeDatafd954.state.consentCookieID;
      var storeData = storeDatafd954.getCookieByName(`storeDatafd954-${consentCookieID}`);
      if (!storeData) return storeDatafd954.mappingExternalCookie(consentCookieID);
      var item = JSON.parse(storeData);
      if (!item) return storeDatafd954.mappingExternalCookie(consentCookieID);
      return storeDatafd954.mappingExternalCookie(consentCookieID,item.categories)
    },
    renderIconCookieConnset() {
        let element = document.createElement(iconCookieConsent);
        document.getElementsByTagName("body")[0].append(element);
    },
    renderFooterPrivacy() {
        let element = document.createElement(footerPrivacy);
        document.getElementsByTagName("body")[0].append(element);
        return element;
    },
    regsiterComponents() {
        const components = [
            { tag: footerPrivacy, value: FooterPrivacy },
            { tag: cookieConsent, value: CookieConsent },
            { tag: cookieConsentContent, value: CookieConsentContent},
            { tag: cookieConsentContentPurpose, value: CookieConsentContentPurpose },
            { tag: cookieConsentNavigation, value: CookieConsentNavigation },
            { tag: cookieConsentNavigationItem, value: CookieConsentNavigationItem },
            { tag: iconCookieConsent, value: IconCookieConsent },
        ];
        for (const item of components) {
            if (!customElements.get(item.tag)) {
                customElements.define(item.tag, item.value);
            }
        }
    },
    hasCookie: (cname) => {
        var name = cname + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == " ") {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
};

const footerPrivacy = `fd954-footer-privacy`;
class FooterPrivacy extends HTMLElement {
    state = {
        text: '',
        link: '',
        webkit: '',
        confirm: '',
        urlMoreCookie: '',
    };
    connectedCallback(options) {
        this.renderHtml();
        this.registerEvent();
    }
    renderHtml() {
        const ci = storeDatafd954.getCiFooterPrivacyCompany();
        this.innerHTML = /*html*/`
    <div id="cookiepop" class="fd954-footer-privacy">
    <div class="fd954-footer-wrapper">
    <div class="fd954-left-box">
      <div class="fd954-text-privary">
      ${storeDatafd954.getTranslate("labelFooterText")}
      </div>
    </div>

    <div class="fd954-right-box">
      <div  href="#" class="fd954-setting">${storeDatafd954.getTranslate("labelBtnPrivacyText")}</div>
      <div id="btnconfirm" class="fd954-btn fd954-footer-btnconfirm">
        <span class="fd954-text-ok" >${storeDatafd954.getTranslate("labelBtnTextOK")}</span>
      </div>
    </div>
    </div>
    </div>
		`

        var pridomLink = this.querySelector('.fd954-privacy-link');
        if (pridomLink) pridomLink.style.color = `${ci.privacyTextLinkColor}`;

        var pridomText = this.querySelector('.fd954-text-privary');
        if (pridomText) pridomText.style.color = `${ci.privacyTextColor}`;

        this.querySelector('.fd954-setting').style.color = `${ci.privacySettingColor}`;

        var btnPrivacy = this.querySelector('.fd954-footer-btnconfirm')
        var textPrivacy = this.querySelector('.fd954-text-ok')
        textPrivacy.style.color = `${ci.bgBtnOkTextColor}`;
        btnPrivacy.style.background = `${ci.labelBtnTextOKBgColor}`;

    }

    registerEvent() {
        this.querySelector("#btnconfirm").addEventListener("click", this.onAccept.bind(this))
        this.querySelector(".fd954-setting").addEventListener("click", this.onSetting.bind(this))
    }
    onSetting(e) {
        e.preventDefault()
        let element = document.createElement(cookieConsent);
        document.getElementsByTagName('body')[0].append(element)
				document.querySelector('body').style.overflow = 'hidden';
    }
    onAccept() {
      try {
        var d = new Date();
            var exdays = 365;
            var cvalue = window.navigator.language + "  " + window.navigator.platform;
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = `CONSENT-${storeDatafd954.state.consentCookieID}=` + cvalue + ";" + expires + ";path=/";
            let elementCookie = document.getElementById("cookiepop");
            if(elementCookie) {
              elementCookie.remove();
            }
            let element = document.createElement(iconCookieConsent);
            document.getElementsByTagName('body')[0].append(element)
            storeDatafd954.state.categories = storeDatafd954.state.categories.map((item) => {
              item.purposes = item.purposes.map((itemp) => {
                if(itemp.hasDispalyAllow) {
                  itemp.hasAllow = true;
                }
                return itemp;
              })
              return item;
            })
            storeDatafd954.saveState();
            const myEvent = new CustomEvent("onCookieConsentEvent", {
              bubbles: true,
              detail: {
                action: "ACCEPT",
                data: CSent.exportFunction()
              }
            });
            document.dispatchEvent(myEvent);
        } catch (error) {
            console.log(error);
        }
    }


}

const cookieConsentNavigation = `fd954-cookie-consent-navigation`;
class CookieConsentNavigation extends HTMLElement {
    connectedCallback(options) {
        this.initValue()
        this.renderHtml();
        this.registerEvent();
    }
    renderHtml() {

      this.innerHTML = /*html*/`
        <ul class="fd954-cookie-consent-navigation">
					${this.renderNavigationItem()}
        </ul>
      `
    }


    initValue(input) { }
		registerEvent() {
			document.addEventListener("myEventNavigation",this.handleOnClickMenu.bind(this))
		}
		renderNavigationItem() {
			return storeDatafd954.state.categories.reduce((store, next) => {
				return store += `<fd954-cookie-consent-navigation-item  data-index=${next.id} data-active=${next.active}>
				</fd954-cookie-consent-navigation-item>`;
			}, "");
		}
		handleOnClickMenu(evn) {
			const info = evn.detail;
			document.querySelectorAll("fd954-cookie-consent-navigation-item").forEach((item) => {
				if(Number(info.index) === Number(item.getAttribute('data-index'))) {
					item.setAttribute("data-active", true);
				} else {  item.setAttribute("data-active", false) };
			})
		}


}

const cookieConsentNavigationItem = `fd954-cookie-consent-navigation-item`;
class CookieConsentNavigationItem extends HTMLElement {
   static get observedAttributes() {
      return ['data-active'];
    }

    state = {
			index: 0,
    }
    connectedCallback(options) {
        this.initValue()
        this.renderHtml();
        this.registerEvent();
    }
		attributeChangedCallback(name, oldval, newval) {
			if(name === "data-active"  && oldval !== null) {
				let element = document.querySelector(`#navigation-item-${this.state.index}`).classList
				if(newval === "true") element.add('active');
				else  element.remove('active');
			}
		}
    renderHtml() {
        let category = storeDatafd954.state.categories.find(item => item.id === this.state.index );
        this.innerHTML = /*html*/`
          <li class="fd954-cookie-consent-navigation-item ${this.getAttribute("data-active") === "true" ? "active":  ""}" id="navigation-item-${this.state.index}">
           <div class="fd954-li-box"></div> <span class="navigation-item-label fd954-custom-navigation-item-label">${storeDatafd954.getTranslate("label",category)}<span>
          </li>
		    `
    }



    initValue(input) {
			this.state.index = Number(this.getAttribute("data-index"));
    }


    registerEvent() {
			this.addEventListener("click", () => {
				if(this.querySelector(`#navigation-item-${this.state.index}`).classList.contains("active")) { return ; }
				document.dispatchEvent(new CustomEvent("myEventNavigation", { bubbles: true, detail: this.state }))
				document.dispatchEvent(new CustomEvent("myEventContent", { bubbles: true, detail: {
					categoryID: this.state.index
				}}))
			})
    }
}


const cookieConsentContent = `fd954-cookie-consent-content`;
class CookieConsentContent extends HTMLElement {
    state = {
    }
    connectedCallback(options) {
        var localStore = storeDatafd954.loadDataFromPersistence();
        if (!localStore.emptyData) {
          var newState = storeDatafd954.mappingPersistentToData(
            localStore.data.purposes,
            storeDatafd954.state.categories
            );
            storeDatafd954.state.categories = newState.categories;
        } else {
          storeDatafd954.state.categories = storeDatafd954.state.categories.map((itemc) => {
           itemc.purposes = itemc.purposes.map((itemp) => {
              if(storeDatafd954.hasFocusAllowAllPurpose(itemp)) itemp.hasAllow = true;
						  else itemp.hasAllow = false;
              return itemp;
            })
            return itemc;
          })
        }
        this.renderHtml();
        this.registerEvent();
    }
    renderHtml() {
				let category = storeDatafd954.state.categories.find((item) => { return item.active === true });
        this.innerHTML = /*html*/` <div class="fd954-cookie-consent-content fd954-custom-cookie-consent-content" id="content-raw-html"> </div>`
				document.querySelector("#content-raw-html").innerHTML = this.renderPurpose(category);
    }



    initValue(input) {
			
    }

    registerEvent() {
			document.addEventListener("myEventContent", env => {
				let info = env.detail;
				let category = storeDatafd954.state.categories.find(item => item.id === info.categoryID);
				document.querySelector("#content-raw-html").innerHTML = this.renderPurpose(category);
			})
    }
		renderPurpose(category) {
			return category.purposes.reduce((store, next) => {
				let purpostStore = { 
					 categoryID: category.id,
					 focusAllow: next.focusAllow,
					 hasAllow: next.hasAllow,
					 hasDispalyAllow: next.hasDispalyAllow,
					 id: next.id,
					 keepAliveData: next.keepAliveData
				}
				return store += `<fd954-cookie-consent-content-purpose data-purpose='${JSON.stringify(purpostStore)}' ></fd954-cookie-consent-content-purpose>`
			}, "");
		}
}


const cookieConsentContentPurpose = `fd954-cookie-consent-content-purpose`;
class CookieConsentContentPurpose extends HTMLElement {
    state = {}
    connectedCallback(options) {
        this.initValue()
        this.renderHtml();
        this.registerEvent();
    }
    renderHtml() {
        this.innerHTML = /*html*/`
				<div class="fd954-cookie-consent-content-purpose">
					<div class="fd954-consent-content-box-header">
						<div class="box-header-left">
							<span id="content-header-label" class="fd954-custom-content-header-label">${this.state.headerLabel}<span>
						</div>
              ${this.renderHtmlRequire()}
					</div>
					<div>
						${this.state.description}
					</div>
				</div>
		`
    }



    initValue(input) {
			this.state = JSON.parse(this.getAttribute('data-purpose'));
			let categoryIndex = storeDatafd954.state.categories.findIndex(category => category.id === this.state.categoryID);
			let purposeIndex = storeDatafd954.state.categories[categoryIndex].purposes.findIndex(purpose => purpose.id === this.state.id);
			this.state.description = storeDatafd954.getTranslate("description",storeDatafd954.state.categories[categoryIndex].purposes[purposeIndex]);
      this.state.headerLabel = storeDatafd954.getTranslate("title",storeDatafd954.state.categories[categoryIndex].purposes[purposeIndex]);
    }


    registerEvent() {
			document.addEventListener("myEventContent", env => {
				let info = env.detail;
				let category = storeDatafd954.state.categories.find(item => item.id === info.categoryID);
				this.setContent(category);
			})

			if(this.state.hasDispalyAllow && !this.state.focusAllow) {
				this.querySelector("input").addEventListener('click', (event) => {
					let categoryIndex = storeDatafd954.state.categories.findIndex(category => category.id === this.state.categoryID);
					let purposeIndex = storeDatafd954.state.categories[categoryIndex].purposes.findIndex(purpose => purpose.id === this.state.id);
					storeDatafd954.state.categories[categoryIndex].purposes[purposeIndex].hasAllow = event.target.checked;

          let domStatus = this.querySelector(".fd954-switch-status");
          if(event.target.checked) {
            domStatus.textContent = storeDatafd954.state.labelSwithLeft || "" ;
            domStatus.classList.add("active");
          } else {
            domStatus.textContent = storeDatafd954.state.labelSwithRight || ""
            domStatus.classList.remove("active");
          }
				})
			}
    }
		setContent(category) {
			this.querySelector("#content-header-label").textContent = category.label;
		}
    renderHtmlRequire() {
		if(!this.state.hasDispalyAllow) return "";
    if(this.state.hasDispalyAllow && this.state.focusAllow) return `<div class="box-header-right"><span>${ storeDatafd954.getTranslate("labelForceAllow")}</span></div>`;
		return `<div class="box-header-right">
        <div class="fd954-switch-status ${this.state.hasAllow ? "active": ""}">${ this.state.hasAllow ?  storeDatafd954.getTranslate("labelSwithLeft") || "": storeDatafd954.getTranslate("labelSwithRight") || "" }</div>
        <label class="fd954-switch">
          <input type="checkbox"  ${ this.state.hasAllow ? "checked" : ""} >
          <span class="fd954-slider round"></span>
        </label>
      </div>`
    }
}





const cookieConsent = `fd954-cookie-consent`;
class CookieConsent extends HTMLElement {
    state = {
        hasOpen: true,
    };
    connectedCallback() {
        this.renderHtml();
        this.registerEvent();
    }

    renderHtml() {
        var ci = storeDatafd954.getCiModalCompany();
        this.innerHTML = /*html*/ `
		<style>
			.fd954-custom-cookie-consent-content{
				font-size: 20px !important;
			}
			.fd954-custom-content-header-label{
				background: red;
			}
			.fd954-custom-navigation-item-label{
				background: red;
			}
			.fd954-custom-text-title-header{
				background: red;
			}
		</style>
		<div class="fd954-cookie-consent">
			<div class="fd954-modal-cookie fd954-modal">
				<div class="fd954-modal-content">
					
          <div class="fd954-modal-header">
              <div class="fd954-box-left fd954-align-center fd954-center">
                <div class="fd954-modal-header-logo">
                  <img src="${storeDatafd954.state.imageLogo}">
                </div>
              </div>
              <div class="fd954-box-right">
                <div class="fd954-modal-header-content">
                  <div class="fd954-text-title-header fd954-custom-text-title-header">${storeDatafd954.getTranslate("labelTitleModal")} <span style="color:red" id="box-expired"></span></div>
                  <div class="fd954-modal-icon-x">
                    <div type="button" class="fd954-modal-btn-close" aria-label="Close"></div>
                  </div>
                </div>
              </div>
          </div>


					<div class="fd954-modal-body" >
            <div  class="fd954-box-left">
              <fd954-cookie-consent-navigation> <fd954-cookie-consent-navigation>
            </div>
            <div  class="fd954-box-right">
              <fd954-cookie-consent-content></fd954-cookie-consent-content>
            </div>
					</div>
          <div class="fd954-box-above-modal-footer">
            <div class="fd954-box-above-model-footer-btn-left">${ storeDatafd954.getTranslate("labelBtnModelAccecpt")}</div>
          </div>

          
          <div class="fd954-modal-footer">
							<div class="fd954-box-powered-by">
								<a href="https://www.thewiseworks.com/" >
									<span class="fd954-powerd-by">${storeDatafd954.getTranslate("labelTextPowerText")
            }</span> <span class="fd954-powerd-link">${storeDatafd954.getTranslate("labelPowerByText")

            
            }<span>
								</a>
							</div>
          </div>
				</div>


			</div>
			<div class="fd954-bg-overly fd954-modal-background"></div>
		</div>`;
        this.querySelector(`.fd954-cookie-consent`).classList.add("fd954-anime");
        this.querySelector(".fd954-text-title-header").style.color =
            `${ci.modalTitleColor}`;
        if(storeDatafd954.hasStateFlowPurposeExpired()) {
          this.querySelector("#box-expired").innerHTML = "(Expired)";
        }
        this.querySelector(".fd954-powerd-by").style.color = `${ci.labeltextPowerColor}`;
        this.querySelector(".fd954-powerd-link").style.color = `${ci.powerByColor}`;
    }
    onToggleModal() {
        this.state.hasOpen = !this.state.hasOpen;
        if (!this.state.hasOpen) {
            if(storeDatafd954.hasStateFlowPurposeExpired()) {
              storeDatafd954.changeStateFlowExpiredToStateFlowNormal();
              storeDatafd954.saveState();
            }
            this.querySelector(`.fd954-cookie-consent`).classList.add("fd954-out");
						document.querySelector("body").style.overflow = "auto";
            setTimeout(() => {
                this.remove();
            }, 500);
        }
    }
    setStateSwitch(state) {
        for (let i = 0; i < storeDatafd954.state.purposes.length; i++) {
            storeDatafd954.state.purposes[i].hasAllow = state;
        }
    }
    onHandleRejectAll() {
        const myEvent = new CustomEvent("onEventRejectAll", { bubbles: true });
        document.dispatchEvent(myEvent);
        this.setStateSwitch(false);
    }
    onHandleConfirm() {
      try{
        storeDatafd954.saveState()
      }finally{
        this.onToggleModal()
        var d = new Date();
        var exdays = 365;
        var cvalue = window.navigator.language + "  " + window.navigator.platform;
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = `CONSENT-${storeDatafd954.state.consentCookieID}=` + cvalue + ";" + expires + ";path=/";
        let elementCookie = document.getElementById("cookiepop");
        if(elementCookie) {
          elementCookie.remove();
        }
        let element = document.createElement(iconCookieConsent);
        document.getElementsByTagName('body')[0].append(element)
        const myEvent = new CustomEvent("onCookieConsentEvent", {
          bubbles: true,
          detail: {
            action: "ACCEPT",
            data: CSent.exportFunction()
          }
        });
        document.dispatchEvent(myEvent);
      }
    }

    registerEvent() {
        this.querySelector(`.fd954-modal-icon-x`).addEventListener(
            "click",
            this.onToggleModal.bind(this)
        );

				this.querySelector('.fd954-box-above-model-footer-btn-left').addEventListener("click", () => {
					storeDatafd954.saveState();
          this.querySelector(`.fd954-cookie-consent`).classList.add("fd954-out");
					document.querySelector("body").style.overflow = "auto";
            if(!document.querySelector(iconCookieConsent)) {
              let elementCookie = document.getElementById("cookiepop");
              if(elementCookie) { elementCookie.remove(); }
              let element = document.createElement(iconCookieConsent);
              document.getElementsByTagName('body')[0].append(element)
            } 

            setTimeout(() => {
                this.remove();
          }, 500);
				})

    }
}

const iconCookieConsent = `fd954-icon-cookie`;
class IconCookieConsent extends HTMLElement {
    connectedCallback() {
        this.renderHtml();
        this.registerEvent();

        setTimeout(() => {
            const divIcon = this.querySelector(".fd954-icon-cookie");
            if (divIcon.classList.contains("fd954-icon-cookie-close")) {
                divIcon.classList.remove("fd954-icon-cookie-close")
                divIcon.classList.add("fd954-icon-cookie-open")
            }
        }, 10);

    }
    renderHtml() {
        this.innerHTML = /*html*/`
		<a class="fd954-icon-cookie fd954-icon-cookie-close" href="#">
			<img  class="fd954-icon-cookie-img" src="data:image/png;base64,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" />
		</a>`

        var bgDom = this.querySelector('.fd954-icon-cookie');
        if (!bgDom) return;

        bgDom.style.background = `${storeDatafd954.state.ciColor.iconCookie.bgColor}`;

    }

    registerEvent() {
        this.querySelector(`.fd954-icon-cookie`).addEventListener('click', (e) => {
            e.preventDefault()
            let element = document.createElement(cookieConsent);
            document.getElementsByTagName('body')[0].append(element)
						document.querySelector('body').style.overflow = 'hidden';
        });


        var bgDom = this.querySelector('.fd954-icon-cookie');
        if (!bgDom) return;

        bgDom.style.background = `${storeDatafd954.state.ciColor.iconCookie.bgColor}`;

    }

    registerEvent() {
        this.querySelector(`.fd954-icon-cookie`).addEventListener('click', (e) => {
            e.preventDefault()
            let element = document.createElement(cookieConsent);
            document.getElementsByTagName('body')[0].append(element)
						document.querySelector('body').style.overflow = 'hidden';
        });
    }
}
