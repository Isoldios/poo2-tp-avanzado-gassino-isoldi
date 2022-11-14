const Local = require("../src/Local");

test("Nuevo Local",()=>{
    local = new Local(3);
    expect(local.paquetesXUniDeTiempo()).toBe(3);
});
test('Genera mas de 5 paquetes por unidad de tiempo', () => {
    expect(() => {
        local = new Local(6);
        local.paquetesXUniDeTiempo();
    }).toThrow("No puede generar mas de 5 paquetes por unidad de tiempo");
});