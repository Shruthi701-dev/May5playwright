import test from '@playwright/test'
test("find odd or even", async () =>{
for (let i: number = 1; i <= 20; i++){

    let result = i % 2
    if (result == 0){
        console.log(`The number :${i} --->> even`)
    }
}



})