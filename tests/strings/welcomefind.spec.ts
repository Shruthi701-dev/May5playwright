import test from '@playwright/test'
test("welcome count", async ()=> {
let str : string = "WeLComeWelcomeWelcomeWelcome"
str = str.toLowerCase();
let target: string = "welcome";
let count: number =0;
for(let i =0; i <= str.length -target.length;i++)
{
     if(str.substring(i, target.length)===target){
        count++;
        i+=target.length-1;
           }
}
console.log(`number of welcome words:${count}`);
})