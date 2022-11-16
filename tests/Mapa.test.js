const Mapa=require("../src/Mapa")
const Local=require("../src/Local")
const Distribucion=require("../src/Distribucion")
const Facturacion=require("../src/Facturacion")
const Calidad=require("../src/Calidad")
const Paquete=require("../src/Paquete")
const Producto=require("../src/Producto")
const MapaModulo=require("../src/MapaModulo");

beforeEach(()=>{
    mapa = new Mapa(0,0);
});
test("Generar mapa",()=>{
    expect(mapa.dimensiones()).toStrictEqual([0,0]);
});
test("Generamos un local con una componente Facturacion",()=>{
    localA=new Local(5,0);
    facturacionA=new Facturacion(6,0);
    MapaModulo.agregarFila(localA,[facturacionA]);
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
    localB = new Local(5,0);
    facturacionB=new Facturacion(5,0);
    calidadB=new Calidad(2,0);
    distribucionB=new Distribucion(20,0);
    MapaModulo.agregarFila(localB,[facturacionB,calidadB,distribucionB]);
    expect(mapa.mapaCompleto()).toStrictEqual([[localA,facturacionA,calidadA,distribucionA],
        [localB,facturacionB,calidadB,distribucionB]]);
});
test("3 filas completas: 3 locales, 3 componentes",()=>{
    localC = new Local(5,0);
    facturacionC=new Facturacion(4,0);
    calidadC=new Calidad(3,0);
    distribucionC=new Distribucion(25,0);
    MapaModulo.agregarFila(localC,[facturacionC,calidadC,distribucionC]);
    expect(mapa.mapaCompleto()).toStrictEqual([[localA,facturacionA,calidadA,distribucionA],
        [localB,facturacionB,calidadB,distribucionB],
        [localC,facturacionC,calidadC,distribucionC]]);
});
test('No pueden haber mas locales que componentes (n<m)', () => {
    expect(() => {
        localD = new Local(5,0);
        facturacionD=new Facturacion(4,0);
        calidadD=new Calidad(3,0);
        distribucionD=new Distribucion(25,0);
        MapaModulo.agregarFila(localD,[facturacionD,calidadD,distribucionD]);
    }).toThrow("No pueden haber mas locales que componentes");
});
test("Mover los paquetes por la matriz",()=>{
    productos=[]
    destornillador=new Producto("Destornillador",3);
    tornillo=new Producto("Tornillo",40);
    productos.push(destornillador,tornillo)
    paquete = new Paquete(1,productos,"Muy rapido");
    MapaModulo.agregarPaquete(paquete,localA)
    expect(mapa.moverPaquete(paquete,facturacionA)).toBe(true);
});