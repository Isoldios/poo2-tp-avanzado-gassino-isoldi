function Paquete(destino){
    this.destino=destino;
    this.componente="Salida Local";

    this.componenteEtapa=function(){
        return this.componente;
    }
}
module.exports=Paquete;