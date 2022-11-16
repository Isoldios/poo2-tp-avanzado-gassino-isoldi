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
    this.indiceComponente=function(componente){
        var j=-1;
        for (i=0;i<this.mapaCompleto().length;i++){
            for(k=0;k<this.mapaCompleto()[i].length;k++){
                if(this.mapaCompleto()[i][k]==componente){
                    j=k;
                }
            }
        }
        return j;
    }
    this.validarMovimiento=function(componente){
        return (componente.validarAgregarPaquete() && this.indiceComponente(componente)!=-1)
    }
    this.moverPaquete=function(paquete,componente){
        var resultado=false;
        var j = this.indiceComponente(componente);
        for (i=0;i<this.mapaCompleto().length;i++){
            for(k=0;k<this.mapaCompleto()[i].length;k++){
                if(this.mapaCompleto()[i][k]==componente){
                    l=i;
                }
            }
        }
        res=-1
        for(k=0;k<this.mapaCompleto()[l][j-1].paquetes.length;k++){
            if(this.mapaCompleto()[l][j-1].paquetes[k]==paquete){
                res=k;
            }
        }
        if (res!=1 && this.validarMovimiento(componente)){
            var paq = this.mapaCompleto()[l][j-1].paquetes.filter(p=>p==paquete);
            this.mapaCompleto()[l][j-1].paquetes = this.mapaCompleto()[l][j-1].paquetes.filter(p=>p!=paquete)
            this.mapaCompleto()[l][j].paquetes.push(paq[0]);
            resultado=true
        }
        return resultado;
    }
}
module.exports=Mapa;