const Facturacion=require("../src/Facturacion")

test("Crear centro de facturacion",()=>{
    facturacionA = new Facturacion(10,8);
    expect(facturacionA.cantPaquetes()).toBe(8);
});
test('Centro de facturacion con mas paquetes que su capacidad', () => {
    expect(() => {
    facturacionB = new Facturacion(10,11);
    facturacionB.cantPaquetes();
    }).toThrow("La cola esta llena");
});