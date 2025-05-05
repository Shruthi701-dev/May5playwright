import test from '@playwright/test';
//import WebLib from '../utilities/ui/WebLib';

test ("logintask", async ({page}) =>{
   await page.goto("https://demos.nop-templates.com/register?returnUrl=%2F")
   await page.getByPlaceholder("Search store").fill("iphone")
   //let headerData: string =await page.getByRole("heading",{name:"Register"}).innerHTML()
   //console.log(headerData)
   
    //await page.getByRole("textbox",{name: "FirstName"}).fill("First name")
    await page.pause()
})