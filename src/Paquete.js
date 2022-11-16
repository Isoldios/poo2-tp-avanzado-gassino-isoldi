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
                case "Normal":
                    tiempoEstimado=(MapaModulo.columnas.length/MapaModulo.filas.length)*2;
                    break;
            }
            return tiempoEstimado;
        }

        this.tiempo=0;
        this.tiempoEmpleado=function(){
            var res=true;
            if (this.tiempo>this.getUrgencia())
                res=false;
            return res
        }
        this.pasarTiempo=function(){
            return this.tiempo++;
        }
    }
    return newPaquete;
}) ();

module.exports = Paquete;