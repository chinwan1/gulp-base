"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var storeDatafd924 = {
  state: {
    cookieID: '',
    titleModal: '',
    priveryModal: '',
    purposes: [],
    preview: true,
    ciColor: {
      footerPrivacyComponay: {
        privacyTextLinkColor: '',
        privacyTextColor: '',
        privacySettingColor: '',
        bgBtnOkTextColor: '',
        btnTextOkBgColor: ''
      },
      modalComponay: {
        modalTitleColor: '',
        modelSubTitleColor: '',
        btnRejectTextColor: '',
        btnRejectBgColor: '',
        btnConfireTextColor: '',
        btnConfireBgColor: '',
        purposeTextColor: '',
        purposeDetailText: '',
        labeltextPower: '',
        powerBy: ''
      }
    }
  },
  sendEventToPreview: function sendEventToPreview(data) {
    var myEvent = new CustomEvent("eventModel", {
      bubbles: true,
      data: data
    });
    document.dispatchEvent(myEvent);
  },
  getCiFooterPrivacyComponay: function getCiFooterPrivacyComponay() {
    return storeDatafd924.state.ciColor.footerPrivacyComponay;
  },
  getCiModalComponay: function getCiModalComponay() {
    return storeDatafd924.state.ciColor.modalComponay;
  },
  loadDataFromPersistence: function loadDataFromPersistence() {
    var storeData = localStorage.getItem('storeDatafd924');
    if (!storeData) return {
      emptyData: true
    };
    var item = JSON.parse(storeData);
    if (!item) return {
      emptyData: true
    };
    return {
      emptyData: false,
      data: item
    };
  },
  mapperStateAllow: function mapperStateAllow(oldState, newState) {
    return newState.map(function (item) {
      var found = oldState.find(function (o) {
        return o.id === item.id;
      });
      if (found) item.hasAllow = found.hasAllow;
      return item;
    });
  },
  createNewState: function createNewState(oldState, newState) {
    var purposes = storeDatafd924.mapperStateAllow(oldState, newState);
    return {
      purposes: purposes
    };
  },
  setInitState: function setInitState(input) {
    storeDatafd924.state.titleModal = input.titleModal;
    storeDatafd924.state.priveryModal = input.priveryModal;
    storeDatafd924.state.purposes = input.purposes;

    if (Object.keys(input.ciColor).length) {
      storeDatafd924.state.ciColor = input.ciColor;
    }

    var localStore = storeDatafd924.loadDataFromPersistence();

    if (!localStore.emptyData) {
      var newState = storeDatafd924.createNewState(localStore.data.purposes, input.purposes);
      storeDatafd924.state.purposes = newState.purposes;
    }
  },
  saveState: function saveState() {
    localStorage.setItem('storeDatafd924', JSON.stringify({
      purposes: storeDatafd924.state.purposes,
      cookieID: storeDatafd924.state.cookieID
    }));
  }
};
var CSent = {
  inititail: function inititail(options) {
    CSent.regsiterComponents();
    storeDatafd924.setInitState(options);

    if (CSent.hasCookie(document.cookie)) {
      CSent.renderIconCookieConnset();
    } else {
      CSent.renderFooterPrivacy(options);
    }
  },
  renderIconCookieConnset: function renderIconCookieConnset(options) {
    var element = document.createElement(iconCookieCosent);
    document.getElementsByTagName('body')[0].append(element);
  },
  renderFooterPrivacy: function renderFooterPrivacy(options) {
    var element = document.createElement(footerPrivacy);
    element.setAttribute('moreUrl', options.link || '');
    element.setAttribute('textPrivary', options.text || '');
    element.setAttribute('webkit', options.webkit || '');
    document.getElementsByTagName('body')[0].append(element);
  },
  regsiterComponents: function regsiterComponents() {
    var components = [{
      tag: footerPrivacy,
      value: FooterPrivacy
    }, {
      tag: purpostBox,
      value: PurpostBox
    }, {
      tag: purpostItem,
      value: PurpostItem
    }, {
      tag: cookieConsent,
      value: CookieCosent
    }, {
      tag: iconCookieCosent,
      value: IconCookieCosent
    }];

    for (var _i = 0, _components = components; _i < _components.length; _i++) {
      var item = _components[_i];

      if (!customElements.get(item.tag)) {
        customElements.define(item.tag, item.value);
      }
    }
  },
  hasCookie: function hasCookie(cname) {
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
  }
};
var footerPrivacy = "fd924-footer-privacy";

