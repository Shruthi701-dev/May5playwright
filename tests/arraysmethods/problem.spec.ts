import test from "@playwright/test";

function calculatePowerBill(numberOfUnits){
let total = numberOfUnits * 9.12
return total

}
function printBill(consumerNumber, name, address, total){
let message = `
Name : ${name}
C.No : ${consumerNumber}
Address: ${address}
Total: ${total}
`
console.log(message)

}

test ("method check", async()=>{

    let consumerNumber ="123"
    let name = "shr"
    let address = "900 ho"
    let totalBill = calculatePowerBill
    printBill(consumerNumber, name, address, totalBill)

})

