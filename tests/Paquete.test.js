const Paquete = require("../src/Paquete");
const Producto = require("../src/Producto");

beforeEach(()=>{
    productos=[]
    destornillador=new Producto("Destornillador",3);
    tornillo=new Producto("Tornillo",40);
    productos.push(destornillador,tornillo)
    paquete = new Paquete(1,productos,"Muy rapido");
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
    expect(paquete.getId()).toBe(4);
});