import test from '@playwright/test'
test("json", async ()=> {
let userData: any = {

    "name": "Shr",
    "Place": "hyd"
}
console.log(userData.name, userData.Place)

})