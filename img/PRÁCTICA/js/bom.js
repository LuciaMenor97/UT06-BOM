"use strict";

var ventana;
function abrirVentana() {
    if (ventana && !ventana.closed) {
        ventana.focus();
    } else {
        //Abre una ventana nueva con una con nombre y características.
        ventana = window.open("nuevaVentana.html", "NuevaVentana", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
    }
}


