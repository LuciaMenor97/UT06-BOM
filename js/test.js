function testVideoSystem() {

    console.log("--------------------> PROBANDO OBJETOS <--------------------");

    //creamos seis personas, tres directores y tres actores
    console.log("---> Creamos seis personas, tres directores y tres actores");
    var director1 = new Director("Lucía", "Menor", "Muñoz", new Date(1997, 07, 14), "rutaimagen");
    var director2 = new Director("María", "Santos", "López", new Date(1994, 02, 9), "rutaimagen");
    var director3 = new Director("Julia", "Rodríguez", "Santos", new Date(1989, 04, 25), "rutaimagen");
    var actor1 = new Actor("Juan", "Martín", "Sánchez", new Date(1995, 12, 12), "rutaimagen");
    var actor2 = new Actor("Marcos", "García", "Rodríguez", new Date(1991, 2, 14), "rutaimagen");
    var actor3 = new Actor("Sandra", "Ruiz", "Hernández", new Date(1991, 05, 30), "rutaimagen");
    //y las mostramos por la consola
    console.log(director1.toString());
    console.log(director2.toString());
    console.log(director3.toString());
    console.log(actor1.toString());
    console.log(actor2.toString());
    console.log(actor3.toString());

    //intentamos instanciar un objeto Person
    console.log("---> Intentamos instanciar un objeto Person");
    try {
        var persona = new Person();
        console.log(persona);
    } catch (error) {
        console.log(error.toString());
    }


    //creamos seis recursos
    console.log("---> Creamos seis recursos");
    var recurso1 = new Resource(160, "https://www.dondesea.com", ['Español', ' Inglés', ' Italiano'], ['Español', ' Inglés', ' Italiano']);
    var recurso2 = new Resource(190, "https://www.dondesea.com", ['Serbio', ' Brasileño', ' Ruso'], ['Serbio', ' Brasileño', ' Ruso']);
    var recurso3 = new Resource(200, "https://www.dondesea.com", ['Alemán', ' Chileno', ' Francés'], ['Alemán', ' Chileno', ' Francés']);
    var recurso4 = new Resource(150, "https://www.dondesea.com", ['Inglés', ' Francés', ' Ruso'], ['Ingles', ' Francés', ' Ruso']);
    var recurso5 = new Resource(175, "https://www.dondesea.com", ['Chino', ' Japonés', ' Español'], ['Chino', ' Japonés', ' Español']);
    var recurso6 = new Resource(150, "https://www.dondesea.com", ['Inglés', ' Ruso', ' Brasileño'], ['Inglés', ' Ruso', ' Brasileño']);
    //y los mostramos por la consola
    console.log(recurso1.toString());
    console.log(recurso2.toString());
    console.log(recurso3.toString());
    console.log(recurso4.toString());
    console.log(recurso5.toString());
    console.log(recurso6.toString());

    //creamos un recurso sin uno de los parámetros obligatorios
    console.log("---> Creamos un recurso sin uno de los parámetros obligatorios");
    try {
        var recurso = new Resource("", "https://www.dondesea.com", ['Español', ' Inglés', ' Serbio'], ['Español', ' Inglés', ' Serbio']);
        console.log(recurso);
    } catch (error) {
        console.log(error.toString());
    }


    //creamos seis coordenadas
    console.log("---> Creamos seis coordenadas");
    var coordenadas1 = new Coordinate(50, 165);
    var coordenadas2 = new Coordinate(66, 154);
    var coordenadas3 = new Coordinate(72, 125);
    var coordenadas4 = new Coordinate(66, 154);
    var coordenadas5 = new Coordinate(58, 144);
    var coordenadas6 = new Coordinate(68, 140);
    //y las mostramos por la consola
    console.log(coordenadas1.toString());
    console.log(coordenadas2.toString());
    console.log(coordenadas3.toString());
    console.log(coordenadas4.toString());
    console.log(coordenadas5.toString());
    console.log(coordenadas6.toString());

    //creamos una coordenada con uno de los parámetros erróneo
    console.log("---> Creamos una coordenada con uno de los parámetros erróneo");
    try {
        var coordenadas = new Coordinate(2000, 175);
        console.log(coordenadas);
    } catch (error) {
        console.log(error.toString());
    }


    //intentamos instanciar un objeto Production
    console.log("---> Intentamos instanciar un objeto Production");
    try {
        var objeto_production = new Production();
        console.log(objeto_production);
    } catch (error) {
        console.log(error.toString());
    }


    //creamos seis películas
    console.log("---> Creamos seis películas");
    var pelicula1 = new Movie("La vida es bella", new Date(1997, 02, 26), recurso1, [coordenadas1], "nacionalidad", "sinopsis", "imagen");
    var pelicula2 = new Movie("Jurassic World: el reino caído", new Date(2018, 05, 21), recurso2, [coordenadas2], "nacionalidad", "sinopsis", "imagen");
    var pelicula3 = new Movie("Vengadores: Infinity War", new Date(2018, 01, 27), recurso3, [coordenadas3], "nacionalidad", "sinopsis", "imagen");
    var pelicula4 = new Movie("Lo imposible", new Date(2012, 10, 11), recurso4, [coordenadas4], "nacionalidad", "sinopsis", "imagen");
    var pelicula5 = new Movie("El orfanato", new Date(2007, 10, 11), recurso5, [coordenadas5], "nacionalidad", "sinopsis", "imagen");
    var pelicula6 = new Movie("Interstellar", new Date(2015, 09, 24), recurso6, [coordenadas6], "nacionalidad", "sinopsis", "imagen");
    //y las mostramos por la consola
    console.log(pelicula1.toString());
    console.log(pelicula2.toString());
    console.log(pelicula3.toString());
    console.log(pelicula4.toString());
    console.log(pelicula5.toString());
    console.log(pelicula6.toString());

    //intentamos isntanciar una película de forma errónea
    console.log("---> Intentamos instanciar una película de forma errónea");
    try {
        var pelicula = Movie();
    } catch (error) {
        console.log(error.toString());
    }


    //creamos seis episodios
    console.log("---> Creamos seis episodios");
    var episodio1 = new Episodes("Episodio 1", recurso1, [coordenadas1]);
    var episodio2 = new Episodes("Episodio 2", recurso2, [coordenadas2]);
    var episodio3 = new Episodes("Episodio 3", recurso3, [coordenadas3]);
    var episodio4 = new Episodes("Episodio 4", recurso4, [coordenadas4]);
    var episodio5 = new Episodes("Episodio 5", recurso5, [coordenadas5]);
    var episodio6 = new Episodes("Episodio 6", recurso6, [coordenadas6]);
    //y los mostramos por la consola
    console.log(episodio1.toString());
    console.log(episodio2.toString());
    console.log(episodio3.toString());
    console.log(episodio4.toString());
    console.log(episodio5.toString());
    console.log(episodio6.toString());


    //creamos tres temporadas
    console.log("---> Creamos tres temporadas");
    var season1 = new Season("Temporada 1", [episodio1, episodio2]);
    var season2 = new Season("Temporada 2", [episodio3, episodio4]);
    var season3 = new Season("Temporada 3", [episodio5, episodio6]);
    //y las mostramos por la consola
    console.log(season1.toString());
    console.log(season2.toString());
    console.log(season3.toString());


    //creamos seis series
    console.log("---> Creamos seis series");
    var serie1 = new Serie("Black Mirror", new Date(2011, 12, 04), [season1, season2, season3]);
    var serie2 = new Serie("Dexter", new Date(2006, 10, 01), [season1, season2, season3]);
    var serie3 = new Serie("WestWorld", new Date(2016, 10, 02), [season1, season2, season3]);
    var serie4 = new Serie("Homeland", new Date(2011, 10, 02), [season1, season2, season3]);
    var serie5 = new Serie("Friends", new Date(1994, 09, 22), [season1, season2, season3]);
    var serie6 = new Serie("American Horror Story", new Date(2011, 10, 05), [season1, season2, season3]);
    //y las mostramos por la consola
    console.log(serie1.toString());
    console.log(serie2.toString());
    console.log(serie3.toString());
    console.log(serie4.toString());
    console.log(serie5.toString());
    console.log(serie6.toString());


    //creamos seis interpretaciones
    console.log("---> Creamos seis interpretaciones");
    var interpretacion1 = new Interpretation(pelicula1, "Guido Orefice", true);
    var interpretacion2 = new Interpretation(pelicula2, "Claire Dearing", false);
    var interpretacion3 = new Interpretation(pelicula3, "Thanos", true);
    var interpretacion4 = new Interpretation(serie1, "Lacie", false);
    var interpretacion5 = new Interpretation(serie2, "Dexter", true);
    var interpretacion6 = new Interpretation(serie3, "Lana Winters", false);
    //y las mostramos por la consola
    console.log(interpretacion1.toString());
    console.log(interpretacion2.toString());
    console.log(interpretacion3.toString());
    console.log(interpretacion4.toString());
    console.log(interpretacion5.toString());
    console.log(interpretacion6.toString());


    //creamos seis categorías
    console.log("---> Creamos seis categorías");
    var categoria1 = new Category("Comedia dramática", "Comedia dramática");
    var categoria2 = new Category("Acción", "Película de acción");
    var categoria3 = new Category("Acción", "Película de acción");
    var categoria4 = new Category("Suspense", "Serie suspense");
    var categoria5 = new Category("Misterio", "Misterio");
    var categoria6 = new Category("Terror", "Terror");
    //y las mostramos por la consola
    console.log(categoria1.toString());
    console.log(categoria2.toString());
    console.log(categoria3.toString());
    console.log(categoria4.toString());
    console.log(categoria5.toString());
    console.log(categoria6.toString());

    //intentamos crear una categoría sin el parámetro obligatorio
    console.log("---> Intentamos crear una categoría sin el parámetro obligatorio");
    try {
        var categoria = new Category("", "");
    } catch (error) {
        console.log(error.toString());
    }


    //creamos dos usuarios
    console.log("---> Creamos dos usuarios");
    var usuario1 = new User("lucia", "lucia@hotmail.com", "lucia");
    var usuario2 = new User("anonymous", "anonymous@hotmail.com", "anonymous");
    //y los mostramos por la consola
    console.log(usuario1.toString());
    console.log(usuario2.toString());


    console.log("");


    //VIDEOSYSTEM

    console.log("--------------------> VIDEOSYSTEM <--------------------");
    //creamos la instancia
    var video = new VideoSystem.getInstance();

    //añadimos un nombre a nuestro sistema 
    video.name = "Vídeo en Streaming";
    console.log("Nombre del sistema: " + video.name); //lo mostramos por la consola


    //añadimos dos categorías 
    console.log("---> Añadimos dos categorías");
    video.addCategory(categoria1);
    video.addCategory(categoria2);

    //intentamos añadir una categoría sin pasarle parámetros
    console.log("---> Intentamos añadir una categoría sin pasarle parámetros");
    try {
        video.addCategory();
    } catch (error) {
        console.log(error.toString());
    }

    //mostramos las categorías del sistema recorriendo el iterador
    //aparecerán sin producciones puesto que aún no hemos asignado ninguna
    console.log("---> Mostramos las categorías");
    var iterable_category = video.categories;
    var categoria = iterable_category.next();
    while (categoria.done !== true) {
        console.log(categoria.value.toString());
        categoria = iterable_category.next();
    }

    //eliminamos una categoría
    console.log("---> Eliminamos una categoría");
    video.removeCategory(categoria1);

    //de nuevo, mostramos las categorías para comprobar que se ha eliminado correctamente
    console.log("---> Mostramos las categorías");
    var iterable_category = video.categories;
    var categoria = iterable_category.next();
    while (categoria.done !== true) {
        console.log(categoria.value.toString());
        categoria = iterable_category.next();
    }

    //sin mostrarlos por consola, la añadimos de nuevo
    video.addCategory(categoria1);


    //añadimos dos usuarios
    console.log("Añadimos dos usuarios");
    video.addUser(usuario1);
    video.addUser(usuario2);

    //mostramos los usuarios del sistema recorriendo el iterador
    console.log("---> Mostramos los usuarios");
    var iterable_users = video.users;
    var usuario = iterable_users.next();
    while (usuario.done !== true) {
        console.log(usuario.value.toString());
        usuario = iterable_users.next();
    }

    //añadimos de nuevo el usuario1
    console.log("---> Añadimos de nuevo el usuario1");
    try {
        video.addUser(usuario1);
    } catch (error) {
        console.log(error.toString());
    }

    //eliminamos un usuario
    console.log("---> Eliminamos un usuario");
    video.removeUser(usuario1);

    //de nuevo, mostramos los usuarios del sistema para comprobar que se ha eliminado correctamente
    console.log("---> Mostramos los usuarios");
    var iterable_users = video.users;
    var usuario = iterable_users.next();
    while (usuario.done !== true) {
        console.log(usuario.value.toString());
        usuario = iterable_users.next();
    }

    //sin mostrarlo por consola, lo añadimos de nuevo
    video.addUser(usuario1);


    //añadimos cuatro producciones
    console.log("---> Añadimos cuatro producciones");
    video.addProduction(pelicula1);
    video.addProduction(pelicula2);
    video.addProduction(serie1);
    video.addProduction(serie2);


    //mostramos las producciones del sistema recorriendo el iterador
    console.log("---> Mostramos las producciones");
    var iterable_production = video.productions;
    var produccion = iterable_production.next();
    while (produccion.done !== true) {
        console.log(produccion.value.toString());
        produccion = iterable_production.next();
    }

    //eliminamos una producción
    console.log("---> Eliminamos una producción");
    video.removeProduction(serie2);

    //la intentamos eliminar de nuevo
    console.log("---> La intentamos eliminar de nuevo");
    try {
        video.removeProduction(serie2);
    } catch (error) {
        console.log(error.toString());
    }

    //de nuevo, mostramos las producciones del sistema para comprobar que se ha eliminado correctamente
    console.log("---> Mostramos las producciones");
    var iterable_production = video.productions;
    var produccion = iterable_production.next();
    while (produccion.done !== true) {
        console.log(produccion.value.toString());
        produccion = iterable_production.next();
    }

    //la volvemos a añadir para próximas comprobaciones
    video.addProduction(serie2);


    //añadimos dos actores
    console.log("---> Añadimos dos actores");
    video.addActor(actor1);
    video.addActor(actor2);

    //mostramos los actores del sistema recorriendo el iterador
    console.log("---> Mostramos los actores");
    var iterable_actor = video.actors;
    var actor = iterable_actor.next();
    while (actor.done !== true) {
        console.log(actor.value.toString());
        actor = iterable_actor.next();
    }

    //eliminamos un actor
    console.log("---> Eliminamos un actor");
    video.removeActor(actor2);

    //de nuevo, mostramos los actores del sistema para comprobar que se ha eliminado correctamente
    console.log("---> Mostramos los actores");
    var iterable_actor = video.actors;
    var actor = iterable_actor.next();
    while (actor.done !== true) {
        console.log(actor.value.toString());
        actor = iterable_actor.next();
    }

    //sin mostrarlo por consola, lo añadimos de nuevo
    video.addActor(actor2);


    //añadimos tres directores
    console.log("---> Añadimos tres directores");
    video.addDirector(director1);
    video.addDirector(director2);
    video.addDirector(director3);

    //mostramos los directores del sistema recorriendo el iterador
    console.log("---> Mostramos los directores");
    var iterable_director = video.directors;
    var director = iterable_director.next();
    while (director.done !== true) {
        console.log(director.value.toString());
        director = iterable_director.next();
    }

    //eliminamos un director
    console.log("---> Eliminamos un director");
    video.removeDirector(director3);

    //de nuevo, mostramos los directores del sistema para comprobar que se ha eliminado correctamente
    console.log("---> Mostramos los directores");
    var iterable_director = video.directors;
    var director = iterable_director.next();
    while (director.done !== true) {
        console.log(director.value.toString());
        director = iterable_director.next();
    }

    //sin mostrarlo por consola, lo añadimos de nuevo
    video.addDirector(director3);


    //asignamos una producción a una categoría
    console.log("---> Asignamos una producción a una categoría");
    video.assignCategory(categoria1, pelicula1);

    //mostramos las categorías del sistema, las otras categorías aparecerán sin producciones puesto que no les hemos asignado ninguna
    console.log("---> Mostramos las categorías");
    var iterable_category = video.categories;
    var categoria = iterable_category.next();
    while (categoria.done !== true) {
        console.log(categoria.value.toString());
        categoria = iterable_category.next();
    }

    //desasignamos una producción a una categoría
    console.log("---> Desasignamos una producción a una categoría");
    video.deassignCategory(categoria1, pelicula1);

    //de nuevo, mostramos las categorías del sistema para comprobar que se ha desasignado correctamente
    console.log("---> Mostramos las categorías");
    var iterable_category = video.categories;
    var categoria = iterable_category.next();
    while (categoria.done !== true) {
        console.log(categoria.value.toString());
        categoria = iterable_category.next();
    }

    //sin mostrarlo por consola, asignamos a cada categoría una producción, 
    //por si hiciera falta en próximas comprobaciones
    video.assignCategory(categoria1, pelicula1);
    video.assignCategory(categoria2, pelicula2);


    //asignamos una producción a cada director
    console.log("---> Asignamos una producción a cada director");
    video.assignDirector(director1, serie1);
    video.assignDirector(director2, pelicula2);
    video.assignDirector(director3, pelicula3);

    //mostramos los directores del sistema recorriendo el iterador, el otro aparecerá sin producciones puesto que no se le han asignado
    console.log("---> Mostramos los directores");
    var iterable_director = video.directors;
    var director = iterable_director.next();
    while (director.done !== true) {
        console.log(director.value.toString());
        director = iterable_director.next();
    }

    //desasignamos una producción a un director
    console.log("---> Desasignamos una producción a un director");
    video.deassignDirector(director1, serie1);

    //de nuevo, mostramos los directores del sistema para comprobar que se ha desasignado correctamente
    console.log("---> Mostramos los directores");
    var iterable_director = video.directors;
    var director = iterable_director.next();
    while (director.done !== true) {
        console.log(director.value.toString());
        director = iterable_director.next();
    }

    //sin mostrarlo por consolsa, la asignamos de nuevo,
    //por si hicera falta para próximas comprobaciones
    video.assignDirector(director1, serie1);


    //asignamos una producción a cada actor
    console.log("---> Asignamos una producción a cada actor");
    video.assignActor(actor1, interpretacion1);
    video.assignActor(actor2, interpretacion2);

    //mostramos los actores del sistema recorriendo el iterador
    console.log("---> Mostramos los actores");
    var iterable_actor = video.actors;
    var actor = iterable_actor.next();
    while (actor.done !== true) {
        console.log(actor.value.toString());
        actor = iterable_actor.next();
    }

    //desasignamos una producción a un actor
    console.log("---> Desasignamos una producción a un actor");
    video.deassignActor(actor1, interpretacion1);

    //de nuevo, mostramos los actores del sistema para comprobar que se ha desasignado correctamente
    console.log("---> Mostramos los actores");
    var iterable_actor = video.actors;
    var actor = iterable_actor.next();
    while (actor.done !== true) {
        console.log(actor.value.toString());
        actor = iterable_actor.next();
    }

    //sin mostrarlo por consola, la asignamos de nuevo
    //por si hicera falta para próximas comprobaciones
    video.assignActor(actor1, interpretacion1);


    //mostramos las producciones de un director usando un iterador
    console.log("---> Mostramos las producciones de un director");
    var iterador_producciones = video.getProductionsDirector(director1);
    var produccion = iterador_producciones.next();
    while (produccion.done !== true) {
        console.log(produccion.value.toString());
        produccion = iterador_producciones.next();
    }


    //mostramos las producciones de una categoría determinada
    console.log("---> Mostramos las producciones de una categoría determinada");
    var iterador_producciones = video.getProductionsCategory(categoria1);
    var produccion = iterador_producciones.next();
    while (produccion.done !== true) {
        console.log(produccion.value.toString());
        produccion = iterador_producciones.next();
    }


    //mostramos las producciones de un actor
    console.log("---> Mostramos las producciones de un actor");
    var producciones_actor = video.getCast(pelicula1);
    var pr_actor = producciones_actor.next();
    while (pr_actor.done !== true) {
        console.log(pr_actor.value.toString());
        pr_actor = producciones_actor.next();
    }

}

window.onload = testVideoSystem;