const puppeteer = require('puppeteer');
let page;
const browserOpenPromise = puppeteer.launch({headless:false, executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" });

browserOpenPromise.then((browser)=>{ 
  const pageArrayPromise = browser.pages();
  return pageArrayPromise;
}).then((browserPages)=>{
  page = browserPages[0];
  const gotoPromise = page.goto("https://www.google.com");
  return gotoPromise;
}).then(()=>{
  const waitPageElementPromise = page.waitForSelector("input[type='text']",{visible:true});
  return waitPageElementPromise;
}).then(()=>{
  const keysWillBeSendPromise = page.type("input[type='text']",'github.com');
  return keysWillBeSendPromise;
}).then(()=>{
  let enterWillBePressed = page.keyboard.press("Enter");
  return enterWillBePressed;
}).then(()=>{
  const firstClickElementPromise = page.waitForSelector("h3.LC20lb.DKV0Md",{visible:true});
  return firstClickElementPromise;
}).then(()=>{
  const firstClickWillBeSendPromise = page.click("h3.LC20lb.DKV0Md");
  return firstClickWillBeSendPromise;
}).catch((err)=>{
  console.log(err);
})


