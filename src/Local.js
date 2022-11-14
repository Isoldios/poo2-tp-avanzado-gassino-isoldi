function Local(paquetes){
    this.paquetes=paquetes;

    this.paquetesXUniDeTiempo = function(){
        if (this.paquetes>5){
            throw new Error("No puede generar mas de 5 paquetes por unidad de tiempo");
        }else{
            return this.paquetes;
        }
    }
}
module.exports=Local;