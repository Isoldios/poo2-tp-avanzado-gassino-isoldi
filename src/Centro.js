function Centro(capacidad,paquetes){
    this.capacidad=capacidad;
    this.paquetes=paquetes;

    this.cantPaquetes=function(){
        if (this.capacidad<this.paquetes.length){
            throw new Error("La cola esta llena");
        }else{
            return this.paquetes.length;
        }
    }
    this.validarAgregarPaquete=function(){
        var res=true;
        if (this.capacidad<=this.paquetes.length)
            res=false;
        return res;
    }
}
module.exports=Centro;