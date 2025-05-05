import {test, expect, Locator} from '@playwright/test';
import WebLib from './utilities/WebLib';

test ('env', async ({page}) =>{


    //const webUtil = new WebLib(page)
    //await webUtil.launchBrowser()
    //await page.pause()
    await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")
    await page.locator("//input[@id='FirstName']").fill("firstname")
    await page.pause()
})