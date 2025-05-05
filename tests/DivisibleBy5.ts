import test from '@playwright/test'

test("checkDivibility", async () =>{
for (let i: number = 1; i <= 9;i++){

    let result = i % 5
    if (result === 0){
        console.log(`The number is:${i} --->> TRUE`);
    }
        else {

            console.log(`The number is:${i} --->> FALSE`);
        }
     
    
    }
}



)