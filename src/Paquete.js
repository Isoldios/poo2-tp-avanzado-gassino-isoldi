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
    }
    return newPaquete;
}) ();

module.exports = Paquete;