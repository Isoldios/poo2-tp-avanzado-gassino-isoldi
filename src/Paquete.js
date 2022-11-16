const MapaModulo=require("../src/MapaModulo");

var Paquete = (function(){
    var id=0;
    var newPaquete =function(destino,productos,urgencia){
        id++;
        this.destino = destino;
        this.productos=productos;
        this.urgencia = urgencia;
        
        this.productosDelPaquete=function(){
            return this.productos;
        }
        this.getId=function(){
            return id;
        }
        this.getUrgencia=function(){
            var tiempoEstimado=0;
            switch(this.urgencia){
                case "Muy rapido":
                    tiempoEstimado=MapaModulo.columnas.length/MapaModulo.filas.length;
                    break;
                case "Rapido":
                    tiempoEstimado=(MapaModulo.columnas.length/MapaModulo.filas.length)*1.5;
                    break;
            }
            return tiempoEstimado;
        }
    }
    return newPaquete;
}) ();

module.exports = Paquete;