import test from '@playwright/test'
test("check array", async () => {

    let arr: Array<number> = [2, 3, 4, 5, 7]
    let totalElement: number = arr.length -1;
    for (let i:number = 0; i<= totalElement; i++){
    console.log(arr[i])
    }
})