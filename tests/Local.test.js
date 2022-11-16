const Local = require("../src/Local");

test("Nuevo Local",()=>{
    local = new Local(3,["p1","p2"]);
    expect(local.cantPaquetes()).toBe(2);
});
test('Genera mas de 5 paquetes por unidad de tiempo', () => {
    expect(() => {
        local = new Local(5,["p1","p2","p3","p4","p5","p6","p7","p8"]);
        local.cantPaquetes();
    }).toThrow("La cola esta llena");
});