var FooterPrivacy = /*#__PURE__*/function (_HTMLElement) {
  _inherits(FooterPrivacy, _HTMLElement);

  var _super = _createSuper(FooterPrivacy);

  function FooterPrivacy() {
    var _this;

    _classCallCheck(this, FooterPrivacy);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", _defineProperty({
      text: '',
      link: '',
      webkit: '',
      confirm: '',
      urlMoreCookie: '',
      textPrivary: ''
    }, "webkit", ''));

    return _this;
  }

  _createClass(FooterPrivacy, [{
    key: "connectedCallback",
    value: function connectedCallback(options) {
      this.initValue();
      this.renderHtml();
      this.registerEvent();
    }
  }, {
    key: "renderHtml",
    value: function renderHtml() {
      this.innerHTML =
      /*html*/
      "\n      <div id=\"cokiepop\" class=\"fd924-footer-privacy\">\n      <div class=\"fd924-footer-wrapper\">\n        <div class=\"fd924-left-box\"> \n          ".concat(this.state.textPrivary, "\n        </div>\n\n        <div class=\"fd924-right-box\">\n          <a  href=\"#\" class=\"fd924-setting\">\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32</a>\n          <div id=\"btnconfirm\" class=\"fd924-footer-btnconfirm\">\n            <span>\u0E15\u0E01\u0E25\u0E07</span>\n          </div>\n        </div>\n      </div>\n      </div>\n\t\t");
      var ci = storeDatafd924.getCiFooterPrivacyComponay();
      this.querySelector('.fd924-pricary-link').style.color = ci.privacyTextLinkColor;
      this.querySelector('.fd924-left-box').style.color = ci.privacyTextLinkColor;
      this.querySelector('.fd924-setting').style.color = ci.footerPrivacyComponay;
      var btnPrivacy = this.querySelector('.fd924-footer-btnconfirm');
      btnPrivacy.style.color = ci.bgBtnOkTextColor;
      btnPrivacy.style.background = ci.btnTextOkBgColor;
    }
  }, {
    key: "registerEvent",
    value: function registerEvent() {
      this.querySelector("#btnconfirm").addEventListener("click", this.onAccept.bind(this));
      this.querySelector(".fd924-setting").addEventListener("click", this.onSetting.bind(this));
    }
  }, {
    key: "onSetting",
    value: function onSetting(e) {
      e.preventDefault();
      var element = document.createElement(cookieConsent);
      document.getElementsByTagName('body')[0].append(element);
      if (storeDatafd924.state.preview) storeDatafd924.sendEventToPreview({
        model: 'Open'
      });
    }
  }, {
    key: "initValue",
    value: function initValue() {
      this.state.urlMoreCookie = this.getAttribute('moreurl');
      this.state.textPrivary = this.getAttribute('textPrivary');
    }
  }, {
    key: "onAccept",
    value: function onAccept() {
      try {
        var d = new Date();
        var exdays = 365;
        var cvalue = window.navigator.language + "  " + window.navigator.platform;
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        document.cookie = "CONSENT=" + cvalue + ";" + expires + ";path=/";
        document.getElementById("cokiepop").remove();
        var element = document.createElement(iconCookieCosent);
        document.getElementsByTagName('body')[0].append(element);
      } catch (error) {
        console.log(error);
      }
    }
  }]);

  return FooterPrivacy;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

var purpostItem = "fd924-purpost-item";

