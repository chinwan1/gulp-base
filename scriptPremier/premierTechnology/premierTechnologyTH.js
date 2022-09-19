
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
    consentCookieID: 21,
    text: `เราใช้คุกกี้ที่มีความจำเป็นอย่างยิ่งต่อการทำงานของเว็บไซต์และประสงค์จะใช้คุกกี้ทางเลือกเพื่อช่วยให้สามารถปรับปรุงเว็บไซต์ ทั้งนี้เราไม่ใช้คุกกี้ทางเลือกจนกว่าท่านจะอนุญาตให้เปิดใช้งานคุกกี้ดังกล่าว (การตั้งค่าคุกกี้) หากท่านกด “ยอมรับทั้งหมด” จะหมายความว่าท่านยินยอมให้บันทึกและใช้คุกกี้ที่มีความจำเป็นและใช้คุกกี้ทางเลือกทั้งหมด`,
    titleModal: "การตั้งค่าความเป็นส่วนตัว",
    btnPrivacyText: "ตั้งค่า",
    btnTextOK: "ยอมรับทั้งหมด",
    btnRejectText: "",
    btnConfireText: "",
    labeltextPowerText: "",
    powerByText: "",
    preview: false,
    imageLogo:
      "https://isosuitestorage.blob.core.windows.net/isosuite/3237540036.png",
    categories: [
      {
        id: 1,
        label: "การตั้งค่าความเป็นส่วนตัว",
        focusAllow: false,
        hasDispalyAllow: false,
        purposes: [
          {
            description: `ในนโยบายนี้ คำว่า “คุกกี้” ที่เราใช้จะหมายถึงคุกกี้และเทคโนโลยีอื่น ๆ ที่คล้ายคลึงกัน  เพื่อใช้ในการติดต่อสื่อสารทางอิเล็กทรอนิกส์ ซึ่งอยู่ภายใต้ข้อกำหนดตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562</br>
                  <strong style="margin-top:15px;display:inline-block;">1. คุกกี้คืออะไร</strong></br>
                  คุกกี้คือ text files หรือชิ้นส่วนข้อมูลที่เว็บไซต์ขอให้เบราเซอร์จัดเก็บไว้ในคอมพิวเตอร์หรืออุปกรณ์พกพาของท่าน โดยคุกกี้จะช่วยให้เว็บไซต์จดจำการใช้งานและการตั้งค่าความต้องการของผู้ใช้เอาไว้ ช่วยในการจัดเก็บรายละเอียดข้อมูลประวัติการใช้งานอินเทอร์เน็ตของท่าน หรือ พฤติกรรมการเยี่ยมชม Website ของท่าน
                  อินเทอร์เน็ตเบราว์เซอร์ส่วนใหญ่รองรับคุกกี้ แต่อย่างไรก็ตาม ผู้ใช้งานสามารถตั้งค่าเบราวเซอร์ของตัวเองไม่ให้รับคุกกี้บางประเภทหรือคุกกี้อย่างใดอย่างหนึ่งได้</br>
                  <strong style="margin-top:15px;display:inline-block;">2. บริษัทใช้คุกกี้อย่างไร</strong></br>
                  บริษัทจะจัดเก็บข้อมูลการเข้าเยี่ยมชม Website : https://www.premier-technology.co.th/index.php จากผู้เข้าเยี่ยมชม
                  ทุกราย ผ่านคุกกี้หรือเทคโนโลยีที่ใกล้เคียง และบริษัทจะใช้ Cookies เพื่อประโยชน์ ในการพัฒนาประสิทธิภาพในการเข้าถึงบริการของบริษัทผ่าน internet รวมถึงเพื่อให้ทราบได้ว่า ท่านมีปฏิสัมพันธ์กับเนื้อหาในเว็บไซต์ของบริษัทอย่างไร และเพื่อช่วยปรับปรุงพัฒนาประสบการณ์การใช้งานให้ดีขึ้นเมื่อท่านเข้าเยี่ยมชมเว็บไซต์ของบริษัท</br>
                  <strong style="margin-top:15px;display:inline-block;">3. การจัดการคุกกี้</strong></br>
                  ท่านสามารถยอมรับหรือปฏิเสธคุกกี้ได้ที่แถบข้อความที่ปรากฏขึ้นมา (Pop-up cookies banner) หากท่านประสงค์ที่จะปิดการใช้งานคุกกี้ของเว็บไซต์ ท่านสามารถจัดการคุกกี้ในเบราว์เซอร์ของท่านได้โดยการตั้งค่า ดังนี้</br>
                  <div style="margin:5px 0 5px 0">
                    Cookies settings in Chrome <a href="https://support.google.com/chrome/answer/95647?hl=en&amp;ref_topic=14666" target="_blank">This is a link</a> </br>
                    Cookies settings in Firefox <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&redirectslug=Cookies" target="_blank">This is a link</a> </br>
                    Cookies settings in Safari and iOS  <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank">This is a link</a> </br>
                    Cookies settings in Microsoft Edge  <a href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d#ie=ie-10" target="_blank">This is a link</a> </br>
                  </div>
                  อย่างไรก็ตาม บริการบางอย่างบนเว็บไซต์ของ ร้านปันกัน โดย มูลนิธิยุวทพัฒน์ จำเป็นต้องมีการใช้งานคุกกี้ หากท่านปิดการทำงานคุกกี้ อาจทำให้ท่านใช้งานฟังก์ชันบางอย่างหรือทั้งหมดของบริการดังกล่าวได้อย่างไม่ราบรื่น</br>
                  <strong style="margin-top:15px;display:inline-block;">4. คุกกี้ของบุคคลที่สาม</strong></br>
                  คุกกี้ของบุคคลที่สาม คือ คุกกี้ถูกกำหนดโดยเว็บไซต์ของบุคคลที่สามแยกต่างหากจากไซต์ที่ท่านกำลังเยี่ยมชม เช่น ผู้ให้บริการข้อมูล โฆษณา หรือการวิเคราะห์บนเว็บไซต์
                  บริษัทไม่ได้แบ่งปันข้อมูลใดๆ ที่อาจระบุตัวตนของท่านให้แก่บุคคลที่สามเหล่านี้ บุคคลที่สามอาจใส่คุกกี้ไว้ในคอมพิวเตอร์หรืออุปกรณ์พกพาของท่านเมื่อท่านเข้าไปเยี่ยมชมเว็บไซต์อื่นๆ ที่ไม่ใช่เว็บไซต์ของบริษัท หลักเกณฑ์ในการใช้คุกกี้เหล่านี้เป็นไปตามนโยบายเกี่ยวกับคุกกี้ของบุคคลที่สามดังกล่าว ซึ่งบริษัทไม่มีอำนาจบนเว็บไซต์ของบุคคลที่สาม โดยท่านสามารถเลือกที่จะไม่ยอมรับคุกกี้ของบุคคลที่สามนี้ได้โดยการตั้งค่าที่เบราว์เซอร์ของท่าน</br>
                  <strong style="margin-top:15px;display:inline-block;">5. การแก้ไขเปลี่ยนแปลงนโยบายคุกกี้</strong></br>        
                  บริษัทอาจแก้ไขเปลี่ยนแปลงนโยบายคุกกี้ฉบับนี้เป็นครั้งคราว โดยท่านสามารถทราบข้อกำหนดและเงื่อนไขนโยบายที่มีการแก้ไขเปลี่ยนแปลงนี้ได้ผ่านทางเว็บไซต์ของบริษัท
                  <strong style="margin-top:15px;display:inline-block;">6. รายละเอียดการติดต่อ</strong></br>
                  หากท่านต้องการสอบถามข้อมูลเกี่ยวกับนโยบายคุกกี้ฉบับนี้ ท่านสามารถติดต่อได้ที่ <a href="mailto:DPO_PT@pt.premier.co.th">DPO_PT@pt.premier.co.th</a>
                  `,
            id: 1,
            title: "การตั้งค่าความเป็นส่วนตัว",
            focusAllow: false,
            hasDispalyAllow: false,
          },
        ],
      },
      {
        id: 85,
        label: "คุกกี้ที่มีความจำเป็น",
        focusAllow: true,
        hasDispalyAllow: true,
        purposes: [
          {
            id: 73,
            focusAllow: true,
            hasDispalyAllow: true,
            title: "คุกกี้ที่มีความจำเป็น",
            keepAliveData: '30d',
            code: `PT-TH-001`,
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
              คุกกี้เหล่านี้จำเป็นสำหรับการทำงานของเว็บไซต์ และไม่สามารถปิดการใช้งานในระบบของเราได้ และโดยปกติแล้ว คุกกี้เหล่านี้จะถูกกำหนดไว้เพื่อตอบสนองต่อการดำเนินการร้องขอบริการของคุณ เช่น การตั้งค่าความเป็นส่วนตัว การเข้าสู่ระบบ หรือการกรอกแบบฟอร์ม เว็บไซต์จะไม่สามารถทำงานอย่างถูกต้องได้เลยหากไม่มีการเก็บรวบรวมคุกกี้เหล่านี้
              <table style="margin-top:20px;">
                <tr>
                  <th>กลุ่มย่อยของคุกกี้</th>
                  <th>คุกกี้</th>
                  <th>คุกกี้ที่ใช้</th>
                </tr>
                <tr>
                  <td class="td-col-1">premier-technology.co.th  </td>
                  <td class="td-col-2">[abcdef0123456789]{32}</td>
                  <td>First-party</td>
                </tr>
              </table>
              `,
          },
        ],
      },
      {
        id: 81,
        label: "คุกกี้ประสิทธิภาพ",
        focusAllow: false,
        hasDispalyAllow: false,
        purposes: [
          {
            id: 75,
            title: "คุกกี้ประสิทธิภาพ",
            code: 'PT-TH-002',
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
                  white-space: normal;rayavadeeder-radius: 100px
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
              คุกกี้ประเภทนี้ทำให้เราสามารถนับจำนวนผู้เข้าชมเว็บไซต์ และแหล่งที่มาของผู้เข้าชมเหล่านั้น ทำให้เข้าใจว่าผู้เข้าชม/ผู้ใช้มีการปฏิสัมพันธ์กับเว็บไซต์อย่างไรบ้าง และหน้าเว็บใดที่ได้รับความนิยมมากที่สุดหรือน้อยที่สุด โดยการเก็บรวบรวมข้อมูลโดยไม่ระบุตัวตนของท่านอย่างไม่เฉพาะเจาะจงแก่เราช่วยให้เรา สามารถพัฒนาและมอบประสบการณ์การใช้งานเว็บไซต์ที่ดีกว่าแก่ท่าน หากท่านไม่อนุญาตให้ใช้คุกกี้ประเภทนี้ เราจะไม่อาจทราบได้ว่าท่านเคยมาเข้าชมเว็บไซต์ของเราเมื่อใด และไม่สามารถติดตามประสิทธิภาพการประมวลผลของหน้าเว็บได้
              <table style="margin-top:20px;">
                <tr>
                  <th>กลุ่มย่อยของคุกกี้</th>
                  <th>คุกกี้</th>
                  <th>คุกกี้ที่ใช้</th>
                </tr>
                <tr>
                  <td class="td-col-1">premier-technology.co.th</td>
                  <td class="td-col-2">-</td>
                  <td>First-party</td>
                </tr>
              </table>
              `,
          },
        ],
      }
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