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
test("Primer fila completa: 1 local, 3 componentes",()=>{
    calidadA=new Calidad(3,0);
    distribucionA=new Distribucion(10,0);
    MapaModulo.agregarComponente(calidadA);
    MapaModulo.agregarComponente(distribucionA);
    expect(mapa.mapaCompleto()).toStrictEqual([[localA,facturacionA,calidadA,distribucionA]]);
});
test("2 filas completas: 2 locales, 3 componentes",()=>{
    localB = new Local(5,3);
    MapaModulo.agregarLocal(localB);
    facturacionB=new Facturacion(5,0);
    calidadB=new Calidad(2,0);
    distribucionB=new Distribucion(20,0);
    MapaModulo.agregarComponente(facturacionB);
    MapaModulo.agregarComponente(calidadB);
    MapaModulo.agregarComponente(distribucionB);
    expect(mapa.mapaCompleto()).toStrictEqual([[localA,facturacionA,calidadA,distribucionA],
        [localB,facturacionB,calidadB,distribucionB]]);
});
test("3 filas completas: 3 locales, 3 componentes",()=>{
    localC = new Local(5,2);
    MapaModulo.agregarLocal(localC);
    facturacionC=new Facturacion(4,0);
    calidadC=new Calidad(3,0);
    distribucionC=new Distribucion(25,0);
    MapaModulo.agregarComponente(facturacionC);
    MapaModulo.agregarComponente(calidadC);
    MapaModulo.agregarComponente(distribucionC);
    expect(mapa.mapaCompleto()).toStrictEqual([[localA,facturacionA,calidadA,distribucionA],
        [localB,facturacionB,calidadB,distribucionB],
        [localC,facturacionC,calidadC,distribucionC]]);
});
