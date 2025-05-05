import { Page } from "@playwright/test";
import { error } from "console";
export default class login{
    page:Page
    constructor(page: Page){
        this.page = page
    }
    async login() :Promise<boolean>{
        try{
            await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
             await this.page.getByRole('textbox', { name: 'Username' }).click();
  await this.page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await this.page.getByRole('textbox', { name: 'Password' }).click();
  await this.page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await this.page.getByRole('button', { name: 'Login' }).click();
await this.page.waitForTimeout(3000)
            return true
    
        }catch (error){
            console.error(error)
            return false
    
        }
    
     }
    }

  