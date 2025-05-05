import test from "@playwright/test";

function doCheck() {
    console.log("From do check method")
}





test("method check", async () => {
doCheck()
doCheck()
})