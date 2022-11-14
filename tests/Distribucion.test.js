const Distribucion=require("../src/Distribucion");

test("Crear centro de Distribucion",()=>{
    distribucionA = new Distribucion(15,4);
    expect(distribucionA.cantPaquetes()).toBe(4);
});
test('Centro de distribucion con mas paquetes que su capacidad', () => {
    expect(() => {
    distribucionB = new Distribucion(15,19);
    distribucionB.cantPaquetes();
    }).toThrow("La cola esta llena");
});