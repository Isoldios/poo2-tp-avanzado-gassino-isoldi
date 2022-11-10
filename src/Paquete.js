function Paquete(destino){
    this.destino=destino;
    this.componente="Salida Local";

    this.componenteEtapa=function(){
        return this.componente;
    }
    this.productos=function(){
        return ["Tornillo","Destornillador"];
    }
}
module.exports=Paquete;