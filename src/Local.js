const Centro=require("./Centro")

function Local(capacidad,paquetes){
    Centro.call(this,capacidad,paquetes);

}
Local.prototype = Object.create(Centro.prototype);
Local.prototype.constructor = Local;

module.exports=Local;