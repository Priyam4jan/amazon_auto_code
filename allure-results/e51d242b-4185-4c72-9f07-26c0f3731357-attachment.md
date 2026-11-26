# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenrec.spec.js >> Open FB
- Location: tests\screenrec.spec.js:24:1

# Error details

```
Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://www.fc.com/
Call log:
  - navigating to "https://www.fc.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: www.fc.com
      - text: took too long to respond.
    - generic [ref=e10]:
      - paragraph [ref=e11]: "Try:"
      - list [ref=e12]:
        - listitem [ref=e13]: Checking the connection
        - listitem [ref=e14]:
          - link "Checking the proxy and the firewall" [ref=e15] [cursor=pointer]:
            - /url: "#buttons"
        - listitem [ref=e16]:
          - link "Running Windows Network Diagnostics" [ref=e17] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
    - generic [ref=e18]: ERR_CONNECTION_TIMED_OUT
  - generic [ref=e19]:
    - button "Reload" [ref=e21] [cursor=pointer]
    - button "Details" [ref=e22] [cursor=pointer]
```

# Test source

```ts
  1  | import {test}  from '@playwright/test'
  2  | 
  3  | test('Open Insta1',async({page})=>{
  4  | //get screenshot in local system
  5  |     await page.goto("https://www.Instagram.com/");
  6  |     const title=await page.title();
  7  |     await page.screenshot({path :"C:/Plawrigh/10AM_Nov26/Instagram.png"});
  8  | });
  9  | 
  10 | test('Open Insta2',async({page})=>{
  11 | //get screenshot in vscode current folder
  12 |     await page.goto("https://www.Instagram.com/");
  13 |     const title=await page.title();
  14 |     await page.screenshot({path :"./Instagram1.png"});
  15 | });
  16 | 
  17 | test('Open Insta3',async({page})=>{
  18 | //get screenshot in report
  19 |     await page.goto("https://www.Instagram.com/");
  20 |     const title=await page.title();
  21 |     //await page.screenshot({path :"./Instagram.png"});
  22 | });
  23 | 
  24 | test('Open FB',async({page})=>{
  25 | //get screenshot in report
> 26 |     await page.goto("https://www.fc.com/");
     |                ^ Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://www.fc.com/
  27 |     const title=await page.title();
  28 |     
  29 | });
  30 | 
  31 | 
  32 | 
```