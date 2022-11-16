var MapaModulo = (function(){
    let filas=[];
    let columnas=[];
    let cantComponentes = columnas.length/filas.length
    
    function agregarLocal(local) {
        filas.push(local);
    }
    function agregarComponente(componente) {
        columnas.push(componente);
    }
    function agregarFila(local,componente){
        if (filas.length<columnas.length/filas.length || (filas.length==0 && columnas.length==0)){
            agregarLocal(local);
            componente.forEach(element => {
                agregarComponente(element);
            });
        }
        else{
            throw new Error("No pueden haber mas locales que componentes");
        }
    }
    return {
        agregarComponente: agregarComponente,
        agregarFila,
        filas,
        columnas,
        cantComponentes
    };
})();

module.exports=MapaModulo;