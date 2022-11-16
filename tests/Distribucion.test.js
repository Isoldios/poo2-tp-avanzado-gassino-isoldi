const Distribucion=require("../src/Distribucion");

test("Crear centro de Distribucion",()=>{
    distribucionA = new Distribucion(10,["p1","p2","p3","p4"]);
    expect(distribucionA.cantPaquetes()).toBe(4);
});
test('Centro de distribucion con mas paquetes que su capacidad', () => {
    expect(() => {
    distribucionB = new Distribucion(10,["p1","p2","p3","p4","p5","p6","p7","p8","p9","p10","p11","p12"]);
    distribucionB.cantPaquetes();
    }).toThrow("La cola esta llena");
});