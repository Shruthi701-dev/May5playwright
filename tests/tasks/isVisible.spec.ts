import test, { expect, Locator } from '@playwright/test';
import WebLib from '../browserlaunch/utilities/WebLib';

test('is visible',async({page})=>{
    const webUtil = new WebLib(page)
    await webUtil.launchBrowser()
    let userName: Locator = await page.getByRole('textbox',{name:'userName'})
    await expect(userName).toBeVisible({timeout:350000})
    if(await userName.isVisible()){
        console.log(`Element is visible`)
    }else{
        console.log(`Element is not visible`)
    }
    await page.pause()


})