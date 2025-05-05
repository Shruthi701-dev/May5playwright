import test from '@playwright/test'
test("welcome count", async ()=> {
let str : string = "WeLComeWelcomeWelcome"
str = str.toLowerCase();
let target = "welcome";
let count =0;
let dynamicplace=target.length;
for(let i =0; i <= str.length -target.length;)
{
     if(str.substring(i, dynamicplace)===target){
        count++;
        i=i+target.length;
        dynamicplace=dynamicplace+target.length;
           }

}
console.log(`number of welcome words:${count}`);
})