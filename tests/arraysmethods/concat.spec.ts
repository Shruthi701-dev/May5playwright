import test from '@playwright/test'
test("check concat", async () => {

let age = 10
let personName = "shruthi"
let place = "HYD"
let message = `The newly added user : ${personName} whose age is : ${age}  stays in : ${place}`
console.log(message)

})