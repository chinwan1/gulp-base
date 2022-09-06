window.onload = (event) => {
var css = document.createElement("link");
css.rel = "stylesheet";
css.href =
  "https://pdpa.thewiseworks.com/Libs/CookieConsent-theme-1.v1.min.css";
document.getElementsByTagName("head")[0].appendChild(css);
var script = document.createElement("script");

script.onload = function () {
  CSent.inititail({
    webkit: "Google",
    consentCookieID: 36,
    text: `We use cookies that are essential to the functionality of the website and wish to use optional cookies to help us improve the website. We do not use optional cookies until you allow them to be enabled. (Cookies Setting) By clicking “Allow All”, you consent to the saving and use of all necessary cookies and use of optional cookies.`,
    titleModal: "Manage Consent Preferences",
    btnPrivacyText: "Setting",
    btnTextOK: "Allow all",
    btnRejectText: "",
    btnConfireText: "",
    labeltextPowerText: "",
    powerByText: "",
    preview: false,
    btnModelAccecpt: "Confirm setting",
    labelSwithLeft: "Enable",
    labelSwithRight: "Disable",
    labelForceAllow: "ForceAllow",
    imageLogo:
      "https://isosuitestorage.blob.core.windows.net/isosuite/730f75dafd73e.png",
    categories: [
      {
        id: 1,
        label: `Privacy Preference Center`,
        focusAllow: false,
        hasDispalyAllow: false,
        purposes: [
          {
            description: `Browsers' Cookies In this policy, the term “cookies” we use to refer to cookies and other similar technologies. for use in electronic communication which is under the requirements of the Personal Data Protection Act B.E. 2562</br>
                  <strong style="margin-top:15px;display:inline-block;">1. What are cookies?</strong></br>
                  Cookies are text files or pieces of information that a website asks your browser to store on your computer or mobile device. Cookies allow the website to remember the usage and preferences of the user. It helps to store details of your internet usage history or your browsing behavior.  Most Internet browsers support cookies. however Users can set their browser not to accept certain cookies or cookies.</br>
                  <strong style="margin-top:15px;display:inline-block;">2. How does the company use cookies?</strong></br>
                  The company will collect information about visiting the Website  https://www.rayaheritage.com:  from visitorsAll through cookies or similar technologies. and the company will use cookies for the benefit to improve the efficiency of accessing the company's services via the internet, including to know that How do you interact with the content on the Company's website? and to help improve the user experience when you visit our website.</br>
                  <strong style="margin-top:15px;display:inline-block;">3. How to manage Cookies</strong></br>
                  You can accept or decline cookies on the pop-up cookies banner. If you wish to disable cookies on the website You can manage cookies in your browser by setting the following:</br>
                  <div style="margin:5px 0 5px 0">
                    Cookies settings in Chrome <a href="https://support.google.com/chrome/answer/95647?hl=en&amp;ref_topic=14666" target="_blank">This is a link</a> </br>
                    Cookies settings in Firefox <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&redirectslug=Cookies" target="_blank">This is a link</a> </br>
                    Cookies settings in Safari and iOS  <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank">This is a link</a> </br>
                    Cookies settings in Microsoft Edge  <a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d#ie=ie-10" target="_blank">This is a link</a> </br>
                  </div>
                  However, some services on the Company Name's website  , require the use of cookies. If you disable cookies It may cause you to have difficulty using some or all of the functions of the Service.</br>
                  <strong style="margin-top:15px;display:inline-block;">4. How to manage Cookies</strong></br>
                  Third parties’ Cookies refer to Cookies that are determined by a third party’s website in separation from the website that you are visiting e.g. service provider of information, advertisement or analytic on website.
                  We do not share any information that may identify your identity to any such third parties.
                  Such third parties may incorporate Cookies on your computer or portable device when you visit other websites that are not our website. The use of such Cookies is subject to the Cookies Policy of such third parties and we have no power upon those third parties’ website. You may select to disable those third parties’ Cookies by managing setting on your browser.</br>
                  <strong style="margin-top:15px;display:inline-block;">5. Amendment of Cookies Policy</strong></br>        
                  We may from time to time amend the contents of this Cookies Policy. You may study such changes through the Company’s website.</br>
                  <strong style="margin-top:15px;display:inline-block;">6. Contact Information</strong></br>
                  If you have queries regarding this Cookies Policy, please contact at <a href="mailto:DPO_YBF@ybf.premier.co.th">DPO_YBF@ybf.premier.co.th</a>
                  `,
            id: 1,
            title: "Privacy Preference Center",
            focusAllow: false,
            hasDispalyAllow: false,
          },
        ],
      },
      {
        id: 80,
        label: "Performance Cookies",
        focusAllow: true,
        hasDispalyAllow: true,
        purposes: [
          {
            id: 104,
            focusAllow: false,
            hasDispalyAllow: true,
            title: "Performance Cookies",
            keepAliveData: '30d',
            code: `RayaH-EN-001`,
            description:
              `<style>
                table, td, th {
                  border: 1px solid;
                }
                td{
                  vertical-align: baseline;
                }
           		.td-col-1{
                  white-space: normal;
                  overflow: auto;
                  width: 117px;
                }
                .td-col-2{
                  white-space: normal;
                  overflow: auto;
                  max-width: 94px;
                }
                ::-webkit-scrollbar-thumb {
                    border: 5px solid transparent;
                    border-radius: 100px;
                    background-color: #7f7f7f;
                    background-clip: content-box
                }
                ::-webkit-scrollbar {
                  width: 20px
                }
                ::-webkit-scrollbar-track {
                  border-radius: 100px
                }

                table {
                  width: 100%;
                  border-collapse: collapse;
                }
              </style>
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.
              <table style="margin-top:20px;">
                <tr>
                  <th>Cookies Subgroup</th>
                  <th>Cookies</th>
                  <th>Cookies Used</th>
                </tr>
                <tr>
                  <td class="td-col-1">rayaheritage.com</td>
                  <td class="td-col-2">_ga</td>
                  <td>First-party</td>
                </tr>
                <tr>
                  <td class="td-col-1">rayaheritage.com</td>
                  <td  class="td-col-2" >_gid</td>
                  <td>First-party</td>
                </tr>
                <tr>
                  <td class="td-col-1">rayaheritage.com</td>
                  <td  class="td-col-2" >_gat</td>
                  <td>First-party</td>
                </tr>
                <tr>
                  <td class="td-col-1">rayaheritage.com</td>
                  <td  class="td-col-2" >_gat_UA-1754864-65</td>
                  <td>First-party</td>
                </tr>
                <tr>
                  <td class="td-col-1">synxis.com</td>
                  <td  class="td-col-2" >visid_incap_1215874</td>
                  <td>Third-party</td>
                </tr>
                <tr>
                  <td class="td-col-1">synxis.com</td>
                  <td  class="td-col-2" >nlbi_1215874</td>
                  <td>Third-party</td>
                </tr>
                <tr>
                  <td class="td-col-1">synxis.com</td>
                  <td  class="td-col-2" >incap_ses_768_1215874</td>
                  <td>Third-party</td>
                </tr>
              </table>
              `,
          },
        ],
      },
      {
        id: 82,
        label: "Targeting Cookies",
        focusAllow: false,
        hasDispalyAllow: false,
        purposes: [
          {
            id: 106,
            title: "Targeting Cookies",
            code: 'RayaH-EN-002',
            focusAllow: false,
            hasDispalyAllow: true,
            keepAliveData: '30d',
            description:
              `<style>
                table, td, th {
                  border: 1px solid;
                }
                td{
                  vertical-align: baseline;
                }
     		        .td-col-1{
                  white-space: normal;
                  overflow: auto;
                  width: 117px;
                }
                ::-webkit-scrollbar-thumb {
                    border: 5px solid transparent;
                    border-radius: 100px;
                    background-color: #7f7f7f;
                    background-clip: content-box
                }
                ::-webkit-scrollbar {
                  width: 20px
                }
                ::-webkit-scrollbar-track {
                  border-radius: 100px
                }
                .td-col-2{
                  white-space: normal;
                  overflow: auto;
                  max-width: 94px;
                }

                table {
                  width: 100%;
                  border-collapse: collapse;
                }
              </style>
              These cookies are used to collect general information, personal data and profile information for measurement and analysis in order to deliver the content and products or services and advertisement which best suits you and your interests. Without these cookies, You may receive general information and advertisement that might not meet your interest.
              <table style="margin-top:20px;">
                <tr>
                  <th>Cookies Subgroup</th>
                  <th>Cookies</th>
                  <th>Cookies Used</th>
                </tr>
                <tr>
                  <td class="td-col-1">rayaheritage.com</td>
                  <td class="td-col-2">_fbp</td>
                  <td>First-party</td>
                </tr>
                <tr>
                  <td class="td-col-1">rayaheritage.com</td>
                  <td class="td-col-2">_gat_gtag_UA_1754864_67</td>
                  <td>First-party</td>
                </tr>
                <tr>
                  <td class="td-col-1">rayaheritage.com</td>
                  <td class="td-col-2">_gcl_au</td>
                  <td>First-party</td>
                </tr>
              </table>
              `,
          },
        ],
      },
    ],

    ciColor: {
      footerPrivacyCompany: {
        privacyTextLinkColor: '#FFFFFF',
        privacyTextColor: '#FFFFFF',
        privacySettingColor: '#FFFFFF',
        bgBtnOkTextColor: '#FFFFFF',
        btnTextOkBgColor: '#5cb85c',
      },
      iconCookie: {
        bgColor: '#FFFFFF',
      },
      modalCompany: {
        modalTitleColor: '',
        modelSubTitleColor: '',
        btnRejectTextColor: '#FFFFFF',
        btnRejectBgColor: '#5cb85c',
        btnConfireTextColor: '#FFFFFF',
        btnConfireBgColor: '#5cb85c',
        purposeTextColor: '',
        purposeDetailText: '',
        labeltextPowerColor: '',
        powerByColor: '',
      },
    },
  });
};
script.src =
  "https://pdpa.thewiseworks.com/api/CMSCookieConsent/GetScriptCookieConsent?template=theme1";
document.getElementsByTagName("head")[0].appendChild(script);
    }