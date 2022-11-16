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
}
module.exports=Centro;