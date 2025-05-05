import test from '@playwright/test'

test("Fibonacci Series", async ()=>{
let s:number =0 //s for sum
let f1:number=0 //f1 for starting number
let f2:number=1 //f2 for second number
console.log(f1)
console.log(f2)
while (s<=10) {
  s=f1+f2
      console.log(s)
      //s=f1+f2
   f1=f2
   f2=s
}
})