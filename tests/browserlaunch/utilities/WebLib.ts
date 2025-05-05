import { expect, Locator, Page } from "@playwright/test";
import { error } from "console";
import configdata from '../../appconfig/app-config.json'

export default class WebLib{
    [x: string]: any;
page:Page
constructor(page: Page){
    this.page = page
}
 async launchBrowser() :Promise<boolean>{
    let env:any = configdata.env
    let envDetails = configdata[env]
    let weburl:any = envDetails['web_url']

    try{
        await this.page.goto(envDetails['web_url'])
        return true

    }catch (error){
        console.error(error)
        return false

    }

 }


 async elementIsExist(webElement:Locator):Promise<boolean>{
    try{
return await webElement.isVisible()
    }catch(error){

    
    return false

    }
 }


 async elementNotExist(webElement:Locator):Promise<boolean>{
    try{
return await webElement.isVisible()
    }catch(error){

    
    return false

    }
 }
 async waitForElemet(webElement:Locator, time:number=350000){
    try{
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForLoadState("load")
        await this.page.waitForLoadState("networkidle")
        
await expect(webElement).toBeVisible({timeout: time})
return true
    }catch(error){

    
    return false

    }
 }

 async fillData(webElement:Locator, inputData: string):Promise<boolean>{
    let actionStatus:boolean=false
    try{
let status:boolean= await this.waitForWebElement(webElement)
if(status){
   await webElement.clear()
   await webElement.fill(inputData)
actionStatus=true
   
}
}catch(error){

    
    return actionStatus=false
 }
    return actionStatus
}
    




async clickElement(webElement:Locator):Promise<boolean>{
    let actionStatus:boolean=false
    try{
let status:boolean= await this.waitForWebElement(webElement)
if(status){
   await webElement.click()
   
actionStatus=true
   
}
}catch(error){

    
    return actionStatus=false
 }
    return actionStatus
}






async forceclickElement(webElement:Locator):Promise<boolean>{
    let actionStatus:boolean=false
    try{
let status:boolean= await this.waitForWebElement(webElement)
if(status){
   await webElement.click({force:true})
   
actionStatus=true
   
}
}catch(error){

    
    return actionStatus=false
 }
    return actionStatus
}



async dbClickonElement(webElement:Locator):Promise<boolean>{
    let actionStatus:boolean=false
    try{
let status:boolean= await this.waitForWebElement(webElement)
if(status){
    await webElement.clear()
   await webElement.dblclick({force:true})
   
actionStatus=true
   
}
}catch(error){

    
    return actionStatus=false
 }
    return actionStatus
}






async radioOrCheckBoxSelected(webElement:Locator):Promise<boolean>{
    let actionStatus:boolean=false
    try{
let status:boolean= await webElement.isChecked()

if(status){
   
   
actionStatus= await webElement.isChecked()
return status
   
}
}catch(error){
actionStatus=false
 }
    return actionStatus
}






async selectRadioOrCheckBox(webElement:Locator):Promise<boolean>{
    let actionStatus:boolean=false
    try{
 await webElement.check()
return true


}catch(error){
actionStatus=false
 }
    return actionStatus
}






async selectDropDownOption(webElement:Locator,optionName:string):Promise<boolean>{
    let actionStatus:boolean=false
    try{
 await webElement.selectOption(optionName)
return true


}catch(error){
actionStatus=false
 }
    return actionStatus
}






    }
