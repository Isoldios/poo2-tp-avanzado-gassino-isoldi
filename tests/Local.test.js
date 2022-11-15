const Local = require("../src/Local");

test("Nuevo Local",()=>{
    local = new Local(3,2);
    expect(local.cantPaquetes()).toBe(2);
});
test('Genera mas de 5 paquetes por unidad de tiempo', () => {
    expect(() => {
        local = new Local(5,6);
        local.cantPaquetes();
    }).toThrow("La cola esta llena");
});