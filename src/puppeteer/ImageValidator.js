const resemble = require('resemblejs');
const puppeteer = require('puppeteer');

 
  (async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    
    try {
      // await page.goto('https://api.example.com');
      await page.goto('http://localhost:3000');
      await page.setViewport({
        width:1200,
        height:800,
      })
      await page.type('#imageinput1', imageURL);

      await page.type('#imageinput2', imageURL);
      await page.type('#imageinput3', imageURL);
      await page.click('#submit');
      await page.waitForSelector('#image1',{timeout:3000});
      await page.waitForSelector('#image2',{timeout:3000});
      await page.waitForSelector('#image3',{timeout:3000});
      console.log('TESTCASE:test_case1:success');
    } catch(e) {
      console.log('TESTCASE:test_case1:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();