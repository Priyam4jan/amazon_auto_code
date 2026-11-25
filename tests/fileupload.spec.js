import {test} from '@playwright/test'

test('Upload',async({page})=>{
    await page.goto('https://uploadnow.io/');
    await page.locator('input[type="file"]').setInputFiles(["C:\Users\sivap\Downloads\Hirenexa_Nov 3.docx","C:\Users\sivap\Downloads\Hirenexa_nov 4.docx"]);
    await page.getByRole('button',{name:"Validate and Upload"});
    await page.getByRole('a',{name:"show folder"});
});

test('download',async({page})=>{
    await page.goto('https"//demoqa.com/upload-download');
    const [downloaded_file]=await Promise.all([page.waitForEvent('download'),
        page.getByRole('button',{name:'Download'})
    ])

});
