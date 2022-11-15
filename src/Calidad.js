const Centro=require("./Centro")

function Calidad(capacidad,paquetes){
    Centro.call(this,capacidad,paquetes);

}
Calidad.prototype = Object.create(Centro.prototype);
Calidad.prototype.constructor = Calidad;

module.exports=Calidad;