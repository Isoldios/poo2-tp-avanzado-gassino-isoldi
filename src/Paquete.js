function Paquete(destino,productos){
    this.destino=destino;
    this.productos=productos;
    this.componente=["Salida Local","Facturacion","Calidad","Distribucion",this.destino];
    this.numeroComponente=0;

    this.componenteEtapa=function(){
        return this.componente[this.numeroComponente];
    }
    this.productosDelPaquete=function(){
        return this.productos;
    }
    this.pasarEtapa=function(){
        this.numeroComponente++;
    }
}
module.exports=Paquete;