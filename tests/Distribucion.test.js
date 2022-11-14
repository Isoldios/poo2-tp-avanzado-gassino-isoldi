const Distribucion=require("../src/Distribucion");

test("Crear centro de Distribucion",()=>{
    distribucionA = new Distribucion(15,4);
    expect(distribucionA.cantPaquetes()).toBe(4);
});