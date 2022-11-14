const Mapa=require("../src/Mapa")
const Local=require("../src/Local")

beforeEach(()=>{
    mapa = new Mapa(1,2);
});
test("Generar mapa",()=>{
    expect(mapa.dimensiones()).toStrictEqual([1,2]);
});
test("Agregar local al mapa",()=>{
    localA = new Local(0);
    mapa.agregarLocal(localA);
    expect(mapa.dimensiones()).toStrictEqual([2,2]);
});
test('Agregar 2 locales al mapa pero ninguna componente', () => {
    expect(() => {
    localA = new Local(0);
    localB = new Local(1);
    mapa.agregarLocal(localA);
    mapa.agregarLocal(localB);
    }).toThrow("No pueden haber mas locales que componentes");
});