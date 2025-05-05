import test from '@playwright/test'

//import WebLib from "../browserlaunch/utilities/WebLib";
import login from "../browserlaunch/utilities/capabilities/ui/login";

test ("logintask", async ({page}) =>{
    //const weblib1 = new WebLib(page)
    const login1 = new login(page )

    //await weblib1.launchBrowser()
    await login1.login()
    await page.pause()
})