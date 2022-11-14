function Facturacion(capacidad,paquetes){
    this.capacidad=capacidad;
    this.paquetes=paquetes;

    this.cantPaquetes=function(){
        if (this.capacidad<this.paquetes){
            throw new Error("La cola esta llena");
        }else{
            return this.paquetes;
        }
    }
}
module.exports=Facturacion;