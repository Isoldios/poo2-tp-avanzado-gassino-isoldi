const Paquete = require("../src/Paquete");
beforeEach(()=>{
    paquete = new Paquete(1,[["Tornillo",10],["Destornillador",2]],50);
})

test("Generar paquete",()=>{
    expect(paquete.destino).toBe(1);
});
test("Etapa del paquete",()=>{
    expect(paquete.componenteEtapa()).toBe("Salida Local");
});
test("Productos del paquete",()=>{
    expect(paquete.productosDelPaquete()).toStrictEqual([["Tornillo",10],["Destornillador",2]]);
});
test("Paso a la siguiente etapa",()=>{
    paquete.pasarEtapa();
    expect(paquete.componenteEtapa()).toBe("Facturacion");
});
test("Paso a la siguiente etapa",()=>{
    paquete.pasarEtapa();
    paquete.pasarEtapa();
    expect(paquete.componenteEtapa()).toBe("Calidad");
});
test("Llego a destino",()=>{
    paquete.pasarEtapa();
    paquete.pasarEtapa();
    paquete.pasarEtapa();
    paquete.pasarEtapa();
    expect(paquete.componenteEtapa()).toBe(1);
});
test('Se pasa del destino', () => {
    expect(() => {
        paquete.pasarEtapa();
        paquete.pasarEtapa();
        paquete.pasarEtapa();
        paquete.pasarEtapa();
        paquete.pasarEtapa();
        paquete.componenteEtapa()
    }).toThrow("Ya llego a su destino");
});
test("Urgencia del paquete",()=>{
    expect(paquete.urgencia).toBe(50);
});
test("Id de un paquete",()=>{
    expect(paquete.getId()).toBe(1);
});