const Centro=require("./Centro")

function Facturacion(capacidad,paquetes){
    Centro.call(this,capacidad,paquetes);

}
Facturacion.prototype = Object.create(Centro.prototype);
Facturacion.prototype.constructor = Facturacion;

module.exports=Facturacion;