import test, { Locator } from '@playwright/test'

import WebLib from "../browserlaunch/utilities/WebLib";

test ("logintask", async ({page}) =>{
    const webUtil = new WebLib(page)
    await webUtil.launchBrowser()
    let userName : Locator =await page.getByRole('textbox',{name:"Username"})
    let passWord : Locator =await page.getByRole('textbox',{name:"password"})
    let login : Locator =await page.getByRole('button',{name:"login"})


    await webUtil.fillData(userName, "Admin")
    await webUtil.fillData(passWord, "admin123")
    await webUtil.clickElement(login)
   
    await page.pause()
})