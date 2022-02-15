const footerPrivacy = `fd924-footer-privacy`;
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
    const ci = storeDatafd924.getCiFooterPrivacyCompany();
    this.innerHTML = /*html*/`
    <div id="cokiepop" class="fd924-footer-privacy">
    <div class="fd924-footer-wrapper">
    <div class="fd924-left-box"> 
      <p class="fd924-text-privary">
      ${storeDatafd924.state.textPrivary}
      </p>
    </div>
    
    <div class="fd924-right-box">
      <a  href="#" class="fd924-setting">${storeDatafd924.state.btnPrivacyText || 'Settings'}</a>
      <button id="btnconfirm" class="fd924-footer-btnconfirm">
        <span class="fd924-text-ok" >${storeDatafd924.state.btnTextOK || 'Allow All'}</span>
      </button>
    </div>
    </div>
    </div>
		`
    
    var pridomLink= this.querySelector('.fd924-privacy-link');
    if(pridomLink) pridomLink.style.color = ci.privacyTextLinkColor;

    var pridomText= this.querySelector('.fd924-text-privary');
    if(pridomText) pridomText.style.color = ci.privacyTextColor;

    this.querySelector('.fd924-setting').style.color = ci.privacySettingColor;

    var btnPrivacy = this.querySelector('.fd924-footer-btnconfirm')
    var textPrivacy = this.querySelector('.fd924-text-ok')
    textPrivacy.style.color = ci.bgBtnOkTextColor;
    btnPrivacy.style.background = ci.btnTextOkBgColor;

    if(storeDatafd924.state.preview) {
      var dom = this.querySelector('.fd924-footer-privacy');
      if(dom) dom.style.display = 'none';
    }
	}
  
  registerEvent() {
    this.querySelector("#btnconfirm").addEventListener("click", this.onAccept.bind(this))
    this.querySelector(".fd924-setting").addEventListener("click", this.onSetting.bind(this))
  }
  onSetting(e) {
    e.preventDefault()
    let element = document.createElement(cookieConsent);
    document.getElementsByTagName('body')[0].append(element)
    if(storeDatafd924.state.preview)  storeDatafd924.sendEventToPreview({ model: 'Open'});
  }
  onAccept () {
    try {
      var d = new Date();
      var exdays = 365;
      var cvalue = window.navigator.language + "  " + window.navigator.platform;
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      var expires = "expires=" + d.toUTCString();
      document.cookie = "CONSENT=" + cvalue + ";" + expires + ";path=/";
      document.getElementById("cokiepop").remove();
      let element = document.createElement(iconCookieCosent);
			document.getElementsByTagName('body')[0].append(element)
      storeDatafd924.state.purposes.map((item) => {  item.hasAllow = true; return item} );
			storeDatafd924.saveState();
      storeDatafd924.sendEventToPreview({ model: 'OPEN_ICON_COKIE'});

    } catch (error) {
      console.log(error);
    }
  }


}