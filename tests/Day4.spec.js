import{test,chromium} from '@playwright/test'

test('Open Insta',async({ page })=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const Page1 =await context.newPage();
    await Page1.goto('https://www.flipkart.com/');
    const Page2=await context.newPage();
    await Page2.goto('https://Instagram.com/');
})