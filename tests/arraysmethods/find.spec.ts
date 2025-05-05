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

let result = arr.findIndex(checkElement)
console.log(result)

})