var PurpostItem = /*#__PURE__*/function (_HTMLElement2) {
  _inherits(PurpostItem, _HTMLElement2);

  var _super2 = _createSuper(PurpostItem);

  function PurpostItem() {
    var _this2;

    _classCallCheck(this, PurpostItem);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this2), "state", {
      index: 0,
      title: "",
      description: "",
      hasExpland: false,
      hasAccept: false
    });

    return _this2;
  }

  _createClass(PurpostItem, [{
    key: "connectedCallback",
    value: function connectedCallback(options) {
      this.initValue();
      this.renderHtml();
      this.registerEvent();
    }
  }, {
    key: "renderHtml",
    value: function renderHtml() {
      this.innerHTML =
      /*html*/
      "\n\t\t\t\t<div class=\"fd924-purpose-box-item\">\n\t\t\t\t\t<div class=\"fd924-purpose-box-header\">\n\t\t\t\t\t\t<div class=\"fd924-area-explad\"></div>\n\t\t\t\t\t\t<div class=\"fd924-purpose-left-box\">\n            <div class=\"fd924-pupose-expand\"><span></span><span></span></div>\n\t\t\t\t\t\t\t<p class=\"fd924-tilte fd924-text-title-card\">".concat(storeDatafd924.state.purposes[this.state.index].title, "</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"fd924-purpose-right-box\">\n\t\t\t\t\t\t\t<label class=\"fd924-switch\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" ").concat(storeDatafd924.state.purposes[this.state.index].hasAllow ? "checked" : "", " >\t\n\t\t\t\t\t\t\t<span class=\"fd924-slider round\"></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"fd924-detail fd924-text-detail has-close-detail\">\n\t\t\t\t\t\t").concat(storeDatafd924.state.purposes[this.state.index].description, "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t");
      var ci = storeDatafd924.getCiModalComponay();
      this.querySelector('.fd924-text-title-card').style.color = ci.purposeTextColor;
      this.querySelector('.fd924-text-detail').style.color = ci.purposeTextColor;
    }
  }, {
    key: "initValue",
    value: function initValue(input) {
      this.state.index = this.getAttribute("data-index");
      var item = storeDatafd924.state.purposes[this.state.index];
    }
  }, {
    key: "onRejectAll",
    value: function onRejectAll() {
      var input = this.querySelector("input");
      input.checked = false;
    }
  }, {
    key: "onConfirmAll",
    value: function onConfirmAll() {
      var input = this.querySelector("input");
      input.checked = true;
    }
  }, {
    key: "onToggleExpand",
    value: function onToggleExpand() {
      this.state.hasExpland = !this.state.hasExpland;
      var domItem = this.querySelector(".fd924-detail");
      var domExpland = this.querySelector(".fd924-pupose-expand");

      if (this.state.hasExpland) {
        domItem.style["margin-top"] = "18px";
        domItem.classList.add("has-open-deatail");
        domItem.classList.remove("has-close-detail");
        domExpland.classList.add("subtract");
      } else {
        domItem.classList.remove("has-open-deatail");
        domItem.classList.add("has-close-detail");
        domExpland.classList.remove("subtract");
        setTimeout(function () {
          domItem.style["margin-top"] = "0";
        }, 200);
      }
    }
  }, {
    key: "registerEvent",
    value: function registerEvent() {
      var _this3 = this;

      this.querySelector("input").addEventListener('click', function (event) {
        _this3.state.hasAccept = event.target.checked;
        storeDatafd924.saveState();
      });
      this.querySelector(".fd924-area-explad").addEventListener('click', this.onToggleExpand.bind(this));
      document.addEventListener("onEventRejectAll", this.onRejectAll.bind(this));
      document.addEventListener("onEventConfirmAll", this.onConfirmAll.bind(this));
    }
  }]);

  return PurpostItem;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

var purpostBox = "fd924-purpost-box";

