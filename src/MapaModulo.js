var MapaModulo = (function(){
    let filas=[];
    
    function agregarLocal(local) {
        filas.push(local);
    }

    return {
        agregarLocal: agregarLocal,
        filas
    };
})();

module.exports=MapaModulo;