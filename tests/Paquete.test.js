const Paquete = require("../src/Paquete");
beforeEach(()=>{
    paquete = new Paquete(1,[["Tornillo",10],["Destornillador",2]]);
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
