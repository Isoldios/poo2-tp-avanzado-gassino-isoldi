const Paquete = require("../src/Paquete");

test("Generar paquete",()=>{
    const paquete = new Paquete("Punto de destino 1");
    expect(paquete.destino).toBe("Punto de destino 1");
});
test("Etapa del paquete",()=>{
    const paquete = new Paquete("Punto de destino 1");
    expect(paquete.componenteEtapa()).toBe("Salida Local");
});
test("Productos del paquete",()=>{
    const paquete = new Paquete("Punto de destino 1",[["Tornillo",10],["Destornillador",2]]);
    expect(paquete.productos()).toStrictEqual(["Tornillo","Destornillador"]);
});