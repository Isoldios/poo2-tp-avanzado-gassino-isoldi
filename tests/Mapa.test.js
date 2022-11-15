const Mapa=require("../src/Mapa")
const Local=require("../src/Local")
const Distribucion=require("../src/Distribucion")
const Facturacion=require("../src/Facturacion")
const Calidad=require("../src/Calidad")
const MapaModulo=require("../src/MapaModulo");

beforeEach(()=>{
    mapa = new Mapa(0,0);
});
test("Generar mapa",()=>{
    expect(mapa.dimensiones()).toStrictEqual([0,0]);
});
test("Agregar local al mapa",()=>{
    localA = new Local(5,0);
    mapa.agregarLocal(localA);
    expect(mapa.dimensiones()).toStrictEqual([1,1]);
});
test('Agregar 2 locales al mapa pero ninguna componente', () => {
    expect(() => {
    localA = new Local(5,0);
    localB = new Local(5,1);
    mapa.agregarLocal(localA);
    mapa.agregarLocal(localB);
    }).toThrow("No pueden haber mas locales que componentes");
});
test("Mostrar mapa como lista de listas de locales",()=>{
    localA = new Local(5,0);
    MapaModulo.agregarLocal(localA)
    expect(MapaModulo.filas).toStrictEqual([localA]);
});
test("Agregamos Facturacion",()=>{
    localA = new Local(5,0);
    MapaModulo.agregarLocal(localA);
    facturacionA=new Facturacion(6,0);
    MapaModulo.agregarComponente(facturacionA);
    expect(MapaModulo.filas).toStrictEqual([localA]);
});