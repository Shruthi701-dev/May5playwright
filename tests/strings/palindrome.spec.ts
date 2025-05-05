import test from '@playwright/test'
test("palindrome", async ()=> {
let str : string = "madam"
let left : number = 0
let right: number = str.length-1
let i=0;
while (left < str.length){
    if (str[left] === str[right])
        {
        i++;
        left++;
        right--;
    }
}
if (i>=str.length){
    console.log(`the string "${str}" is palindrome`);
}
else
{
console.log(`the string "${str}" is not palindrome`);
}

})