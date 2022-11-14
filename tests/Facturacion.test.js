const Facturacion=require("../src/Facturacion")

test("Crear centro de facturacion",()=>{
    facturacionA = new Facturacion(10,8);
    expect(facturacionA.cantPaquetes()).toBe(8);
});