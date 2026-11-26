# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: frames.spec.js >> Multiple frameshandling
- Location: tests\frames.spec.js:18:1

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('[name="globalSqa"]').contentFrame().locator('img[data-image-title="DatabaseTestingTrainingNew"]')
    - locator resolved to <img width="460" height="290" decoding="async" data-image-caption="" data-comments-opened="1" data-attachment-id="1980" data-orig-size="1200,780" data-image-description="" alt="Database Testing Training" sizes="(max-width: 460px) 100vw, 460px" data-sizes="(max-width: 460px) 100vw, 460px" data-image-title="DatabaseTestingTrainingNew" class="attachment-portfolio-medium size-portfolio-medium wp-post-image lazyloaded" data-permalink="https://www.globalsqa.com/training/database-testing-training/database…/>
  - attempting click action
    - waiting for element to be visible, enabled and stable

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
> 21 |     frame3.locator('img[data-image-title="DatabaseTestingTrainingNew"]').click();
     |                                                                          ^ Error: locator.click: Test ended.
  22 |      await page.waitForTimeout(2000); 
  23 | })
  24 | 
  25 | 
  26 | 
```