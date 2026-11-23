import {test} from '@playwright/test'

test('Locators',async({page})=>{
    await page.goto('https://www.amazon.com/');
    await page.locator('#twotabsearchtextbox').fill('iphone');
    await page.locator('#nav-search-submit-button').click();
})

/*test('LocatorT1',async({page})=>{
    await page.goto('https://www.amazon.com/');
await page.locator('#twotabsearchtextbox').fill('Women Sports shoes');
await page.locator('#nav-search-submit-button').click();
})

test('LocatorT2',async({page})=>{
    await page.goto('https://demoqa.com/text-box');
    await page.locator('[placeholder="Full Name"]').fill('Priyadharshini Kabaleeswaran');
    await page.waitForTimeout(1000);
    await page.locator('#userEmail').fill('sivapriyamkt@gmail.com');
    await page.waitForTimeout(1000);
    await page.locator('[placeholder="Current Address"]').fill('No.5,Kumaran Nagar,Porur, Chennai');
    await page.waitForTimeout(1000);
    await page.locator('#permanentAddress').fill('No.4,Sivaguru street, Thanjavur');
    await page.locator('//button[text()="Submit"]').click();
    await page.waitForTimeout(2000); 
})*/