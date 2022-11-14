function Paquete(destino,productos,urgencia){
    this.destino=destino;
    this.productos=productos;
    this.urgencia=urgencia;
    this.componente=["Salida Local","Facturacion","Calidad","Distribucion",this.destino];
    this.numeroComponente=0;

    this.componenteEtapa=function(){
        if (this.numeroComponente<this.componente.length){
            return this.componente[this.numeroComponente];
        }else{
            throw new Error("Ya llego a su destino");
        }
    }
    this.productosDelPaquete=function(){
        return this.productos;
    }
    this.pasarEtapa=function(){
        this.numeroComponente++;
    }
}
module.exports=Paquete;