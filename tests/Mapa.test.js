const Mapa=require("../src/Mapa")

test("Generar mapa",()=>{
    mapa = new Mapa(1,2);
    expect(mapa.dimensiones()).toBe("1 filas, 2 columnas");
});