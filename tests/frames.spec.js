import{test} from '@playwright/test'

test('Frames Handling1',async({page})=>{
    await page.goto("https://practice-automation.com/iframes/");
    const frame1=page.frameLocator("#iframe-1");
    await frame1.locator("//a[text()='MCP']").click();
    await frame1.locator('span[title="Installation"]').click();
});

test('Frames Handling2',async({page})=>{
      await page.goto("https://practice-automation.com/iframes/");
    const frame2=page.frameLocator("#iframe-2");
    await frame2.locator("//span[text()='Documentation']").click();
    await frame2.locator('#m-documentationwebdriver').click();

});

test('Multiple frameshandling',async({page})=>{
    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
    const frame3=page.frameLocator('[name="globalSqa"]');
    await frame3.locator('img[data-image-title="DatabaseTestingTrainingNew"]').click();
     await page.waitForTimeout(2000); 
});

test('Multiple frameshandling1',async({page})=>{
    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
    const frame4=page.frameLocator('[name="globalSqa"]');
    await frame4.locator('img[data-image-title="JMeterTraining"]').click();
    await page.waitForTimeout(2000); 
    await frame4.locator('#mobile_menu_toggler').click();
    await page.waitForTimeout(2000); 
    await frame4.locator("(//a[text()='About'])[2]").click();//fails 
    await frame4.locator('.wpr-load-more-btn').click();
     
});


test('Multiple framehandling2',async({page})=>{
    await page.goto("https://www.globalsqa.com/demo-site/frames-and-windows/#iFrame");
    
    page.locator("//span[text()='Sortable']").click();


})

test('Nested Frames',async({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
    const frame5=page.frameLocator('#frm2');
    await frame5.locator('(//input[@placeholder="Enter First Name"])').fill('Priyadharshini');
    await frame5.locator('(//input[@name="lName"])').fill('Kabali');
    await frame5.locator('(//input[@id="femalerb"])').click();
    await frame5.locator('(//input[@id="englishchbx"])').check();
    await frame5.locator('(//input[@id="hindichbx"])').check();
    await frame5.locator('//input[@placeholder="Enter Email"]').fill('sivapriyamkt@gmail.com');
    await frame5.locator('//input[@name="psw"]').fill('Pri41992j');
    await frame5.getByRole('button',{name :'Register'}).click();
});

test('Nested Frames3_2',async({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
    const frame3=page.frameLocator('#frm3');

    const frame3_2= frame3.frameLocator('#frm2');
    await frame3_2.locator('(//input[@placeholder="Enter First Name"])').fill('Priyadharshini');
    await frame3_2.locator('(//input[@name="lName"])').fill('Kabali');
    await frame3_2.locator('(//input[@id="femalerb"])').click();
    await frame3_2.locator('(//input[@id="englishchbx"])').check();
    await frame3_2.locator('(//input[@id="hindichbx"])').check();
    await frame3_2.locator('//input[@placeholder="Enter Email"]').fill('sivapriyamkt@gmail.com');
    await frame3_2.locator('//input[@name="psw"]').fill('Pri41992j');
});

   

test('Nested Frames1',async({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/frames-practice.html");
    const frame5=page.frameLocator('#frm1');
    
    frame5.locator('#course').selectOption('java');
    
});