test("Generar paquete",()=>{
    const paquete = new Paquete("Punto de destino 1");
    expect(paquete.destino).toBe("Punto de destino 1");
});