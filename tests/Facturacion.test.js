const Facturacion=require("../src/Facturacion")

test("Crear centro de facturacion",()=>{
    facturacionA = new Facturacion(4,["p1","p2","p3"]);
    expect(facturacionA.cantPaquetes()).toBe(3);
});
test('Centro de facturacion con mas paquetes que su capacidad', () => {
    expect(() => {
    facturacionB = new Facturacion(6,["p1","p2","p3","p4","p5","p6","p7","p8"]);
    facturacionB.cantPaquetes();
    }).toThrow("La cola esta llena");
});