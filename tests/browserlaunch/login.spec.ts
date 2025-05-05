import {test, expect} from '@playwright/test';
import WebLib from './utilities/WebLib';


 test ('login', async ({page}) =>{
    const webUtil = new WebLib(page)

    await webUtil.launchBrowser()

    await page.getByRole('textbox', { name: 'Username' }).fill("Admin")
    await page.getByRole('textbox', { name: 'Password' }).fill("admin123")
    await page.getByRole('button', { name: 'Login' }).click()
    await page.getByRole('link', { name: 'My Info' }).click()
    //await page.getByRole('heading', { name: 'Personal Details' })
   await page.getByRole('textbox', { name: 'First Name' }).click()
   await page.getByRole('textbox', { name: 'First Name' }).press('Control+A')
    await page.getByRole('textbox', { name: 'First Name' }).fill("Susan")
    await page.getByRole('textbox', { name: 'Middle Name' }).fill("hi")
    await page.getByRole('textbox', { name: 'Last Name' }).fill("hilast")
   
    //await page.getByText('Employee Id').fill("1234")
    
    await page.pause()
   
      

    })