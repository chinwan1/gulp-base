window.onload = (event)=>{
      var css = document.createElement('link');
      css.rel = "stylesheet"
      css.href = "https://pdpa.thewiseworks.com/Libs/CookieConsent.v1.min.css"
      document.getElementsByTagName('head')[0].appendChild(css);
      var script = document.createElement('script');
      script.onload = function () {
       CSent.inititail({
          consentCookieID: undefined,
          webkit: `Google`,
          text: `เราใช้คุกกี้ที่มีความจำเป็นอย่างยิ่งต่อการทำงานของเว็บไซต์และประสงค์จะใช้คุกกี้ทางเลือกเพื่อช่วยให้สามารถปรับปรุงเว็บไซต์ ทั้งนี้เราไม่ใช้คุกกี้ทางเลือกจนกว่าท่านจะอนุญาตให้เปิดใช้งานคุกกี้ดังกล่าว (การตั้งค่าคุกกี้) หากท่านกด “ยอมรับทั้งหมด” จะหมายความว่าท่านยินยอมให้บันทึกและใช้คุกกี้ที่มีความจำเป็นและใช้คุกกี้ทางเลือกทั้งหมด <a class='fd924-privacy-link' href='https://pankansociety.com/wp-content/uploads/2022/06/%E0%B8%99%E0%B9%82%E0%B8%A2%E0%B8%9A%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%B8%E0%B9%89%E0%B8%A1%E0%B8%84%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5%E0%B8%AA%E0%B9%88%E0%B8%A7%E0%B8%99%E0%B8%9A%E0%B8%B8%E0%B8%84-1.pdf'  >รายละเอียดเพิ่มเติม</a>`,
          titleModal: `Manage Consent Preferences`,
          subtitleModal: `การใช้งานคุกกี้

ในนโยบายนี้ คำว่า “คุกกี้” ที่เราใช้จะหมายถึงคุกกี้และเทคโนโลยีอื่น ๆ ที่คล้ายคลึงกัน  เพื่อใช้ในการติดต่อสื่อสารทางอิเล็กทรอนิกส์ ซึ่งอยู่ภายใต้ข้อกำหนดตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562

1. คุกกี้คืออะไร

คุกกี้คือ text files หรือชิ้นส่วนข้อมูลที่เว็บไซต์ขอให้เบราเซอร์จัดเก็บไว้ในคอมพิวเตอร์หรืออุปกรณ์พกพาของท่าน โดยคุกกี้จะช่วยให้เว็บไซต์จดจำการใช้งานและการตั้งค่าความต้องการของผู้ใช้เอาไว้ ช่วยในการจัดเก็บรายละเอียดข้อมูลประวัติการใช้งานอินเทอร์เน็ตของท่าน หรือ พฤติกรรมการเยี่ยมชม Website ของท่าน

อินเทอร์เน็ตเบราว์เซอร์ส่วนใหญ่รองรับคุกกี้ แต่อย่างไรก็ตาม ผู้ใช้งานสามารถตั้งค่าเบราวเซอร์ของตัวเองไม่ให้รับคุกกี้บางประเภทหรือคุกกี้อย่างใดอย่างหนึ่งได้

2. บริษัทใช้คุกกี้อย่างไร

บริษัทจะจัดเก็บข้อมูลการเข้าเยี่ยมชม Website : Domain name   จากผู้เข้าเยี่ยมชมทุกราย ผ่านคุกกี้หรือเทคโนโลยีที่ใกล้เคียง และบริษัทจะใช้ Cookies เพื่อประโยชน์ ในการพัฒนาประสิทธิภาพในการเข้าถึงบริการของบริษัทผ่าน internet รวมถึงเพื่อให้ทราบได้ว่า ท่านมีปฏิสัมพันธ์กับเนื้อหาในเว็บไซต์ของบริษัทอย่างไร และเพื่อช่วยปรับปรุงพัฒนาประสบการณ์การใช้งานให้ดีขึ้นเมื่อท่านเข้าเยี่ยมชมเว็บไซต์ของบริษัท

3. การจัดการคุกกี้ท่านสามารถยอมรับหรือปฏิเสธคุกกี้ได้ที่แถบข้อความที่ปรากฏขึ้นมา (Pop-up cookies banner) หากท่านประสงค์ที่จะปิดการใช้งานคุกกี้ของเว็บไซต์ ท่านสามารถจัดการคุกกี้ในเบราว์เซอร์ของท่านได้โดยการตั้งค่า ดังนี้

Cookies settings in Chrome(https://support.google.com/chrome/answer/95647?hl=en&amp;ref_topic=14666) 

Cookies settings in Firefox(https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer?redirectlocale=en-US&redirectslug=Cookies) 

Cookies settings in Safari and iOS(https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac)(https://support.apple.com/en-us/HT201265)

Cookies settings in Internet Explorer/ Microsoft Edge(https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d#ie=ie-10) )

อย่างไรก็ตาม บริการบางอย่างบนเว็บไซต์ของบริษัท ชื่อบริษัท จำเป็นต้องมีการใช้งานคุกกี้ หากท่านปิดการทำงานคุกกี้ อาจทำให้ท่านใช้งานฟังก์ชันบางอย่างหรือทั้งหมดของบริการดังกล่าวได้อย่างไม่ราบรื่น

4. คุกกี้ของบุคคลที่สาม

คุกกี้ของบุคคลที่สาม คือ คุกกี้ถูกกำหนดโดยเว็บไซต์ของบุคคลที่สามแยกต่างหากจากไซต์ที่ท่านกำลังเยี่ยมชม เช่น ผู้ให้บริการข้อมูล โฆษณา หรือการวิเคราะห์บนเว็บไซต์บริษัทไม่ได้แบ่งปันข้อมูลใดๆ ที่อาจระบุตัวตนของท่านให้แก่บุคคลที่สามเหล่านี้บุคคลที่สามอาจใส่คุกกี้ไว้ในคอมพิวเตอร์หรืออุปกรณ์พกพาของท่านเมื่อท่านเข้าไปเยี่ยมชมเว็บไซต์อื่นๆ ที่ไม่ใช่เว็บไซต์ของบริษัท หลักเกณฑ์ในการใช้คุกกี้เหล่านี้เป็นไปตามนโยบายเกี่ยวกับคุกกี้ของบุคคลที่สามดังกล่าว ซึ่งบริษัทไม่มีอำนาจบนเว็บไซต์ของบุคคลที่สาม โดยท่านสามารถเลือกที่จะไม่ยอมรับคุกกี้ของบุคคลที่สามนี้ได้โดยการตั้งค่าที่เบราว์เซอร์ของท่าน

5. การแก้ไขเปลี่ยนแปลงนโยบายคุกกี้

บริษัทอาจแก้ไขเปลี่ยนแปลงนโยบายคุกกี้ฉบับนี้เป็นครั้งคราว โดยท่านสามารถทราบข้อกำหนดและเงื่อนไขนโยบายที่มีการแก้ไขเปลี่ยนแปลงนี้ได้ผ่านทางเว็บไซต์ของบริษัท

6. รายละเอียดการติดต่อ

หากท่านต้องการสอบถามข้อมูลเกี่ยวกับนโยบายคุกกี้ฉบับนี้ ท่านสามารถติดต่อได้ที่ DPO_YBF@ybf.premier.co.th`,
          purposes: [{id: 90,code: `PAN-001` ,title: `คุกกี้ประสิทธิภาพ`,description: `คุกกี้ประเภทนี้ทำให้เราสามารถนับจำนวนผู้เข้าชมเว็บไซต์ และแหล่งที่มาของผู้เข้าชมเหล่านั้น ทำให้เข้าใจว่าผู้เข้าชม/ผู้ใช้มีการปฏิสัมพันธ์กับเว็บไซต์อย่างไรบ้าง และหน้าเว็บใดที่ได้รับความนิยมมากที่สุดหรือน้อยที่สุด โดยการเก็บรวบรวมข้อมูลโดยไม่ระบุตัวตนของท่านอย่างไม่เฉพาะเจาะจงแก่เราช่วยให้เรา สามารถพัฒนาและมอบประสบการณ์การใช้งานเว็บไซต์ที่ดีกว่าแก่ท่าน หากท่านไม่อนุญาตให้ใช้คุกกี้ประเภทนี้ เราจะไม่อาจทราบได้ว่าท่านเคยมาเข้าชมเว็บไซต์ของเราเมื่อใด และไม่สามารถติดตามประสิทธิภาพการประมวลผลของหน้าเว็บได้

กลุ่มย่อยของคุกกี้ : pankansociety.com
คุกกี้	: _ga
คุกกี้ที่ใช้ : First-party
รายละเอียด : This cookie name is associated with Google Universal Analytics - which is a significant update to Google's more commonly used analytics service. This cookie is used to distinguish unique users by assigning a randomly generated number as a client identifier. It is included in each page request in a site and used to calculate visitor, session and campaign data for the sites analytics reports.

กลุ่มย่อยของคุกกี้ : pankansociety.com
คุกกี้	: _gid
คุกกี้ที่ใช้ : First-party
รายละเอียด : This cookie is set by Google Analytics. It stores and update a unique value for each page visited and is used to count and track pageviews.

กลุ่มย่อยของคุกกี้ : pankansociety.com
คุกกี้	: _gat_UA-116687057-2
คุกกี้ที่ใช้ : First-party
รายละเอียด : This is a pattern type cookie set by Google Analytics, where the pattern element on the name contains the unique identity number of the account or website it relates to. It is a variation of the _gat cookie which is used to limit the amount of data recorded by Google on high traffic volume websites.

กลุ่มย่อยของคุกกี้ : pankansociety.com
คุกกี้	: _gat_%5Bobject%20Object%5D
คุกกี้ที่ใช้ : First-party
รายละเอียด : This is a pattern type cookie set by Google Analytics.`,textMore: ``,urlMore: ``,hasAllow: false,keepAliveData: `1d`},{id: 91,code: `PAN-002` ,title: `คุกกี้เพื่อกำหนดเป้าหมาย`,description: `คุกกี้ประเภทนี้จะเก็บข้อมูลต่าง ๆ ซึ่งอาจรวมถึงข้อมูลส่วนบุคคลของท่านและสร้างโปรไฟล์เกี่ยวกับตัวท่าน เพื่อให้เราสามารถวิเคราะห์และนำเสนอเนื้อหา สินค้า/บริการ และ/หรือ โฆษณาที่เหมาะสมกับความสนใจของท่านได้ ทั้งนี้ หากท่านไม่ยินยอมให้เราใช้คุกกี้ประเภทนี้ ท่านอาจได้รับข้อมูลและโฆษณาทั่วไปที่ไม่ตรงกับความสนใจของท่าน

กลุ่มย่อยของคุกกี้ : pankansociety.com
คุกกี้ :  _fbp
คุกกี้ที่ใช้ : First-party
รายละเอียด : Used by Meta to deliver a series of advertisement products such as real time bidding from third party advertisers

กลุ่มย่อยของคุกกี้ : pankansociety.com
คุกกี้ : _gcl_au
คุกกี้ที่ใช้ : First-party
รายละเอียด : Used by Google AdSense for experimenting with advertisement efficiency across websites using their services

กลุ่มย่อยของคุกกี้ : doubleclick.net 
คุกกี้ : IDE
คุกกี้ที่ใช้ : Third-party
รายละเอียด : This cookie is set by Doubleclick and carries out information about how the end user uses the website and any advertising that the end user may have seen before visiting the said website.

กลุ่มย่อยของคุกกี้ : doubleclick.net 
คุกกี้ : test_cookie
คุกกี้ที่ใช้ : Third-party
รายละเอียด : This cookie is set by DoubleClick (which is owned by Google) to determine if the website visitor's browser supports cookies.

กลุ่มย่อยของคุกกี้ : youtube.com 
คุกกี้ : YSC
คุกกี้ที่ใช้ : Third-party
รายละเอียด : This cookie is set by YouTube to track views of embedded videos.

กลุ่มย่อยของคุกกี้ : youtube.com 
คุกกี้ : VISITOR_INFO1_LIVE
คุกกี้ที่ใช้ : Third-party
รายละเอียด : This cookie is set by Youtube to keep track of user preferences for Youtube videos embedded in sites;it can also determine whether the website visitor is using the new or old version of the Youtube interface.`,textMore: ``,urlMore: ``,hasAllow: false,keepAliveData: `1d`}],
          btnPrivacyText: '',
          //Edit Refernce ID here
          referenceId : ``,
          domainScript: `https://pdpa.thewiseworks.com`,
          btnTextOK: '',
          btnRejectText: '',
          btnConfireText: '',
          labeltextPowerText: '',
          powerByText: '',
          ciColor: {
            footerPrivacyCompany   :{
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
            }
          }
       });
      };
      script.src = "https://pdpa.thewiseworks.com/api/CMSCookieConsent/GetScriptCookieConsent"
      document.getElementsByTagName('head')[0].appendChild(script);
      }
      