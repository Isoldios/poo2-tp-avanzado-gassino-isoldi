function Mapa(filas,columnas){
    this.filas = filas;
    this.columnas=columnas;

    this.dimensiones = function(){
        return this.filas+" filas, "+this.columnas+ " columnas";
    }
}
module.exports=Mapa;