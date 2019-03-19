//Crea una ventana
function crearVentana(nombre) {
    var ventanaNueva = window.open("recursos.html", nombre, "toolbar=yes,scrollbars=yes,resizable=yes,top=230,left=850,width=640,height=670");
    ventanas.push(ventanaNueva);
}

var ventanas = [];

//Abre una nueva ventana
function abrirVentana() {
    var index = 0;
    var encontrada = false;
    //Si es la primera vez que se ejecuta la función crea directamente la ventana
    if (ventanas[0] == undefined) {
        crearVentana(this.value);
    } else {
        while ((index < ventanas.length) || encontrada) {
            if (ventanas[index] && !ventanas[index].closed && ventanas[index] == this.value) {
                //Si la ventana no está cerrada, está creada y ya tiene ese nombre
                encontrada = true;
            }
            index++;
        }

        if (encontrada) {
            ventanas[index].focus();
        } else {
            crearVentana(this.value);
        }
    }

}

//Cierra las ventanas abiertas
function cerrarVentanas() {
    for (let index = 0; index < ventanas.length; index++) {
        if (!ventanas[index].closed) {
            ventanas[index].close();
        }
    }
}

//Muestra los recursos relacionados con una producción en una nueva ventana
//Esta función se ejecuta al cargar la ventana
function showResource() {
    //Se recoge el título de la producción
    var tituloProduccion = document.getElementById("tituloprod");

    //Se recorre el array de ventanas 
    for (let index = 0; index < ventanas.length; index++) {
        //Si el título es igual a la ventana que haya en el array
        if (ventanas[index].name == tituloProduccion.textContent) {
            //Selecciona la zona de la ventana nueva
            var ventana = ventanas[index];
        }
    }

    var contenidoVentana = ventana.document.getElementById("contenidoZona");

    //Cambia el titulo de la ventana
    ventana.document.title = tituloProduccion.textContent;

    var encontrado = false;
    var producciones = video.productions;
    var produccion = producciones.next();
    while ((produccion.done !== true) && (!encontrado)) {

        if (produccion.value.title == tituloProduccion.textContent) {

            var tarjeta = document.createElement("div");
            tarjeta.setAttribute("class", "col-lg-12 col-md-12 mb-4");
            var borde = document.createElement("div");
            borde.setAttribute("class", "card h-100");
            borde.style.marginTop = "20%";
            var cuerpo = document.createElement("div");
            cuerpo.setAttribute("class", "card-body");
            cuerpo.style.backgroundColor = "#48C9B0";
            var tipo = document.createElement("h5");
            tipo.setAttribute("class", "mx-auto text-center");
            tipo.setAttribute("id", "actorDirector");
            tipo.appendChild(document.createTextNode("Actor"));
            var imagen = document.createElement("img");
            imagen.setAttribute("class", "card-img");
            imagen.setAttribute("width", "50");
            imagen.setAttribute("heigh", "50");

            imagen.setAttribute("src", "img/" + produccion.value.title + ".jpg");
            imagen.setAttribute("alt", produccion.value.title);

            var tituloProdu = ventana.document.getElementById("tituloZona");
            tituloProdu.setAttribute("class", "mx-auto text-center");
            tituloProdu.innerHTML = tituloProduccion.textContent;

            contenidoVentana.appendChild(tarjeta);
            tarjeta.appendChild(borde);
            borde.appendChild(tituloProdu);
            borde.appendChild(cuerpo);
            cuerpo.appendChild(imagen);

            if (produccion.value instanceof Movie) {

                if (produccion.value.resource != null) {
                    var resource = document.createElement("p");
                    resource.setAttribute("class", "card-text");

                    resource.appendChild(document.createTextNode("Recurso: " + produccion.value.resource));
                    cuerpo.appendChild(resource);
                }

                if (produccion.value.locations != null) {
                    var locations = document.createElement("p");
                    locations.setAttribute("class", "card-text");


                    locations.appendChild(document.createTextNode("Localizacion: " + produccion.value.locations));
                    cuerpo.appendChild(locations);
                }
            }

            if (produccion.value.seasons != null) {

                var temporada = document.createElement("p");
                temporada.setAttribute("class", "card-text");

                temporada.appendChild(document.createTextNode(produccion.value.seasons));
                cuerpo.appendChild(temporada);

            }
        }
        produccion = producciones.next();
    }
}