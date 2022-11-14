const Mapa=require("../src/Mapa")
const Local=require("../src/Local")

test("Generar mapa",()=>{
    mapa = new Mapa(1,2);
    expect(mapa.dimensiones()).toStrictEqual([1,2]);
});
test("Generar mapa",()=>{
    localA = new Local(0);
    mapa.agregarLocal(localA);
    expect(mapa.dimensiones()).toStrictEqual([2,2]);
});