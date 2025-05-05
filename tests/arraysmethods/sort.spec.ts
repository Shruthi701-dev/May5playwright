import test from '@playwright/test'
function checkElement(value, index, array){
    return value === "apple"
}
test("check array", async ()=> {
let arr: Array<any> = [
    "apple",
    "banana",
    "stawberry",
    "apple"]

arr.sort()
console.log(arr)

})