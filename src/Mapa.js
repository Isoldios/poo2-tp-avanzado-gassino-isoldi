function Mapa(filas,columnas){
    this.filas = filas;
    this.columnas=columnas;

    this.dimensiones = function(){
        return [this.filas,this.columnas];
    }
    this.agregarLocal=function(local){
        if (this.filas<this.columnas){
            this.filas++;
        }else if(this.filas==0 && this.columnas==0){
            this.filas++;
            this.columnas++;
        }else{
            throw new Error("No pueden haber mas locales que componentes");
        }
    }
}
module.exports=Mapa;