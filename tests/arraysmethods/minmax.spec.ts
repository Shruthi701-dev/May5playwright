import test from '@playwright/test'
test("Display Min and Max", async () => {
    let arr: Array<number> = [1, 2, 3, 4, 6,8,9]
    let i=0;
    let mi = 1;
    let ma = 1;
    while (i <=9) {
        if(mi>= arr[i]){
          mi=arr[i];
        } 
        if(ma<= arr[i]){
          ma=arr[i];
        } 
        i++
        
      }
      console.log("Min Number",mi);
      console.log("Max Number",ma)
      }
    

    )