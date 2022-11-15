const MapaModulo=require("./MapaModulo");

function Mapa(filas,columnas){
    this.filas = filas;
    this.columnas=columnas;

    this.dimensiones = function(){
        return [this.filas,this.columnas];
    }
    this.mapaCompleto = function(){
        let mapita=[];
        let i=0;
        MapaModulo.filas.forEach(local => {
            mapita.push([local]);
            MapaModulo.columnas.forEach(componente => {
                mapita[i].push(componente)
            });
            i++;
        });
        return mapita;
    }
}
module.exports=Mapa;