# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frames.spec.js >> Multiple frameshandling1
- Location: tests\frames.spec.js:25:1

# Error details

```
Error: locator.click: SyntaxError: Failed to execute 'evaluate' on 'Document': The string '(//*[text()='About'])[2])' is not a valid XPath expression.
    at Object.queryAll (<anonymous>:6532:25)
    at InjectedScript._queryEngineAll (<anonymous>:7292:49)
    at InjectedScript.querySelectorAll (<anonymous>:7279:30)
    at eval (eval at evaluate (:370:30), <anonymous>:2:42)
    at UtilityScript.evaluate (<anonymous>:372:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
Call log:
  - waiting for locator('[name="globalSqa"]').contentFrame().locator('xpath=(//*[text()=\'About\'])[2])')

```

```
Error: page.waitForTimeout: Test ended.
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - generic [ref=e7]:
      - generic:
        - generic:
          - generic:
            - button [ref=e8] [cursor=pointer]
            - textbox "Search..." [ref=e9]
        - link "pinterest" [ref=e10] [cursor=pointer]:
          - /url: https://in.pinterest.com/globalsqa/
        - link "twitter" [ref=e11] [cursor=pointer]:
          - /url: https://twitter.com/Global_SQA
        - link "linkedin" [ref=e12] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/globalsqa
        - link "google" [ref=e13] [cursor=pointer]:
          - /url: https://plus.google.com/103761557396023531439/posts
        - link "facebook" [ref=e14] [cursor=pointer]:
          - /url: https://facebook.com/globalsqa
        - generic [ref=e15]: contact@globalsqa.com
    - generic [ref=e19]:
      - link [ref=e22] [cursor=pointer]:
        - /url: https://www.globalsqa.com/
        - img "GlobalSQA" [ref=e23]
      - generic [ref=e24]:
        - list:
          - listitem [ref=e25]:
            - link "About" [ref=e26] [cursor=pointer]:
              - /url: https://www.globalsqa.com/about/
          - listitem [ref=e27]:
            - link "CheatSheets" [ref=e28] [cursor=pointer]:
              - /url: https://www.globalsqa.com/cheatsheets/
          - listitem [ref=e29]:
            - link "Free Ebooks" [ref=e30] [cursor=pointer]:
              - /url: https://www.globalsqa.com/free-ebooks/
          - listitem [ref=e32]:
            - link "Tester’s Hub" [ref=e33] [cursor=pointer]:
              - /url: https://www.globalsqa.com/testers-hub/
            - text:  
          - listitem [ref=e35]:
            - link "Contact Us" [ref=e36] [cursor=pointer]:
              - /url: https://www.globalsqa.com/contact-us/
    - text:    
  - generic [ref=e37]:
    - generic [ref=e41]:
      - generic [ref=e42]:
        - link "Home" [ref=e43] [cursor=pointer]:
          - /url: https://www.globalsqa.com/
        - link "Demo Testing Site" [ref=e45] [cursor=pointer]:
          - /url: https://www.globalsqa.com/demo-site/
        - link "Frames And Windows" [ref=e47] [cursor=pointer]:
          - /url: https://www.globalsqa.com/demo-site/frames-and-windows/
      - heading "Frames And Windows" [level=1] [ref=e50]
    - generic [ref=e53]:
      - generic [ref=e54]:
        - generic [ref=e55]:
          - heading "Interaction" [level=4] [ref=e56]
          - list [ref=e58]:
            - listitem [ref=e59]:
              - link "Sortable" [ref=e60] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/sorting/
            - listitem [ref=e62]:
              - link "Drag And Drop" [ref=e63] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/draganddrop/
            - listitem [ref=e65]:
              - link "Select Elements" [ref=e66] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/select-elements/
            - listitem [ref=e68]:
              - link "Draggable Boxes" [ref=e69] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/draggableboxes/
            - listitem [ref=e71]:
              - link "DropDown Menu" [ref=e72] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/select-dropdown-menu/
        - generic [ref=e74]:
          - heading "Widgets" [level=4] [ref=e75]
          - list [ref=e77]:
            - listitem [ref=e78]:
              - link "Tooltip" [ref=e79] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/tooltip/
            - listitem [ref=e81]:
              - link "Sliders" [ref=e82] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/sliders/
            - listitem [ref=e84]:
              - link "Spinner" [ref=e85] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/spinner/
            - listitem [ref=e87]:
              - link "DatePicker" [ref=e88] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/datepicker/
            - listitem [ref=e90]:
              - link "Progress Bar" [ref=e91] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/progress-bar/
            - listitem [ref=e93]:
              - link "Dialog Boxes" [ref=e94] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/dialog-boxes/
            - listitem [ref=e96]:
              - link "Auto Complete" [ref=e97] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/auto-complete/
            - listitem [ref=e99]:
              - link "Accordion And Tabs" [ref=e100] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/accordion-and-tabs/
        - generic [ref=e102]:
          - generic:
            - insertion:
              - iframe [ref=e104]
          - heading "Miscellaneous" [level=4] [ref=e105]
          - list [ref=e107]:
            - listitem [ref=e108]:
              - link "AlertBox" [ref=e109] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/alertbox/
            - listitem [ref=e111]:
              - link "Toolbar" [ref=e112] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/toolbar/
            - listitem [ref=e114]:
              - link "Sample Page Test" [ref=e115] [cursor=pointer]:
                - /url: https://www.globalsqa.com/samplepagetest/
            - listitem [ref=e117]:
              - link "Frames And Windows" [ref=e118] [cursor=pointer]:
                - /url: https://www.globalsqa.com/demo-site/frames-and-windows/
            - listitem [ref=e120]:
              - link "AngularJS Protractor Practice Site" [ref=e121] [cursor=pointer]:
                - /url: https://www.globalsqa.com/angularjs-protractor-practice-site/
        - generic [ref=e125]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e127]: Discover more
          - link "Try Cloud Tools" [ref=e128] [cursor=pointer]
          - link "Try Dev Tools" [ref=e133] [cursor=pointer]
          - link "Learn to Code" [ref=e138] [cursor=pointer]
          - link "Compare Windows" [ref=e143] [cursor=pointer]
          - link "Window" [ref=e148] [cursor=pointer]
          - link "window" [ref=e153] [cursor=pointer]
          - link "Windows" [ref=e158] [cursor=pointer]
          - link "Upgrade Tech" [ref=e163] [cursor=pointer]
        - iframe [ref=e169]
      - generic [ref=e170]:
        - generic [ref=e171]:
          - list [ref=e172]:
            - tab "Open New Tab" [ref=e173] [cursor=pointer]
            - tab "Open New Window" [ref=e174] [cursor=pointer]
            - tab "iFrame" [ref=e175] [cursor=pointer]
          - generic [ref=e177]:
            - generic [ref=e178]:
              - generic [ref=e179] [cursor=pointer]
              - emphasis [ref=e180]:
                - strong [ref=e181]:
                  - text: Below is an iFrame. If you want to perform any operation in this
                  - link "window" [ref=e182] [cursor=pointer]:
                    - /url: "#"
                  - text: ", you will need to enter in this iframe."
            - paragraph [ref=e185]:
              - iframe [active] [ref=e186]:
                - generic [ref=f5e2]:
                  - banner [ref=f5e3]:
                    - generic [ref=f5e7]:
                      - generic:
                        - generic:
                          - generic:
                            - button [ref=f5e8] [cursor=pointer]
                            - textbox "Search..." [ref=f5e9]
                        - link "pinterest" [ref=f5e10] [cursor=pointer]:
                          - /url: https://in.pinterest.com/globalsqa/
                        - link "twitter" [ref=f5e11] [cursor=pointer]:
                          - /url: https://twitter.com/Global_SQA
                        - link "linkedin" [ref=f5e12] [cursor=pointer]:
                          - /url: https://www.linkedin.com/company/globalsqa
                        - link "google" [ref=f5e13] [cursor=pointer]:
                          - /url: https://plus.google.com/103761557396023531439/posts
                        - link "facebook" [ref=f5e14] [cursor=pointer]:
                          - /url: https://facebook.com/globalsqa
                        - generic [ref=f5e15]: contact@globalsqa.com
                    - generic [ref=f5e19]:
                      - link [ref=f5e22] [cursor=pointer]:
                        - /url: https://www.globalsqa.com/
                        - img "GlobalSQA" [ref=f5e23]
                      - generic [ref=f5e24] [cursor=pointer]
                      - generic:  
                    - text:    
                  - generic [ref=f5e25]:
                    - generic [ref=f5e29]:
                      - generic [ref=f5e30]:
                        - link "Home" [ref=f5e31] [cursor=pointer]:
                          - /url: https://www.globalsqa.com/
                        - link "Trainings" [ref=f5e33] [cursor=pointer]:
                          - /url: https://www.globalsqa.com/trainings/
                      - heading "Trainings" [level=1] [ref=f5e36]
                    - generic [ref=f5e38]:
                      - generic [ref=f5e39]: All
                      - generic [ref=f5e42]:
                        - link [ref=f5e44] [cursor=pointer]:
                          - /url: https://www.globalsqa.com/training/selenium-online-training/
                          - generic [ref=f5e46]:
                            - img "Selenium Online Training" [ref=f5e50]
                            - generic [ref=f5e53]:
                              - heading "Selenium 3.0 Training" [level=3] [ref=f5e55]
                              - paragraph [ref=f5e56]: Automation
                        - link [ref=f5e58] [cursor=pointer]:
                          - /url: https://www.globalsqa.com/training/sap-hybris-online-training/
                          - generic [ref=f5e60]:
                            - img "SAP Hybris Training" [ref=f5e64]
                            - generic [ref=f5e67]:
                              - heading "SAP Hybris Training" [level=3] [ref=f5e69]
                              - paragraph
                        - link [ref=f5e71] [cursor=pointer]:
                          - /url: https://www.globalsqa.com/training/mobile-apps-testing-online-training/
                          - generic [ref=f5e73]:
                            - img "Mobile Application Testing Training" [ref=f5e77]
                            - generic [ref=f5e80]:
                              - heading "Mobile Application Testing Training" [level=3] [ref=f5e82]
                              - paragraph [ref=f5e83]: Software Testing
                        - link [ref=f5e85] [cursor=pointer]:
                          - /url: https://www.globalsqa.com/training/manual-testing-training/
                          - generic [ref=f5e87]:
                            - img "Manual Online Testing Training" [ref=f5e91]
                            - generic [ref=f5e94]:
                              - heading "Manual Testing Training" [level=3] [ref=f5e96]
                              - paragraph [ref=f5e97]: Software Testing
                        - link [active] [ref=f5e99] [cursor=pointer]:
                          - /url: https://www.globalsqa.com/training/jmeter-training/
                          - generic [ref=f5e101]:
                            - img "JMeter Training" [ref=f5e105]
                            - generic [ref=f5e108]:
                              - heading "JMeter Training" [level=3] [ref=f5e110]
                              - paragraph [ref=f5e111]: Performance Testing / Software Testing
                        - link [ref=f5e113] [cursor=pointer]:
                          - /url: https://www.globalsqa.com/training/hp-load-runner-online-training/
                          - generic [ref=f5e115]:
                            - img "LoadRunner Training" [ref=f5e119]
                            - generic [ref=f5e122]:
                              - heading "HP LoadRunner Training" [level=3] [ref=f5e124]
                              - paragraph [ref=f5e125]: Performance Testing
                        - link [ref=f5e127] [cursor=pointer]:
                          - /url: https://www.globalsqa.com/training/database-testing-training/
                          - generic [ref=f5e129]:
                            - img "Database Testing Training" [ref=f5e133]
                            - generic [ref=f5e136]:
                              - heading "Database Testing Training" [level=3] [ref=f5e138]
                              - paragraph
                        - link [ref=f5e140] [cursor=pointer]:
                          - /url: https://www.globalsqa.com/training/calabash-training/
                          - generic [ref=f5e142]:
                            - img "Calabash Mobile App Automation Training" [ref=f5e146]
                            - generic [ref=f5e149]:
                              - heading "Calabash Training" [level=3] [ref=f5e151]
                              - paragraph [ref=f5e152]: Automation / Performance Testing
                        - link [ref=f5e154] [cursor=pointer]:
                          - /url: https://www.globalsqa.com/training/appium-online-training/
                          - generic [ref=f5e156]:
                            - img "Appium Training" [ref=f5e160]
                            - generic [ref=f5e163]:
                              - heading "Appium Training" [level=3] [ref=f5e165]
                              - paragraph [ref=f5e166]: Automation / Software Testing
                  - insertion [ref=f5e169]:
                    - generic [ref=f5e172]:
                      - heading "These are topics related to the article that might interest you" [level=2] [ref=f5e174]: Discover more
                      - link "Book Repairs" [ref=f5e175] [cursor=pointer]
                      - link "web browser" [ref=f5e180] [cursor=pointer]
                      - link "Compare Browsers" [ref=f5e185] [cursor=pointer]
                  - generic [ref=f5e190]:
                    - generic [ref=f5e192]:
                      - generic [ref=f5e193]:
                        - heading "Footer Widget Area 1" [level=3] [ref=f5e194]
                        - paragraph [ref=f5e195]:
                          - link "Assign a widget to this area now." [ref=f5e196] [cursor=pointer]:
                            - /url: https://www.globalsqa.com/wp-admin/widgets.php
                      - generic [ref=f5e197]:
                        - heading "Footer Widget Area 2" [level=3] [ref=f5e198]
                        - paragraph [ref=f5e199]:
                          - link "Assign a widget to this area now." [ref=f5e200] [cursor=pointer]:
                            - /url: https://www.globalsqa.com/wp-admin/widgets.php
                      - generic [ref=f5e201]:
                        - heading "Footer Widget Area 3" [level=3] [ref=f5e202]
                        - paragraph [ref=f5e203]:
                          - link "Assign a widget to this area now." [ref=f5e204] [cursor=pointer]:
                            - /url: https://www.globalsqa.com/wp-admin/widgets.php
                      - generic [ref=f5e205]:
                        - heading "Footer Widget Area 4" [level=3] [ref=f5e206]
                        - paragraph [ref=f5e207]:
                          - link "Assign a widget to this area now." [ref=f5e208] [cursor=pointer]:
                            - /url: https://www.globalsqa.com/wp-admin/widgets.php
                    - generic [ref=f5e213]:
                      - link "pinterest" [ref=f5e214] [cursor=pointer]:
                        - /url: https://in.pinterest.com/globalsqa/
                      - link "twitter" [ref=f5e215] [cursor=pointer]:
                        - /url: https://twitter.com/Global_SQA
                      - link "linkedin" [ref=f5e216] [cursor=pointer]:
                        - /url: https://www.linkedin.com/company/globalsqa
                      - link "google" [ref=f5e217] [cursor=pointer]:
                        - /url: https://plus.google.com/103761557396023531439/posts
                      - link "facebook" [ref=f5e218] [cursor=pointer]:
                        - /url: https://facebook.com/globalsqa
                      - generic [ref=f5e219]:
                        - text: "Website Designed & Developed by :"
                        - link "GlobalSQA" [ref=f5e220] [cursor=pointer]:
                          - /url: https://www.globalsqa.com
        - paragraph [ref=e187]
  - generic:
    - insertion:
      - iframe [ref=e189]
  - generic [ref=e190]:
    - generic [ref=e192]:
      - generic [ref=e193]:
        - heading "Footer Widget Area 1" [level=3] [ref=e194]
        - paragraph [ref=e195]:
          - link "Assign a widget to this area now." [ref=e196] [cursor=pointer]:
            - /url: https://www.globalsqa.com/wp-admin/widgets.php
      - generic [ref=e197]:
        - heading "Footer Widget Area 2" [level=3] [ref=e198]
        - paragraph [ref=e199]:
          - link "Assign a widget to this area now." [ref=e200] [cursor=pointer]:
            - /url: https://www.globalsqa.com/wp-admin/widgets.php
      - generic [ref=e201]:
        - heading "Footer Widget Area 3" [level=3] [ref=e202]
        - paragraph [ref=e203]:
          - link "Assign a widget to this area now." [ref=e204] [cursor=pointer]:
            - /url: https://www.globalsqa.com/wp-admin/widgets.php
      - generic [ref=e205]:
        - heading "Footer Widget Area 4" [level=3] [ref=e206]
        - paragraph [ref=e207]:
          - link "Assign a widget to this area now." [ref=e208] [cursor=pointer]:
            - /url: https://www.globalsqa.com/wp-admin/widgets.php
    - generic [ref=e213]:
      - link "pinterest" [ref=e214] [cursor=pointer]:
        - /url: https://in.pinterest.com/globalsqa/
      - link "twitter" [ref=e215] [cursor=pointer]:
        - /url: https://twitter.com/Global_SQA
      - link "linkedin" [ref=e216] [cursor=pointer]:
        - /url: https://www.linkedin.com/company/globalsqa
      - link "google" [ref=e217] [cursor=pointer]:
        - /url: https://plus.google.com/103761557396023531439/posts
      - link "facebook" [ref=e218] [cursor=pointer]:
        - /url: https://facebook.com/globalsqa
      - generic [ref=e219]:
        - text: "Website Designed & Developed by :"
        - link "GlobalSQA" [ref=e220] [cursor=pointer]:
          - /url: https://www.globalsqa.com
```

