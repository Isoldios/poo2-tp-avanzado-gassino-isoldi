const Local = require("../src/Local");
test("Nuevo Local",()=>{
    local = new Local(3);
    expect(local.paquetes).toBe(3);
});