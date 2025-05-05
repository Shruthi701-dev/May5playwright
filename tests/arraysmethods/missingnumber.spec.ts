import test from '@playwright/test'
test("missing number", async () => {
let arr: Array<number> = [1, 2, 3, 4, 6,8,9]
let i = 1;
let j=0;
while (i <=9) {
    if(i== arr[j]){
      j++
    } else {
        console.log("Missing Number",i)
    }
    i++
    
  }

}


)