# Test source

```ts
  1  | import{test} from '@playwright/test'
  2  | 
  3  | test('Frames Handling1',async({page})=>{
  4  |     await page.goto("https://practice-automation.com/iframes/");
  5  |     const frame1=page.frameLocator("#iframe-1");
  6  |     await frame1.locator("//a[text()='MCP']").click();
  7  |     await frame1.locator('span[title="Installation"]').click();
  8  | });
  9  | 
  10 | test('Frames Handling2',async({page})=>{
  11 |       await page.goto("https://practice-automation.com/iframes/");
  12 |     const frame2=page.frameLocator("#iframe-2");
  13 |     await frame2.locator("//span[text()='Documentation']").click();
  14 |     await frame2.locator('#m-documentationwebdriver').click();
  15 | 
  16 | });
  17 | 
  18 | test('Multiple frameshandling',async({page})=>{
  19 |     await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
  20 |     const frame3=page.frameLocator('[name="globalSqa"]');
  21 |     frame3.locator('img[data-image-title="DatabaseTestingTrainingNew"]').click();
  22 |      await page.waitForTimeout(2000); 
  23 | });
  24 | 
  25 | test('Multiple frameshandling1',async({page})=>{
  26 |     await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
  27 |     const frame3=page.frameLocator('[name="globalSqa"]');
  28 |     frame3.locator('img[data-image-title="JMeterTraining"]').click();
  29 |     frame3.locator('#mobile_menu_toggler').click();
  30 |     frame3.locator("(//*[text()='About'])[2])").click();
  31 |     frame3.locator('.wpr-load-more-btn').click();
> 32 |      await page.waitForTimeout(2000); 
     |                 ^ Error: page.waitForTimeout: Test ended.
  33 | });
  34 | 
  35 | 
  36 | 
  37 | 
```