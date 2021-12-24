var storeDatafd924 = {
  state: {
    cookieID: "",
    titleModal: "",
    subtitleModal: "",
    btnPrivacyText: "",
    btnTextOK: "",
    btnConfireText: "",
    purposes: [],
    labeltextPowerText: "",
    powerByText: "",
    textPrivary: "",
    preview: false,
    ciColor: {
      footerPrivacyCompany: {
        privacyTextLinkColor: "",
        privacyTextColor: "",
        privacySettingColor: "",
        bgBtnOkTextColor: "",
        btnTextOkBgColor: "",
      },
      iconCookie: {
        bgColor: "",
      },
      modalCompany: {
        modalTitleColor: "",
        modelSubTitleColor: "",
        btnRejectTextColor: "",
        btnRejectBgColor: "",
        btnRejectText: "",
        btnConfireTextColor: "",
        btnConfireBgColor: "",
        purposeTextColor: "",
        purposeDetailText: "",
        labeltextPowerColor: "",
        powerByColor: "",
      },
    },
  },
  sendEventToPreview(data) {
    const myEvent = new CustomEvent("eventModel", {
      bubbles: true,
      detail: data,
    });
    document.dispatchEvent(myEvent);
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
  watchEventModalPreview() {
    document.addEventListener("EventPreview", (e) => {
      var item = document.querySelector(cookieConsent);
      if (e.detail.action === "OPEN_MODAL" && !item) {
        var element = document.createElement(cookieConsent);
        document.getElementsByTagName("body")[0].append(element);
      } else if (e.detail.action === "CLOSED_MODAL" && item) {
        document
          .querySelector(`.fd924-cookie-cosent`)
          .classList.add("fd924-out");
        setTimeout(() => {
          item.remove();
        }, 500);
      } else if (e.detail.action === "INIT_TOKEN") {
        const data = e.detail.data;
        if (data.titleModal) storeDatafd924.state.titleModal = data.titleModal;
        if (data.subtitleModal)
          storeDatafd924.state.subtitleModal = data.subtitleModal;
        if (data.purposes && data.purposes.length) {
          storeDatafd924.state.purposes = data.purposes;
        } else if (data.purposes && data.purposes.length === 0) {
          storeDatafd924.state.purposes = [];
        }

        if (data.iconCookieBg) {
          storeDatafd924.state.ciColor.iconCookie.bgColor = data.iconCookieBg;
        }

        if (data.powerByText) {
          storeDatafd924.state.ciColor.modalCompany.powerByText =
            data.powerByText;
        }
      } else if (e.detail.action === "OPEN_ICON_COOKIE") {
        var itemPrivacy = document.querySelector("fd924-footer-privacy");
        if (itemPrivacy) itemPrivacy.remove();

        var iconCookie = document.querySelector(".fd924-icon-cookie");
        if (!iconCookie) {
          let element = document.createElement(iconCookieCosent);
          document.getElementsByTagName("body")[0].append(element);
        }
      } else if (e.detail.action === "OPEN_FOOTER") {
        var item = document.querySelector(cookieConsent);
        var itemCookie = document.querySelector("fd924-icon-cookie");
        var itemPrivacy = document.querySelector("fd924-footer-privacy");
        if (item) {
          document
            .querySelector(`.fd924-cookie-cosent`)
            .classList.add("fd924-out");
          setTimeout(() => {
            item.remove();
            if (!itemPrivacy) var e = CSent.renderFooterPrivacy({});
            if (storeDatafd924.state.preview) {
              var fp = document.querySelector(".fd924-footer-privacy");
              if (fp) fp.style.display = "block";
            }
          }, 500);
        }

        if (itemCookie) {
          itemCookie.remove();
          var e = CSent.renderFooterPrivacy({});
          if (storeDatafd924.state.preview) {
            var fp = document.querySelector(".fd924-footer-privacy");
            if (fp) fp.style.display = "block";
          }
        }
      }
    });
  },
  getCiFooterPrivacyCompany() {
    return storeDatafd924.state.ciColor.footerPrivacyCompany;
  },
  getCiModalCompany() {
    return storeDatafd924.state.ciColor.modalCompany;
  },
  loadDataFromPersistence() {
    var storeData =  storeDatafd924.getCookieByName("storeDatafd924");
    if (!storeData) return { emptyData: true };
    var item = JSON.parse(storeData);
    if (!item) return { emptyData: true };
    return {
      emptyData: false,
      data: item,
    };
  },
  mapperStateAllow(oldState, newState) {
    return newState.map((item) => {
      var found = oldState.find((o) => {
        return o.id === item.id;
      });
      if (found) item.hasAllow = found.hasAllow;
      return item;
    });
  },
  createNewState(oldState, newState) {
    var purposes = storeDatafd924.mapperStateAllow(oldState, newState);
    return {
      purposes,
    };
  },
  setInitState(input) {
    if (input.preview) storeDatafd924.state.preview = input.preview;
    storeDatafd924.state.textPrivary = input.text;
    storeDatafd924.state.titleModal = input.titleModal;
    storeDatafd924.state.subtitleModal = input.subtitleModal;
    storeDatafd924.state.btnPrivacyText = input.btnPrivacyText;
    storeDatafd924.state.btnTextOK = input.btnTextOK;
    storeDatafd924.state.btnRejectText = input.btnRejectText;
    storeDatafd924.state.purposes = input.purposes;
    storeDatafd924.state.btnConfireText = input.btnConfireText;
    storeDatafd924.state.labeltextPowerText = input.labeltextPowerText;
    storeDatafd924.state.powerByText = input.powerByText;
    if (Object.keys(input.ciColor).length) {
      storeDatafd924.state.ciColor = input.ciColor;
    }
    var localStore = storeDatafd924.loadDataFromPersistence();
    if (!localStore.emptyData) {
      var newState = storeDatafd924.createNewState(
        localStore.data.purposes,
        input.purposes
      );
      storeDatafd924.state.purposes = newState.purposes;
    }
  },
  saveState() {
    // localStorage.setItem(
    //   "storeDatafd924",
    //   JSON.stringify({
    //     purposes: storeDatafd924.state.purposes,
    //     cookieID: storeDatafd924.state.cookieID,
    //   })
    // );
    document.cookie = `storeDatafd924=${JSON.stringify({
      purposes: storeDatafd924.state.purposes,
      cookieID: storeDatafd924.state.cookieID,
    })}; path=/`;
  },
};

var CSent = {
  inititail: (options) => {
    storeDatafd924.setInitState(options);
    if (storeDatafd924.state.preview) {
      storeDatafd924.watchEventModalPreview();
    }

    CSent.regsiterComponents();
    if (storeDatafd924.getCookieByName("CONSENT")) {
      CSent.renderIconCookieConnset();
    } else {
      CSent.renderFooterPrivacy();
    }
  },
  renderIconCookieConnset() {
    let element = document.createElement(iconCookieCosent);
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
      { tag: purpostBox, value: PurpostBox },
      { tag: purpostItem, value: PurpostItem },
      { tag: cookieConsent, value: CookieCosent },
      { tag: iconCookieCosent, value: IconCookieCosent },
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
