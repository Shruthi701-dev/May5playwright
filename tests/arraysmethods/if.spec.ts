import test from '@playwright/test'

test ("Simple if", async () => {
    let a: number = 10
    let b: number = 70

    if(a > b){
        console.log("A is greater than B")
    } else {
        console.log("A is not greater than B")
    }
})