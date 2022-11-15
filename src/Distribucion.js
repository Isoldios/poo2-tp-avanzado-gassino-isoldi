const Centro=require("./Centro")

function Distribucion(capacidad,paquetes){
    Centro.call(this,capacidad,paquetes);

}
Distribucion.prototype = Object.create(Centro.prototype);
Distribucion.prototype.constructor = Distribucion;

module.exports=Distribucion;