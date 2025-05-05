import test from '@playwright/test'
import { TIMEOUT } from 'dns'
test ("logintask", async ({page}) =>{
    
    await page.goto("https://www.amazon.in/")
    await page.locator("//i[@class='hm-icon nav-sprite']").click()
    await page.waitForSelector('.hmenu-visible')
   await page.waitForSelector('text=Mobiles, Computers')
    await page.click('text=Mobiles, Computers')
    //page.setDefaultTimeout(1000)
    //await page.waitForSelector('text=All Mobile Phones')
    //await page.click('text=All Mobile Phones')
   // await page.locator("//a[text()='All Mobile Phones']").click()
await page.pause()

})