var PurpostBox = /*#__PURE__*/function (_HTMLElement3) {
  _inherits(PurpostBox, _HTMLElement3);

  var _super3 = _createSuper(PurpostBox);

  function PurpostBox() {
    var _this4;

    _classCallCheck(this, PurpostBox);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this4 = _super3.call.apply(_super3, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this4), "state", {
      title: ""
    });

    return _this4;
  }

  _createClass(PurpostBox, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.initValue();
      this.renderHtml();
    }
  }, {
    key: "renderHtml",
    value: function renderHtml() {
      this.innerHTML =
      /*html*/
      "\n\t\t<div class=\"fd924-purpost-box\">\n\t\t\t<div class=\"fd924-purpose-box-title \">\n\t\t\t\t<p class=\"fd924-text-privacy-text\">".concat(this.state.title, "</p>\n\t\t\t</div>\n\t\t\t<div class=\"fd924-purpose-box-list\">\n\t\t\t\t").concat(this.renderContent(), "\n\t\t\t</div>\n\t\t</div>\n\t\t");
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var html = '';

      for (var i = 0; i < storeDatafd924.state.purposes.length; i++) {
        html += "<fd924-purpost-item data-index=".concat(i, " ></fd924-purpost-item>");
      }

      return html;
    }
  }, {
    key: "initValue",
    value: function initValue(input) {
      this.state.title = storeDatafd924.state.priveryModal;
    }
  }]);

  return PurpostBox;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

var cookieConsent = "fd924-cookie-cosent";

var CookieCosent = /*#__PURE__*/function (_HTMLElement4) {
  _inherits(CookieCosent, _HTMLElement4);

  var _super4 = _createSuper(CookieCosent);

  function CookieCosent() {
    var _this5;

    _classCallCheck(this, CookieCosent);

    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    _this5 = _super4.call.apply(_super4, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this5), "state", {
      hasOpen: true,
      titleModal: ''
    });

    return _this5;
  }

  _createClass(CookieCosent, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.initValue();
      this.renderHtml();
      this.registerEvent();
    }
  }, {
    key: "initValue",
    value: function initValue() {
      this.state.titleModal = storeDatafd924.state.titleModal;
      this.state.description = this.getAttribute('data-description');
    }
  }, {
    key: "renderHtml",
    value: function renderHtml() {
      this.innerHTML =
      /*html*/
      "\n\t\t<div class=\"fd924-cookie-cosent \">\n\t\t\t<div class=\"fd924-model-cookie fd924-modal\">\n\t\t\t\t<div class=\"fd924-model-content \">\n\t\t\t\t\t<div class=\"fd924-model-header\">\n\t\t\t\t\t\t<p class=\"fd924-text-title-header\">".concat(this.state.titleModal, "</p>\n\t\t\t\t\t\t<div class=\"fd924-model-icon-x\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn-close\" aria-label=\"Close\"></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"fd924-model-body\" >\n\t\t\t\t\t\t<fd924-purpost-box  ></fd924-purpost-box>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"fd924-model-footer\">\n\t\t\t\t\t\t\t<div class=\"fd924-footer-btn\">\n\t\t\t\t\t\t\t\t<button class=\"fd924-btn fd924-btn-left\">\n\t\t\t\t\t\t\t\t\tReject All\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t<button class=\"fd924-btn fd924-btn-right\">\n\t\t\t\t\t\t\t\t\tConfirm My Choices\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"fd924-box-powered-by\">\n\t\t\t\t\t\t\t\t<a href=\"https://www.google.co.th/\" >\t\n\t\t\t\t\t\t\t\t\t<span class=\"fd924-powerd-by\">Powered by</span> <span class=\"fd924-powerd-link\">Test<span>\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"fd924-bg-overly fd924-modal-background\"></div>\n\t\t</div>");
      var ci = storeDatafd924.getCiModalComponay();
      this.querySelector(".fd924-cookie-cosent").classList.add("fd924-anime");
      this.querySelector('.fd924-text-title-header').style.color = ci.modalTitleColor;
      this.querySelector('.fd924-text-privacy-text').style.color = ci.modelSubTitleColor;
      var btnLeft = this.querySelector('.fd924-btn-left');
      btnLeft.style.color = ci.btnRejectTextColor;
      btnLeft.style.background = ci.btnRejectBgColor;
      var btnRight = this.querySelector('.fd924-btn-right');
      btnRight.style.color = ci.btnConfireTextColor;
      btnRight.style.background = ci.btnConfireBgColor;
      this.querySelector('.fd924-powerd-by').style.color = ci.labeltextPower;
      this.querySelector('.fd924-powerd-link').style.color = ci.powerBy;
    }
  }, {
    key: "onToggleModal",
    value: function onToggleModal() {
      var _this6 = this;

      this.state.hasOpen = !this.state.hasOpen;

      if (!this.state.hasOpen) {
        this.querySelector(".fd924-cookie-cosent").classList.add("fd924-out");
        setTimeout(function () {
          _this6.remove();
        }, 500);
      }
    }
  }, {
    key: "setStateSwitch",
    value: function setStateSwitch(state) {
      for (var i = 0; i < storeDatafd924.state.purposes.length; i++) {
        storeDatafd924.state.purposes[i].hasAllow = state;
      }
    }
  }, {
    key: "onHandeRejactAll",
    value: function onHandeRejactAll() {
      var myEvent = new CustomEvent("onEventRejectAll", {
        bubbles: true
      });
      document.dispatchEvent(myEvent);
      this.setStateSwitch(false);
      storeDatafd924.saveState();
    }
  }, {
    key: "onHandeConfirmAll",
    value: function onHandeConfirmAll() {
      var myEvent = new CustomEvent("onEventConfirmAll", {
        bubbles: true
      });
      document.dispatchEvent(myEvent);
      this.setStateSwitch(true);
      storeDatafd924.saveState();
    }
  }, {
    key: "registerEvent",
    value: function registerEvent() {
      this.querySelector(".fd924-model-icon-x").addEventListener('click', this.onToggleModal.bind(this));
      this.querySelector(".fd924-bg-overly").addEventListener('click', this.onToggleModal.bind(this));
      this.querySelector(".fd924-btn-left").addEventListener('click', this.onHandeRejactAll.bind(this));
      this.querySelector(".fd924-btn-right").addEventListener('click', this.onHandeConfirmAll.bind(this));
    }
  }]);

  return CookieCosent;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

