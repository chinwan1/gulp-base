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
    <a  href="#" class="fd924-setting">${storeDatafd924.state.btnPrivacyText || 'ตั้งค่า'}</a>
    <div id="btnconfirm" class="fd924-footer-btnconfirm">
    <span class="fd924-text-ok" >${storeDatafd924.state.btnTextOK || 'ตกลง'}</span>
    </div>
    </div>
    </div>
    </div>
		`
    const pridom= this.querySelector('.fd924-privary-link')
    if(pridom) pridom.style.color = ci.privacyTextLinkColor;

    this.querySelector('.fd924-setting').style.color = ci.privacySettingColor;

    var btnPrivacy = this.querySelector('.fd924-footer-btnconfirm')
    var textPrivacy = this.querySelector('.fd924-text-ok')
    textPrivacy.style.color = ci.bgBtnOkTextColor;
    btnPrivacy.style.background = ci.btnTextOkBgColor;
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
    } catch (error) {
      console.log(error);
    }
  }


}