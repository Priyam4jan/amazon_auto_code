import{test} from '@playwright/test';

test('Launch Flipkart', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');
    const title1 = await page.title();
    console.log(await page.url());  
    console.log(title1);
    
    
    await page.goto('https://www.Instagram.com/');
    const title2 = await page.title();
    console.log(await page.url());  
    console.log(title2);

    await page.goBack();
    console.log(await page.url());
})

test('Launch Amazon', async ({ page }) => {
    await page.goto('https://www.amazon.com/');
    console.log(await page.url());

    await page.goto('https://www.makemytrip.com/');
    const title3 = await page.title();
    console.log(title3);
    
    await page.goto('https://www.facebook.com/');
    await page.goBack();
    await page.goBack();
})