var MapaModulo = (function(){
    let filas=[];
    let columnas=[];
    let T=0;
    
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
    
    function agregarPaquete(paquete,local){
        if (local.validarAgregarPaquete()){
            local.paquetes.push(paquete);
            paquete.pasarTiempo();
        }
    }
    function cambioDeTiempo(){
        return T++;
    }
    return {
        agregarComponente: agregarComponente,
        agregarFila:agregarFila,
        agregarPaquete:agregarPaquete,
        filas,
        columnas,
    };
})();

module.exports=MapaModulo;