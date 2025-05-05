export  class Utilities{

     calculatePowerBill(numberOfUnits){
        let total = numberOfUnits * 9.12
        return total
        
        }
         printBill(consumerNumber, name, address, total){
        let message = `
        Name : ${name}
        C.No : ${consumerNumber}
        Address: ${address}
        Total: ${total}
        `
        return message;
        
        } 
}