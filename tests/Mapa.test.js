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
test("Mostrar mapa como lista de listas de locales",()=>{
    localA = new Local(5,0);
    MapaModulo.agregarLocal(localA)
    expect(MapaModulo.filas).toStrictEqual([localA]);
});
test("Agregamos Facturacion",()=>{
    facturacionA=new Facturacion(6,0);
    MapaModulo.agregarComponente(facturacionA);
    expect(MapaModulo.columnas).toStrictEqual([facturacionA]);
});
test("Primer fila completa: Un local, una componente",()=>{
    expect(mapa.mapaCompleto()).toStrictEqual([[localA,facturacionA]]);
});