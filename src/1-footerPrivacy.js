const footerPrivacy = `fd924-footer-privacy`;
class FooterPrivacy extends HTMLElement {
  state = {
    text: '',
    link: '',
    webkit: '',
    confirm: '',
    urlMoreCookie: '',
    textPrivary: '',
    webkit: '',
  };
  connectedCallback(options) {
		this.initValue()
		this.renderHtml();
		this.registerEvent();
	}
	renderHtml() {
		this.innerHTML = /*html*/`
      <div id="cokiepop" class="fd924-footer-privacy">
      <div class="fd924-footer-wrapper">
        <div class="fd924-left-box"> 
          ${this.state.textPrivary}
        </div>

        <div class="fd924-right-box">
          <a  href="#" class="fd924-setting">ตั้งค่า</a>
          <div id="btnconfirm" class="fd924-footer-btnconfirm">
            <span>ตกลง</span>
          </div>
        </div>
      </div>
      </div>
		`
	}
  registerEvent() {
    this.querySelector("#btnconfirm").addEventListener("click", this.onAccept.bind(this))
    this.querySelector(".fd924-setting").addEventListener("click", this.onSetting.bind(this))
  }
  onSetting(e) {
    e.preventDefault()
    let element = document.createElement(cookieConsent);
    document.getElementsByTagName('body')[0].append(element)
  }
  initValue()  {
    this.state.urlMoreCookie = this.getAttribute('moreurl');
    this.state.textPrivary = this.getAttribute('textPrivary')
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