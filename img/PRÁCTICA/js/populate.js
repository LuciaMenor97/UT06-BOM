/**Función donde añadiremos los objetos de VideoSystem,
 * que tendrá la aplicación como carga inicial de datos, 
 * así com la relación entre ellos en el objeto de sistema.
 */
function initPopulate() {

    //Instanciamos el objeto VideoSystem
    //var video = VideoSystem.getInstance();




    //CREACIÓN OBJETOS

    //Directores

    var director1 = new Director("Matt", "Groening", "", new Date(1954, 02, 15));
    var director2 = new Director("Juan Antonio", "Bayona", "", new Date(1975, 05, 09));
    var director3 = new Director("James", "Cameron", "", new Date(1954, 08, 16));
    var director4 = new Director("Steven", "Spielberg", "", new Date(1946, 12, 18));

    //Actores

    var actor1 = new Actor("Johnny", "Depp", "", new Date(1963, 06, 09));
    var actor2 = new Actor("Daniel", "Radcliffe", "", new Date(1989, 07, 23));
    var actor3 = new Actor("Fa", "Mulan", "", new Date(1998, 06, 05));
    var actor4 = new Actor("Carl", "Grimes", "", new Date(2003, 02, 25));


    //Recursos

    var recurso1 = new Resource(160, "https://www.dondesea.com", ['Español', ' Inglés', ' Italiano'], ['Español', ' Inglés', ' Italiano']);
    var recurso2 = new Resource(190, "https://www.dondesea.com", ['Serbio', ' Brasileño', ' Ruso'], ['Serbio', ' Brasileño', ' Ruso']);


    //Coordenadas

    var coordenadas1 = new Coordinate(50, 165);
    var coordenadas2 = new Coordinate(66, 154);


    //Películas

    var peliculacomedia1 = new Movie("Deadpool", new Date(2016, 01, 21), recurso1, [coordenadas1], "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculacomedia2 = new Movie("Ocho apellidos vascos", new Date(2014, 03, 14), recurso2, [coordenadas2], "Española", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculaaccion1 = new Movie("Piratas del caribe", new Date(2017, 05, 11), recurso1, [coordenadas1], "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculaaccion2 = new Movie("Los vengadores", new Date(2018, 04, 27), recurso2, [coordenadas2], "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculadrama1 = new Movie("Titanic", new Date(1998, 01, 08), recurso1, [coordenadas1], "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculadrama2 = new Movie("Forrest Gump", new Date(1994, 09, 24), recurso2, [coordenadas2], "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculaaventura1 = new Movie("Harry Potter y la Cámara Secreta", new Date(2002, 11, 29), recurso1, [coordenadas1], "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculaaventura2 = new Movie("El señor de los anillos", new Date(2001, 12, 19), recurso2, [coordenadas2], "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculaterror1 = new Movie("La monja", new Date(2018, 09, 07), recurso1, [coordenadas1], "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculaterror2 = new Movie("El Orfanato", new Date(2007, 10, 11), recurso2, [coordenadas2], "Española", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculaciencia1 = new Movie("Regreso al futuro", new Date(1985, 12, 02), recurso1, [coordenadas1], "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculaciencia2 = new Movie("Star Wars", new Date(1997, 11, 07), recurso2, [coordenadas2], "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var pelicularomance1 = new Movie("El diario de Noa", new Date(2004, 10, 22), recurso1, [coordenadas1], "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var pelicularomance2 = new Movie("Antes de ti", new Date(2016, 07, 01), recurso2, [coordenadas2], "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculamusical1 = new Movie("Bohemian Rhapsody", new Date(2018, 12, 28), recurso1, [coordenadas1], "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculamusical2 = new Movie("Grease", new Date(1978, 09, 22), recurso2, [coordenadas2], "Americana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculaanimacion1 = new Movie("Mulán", new Date(1998, 06, 05), recurso1, [coordenadas1], "", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var peliculaanimacion2 = new Movie("Coco", new Date(2017, 10, 27), recurso2, [coordenadas2], "", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");


    //Episodios

    var episodio1 = new Episodes("Episodio 1", recurso1, [coordenadas1]);
    var episodio2 = new Episodes("Episodio 2", recurso2, [coordenadas2]);
    var episodio3 = new Episodes("Episodio 3", recurso1, [coordenadas1]);
    var episodio4 = new Episodes("Episodio 4", recurso2, [coordenadas2]);


    //Temporadas

    var season1 = new Season("Temporada 1", [episodio1, episodio2]);
    var season2 = new Season("Temporada 2", [episodio3, episodio4]);


    //Series

    var serieaccion1 = new Serie("Arrow", new Date(2012, 10, 10), [season1, season2], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var serieaccion2 = new Serie("Perdidos", new Date(2004, 09, 22), [season1, season2], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var seriecomedia1 = new Serie("Los Simpson", new Date(1989, 12, 07), [season1, season2], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var seriecomedia2 = new Serie("Silicon Valley", new Date(2014, 04, 06), [season1, season2], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var seriedrama1 = new Serie("The Good Doctor", new Date(2017, 09, 25), [season1, season2], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var seriedrama2 = new Serie("Breaking Bad", new Date(2008, 01, 20), [season1, season2], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var serieaventura1 = new Serie("Vikingos", new Date(2013, 03, 03), [season1, season2], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var serieaventura2 = new Serie("El ministerio del tiempo", new Date(2015, 02, 24), [season1, season2], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var serieterror1 = new Serie("The Walking Dead", new Date(2010, 10, 31), [season1, season2], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var serieterror2 = new Serie("American Horror Story", new Date(2011, 10, 05), [season1, season2], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var serieciencia1 = new Serie("Black Mirror", new Date(2011, 12, 04), [season1, season2], "Nacionalida", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var serieciencia2 = new Serie("Stranger Things", new Date(2016, 07, 15), [season1, season2], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var serieromance1 = new Serie("True Blood", new Date(2008, 09, 07), [season1, season2], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var serieromance2 = new Serie("This is us", new Date(2016, 02, 20), [season1, season2], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var seriemusical1 = new Serie("Glee", new Date(2009, 05, 19), [season1, season2], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var seriemusical2 = new Serie("Empire", new Date(2015, 01, 07), [season1, season2], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var serieanimacion1 = new Serie("Inspector Gadget", new Date(1982, 12, 04), [season1, season2], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    var serieanimacion2 = new Serie("Bob Esponja", new Date(1999, 05, 01), [season1, season2], "Nacionalidad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");


    //Interpretaciones

    var interpretacion1 = new Interpretation(peliculaaccion1, "Jack Sparrow", true);
    var interpretacion2 = new Interpretation(peliculaaventura1, "Harry Potter", true);
    var interpretacion3 = new Interpretation(peliculaanimacion1, "Fa Mulan", true);
    var interpretacion4 = new Interpretation(serieterror1, "Carl Grimes", false);
    var interpretacion5 = new Interpretation(peliculaaventura1, "Gellert Grindelwald", false);


    //Categorías

    var categoria1 = new Category("Acción", "En este género prima la espectacularidad de las imágenes por medio de efectos especiales");
    var categoria2 = new Category("Animación", "No recurre a la técnica del rodaje de imágenes reales, sino a técnicas de animación");
    var categoria3 = new Category("Aventura", "Se refleja un mundo heroico de combates y aventuras. Predominan la acción y valores caballerescos");
    var categoria4 = new Category("Ciencia-ficción", "Género especulativo que relata acontecimientos desarrollados en un marco  imaginario");
    var categoria5 = new Category("Comedia", "Recrea situaciones de humor que intentan provocar la risa de la audiencia");
    var categoria6 = new Category("Drama", "Se desarrolla a fondo la caracterización de los personajes, dejando aflorar sus emociones y sentimientos");
    var categoria7 = new Category("Musical", "Contiene interrupciones en su desarrollo, para dar un breve receso por medio de un fragmento musical");
    var categoria8 = new Category("Romance", "Retrata argumentos construidos de eventos y personajes relacionados con el amor y las relaciones románticas");
    var categoria9 = new Category("Terror", "Se caracteriza por su enfoque en provocar en el espectador sensaciones de miedo, repugnancia, incomodidad o preocupación");



    //AÑADIMOS LOS OBJETOS 

    //Añadimos las categorías

    video.addCategory(categoria1);
    video.addCategory(categoria2);
    video.addCategory(categoria3);
    video.addCategory(categoria4);
    video.addCategory(categoria5);
    video.addCategory(categoria6);
    video.addCategory(categoria7);
    video.addCategory(categoria8);
    video.addCategory(categoria9);


    //Añadimos las producciones

    video.addProduction(peliculaaccion1);
    video.addProduction(peliculaaccion2);

    video.addProduction(peliculacomedia1);
    video.addProduction(peliculacomedia2);

    video.addProduction(peliculadrama1);
    video.addProduction(peliculadrama2);

    video.addProduction(peliculaaventura1);
    video.addProduction(peliculaaventura2);

    video.addProduction(peliculaterror1);
    video.addProduction(peliculaterror2);

    video.addProduction(peliculaciencia1);
    video.addProduction(peliculaciencia2);

    video.addProduction(pelicularomance1);
    video.addProduction(pelicularomance2);

    video.addProduction(peliculamusical1);
    video.addProduction(peliculamusical2);

    video.addProduction(peliculaanimacion1);
    video.addProduction(peliculaanimacion2);

    video.addProduction(serieaccion1);
    video.addProduction(serieaccion2);

    video.addProduction(seriecomedia1);
    video.addProduction(seriecomedia2);

    video.addProduction(seriedrama1);
    video.addProduction(seriedrama2);

    video.addProduction(serieaventura1);
    video.addProduction(serieaventura2);

    video.addProduction(serieterror1);
    video.addProduction(serieterror2);

    video.addProduction(serieciencia1);
    video.addProduction(serieciencia2);

    video.addProduction(serieromance1);
    video.addProduction(serieromance2);

    video.addProduction(seriemusical1);
    video.addProduction(seriemusical2);

    video.addProduction(serieanimacion1);
    video.addProduction(serieanimacion2);


    //Añadimos los actores

    video.addActor(actor1);
    video.addActor(actor2);
    video.addActor(actor3);
    video.addActor(actor4);


    //Añadimos los directores

    video.addDirector(director1);
    video.addDirector(director2);
    video.addDirector(director3);
    video.addDirector(director4);



    //ASIGNACIONES

    video.assignCategory(categoria1, peliculaaccion1);
    video.assignCategory(categoria1, peliculaaccion2);

    video.assignCategory(categoria1, serieaccion1);
    video.assignCategory(categoria1, serieaccion2);

    video.assignCategory(categoria2, peliculaanimacion1);
    video.assignCategory(categoria2, peliculaanimacion2);

    video.assignCategory(categoria2, serieanimacion1);
    video.assignCategory(categoria2, serieanimacion2);

    video.assignCategory(categoria3, peliculaaventura1);
    video.assignCategory(categoria3, peliculaaventura2);

    video.assignCategory(categoria3, serieaventura1);
    video.assignCategory(categoria3, serieaventura2);

    video.assignCategory(categoria4, peliculaciencia1);
    video.assignCategory(categoria4, peliculaciencia2);

    video.assignCategory(categoria4, serieciencia1);
    video.assignCategory(categoria4, serieciencia2);

    video.assignCategory(categoria5, peliculacomedia1);
    video.assignCategory(categoria5, peliculacomedia2);

    video.assignCategory(categoria5, seriecomedia1);
    video.assignCategory(categoria5, seriecomedia2);

    video.assignCategory(categoria6, peliculadrama1);
    video.assignCategory(categoria6, peliculadrama2);

    video.assignCategory(categoria6, seriedrama1);
    video.assignCategory(categoria6, seriedrama2);

    video.assignCategory(categoria7, peliculamusical1);
    video.assignCategory(categoria7, peliculamusical2);

    video.assignCategory(categoria7, seriemusical1);
    video.assignCategory(categoria7, seriemusical2);

    video.assignCategory(categoria8, pelicularomance1);
    video.assignCategory(categoria8, pelicularomance2);

    video.assignCategory(categoria8, serieromance1);
    video.assignCategory(categoria8, serieromance2);

    video.assignCategory(categoria9, peliculaterror1);
    video.assignCategory(categoria9, peliculaterror2);

    video.assignCategory(categoria9, serieterror1);
    video.assignCategory(categoria9, serieterror2);

    video.assignDirector(director1, seriecomedia1);
    video.assignDirector(director2, peliculaterror2);
    video.assignDirector(director3, peliculadrama1);
    video.assignDirector(director4, peliculaciencia1);

    video.assignActor(actor1, interpretacion1);
    video.assignActor(actor2, interpretacion2);
    video.assignActor(actor3, interpretacion3);
    video.assignActor(actor4, interpretacion4);
    video.assignActor(actor1, interpretacion5);

}



//Instanciamos el objeto VideoSystem
var video = VideoSystem.getInstance();

//Añadimos un nombre a nuestro sistema 
video.name = "VIDEOSYSTEM";

var titulo = document.getElementById("titulo");

var main = document.getElementsByTagName("main")[0];


/**Función que se utilizará para crear la página de inicio.
 * Esta función tiene que crear en la zona central la distribución de todas
 * las categorías disponibles en el sistema.
 */
function showHomePage() {

    titulo.appendChild(document.createTextNode(video.name));

    var iterable_category = video.categories;
    var categoria = iterable_category.next();

    var activo = true;

    var div_categories = document.createElement("div");
    div_categories.setAttribute("id", "div_categories");
    div_categories.className = "carousel slide p-2 mt-4 mb-4";
    div_categories.setAttribute("data-ride", "carousel");
    var div_2 = document.createElement("div");
    div_2.className = "carousel-inner";

    while (categoria.done !== true) {

        var div_3 = document.createElement("div");

        if (activo) {
            div_3.className = "carousel-item active";
        } else {
            div_3.className = "carousel-item";
        }


        var imagen_1 = document.createElement("img");
        imagen_1.setAttribute("src", "img/" + categoria.value.name + ".jpg");
        imagen_1.className = "d-block w-100";

        var div_caption1 = document.createElement("div");
        div_caption1.className = "carousel-caption";
        var h5 = document.createElement("button");
        h5.setAttribute("value", categoria.value.name);
        h5.addEventListener("click", showProductions);
        h5.appendChild(document.createTextNode(categoria.value.name));
        h5.setAttribute("class", "texto_carousel btn btn-link categoriah5");
        var p = document.createElement("p");
        p.setAttribute("class", "texto_carousel");
        p.appendChild(document.createTextNode(categoria.value.description));

        var controles = document.createElement("a");
        controles.setAttribute("class", "carousel-control-prev");
        controles.setAttribute("href", "#div_categories");
        controles.setAttribute("role", "button");
        controles.setAttribute("data-slide", "prev");
        var span_prev = document.createElement("span");
        span_prev.setAttribute("class", "carousel-control-prev-icon");
        span_prev.setAttribute("aria-hidden", "true");
        var span_prev2 = document.createElement("span");
        span_prev2.setAttribute("class", "sr-only");
        span_prev2.innerHTML = "Previous";

        var controles_next = document.createElement("a");
        controles_next.setAttribute("class", "carousel-control-next");
        controles_next.setAttribute("href", "#div_categories");
        controles_next.setAttribute("role", "link");
        controles_next.setAttribute("data-slide", "next");
        var span_next = document.createElement("span");
        span_next.setAttribute("class", "carousel-control-next-icon");
        span_next.setAttribute("aria-hidden", "true");
        var span_next2 = document.createElement("span");
        span_next2.setAttribute("class", "sr-only");
        span_next2.innerHTML = "Next";


        main.appendChild(div_categories);
        div_categories.appendChild(div_2);
        div_2.appendChild(div_3);
        div_3.appendChild(imagen_1);
        div_3.appendChild(div_caption1);
        div_caption1.appendChild(h5);
        div_caption1.appendChild(p);
        div_categories.appendChild(controles);
        div_categories.appendChild(controles_next);
        controles.appendChild(span_prev);
        controles.appendChild(span_prev2);
        controles_next.appendChild(span_next);
        controles_next.appendChild(span_next2);

        activo = false;

        categoria = iterable_category.next();
    }

}


/**Esta función crea la estructura de menú,
 * que permite navegar entre categorías.
 */
function categoriesMenuPopulate() {

    var li_menu = document.getElementById("li_category");
    var a_menu = document.getElementById("category");

    var dropdown1 = document.createElement("div");
    dropdown1.setAttribute("class", "dropdown");
    var button = document.createElement("button");
    button.setAttribute("class", "btn btn-link p-0");
    button.setAttribute("type", "button");
    button.setAttribute("id", "dropdownMenuButton");
    button.setAttribute("data-toggle", "dropdown");
    button.setAttribute("aria-haspopup", "true");
    button.setAttribute("aria-expanded", "false");
    var dropdown2 = document.createElement("div");
    dropdown2.setAttribute("class", "dropdown-menu");
    dropdown2.setAttribute("aria-labelledby", "dropdownMenuButton");



    var iterable_category = video.categories;
    var categoria = iterable_category.next();

    while (categoria.done !== true) {

        var a = document.createElement("button");
        a.setAttribute("class", "dropdown-item");
        a.setAttribute("value", categoria.value.name);
        a.addEventListener("click", showProductions);
        a.appendChild(document.createTextNode(categoria.value.name));

        li_menu.appendChild(button);

        button.appendChild(a_menu);
        a_menu.appendChild(dropdown1);
        dropdown1.appendChild(dropdown2);
        dropdown2.appendChild(a);

        categoria = iterable_category.next();

    }
}


/**Función que muestra un listado con los actores del sistema. */
function showActors() {

    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    var row = document.createElement("div");
    row.setAttribute("class", "row");
    main.appendChild(row);

    var iterable_actor = video.actors;
    var actor = iterable_actor.next();

    while (actor.done !== true) {

        var div_row = document.createElement("div");
        div_row.setAttribute("class", "col-md-6");

        var card = document.createElement("div");
        card.setAttribute("class", "card");

        var img = document.createElement("img");
        img.setAttribute("src", "img/" + actor.value.name + " " + actor.value.lastname1 + ".jpg");
        img.setAttribute("class", "card-img-top");

        var card_body = document.createElement("div");
        card_body.setAttribute("class", "card-body");

        var h5 = document.createElement("h5");
        h5.setAttribute("class", "card-title");
        h5.appendChild(document.createTextNode(actor.value.name + " " + actor.value.lastname1));

        var p = document.createElement("p");
        p.setAttribute("class", "card-text");

        var card_footer = document.createElement("div");
        card_footer.setAttribute("class", "card-footer");

        var button = document.createElement("button");
        button.setAttribute("class", "card-link");
        button.appendChild(document.createTextNode("Mostrar información"));
        button.setAttribute("value", actor.value.name + " " + actor.value.lastname1);
        button.addEventListener("click", showActor);

        row.appendChild(div_row);
        div_row.appendChild(card);
        card.appendChild(img);
        card.appendChild(card_body);
        card_body.appendChild(h5);
        card_body.appendChild(p);
        card.appendChild(card_footer);
        card_footer.appendChild(button);


        actor = iterable_actor.next();
    }


}


/**Función que muestra un listado con los directores del sistmema. */
function showDirectors() {

    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    var row = document.createElement("div");
    row.setAttribute("class", "row");
    main.appendChild(row);


    var iterable_director = video.directors;
    var director = iterable_director.next();

    while (director.done !== true) {

        var div_row = document.createElement("div");
        div_row.setAttribute("class", "col-md-6");

        var card = document.createElement("div");
        card.setAttribute("class", "card");

        var img = document.createElement("img");
        img.setAttribute("src", "img/" + director.value.name + " " + director.value.lastname1 + ".jpg");
        img.setAttribute("class", "card-img-top");

        var card_body = document.createElement("div");
        card_body.setAttribute("class", "card-body");

        var h5 = document.createElement("h5");
        h5.setAttribute("class", "card-title");
        h5.appendChild(document.createTextNode(director.value.name + " " + director.value.lastname1));

        var p = document.createElement("p");
        p.setAttribute("class", "card-text");

        var card_footer = document.createElement("div");
        card_footer.setAttribute("class", "card-footer");

        var button = document.createElement("button");
        button.setAttribute("class", "card-link");
        button.appendChild(document.createTextNode("Mostrar información"));
        button.setAttribute("value", director.value.name + " " + director.value.lastname1);
        button.addEventListener("click", showDirector);

        row.appendChild(div_row);
        div_row.appendChild(card);
        card.appendChild(img);
        card.appendChild(card_body);
        card_body.appendChild(h5);
        card_body.appendChild(p);
        card.appendChild(card_footer);
        card_footer.appendChild(button);

        director = iterable_director.next();
    }
}



/**Función que, dado un actor, muestra toda su información relacionada,
 * incluidas sus producciones*/
function showActor() {

    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    var row = document.createElement("div");
    row.setAttribute("class", "row");
    main.appendChild(row);

    var encontrado = false;

    var iterable_actor = video.actors;
    var actor = iterable_actor.next();

    while ((actor.done !== true) && (encontrado !== true)) {

        if (actor.value.name + " " + actor.value.lastname1 === this.value) {

            var div_row = document.createElement("div");
            div_row.setAttribute("class", "col-md-6");

            var card = document.createElement("div");
            card.setAttribute("class", "card");

            var img = document.createElement("img");
            img.setAttribute("src", "img/" + actor.value.name + " " + actor.value.lastname1 + ".jpg");
            img.setAttribute("class", "card-img-top");

            var card_body = document.createElement("div");
            card_body.setAttribute("class", "card-body");

            var h5 = document.createElement("h5");
            h5.setAttribute("class", "card-title");
            h5.appendChild(document.createTextNode(actor.value.name + " " + actor.value.lastname1));

            var p = document.createElement("p");
            p.setAttribute("class", "card-text");

            p.appendChild(document.createTextNode("Fecha de nacimiento: " + actor.value.born.toLocaleDateString()));

            var card_footer = document.createElement("div");
            card_footer.setAttribute("class", "card-footer");


            var h6 = document.createElement("h6");
            h6.appendChild(document.createTextNode("PRODUCCIONES"));


            row.appendChild(div_row);
            div_row.appendChild(card);
            card.appendChild(img);
            card.appendChild(card_body);
            card_body.appendChild(h5);
            card_body.appendChild(p);
            card.appendChild(card_footer);
            card_footer.appendChild(h6);

            var iterador_interpretaciones = actor.value.interpretaciones;

            for (var i = 0; i < iterador_interpretaciones.length; i++) {

                var div = document.createElement("div");

                var button = document.createElement("button");
                button.setAttribute("class", " btn btn-link");
                button.setAttribute("type", "button");
                button.setAttribute("value", iterador_interpretaciones[i].production.title);
                button.appendChild(document.createTextNode(iterador_interpretaciones[i].production.title));
                button.addEventListener("click", showProduction);

                var p2 = document.createElement("p");
                p2.appendChild(document.createTextNode("Personaje: " + iterador_interpretaciones[i].character));
                var p3 = document.createElement("p");
                p3.appendChild(document.createTextNode("Principal: " + iterador_interpretaciones[i].main));


                card_footer.appendChild(div);
                div.appendChild(button);

                button.style.fontSize = "25px";
                button.style.color = "#512DA8";

                div.appendChild(p2);
                div.appendChild(p3);
            }


            encontrado = true;
        }

        actor = iterable_actor.next();
    }
}



/**Función que, dado un director, muestra toda su información relacionada,
 * incluidas sus producciones*/
function showDirector() {

    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    var row = document.createElement("div");
    row.setAttribute("class", "row");
    main.appendChild(row);

    var encontrado = false;

    var iterable_director = video.directors;
    var director = iterable_director.next();


    while ((director.done !== true) && (encontrado !== true)) {

        if (director.value.name + " " + director.value.lastname1 === this.value) {

            var div_row = document.createElement("div");
            div_row.setAttribute("class", "col-md-6");

            var card = document.createElement("div");
            card.setAttribute("class", "card");

            var img = document.createElement("img");
            img.setAttribute("src", "img/" + director.value.name + " " + director.value.lastname1 + ".jpg");
            img.setAttribute("class", "card-img-top");

            var card_body = document.createElement("div");
            card_body.setAttribute("class", "card-body");

            var h5 = document.createElement("h5");
            h5.setAttribute("class", "card-title");
            h5.appendChild(document.createTextNode(director.value.name + " " + director.value.lastname1));

            var p = document.createElement("p");
            p.setAttribute("class", "card-text");

            p.appendChild(document.createTextNode("Fecha de nacimiento: " + director.value.born.toLocaleDateString()));

            var card_footer = document.createElement("div");
            card_footer.setAttribute("class", "card-footer");


            row.appendChild(div_row);
            div_row.appendChild(card);
            card.appendChild(img);
            card.appendChild(card_body);
            card_body.appendChild(h5);
            card_body.appendChild(p);
            card.appendChild(card_footer);



            var iterador_producciones = video.getProductionsDirector(director.value);
            var produccion = iterador_producciones.next();

            while (produccion.done !== true) {


                var h6 = document.createElement("h6");
                h6.appendChild(document.createTextNode("PRODUCCIONES"));

                var button = document.createElement("button");
                button.setAttribute("class", "btn btn-link");
                button.setAttribute("type", "button");
                button.setAttribute("value", produccion.value.title);
                button.appendChild(document.createTextNode(produccion.value.title));
                button.addEventListener("click", showProduction);


                var div = document.createElement("div");

                card_footer.appendChild(h6);
                card_footer.appendChild(div);
                div.appendChild(button);

                button.style.fontSize = "25px";
                button.style.color = "#512DA8";

                produccion = iterador_producciones.next();
            }

            encontrado = true;
        }

        director = iterable_director.next();
    }
}


/**Función que, dada una categoría, director o actor,
 * muestre el listado de sus producciones.
 */
function showProductions() {

    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    var titulo_pag = document.createElement("h1");
    titulo_pag.style.color = "white";
    titulo_pag.setAttribute("class", "ml-5");
    titulo_pag.appendChild(document.createTextNode(this.value));
    main.appendChild(titulo_pag);


    var row = document.createElement("div");
    row.setAttribute("class", "row");
    main.appendChild(row);


    var iterable_category = video.categories;
    var categoria = iterable_category.next();

    while (categoria.done !== true) {

        if (categoria.value.name === this.value) {

            var iterador_producciones = video.getProductionsCategory(categoria.value);
            var produccion = iterador_producciones.next();

            while (produccion.done !== true) {

                var div_row = document.createElement("div");
                div_row.setAttribute("class", "col-md-6");

                var card = document.createElement("div");
                card.setAttribute("class", "card");
                var img = document.createElement("img");
                img.setAttribute("src", "img/" + produccion.value.title + ".jpg");
                img.setAttribute("class", "img-responsive");
                var card_body = document.createElement("div");
                card_body.setAttribute("class", "card-body");
                var h5 = document.createElement("h5");
                h5.setAttribute("class", "card-title");
                h5.appendChild(document.createTextNode(produccion.value.title));
                var p = document.createElement("p");
                p.setAttribute("class", "card-text");
                p.appendChild(document.createTextNode(produccion.value.synopsis));
                var card_footer = document.createElement("div");
                card_footer.setAttribute("class", "card-footer");


                var button = document.createElement("button");
                button.appendChild(document.createTextNode("Mostrar información"));
                button.setAttribute("value", produccion.value.title);
                button.setAttribute("onclick", "showProduction()");
                button.addEventListener("click", showProduction);

                row.appendChild(div_row);
                div_row.appendChild(card);
                card.appendChild(img);
                card.appendChild(card_body);
                card_body.appendChild(h5);
                card_body.appendChild(p);
                card.appendChild(card_footer);
                card_footer.appendChild(button);

                produccion = iterador_producciones.next();

            }

        }

        categoria = iterable_category.next();
    }

}



/**Función que muestra la información de una producción,
 * incluida su director y sus actores participantes.
 */
function showProduction() {

    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    var row = document.createElement("div");
    row.setAttribute("class", "row");
    main.appendChild(row);

    var encontrado = false;

    var iterador_producciones = video.productions;
    var produccion = iterador_producciones.next();

    while ((produccion.done !== true) && (encontrado !== true)) {

        if (produccion.value.title === this.value) {

            var div_row = document.createElement("div");
            div_row.setAttribute("class", "col-md-6");

            var card = document.createElement("div");
            card.setAttribute("class", "card");
            var img = document.createElement("img");
            img.setAttribute("src", "img/" + produccion.value.title + ".jpg");

            var card_body = document.createElement("div");
            card_body.setAttribute("class", "card-body");
            var h5 = document.createElement("h5");
            h5.setAttribute("class", "card-title");
            h5.appendChild(document.createTextNode(produccion.value.title));
            var p = document.createElement("p");
            p.setAttribute("class", "card-text");
            p.appendChild(document.createTextNode("Fecha de estreno: " + produccion.value.publication.toLocaleDateString()));
            var p2 = document.createElement("p");
            p2.setAttribute("class", "card-text");
            p2.appendChild(document.createTextNode("Recursos: " + produccion.value.resource));
            var p2_1 = document.createElement("p");
            p2_1.setAttribute("class", "card-text");
            p2_1.appendChild(document.createTextNode("Temporadas: " + produccion.value.seasons));
            var p3 = document.createElement("p");
            p3.setAttribute("class", "card-text");
            p3.appendChild(document.createTextNode("Localizaciones: " + produccion.value.locations));
            var p4 = document.createElement("p");
            p4.setAttribute("class", "card-text");
            p4.appendChild(document.createTextNode("Nacionalidad: " + produccion.value.nationality));
            var p5 = document.createElement("p");
            p5.setAttribute("class", "card-text");
            p5.appendChild(document.createTextNode(produccion.value.synopsis));

            var card_footer = document.createElement("div");
            card_footer.setAttribute("class", "card-footer");

            row.appendChild(div_row);
            div_row.appendChild(card);
            card.appendChild(img);
            card.appendChild(card_body);
            card_body.appendChild(h5);
            card_body.appendChild(p);

            if (!(produccion.value instanceof Serie)) {
                card_body.appendChild(p2);
                card_body.appendChild(p3);
            } else {
                card_body.appendChild(p2_1);
            }

            card_body.appendChild(p4);
            card_body.appendChild(p5);

            var recursos = document.createElement("button");
            recursos.setAttribute("class", "btn btn-link");
            recursos.setAttribute("type", "button");
            recursos.appendChild(document.createTextNode("RECURSOS"));
			recursos.setAttribute("value", produccion.value.resource);
            recursos.addEventListener("click", abrirVentana);
            card_body.appendChild(recursos);
			console.log(produccion.value.resource);

            var iterable_actor = video.getCast(produccion.value);
            var actor = iterable_actor.next();
            

            while (actor.done !== true) {

                var h6 = document.createElement("h6");
                h6.appendChild(document.createTextNode("ACTORES"));

                var button = document.createElement("button");
                button.setAttribute("class", "btn btn-link");
                button.setAttribute("type", "button");
                button.setAttribute("value", actor.value.name + " " + actor.value.lastname1);
                button.appendChild(document.createTextNode(actor.value.name + " " + actor.value.lastname1));
                button.addEventListener("click", showActor);


                var div = document.createElement("div");

                card.appendChild(card_footer);
                card_footer.appendChild(h6);
                card_footer.appendChild(div);
                div.appendChild(button);

                button.style.fontSize = "25px";
                button.style.color = "#512DA8";

                actor = iterable_actor.next();
            }


            encontrado = true;
        }

        produccion = iterador_producciones.next();
    }
}


function showResource() {
        console.log("hola");
}


function init() {
    initPopulate();
    categoriesMenuPopulate();
    showHomePage();
}

window.onload = init;