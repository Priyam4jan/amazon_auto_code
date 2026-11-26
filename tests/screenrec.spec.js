import {test}  from '@playwright/test'

test('Open Insta1',async({page})=>{
//get screenshot in local system
    await page.goto("https://www.Instagram.com/");
    const title=await page.title();
    await page.screenshot({path :"C:/Plawrigh/10AM_Nov26/Instagram.png"});
});

test('Open Insta2',async({page})=>{
//get screenshot in vscode current folder
    await page.goto("https://www.Instagram.com/");
    const title=await page.title();
    await page.screenshot({path :"./Instagram1.png"});
});

test('Open Insta3',async({page})=>{
//get screenshot in report //screenshot :'on'
    await page.goto("https://www.Instagram.com/");
    const title=await page.title();
    //await page.screenshot({path :"./Instagram.png"});
});

test('Open FB',async({page})=>{
//get screenshot in report // screenshot :'only-on-failure'
    await page.goto("https://www.fc.com/");
    const title=await page.title();
    
});

test('Open FB1',async({page})=>{
//get screenshot in report // screenshot :'on-first-failure'
    await page.goto("https://www.fc.com/");
    const title=await page.title();
    
});

