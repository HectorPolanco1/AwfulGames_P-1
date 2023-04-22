//mamespace = espacio de nombres
// main loop = bucle principal
//aps = actualizaciones por segundos
//fps = frames por segundo
//callback 
// <>
// 1s = 1000 ms

var buclePrincipal = {
    idEjecucion: null, 
    ultimoRegistro: 0,
    aps: 0,
    fps: 0,
    iterar: function(registroTemporal) {
        buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar);
        buclePrincipal.actualizar(registroTemporal);
        buclePrincipal.dibujar();

        if(registroTemporal - buclePrincipal.ultimoRegistro > 999) {
            buclePrincipal.ultimoRegistro = registroTemporal;
            console.log("APS: " + buclePrincipal.aps + " | FPS: " + buclePrincipal.fps);
            buclePrincipal.aps = 0;
            buclePrincipal.fps = 0;
        }
    },
    detener: function() {
        
    },
    actualizar: function(registroTemporal) {
        mando.actualizar();
        maquinaEstados.actualizar(registroTemporal);
        buclePrincipal.aps++;
    },
    dibujar: function(registroTemporal) {
        maquinaEstados.dibujar();
        buclePrincipal.fps++;
    }
};