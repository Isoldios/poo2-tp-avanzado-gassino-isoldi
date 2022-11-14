test("Generar mapa",()=>{
    mapa = new Mapa(filas,columnas);
    expect(mapa.dimensiones).toBe("1 fila, 2 columnas");
});