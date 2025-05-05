import test from '@playwright/test'
test(" array push", () =>{

let arr: Array<any> = [1, 2, 3, 4]
arr.forEach(i=>{
    console.log(i)
})

})