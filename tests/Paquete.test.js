const Paquete = require("../src/Paquete");

test("Generar paquete",()=>{
    const paquete = new Paquete("Punto de destino 1");
    expect(paquete.destino).toBe("Punto de destino 1");
});
test("Etapa del paquete",()=>{
    const paquete = new Paquete("Punto de destino 1");
    expect(paquete.etapa()).toBe("Salida Local");
});