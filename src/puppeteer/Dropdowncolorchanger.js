const resemble = require('resemblejs');
const puppeteer = require('puppeteer');

const checkIfIsVisible = async (block) => {
    let valIsVisible = block.boundingBox();

      await valIsVisible.then(res => {
          if (! res) {
            return false;
          }
        return true;  
      })    
}

 
  (async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let flag = true;
    
    try {
    //   await page.goto('https://api.example.com');
      await page.goto('http://localhost:3000');
      await page.setViewport({
        width:1200,
        height:800,
      })

      await page.waitForSelector('#dropdownContainer');

      let block = await page.waitForSelector('#block', {timeout : 500});
      if( await checkIfIsVisible(block) ) {
          flag = false;
      }

      await page.click('#dropdownContainer');
      if( await checkIfIsVisible(block) != null ) {
        flag = false;
    }


      flag ? console.log('TESTCASE:test_case1:success') : console.log('TESTCASE:test_case1:failure');
    } catch(e) {
      console.log('TESTCASE:test_case1:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();


//   check if body opens and closes
(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let flag = true;
    
    try {
    //   await page.goto('https://api.example.com');
      await page.goto('http://localhost:3000');
      await page.setViewport({
        width:1200,
        height:800,
      })

      let block = await page.waitForSelector('#block', {timeout : 500});
      if( await checkIfIsVisible(block) ) {
          flag = false;
      }

      await page.click('#dropdownContainer');
      if( await checkIfIsVisible(block) != null ) {
        flag = false;
      }

      await page.click('#dropdownWrapper');
      if( await checkIfIsVisible(block) ) {
        flag = false;
      }

      flag ? console.log('TESTCASE:test_case2:success') : console.log('TESTCASE:test_case2:failure');
    } catch(e) {
      console.log('TESTCASE:test_case2:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();

  //   check if body opens and closes
(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    let flag = true;
    
    try {
    //   await page.goto('https://api.example.com');
      await page.goto('http://localhost:3000');
      await page.setViewport({
        width:1200,
        height:800,
      })

      let block = await page.waitForSelector('#block', {timeout : 500});
      if( await checkIfIsVisible(block) ) {
          flag = false;
      }

      await page.click('#dropdownContainer');
      if( await checkIfIsVisible(block) != null ) {
        flag = false;
      }
      await page.screenshot({path : 'screen.png'})

      const [element] = await page.$x("//button[contains(., 'Darkblue')]");
      await element.click();
      await page.screenshot({path : 'screen.png'})

      await page.evaluate(() => {
        flag = document.getElementById('box').style.backgroundColor == 'darkblue'
      })

      flag ? console.log('TESTCASE:test_case3:success') : console.log('TESTCASE:test_case3:failure');
    } catch(e) {
        console.log(e);
      console.log('TESTCASE:test_case3:failure');
    }finally{
      await page.close();
      await browser.close();
    }
  })();