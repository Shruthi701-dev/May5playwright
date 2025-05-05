import test from "@playwright/test";

function add(a, b){
    let result = a +b 
    console.log(`The sum of two numbers is ${result}`)
}
test ("method check", async () => {
add(13, 24)

})