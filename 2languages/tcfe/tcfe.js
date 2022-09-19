window.onload = (event) => {
			var css = document.createElement('link');
			css.rel = "stylesheet"
			css.href = "https://pdpa.thewiseworks.com/Libs/CookieConsent-theme-1.v2.min.css"
			document.getElementsByTagName('head')[0].appendChild(css);
			var script = document.createElement('script');
			script.onload = function () {
  CSent.inititail({
    webkit: "Google",
    consentCookieID: 47,
    imageLogo: "https://isosuitestorage.blob.core.windows.net/isosuite/8WMYY6G1.png",
    customStyle: ``,
    languageIsoCodes: ["EN","TH"],
    defaultLanguage: "EN",
    enableDetectLanguage: true,
    languages: {
      TH: {
        labelFooterText: `เราใช้คุกกี้ที่มีความจำเป็นอย่างยิ่งต่อการทำงานของเว็บไซต์และประสงค์จะใช้คุกกี้ทางเลือกเพื่อช่วยให้สามารถปรับปรุงเว็บไซต์ ทั้งนี้เราไม่ใช้คุกกี้ทางเลือกจนกว่าท่านจะอนุญาตให้เปิดใช้งานคุกกี้ดังกล่าว (การตั้งค่าคุกกี้) หากท่านกด “ยอมรับทั้งหมด” จะหมายความว่าท่านยินยอมให้บันทึกและใช้คุกกี้ที่มีความจำเป็นและใช้คุกกี้ทางเลือกทั้งหมด`,
        labelTitleModal: "การตั้งค่าความเป็นส่วนตัว",
        labelBtnPrivacyText: "ตั้งค่า",
        labelBtnTextOK: "ยอมรับทั้งหมด",
        labelPowerByText: "Wisework",
        labelTextPowerText: "Powered by",
        labelSwithLeft: "เปิดใช้งาน",
        labelSwithRight: "ปิดใช้งาน",
        labelForceAllow: "เปิดใช้งานตลอดเวลา",
        labelBtnModelAccecpt: "ยืนยันการตั้งค่า",
      },
      EN: {
        labelFooterText: `We use cookies that are essential to the functionality of the website and wish to use optional cookies to help us improve the website. We do not use optional cookies until you allow them to be enabled. (Cookies Setting) By clicking “Allow All”, you consent to the saving and use of all necessary cookies and use of optional cookies.`,
        labelTitleModal: "Manage Consent Preferences",
        labelBtnPrivacyText: "Setting",
        labelBtnTextOK: "Allow all",
        labelPowerByText: "Wisework",
        labelTextPowerText: "Powered by",
        labelSwithLeft: "Enable",
        labelSwithRight: "Disable",
        labelForceAllow: "ForceAllow",
        labelBtnModelAccecpt: "Confirm setting",
      },
    },
    categories: [
      {
        id: 1,
        languages: {
          TH: { label: "การตั้งค่าความเป็นส่วนตัว"},
          EN: { label: `Privacy Preference Center` },
        },
        focusAllow: false,
        hasDispalyAllow: false,
        purposes: [
          {
            id: 1,
            focusAllow: false,
            hasDispalyAllow: false,
            injectCss: ``,
            languages: {
              TH: {
                  description: `ในนโยบายนี้ คำว่า “คุกกี้” ที่บริษัทใช้จะหมายถึงคุกกี้และเทคโนโลยีอื่น ๆ ที่คล้ายคลึงกัน  เพื่อใช้ในการติดต่อสื่อสารทางอิเล็กทรอนิกส์ ซึ่งอยู่ภายใต้ข้อกำหนดตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ.2562</br>
                  <strong style="margin-top:15px;display:inline-block;">1. คุกกี้คืออะไร</strong></br>
                    คุกกี้คือ text files หรือชิ้นส่วนข้อมูลที่เว็บไซต์ขอให้เบราเซอร์จัดเก็บไว้ในคอมพิวเตอร์หรืออุปกรณ์พกพาของท่าน โดยคุกกี้จะช่วยให้เว็บไซต์จดจำการใช้งานและการตั้งค่าความต้องการของผู้ใช้เอาไว้ ช่วยในการจัดเก็บรายละเอียดข้อมูลประวัติการใช้งานอินเทอร์เน็ตของท่าน หรือ พฤติกรรมการเยี่ยมชม Website ของท่าน  
                    อินเทอร์เน็ตเบราว์เซอร์ส่วนใหญ่รองรับคุกกี้ แต่อย่างไรก็ตาม ผู้ใช้งานสามารถตั้งค่าเบราวเซอร์ของตัวเองไม่ให้รับคุกกี้บางประเภทหรือคุกกี้อย่างใดอย่างหนึ่งได้</br>
                  <strong style="margin-top:15px;display:inline-block;">2. บริษัทใช้คุกกี้อย่างไร</strong></br>
                  บริษัทจะจัดเก็บข้อมูลการเข้าเยี่ยมชม Website : <a href="https://www.tcfe.or.th" target="_blank">https://www.tcfe.or.th</a> จากผู้เข้าเยี่ยมชม
                  ทุกราย ผ่านคุกกี้หรือเทคโนโลยีที่ใกล้เคียง และบริษัทจะใช้ Cookies เพื่อประโยชน์ ในการพัฒนาประสิทธิภาพในการเข้าถึงบริการของบริษัทผ่าน internet รวมถึงเพื่อให้ทราบได้ว่า ท่านมีปฏิสัมพันธ์กับเนื้อหาในเว็บไซต์ของบริษัทอย่างไร และเพื่อช่วยปรับปรุงพัฒนาประสบการณ์การใช้งานให้ดีขึ้นเมื่อท่านเข้าเยี่ยมชมเว็บไซต์ของบริษัท</br>
                  <strong style="margin-top:15px;display:inline-block;">3. การจัดการคุกกี้</strong></br>
                    ท่านสามารถยอมรับหรือปฏิเสธคุกกี้ได้ที่แถบข้อความที่ปรากฏขึ้นมา (Pop-up cookies banner) หากท่าน	ประสงค์ที่จะปิดการใช้งานคุกกี้ของเว็บไซต์ ท่านสามารถจัดการคุกกี้ในเบราว์เซอร์ของท่านได้โดยการตั้งค่า ดังนี้ </br>
                  <div style="margin:5px 0 5px 0">
                    Cookies settings in Chrome <a href="https://support.google.com/chrome/answer/95647?hl=en&amp;ref_topic=14666" target="_blank">This is a link</a> </br>
                    Cookies settings in Firefox <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&redirectslug=Cookies" target="_blank">This is a link</a> </br>
                    Cookies settings in Safari and iOS  <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank">This is a link</a> </br>
                    Cookies settings in Microsoft Edge  <a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d#ie=ie-10" target="_blank">This is a link</a> </br>
                  </div>
                    อย่างไรก็ตาม บริการบางอย่างบนเว็บไซต์ของโครงการร้อยพลังการศึกษาจำเป็นต้องมีการใช้คุกกี้ หากท่านปิดการทำงานคุกกี้อาจทำให้ท่านใช้งานฟังก์ชันบางอย่างหรือทั้งหมดของบริการดังกล่าวได้อย่างไม่ราบรื่น 
                  <strong style="margin-top:15px;display:inline-block;">4. คุกกี้ของบุคคลที่สาม</strong></br>
                    คุกกี้ของบุคคลที่สาม คือ คุกกี้ถูกกำหนดโดยเว็บไซต์ของบุคคลที่สามแยกต่างหากจากไซต์ที่ท่านกำลังเยี่ยมชม เช่น ผู้ให้บริการข้อมูล โฆษณา หรือการวิเคราะห์บนเว็บไซต์ 
                    บริษัทไม่ได้แบ่งปันข้อมูลใดๆ ที่อาจระบุตัวตนของท่านให้แก่บุคคลที่สามเหล่านี้ 
                    บุคคลที่สามอาจใส่คุกกี้ไว้ในคอมพิวเตอร์หรืออุปกรณ์พกพาของท่านเมื่อท่านเข้าไปเยี่ยมชมเว็บไซต์อื่นๆ ที่ไม่ใช่เว็บไซต์ของบริษัท หลักเกณฑ์ในการใช้คุกกี้เหล่านี้เป็นไปตามนโยบายเกี่ยวกับคุกกี้ของบุคคลที่สามดังกล่าว ซึ่งบริษัทไม่มีอำนาจบนเว็บไซต์ของบุคคลที่สาม โดยท่านสามารถเลือกที่จะไม่ยอมรับคุกกี้ของบุคคลที่สามนี้ได้โดยการตั้งค่าที่เบราว์เซอร์ของท่าน 
                  <strong style="margin-top:15px;display:inline-block;">5. การแก้ไขเปลี่ยนแปลงนโยบายคุกกี้</strong></br>        
                    บริษัทอาจแก้ไขเปลี่ยนแปลงนโยบายคุกกี้ฉบับนี้เป็นครั้งคราว โดยท่านสามารถทราบข้อกำหนดและเงื่อนไขนโยบายที่มีการแก้ไขเปลี่ยนแปลงนี้ได้ผ่านทางเว็บไซต์ของบริษัท
                  <strong style="margin-top:15px;display:inline-block;">6. รายละเอียดการติดต่อ</strong></br>
                    หากท่านต้องการสอบถามข้อมูลเกี่ยวกับนโยบายคุกกี้ฉบับนี้ ท่านสามารถติดต่อได้ที่ <a href="mailto:DPO_KTF@ktf.premier.co.th">DPO_KTF@ktf.premier.co.th</a>
                  `,
                  title: "การตั้งค่าความเป็นส่วนตัว",
              },
              EN: {
                  description: `In this policy, the term "Cookies" that we use refers to cookies and other similar technologies for use in electronic communications which is subject to the requirements of the Personal Data Protection Act, B.E.2562.</br>
                      <strong style="margin-top:15px;display:inline-block;">1. What are cookies?</strong></br>
                        Cookies is text files or piece of data that a website asks the browser to store on your computer or portable device. Cookies enables a website to remember the action and user preferences setting and to help store your internet usage history or website surfing behavior.  
                        Most internet browsers support Cookies. However, the users can disable the use of some types of Cookies on their browser setting.</br>
                      <strong style="margin-top:15px;display:inline-block;">2. How does the company use cookies?</strong></br>
                        We use Cookies and other similar technologies to collect data about visiting the website <a href="https://www.tcfe.or.th" target="_blank">https://www.tcfe.or.th</a> from every visitor and to enhance the efficiency of accessing the company’s services via the internet, as well as to learn how you interact with the contents in our website and to improve user experience when you visit our website.   
                      <strong style="margin-top:15px;display:inline-block;">3. How to manage Cookies</strong></br>
                        You can enable or disable Cookies by clicking on a Pop-up banner. In case you wish to disable Cookies, you can manage it on your browser setting as follows:</br>
                        <div style="margin:5px 0 5px 0">
                          <ul style="margin-left:30px;">
                            <li>Cookies settings in Chrome <a href="https://support.google.com/chrome/answer/95647?hl=en&amp;ref_topic=14666" target="_blank">This is a link</a> </br></li>
                            <li>Cookies settings in Firefox <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&redirectslug=Cookies" target="_blank">This is a link</a> </br></li>
                            <li> Cookies settings in Safari and iOS  <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank">This is a link</a> </br></li>
                            <li>Cookies settings in Microsoft Edge  <a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d#ie=ie-10" target="_blank">This is a link</a> </br></li>
                          </ul>
                        </div>
                        However, some services on Thailand Collaboration for Education’s website require the use of Cookies. Therefore, disabling Cookies may result in the inability to effectively use some or all functions of the website. 
                      <strong style="margin-top:15px;display:inline-block;">4. How to manage Cookies</strong></br>
                        Third parties’ Cookies refer to Cookies that are determined by a third party’s website in separation from the website that you are visiting e.g. service provider of information, advertisement or analytic on website. 
                        We do not share any information that may identify your identity to any such third parties. 
                        Such third parties may incorporate Cookies on your computer or portable device when you visit other websites that are not our website. The use of such Cookies is subject to the Cookies Policy of such third parties and we have no power upon those third parties’ website. You may select to disable those third parties’ Cookies by managing setting on your browser. 
                      <strong style="margin-top:15px;display:inline-block;">5. Amendment of Cookies Policy</strong></br>
                        We may from time to time amend the contents of this Cookies Policy. You may study such changes through the Company’s website. 
                      <strong style="margin-top:15px;display:inline-block;">6. Contact Information</strong></br>
                        If you have queries regarding this Cookies Policy, please contact at <a href="mailto:DPO_KTF@ktf.premier.co.th">DPO_KTF@ktf.premier.co.th</a>
                      `,
                  title: "Privacy Preference Center",

              }
            },
          },
        ],
      },
      {
        id: 80,
        languages: {
          TH: { label: "คุกกี้ประสิทธิภาพ"},
          EN: { label: `Performance Cookies` },
        },
        focusAllow: false,
        hasDispalyAllow: true,
        purposes: [
          {
            id: 130,
            focusAllow: false,
            hasDispalyAllow: true,
            code: "`TCFE-001",
            injectCss: ``,
            languages: {
              TH: {
                  description: `
                <style>
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
                คุกกี้ประเภทนี้จะเก็บข้อมูลต่าง ๆ ซึ่งอาจรวมถึงข้อมูลส่วนบุคคลของท่านและสร้างโปรไฟล์เกี่ยวกับตัวท่าน เพื่อให้เราสามารถวิเคราะห์และนำเสนอเนื้อหา สินค้า/บริการ และ/หรือ โฆษณาที่เหมาะสมกับความสนใจของท่านได้ ทั้งนี้ หากท่านไม่ยินยอมให้เราใช้คุกกี้ประเภทนี้ ท่านอาจได้รับข้อมูลและโฆษณาทั่วไปที่ไม่ตรงกับความสนใจของท่าน
                <table style="margin-top:20px;">
                <tr>
                  <th>กลุ่มย่อยของคุกกี้</th>
                  <th>คุกกี้</th>
                  <th>คุกกี้ที่ใช้</th>
                </tr>
                <tr>
                  <td class="td-col-1">tcfe.or.th</td>
                  <td class="td-col-2">_ga</td>
                  <td>First-party</td>
                </tr>
                <tr>
                  <td class="td-col-1">tcfe.or.th</td>
                  <td  class="td-col-2" >_gid</td>
                  <td>First-party</td>
                </tr>
                <tr>
                  <td class="td-col-1">tcfe.or.th</td>
                  <td  class="td-col-2" >_gat</td>
                  <td>First-party</td>
                </tr>
                </table>
              `,
                  title: "คุกกี้ประสิทธิภาพ",
              },
              EN: {
                  description: `<style>
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
                  <td class="td-col-1">tcfe.or.th</td>
                  <td class="td-col-2">_ga</td>
                  <td>First-party</td>
                </tr>
                <tr>
                  <td class="td-col-1">tcfe.or.th</td>
                  <td  class="td-col-2" >_gid</td>
                  <td>First-party</td>
                </tr>
                <tr>
                  <td class="td-col-1">tcfe.or.th</td>
                  <td  class="td-col-2" >_gat</td>
                  <td>First-party</td>
                </tr>
              </table>
              `,
                  title: "Performance Cookies",

              }
            },
          },
          
        ],
      },
      {
        id: 86,
        languages: {
          TH: { label: "คุกกี้ที่ช่วยเหลือในการทำงาน"},
          EN: { label: `Functional Cookies` },
        },
        focusAllow: false,
        hasDispalyAllow: true,
        purposes: [
          {
            id: 131,
            focusAllow: false,
            hasDispalyAllow: true,
            code: "TCFE-002",
            injectCss: ``,
            languages: {
              TH: {
                  description: `
                <style>
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
                <table style="margin-top:20px;">
                  <tr>
                    <th>Cookies Subgroup</th>
                    <th>Cookies</th>
                    <th>Cookies Used</th>
                  </tr>
                  <tr>
                  <td class="td-col-1">tcfe.or.th</td>
                  <td class="td-col-2">pll_language</td>
                  <td>First-party</td>
                </tr>
                </table>
              `,
                  title: "คุกกี้ที่ช่วยเหลือในการทำงาน",
              },
              EN: {
                  description: `<style>
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
              คุกกี้ประเภทนี้จะเก็บข้อมูลต่าง ๆ ซึ่งอาจรวมถึงข้อมูลส่วนบุคคลของท่านและสร้างโปรไฟล์เกี่ยวกับตัวท่าน เพื่อให้เราสามารถวิเคราะห์และนำเสนอเนื้อหา สินค้า/บริการ และ/หรือ โฆษณาที่เหมาะสมกับความสนใจของท่านได้ ทั้งนี้ หากท่านไม่ยินยอมให้เราใช้คุกกี้ประเภทนี้ ท่านอาจได้รับข้อมูลและโฆษณาทั่วไปที่ไม่ตรงกับความสนใจของท่าน
              <table style="margin-top:20px;">
                <tr>
                  <th>กลุ่มย่อยของคุกกี้</th>
                  <th>คุกกี้</th>
                  <th>คุกกี้ที่ใช้</th>
                </tr>
                <tr>
                  <td class="td-col-1">tcfe.or.th</td>
                  <td class="td-col-2">pll_language</td>
                  <td>First-party</td>
                </tr>
              </table>
              `,
                  title: "Functional Cookies",

              }
            },
          },
          
        ],
      },

    ],
    ciColor: {
      footerPrivacyCompany: {
		  privacyTextLinkColor: '#FFFFFF',
		  privacyTextColor: '#FFFFFF',
		  privacySettingColor: '#FFFFFF',
		  bgBtnOkTextColor: 'rgb(92, 184, 92)',
      btnTextOkBgColor: '#5cb85c',
      labelBtnTextOKBgColor: "#FFFFFF",
      },
      iconCookie: {
        bgColor: '#FFFFFF',
      },
      modalCompany: {
        modalTitleColor: "",
        modalSubTitleColor: "",
        btnRejectTextColor: '#FFFFFF',
        btnRejectBgColor: '#5cb85c',
        btnConfireTextColor: '#FFFFFF',
        btnConfireBgColor: '#5cb85c',
        purposeTextColor: "",
        purposeDetailText: "",
        labeltextPowerColor: "",
        powerByColor: "",
      },
    },
  });
			};
			script.src = "https://pdpa.thewiseworks.com/api/CMSCookieConsent/GetScriptCookieConsent?template=theme-1&version=v2";
			document.getElementsByTagName('head')[0].appendChild(script);
		}