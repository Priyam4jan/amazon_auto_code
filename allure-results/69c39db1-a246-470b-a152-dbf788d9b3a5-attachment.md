# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frames.spec.js >> Nested Frames1
- Location: tests\frames.spec.js:58:1

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('#frm1').contentFrame().locator('xpath=(//input[@placeholder="Enter First Name"])')

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
  21 |     await frame3.locator('img[data-image-title="DatabaseTestingTrainingNew"]').click();
  22 |      await page.waitForTimeout(2000); 
  23 | });
  24 | 
  25 | test('Multiple frameshandling1',async({page})=>{
  26 |     await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
  27 |     const frame4=page.frameLocator('[name="globalSqa"]');
  28 |     await frame4.locator('img[data-image-title="JMeterTraining"]').click();
  29 |     await page.waitForTimeout(2000); 
  30 |     await frame4.locator('#mobile_menu_toggler').click();
  31 |     await page.waitForTimeout(2000); 
  32 |     await frame4.locator("(//a[text()='About'])[2]").click();//fails 
  33 |     await frame4.locator('.wpr-load-more-btn').click();
  34 |      
  35 | });
  36 | 
  37 | 
  38 | test('Multiple framehandling2',async({page})=>{
  39 |     await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
  40 |     
  41 |     page.locator("//span[text()='Sortable']").click();
  42 | 
  43 | 
  44 | })
  45 | 
  46 | test('Nested Frames',async({page})=>{
  47 |     await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
  48 |     const frame5=page.frameLocator('#frm2');
  49 |     await frame5.locator('(//input[@placeholder="Enter First Name"])').fill('Priyadharshini');
  50 |     await frame5.locator('(//input[@name="lName"])').fill('Kabali');
  51 |     await frame5.locator('(//input[@id="femalerb"])').click();
  52 |     await frame5.locator('(//input[@id="englishchbx"])').check();
  53 |     await frame5.locator('(//input[@id="hindichbx"])').check();
  54 |     await frame5.locator('//input[@placeholder="Enter Email"]').fill('sivapriyamkt@gmail.com');
  55 |     await frame5.locator('//input[@name="psw"]').fill('Pri41992j');
  56 | });
  57 | 
  58 | test('Nested Frames1',async({page})=>{
  59 |     await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
  60 |     const framethree=page.frameLocator('#frm3');
  61 |     const framethree_2=framethree.frameLocator('#frm1');
  62 | 
> 63 |     await framethree_2.locator('(//input[@placeholder="Enter First Name"])').fill('Priyadharshini');
     |                                                                              ^ Error: locator.fill: Test ended.
  64 |     await framethree_2.locator('(//input[@name="lName"])').fill('Kabali');
  65 |     await framethree_2.locator('(//input[@id="femalerb"])').click();
  66 |     await framethree_2.locator('(//input[@id="englishchbx"])').check();
  67 |     await framethree_2.locator('(//input[@id="hindichbx"])').check();
  68 |     await framethree_2.locator('//input[@placeholder="Enter Email"]').fill('sivapriyamkt@gmail.com');
  69 |     await framethree_2.locator('//input[@name="psw"]').fill('Pri41992j');
  70 | });
  71 | 
  72 |    
```