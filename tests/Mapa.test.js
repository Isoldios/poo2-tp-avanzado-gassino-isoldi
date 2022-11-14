const Mapa=require("../src/Mapa")

test("Generar mapa",()=>{
    mapa = new Mapa(1,2);
    expect(mapa.dimensiones()).toStrictEqual([1,2]);
});