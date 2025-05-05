import test from '@playwright/test'
test("redbus", async({page})=>{

await page.goto("https://www.redbus.in/")
await page.locator("//div[@class='sc-fjdhpX elUAqf']").fill("02-05-2025")
//await page.getByRole('button', { name: 'onwardCal' }).click();
let userInputDate = "05-01-2025"
const [ month,day, year] = userInputDate.split("-").map(Number)
const userDate = new Date(year, month -1, day)

const today = new Date();
today.setHours(0,0,0,0,)
userDate.setHours(0,0,0,0)
if (userDate.getTime() === today.getTime()){

    console.log("Today")
}else if(userDate.getTime() > today.getTime()){
    console.log("Future")
}else{
    console.log("Past")
}


})