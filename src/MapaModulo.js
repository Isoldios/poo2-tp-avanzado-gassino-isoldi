var MapaModulo = (function(){
    let filas=[];
    let columnas=[];
    
    function agregarLocal(local) {
        filas.push(local);
    }
    function agregarComponente(componente) {
        columnas.push(componente);
    }

    return {
        agregarLocal: agregarLocal,
        agregarComponente: agregarComponente,
        filas,
        columnas
    };
})();

module.exports=MapaModulo;