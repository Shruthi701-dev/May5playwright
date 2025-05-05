import test from'@playwright/test'
test("While loop[", async ()=>{
let i:number =1
while (i <=2) {
  console.log(i)  
  i++
}
})