const Calidad=require("../src/Calidad");

test("Crear centro de calidad",()=>{
    calidadA = new Calidad(5,["p1"]);
    expect(calidadA.cantPaquetes()).toBe(1);
});
test('Centro de calidad con mas paquetes que su capacidad', () => {
    expect(() => {
    calidadB = new Calidad(3,["p1","p2","p3","p4"]);
    calidadB.cantPaquetes();
    }).toThrow("La cola esta llena");
});