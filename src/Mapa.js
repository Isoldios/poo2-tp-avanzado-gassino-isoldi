const MapaModulo=require("./MapaModulo");

function Mapa(filas,columnas){
    this.filas = filas;
    this.columnas=columnas;

    this.dimensiones = function(){
        return [this.filas,this.columnas];
    }
    this.mapaCompleto = function(){
        let mapita=[];let i=0;let k=0;

        MapaModulo.filas.forEach(element => {
            mapita.push([element]);
            for(let j=0;j<MapaModulo.columnas.length/MapaModulo.filas.length;j++){
                mapita[i].push(MapaModulo.columnas[k])
                k++;
            }
            i++;
        });
        return mapita;
    }
}
module.exports=Mapa;