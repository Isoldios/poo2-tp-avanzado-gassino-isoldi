const Mapa=require("../src/Mapa")
const Local=require("../src/Local")
const MapaModulo=require("../src/MapaModulo");

beforeEach(()=>{
    mapa = new Mapa(0,0);
});
test("Generar mapa",()=>{
    expect(mapa.dimensiones()).toStrictEqual([0,0]);
});
test("Agregar local al mapa",()=>{
    localA = new Local(0);
    mapa.agregarLocal(localA);
    expect(mapa.dimensiones()).toStrictEqual([1,1]);
});
test('Agregar 2 locales al mapa pero ninguna componente', () => {
    expect(() => {
    localA = new Local(0);
    localB = new Local(1);
    mapa.agregarLocal(localA);
    mapa.agregarLocal(localB);
    }).toThrow("No pueden haber mas locales que componentes");
});
test("Mostrar mapa como lista de listas de locales",()=>{
    localA = new Local(0);
    MapaModulo.agregarLocal(localA)
    expect(MapaModulo.filas).toStrictEqual([localA]);
});