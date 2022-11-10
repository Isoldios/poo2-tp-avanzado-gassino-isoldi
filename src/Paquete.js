function Paquete(destino,productos){
    this.destino=destino;
    this.productos=productos;
    this.componente="Salida Local";

    this.componenteEtapa=function(){
        return this.componente;
    }
    this.productosDelPaquete=function(){
        return this.productos;
    }
}
module.exports=Paquete;