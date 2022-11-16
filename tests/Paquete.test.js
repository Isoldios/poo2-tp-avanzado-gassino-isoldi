const MapaModulo = require("../src/MapaModulo");
const Paquete = require("../src/Paquete");
const Producto = require("../src/Producto");

beforeEach(()=>{
    productos=[]
    destornillador=new Producto("Destornillador",3);
    tornillo=new Producto("Tornillo",40);
    productos.push(destornillador,tornillo)
    paquete = new Paquete(1,productos,"Muy rapido");
    paquete2 = new Paquete(1,productos,"Rapido");
    paquete3 = new Paquete(1,productos,"Normal");
})

test("Generar paquete",()=>{
    expect(paquete.destino).toBe(1);
});
test("Productos del paquete",()=>{
    expect(paquete.productosDelPaquete()).toStrictEqual([destornillador,tornillo]);
});
test("Urgencia del paquete",()=>{
    expect(paquete.urgencia).toBe("Muy rapido");
});
test("Id de un paquete",()=>{
    expect(paquete.getId()).toBe(12);
});
test("Tiempo estimado del paquete para llegar en urgencia Muy Rapido",()=>{
    MapaModulo.filas=["LocalA","LocalB"];
    MapaModulo.columnas=["FacturacionA","CalidadA","FacturacionB","CalidadB"]
    expect(paquete.getUrgencia()).toBe(MapaModulo.columnas.length/MapaModulo.filas.length);
});
test("Tiempo estimado del paquete para llegar en urgencia Rapido",()=>{
    MapaModulo.filas=["LocalA","LocalB"];
    MapaModulo.columnas=["FacturacionA","CalidadA","FacturacionB","CalidadB"]
    expect(paquete2.getUrgencia()).toBe((MapaModulo.columnas.length/MapaModulo.filas.length)*1.5);
});
test("Tiempo estimado del paquete para llegar en urgencia Normal",()=>{
    MapaModulo.filas=["LocalA","LocalB"];
    MapaModulo.columnas=["FacturacionA","CalidadA","FacturacionB","CalidadB"]
    expect(paquete3.getUrgencia()).toBe((MapaModulo.columnas.length/MapaModulo.filas.length)*2);
});
test("El paquete llego a tiempo",()=>{
    MapaModulo.filas=["LocalA","LocalB"];
    MapaModulo.columnas=["FacturacionA","CalidadA","FacturacionB","CalidadB"]
    expect(paquete.tiempoEmpleado()).toBe(paquete.getUrgencia()>=paquete.tiempo);
});