var iconCookieCosent = "fd924-icon-cookie";

var IconCookieCosent = /*#__PURE__*/function (_HTMLElement5) {
  _inherits(IconCookieCosent, _HTMLElement5);

  var _super5 = _createSuper(IconCookieCosent);

  function IconCookieCosent() {
    _classCallCheck(this, IconCookieCosent);

    return _super5.apply(this, arguments);
  }

  _createClass(IconCookieCosent, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this7 = this;

      this.renderHtml();
      this.registerEvent();
      setTimeout(function () {
        var divIcon = _this7.querySelector(".fd924-icon-cookie");

        if (divIcon.classList.contains("fd924-icon-cookie-close")) {
          divIcon.classList.remove("fd924-icon-cookie-close");
          divIcon.classList.add("fd924-icon-cookie-open");
        }
      }, 10);
    }
  }, {
    key: "renderHtml",
    value: function renderHtml() {
      this.innerHTML =
      /*html*/
      "\n\t\t<a class=\"fd924-icon-cookie fd924-icon-cookie-close\" href=\"#\">\n\t\t\tIcon\n\t\t</a>";
    }
  }, {
    key: "registerEvent",
    value: function registerEvent() {
      this.querySelector(".fd924-icon-cookie").addEventListener('click', function (e) {
        e.preventDefault();
        var element = document.createElement(cookieConsent);
        document.getElementsByTagName('body')[0].append(element);
        if (storeDatafd924.state.preview) storeDatafd924.sendEventToPreview({
          model: 'Open'
        });
      });
    }
  }]);

  return IconCookieCosent;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));