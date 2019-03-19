function VideoSystemException() {
    this.name = "VideoSystemException";
    this.message = "Error: Video System Exception.";
}

VideoSystemException.prototype = new Error(); //heredamos de BaseException
VideoSystemException.prototype.constructor = VideoSystemException;

//sobreescribimos el método toString para personalizarlos
VideoSystemException.prototype.toString = function () {
    //name y message son propiedades de Error
    return this.name + ": " + this.message;
}

function CategoryException() {
    this.name = "CategoryException";
    this.message = "El parámetro debe ser una categoría.";
}

CategoryException.prototype = new VideoSystemException(); //heredamos de VideoSystemException
CategoryException.prototype.constructor = CategoryException;

function CategoryExists() {
    this.name = "CategoryExists";
    this.message = "La categoría ya existe.";
}

CategoryExists.prototype = new VideoSystemException(); //heredamos de VideoSystemExcepction
CategoryExists.prototype.constructor = CategoryExists;

function NotRegisteredCategory() {
    this.name = "NotRegisteredCategory";
    this.message = "La categoría no está registrada.";
}

NotRegisteredCategory.prototype = new VideoSystemException(); //heredamos de VideoSystemException
NotRegisteredCategory.prototype.constructor = NotRegisteredCategory;

function UserException() {
    this.name = "UserException";
    this.message = "El parámetro debe ser un usuario.";
}

UserException.prototype = new VideoSystemException(); //heredamos de VideoSystemException
UserException.prototype.constructor = UserException;

function UsernameExists() {
    this.name = "UsernameExists";
    this.message = "El nombre de usuario ya existe.";
}

UsernameExists.prototype = new VideoSystemException(); //heredamos de VideoSystemException
UsernameExists.prototype.constructor = UsernameExists;

function EmailExists() {
    this.name = "EmailExists";
    this.message = "El email ya existe.";
}

EmailExists.prototype = new VideoSystemException(); //heredamos de VideoSystemException
EmailExists.prototype.constructor = EmailExists;

function UserNotExists() {
    this.name = "UserNotExists";
    this.message = "El usuario no existe.";
}

UserNotExists.prototype = new VideoSystemException(); //heredamos de VideoSystemException
UserNotExists.prototype.constructor = UserNotExists;

function ProductionException() {
    this.name = "ProductionException";
    this.message = "El parámetro debe ser una producción.";
}

ProductionException.prototype = new VideoSystemException(); //heredamos de VideoSystemException
ProductionException.prototype.constructor = ProductionException;

function ProductionExists() {
    this.name = "ProductionExists";
    this.message = "La producción ya existe.";
}

ProductionExists.prototype = new VideoSystemException(); //heredamos de VideoSystemException
ProductionExists.prototype.constructor = ProductionExists;

function NotRegisteredProduction() {
    this.name = "NotRegisteredProduction";
    this.message = "La producción no está registrada.";
}

NotRegisteredProduction.prototype = new VideoSystemException(); //heredamos de VideoSystemException
NotRegisteredProduction.prototype.constructor = NotRegisteredProduction;

function PersonException() {
    this.name = "PersonException";
    this.message = "El parámetro debe ser una persona.";
}

PersonException.prototype = new VideoSystemException(); //heredamos de VideoSystemException
PersonException.prototype.constructor = PersonException;

function PersonExists() {
    this.name = "PersonExists";
    this.message = "La persona ya existe.";
}

PersonExists.prototype = new VideoSystemException(); //heredamos de VideoSystemException
PersonExists.prototype.constructor = PersonExists;

function PersonNotExists() {
    this.name = "PersonNotExists";
    this.message = "La persona no existe.";
}

PersonNotExists.prototype = new VideoSystemException(); //heredamos de VideoSystemException
PersonNotExists.prototype.constructor = PersonNotExists;

function NullParamException(param) {
    this.name = "NullParamException";
    this.message = "El parámetro no puede ser nulo.";
}

NullParamException.prototype = new VideoSystemException(); //heredamos de VideoSystemException
NullParamException.prototype.constructor = NullParamException;

function ActorExists() {
    this.name = "ActorExists";
    this.message = "El actor ya existe.";
}

ActorExists.prototype = new VideoSystemException(); //heredamos de VideoSystemException
ActorExists.prototype.constructor = ActorExists;

function ActorNotExists() {
    this.name = "ActorNotExists";
    this.message = "El actor no existe.";
}

ActorNotExists.prototype = new VideoSystemException(); //heredamos de VideoSystemException
ActorNotExists.prototype.constructor = ActorNotExists;

function DirectorExists() {
    this.name = "DirectorExists";
    this.message = "El director ya existe.";
}

DirectorExists.prototype = new VideoSystemException(); //heredamos de VideoSystemException
DirectorExists.prototype.constructor = DirectorExists;

function DirectorNotExists() {
    this.name = "DirectorNotExists";
    this.message = "El director no existe.";
}

DirectorNotExists.prototype = new VideoSystemException(); //heredamos de VideoSystemException
DirectorNotExists.prototype.constructor = DirectorNotExists;


//Permite crear una única instancia de un objeto determinado
//Creamos el objeto VideoSystem que permitirá crear la instancia. Se hace uso de clousure
var VideoSystem = (function () { //la función anónima devuelve un método getInstance que permite obtener el objeto único
    var instantiated; //atributo privado que permite guardar la única instancia creada

    function init() { //este método se ejecuta una única vez y es el usado para crear la única instancia del objeto
        function VideoSystem() {

            //si el objeto no se invoca con el operador new
            if (!(this instanceof VideoSystem)) throw new InvalidAccessConstructorException();


            //propiedad 'name'
            var _name = "";

            Object.defineProperty(this, 'name', {
                get: function () {
                    return _name;
                },
                set: function (name) {
                    if (name === "" || name === "undefined") throw EmptyValueException("name");
                    _name = name;
                }
            });


            //CATEGORÍAS

            var _categories = []; //array con las categorías del sistema


            //devuelve un iterador con las categorías del sistema
            Object.defineProperty(this, 'categories', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _categories.length ?
                                { value: _categories[nextIndex++], done: false } :
                                { done: true };
                        }
                    }
                }
            });


            //añade una nueva categoría, y devuelve el número de elementos
            this.addCategory = function (category) {
                //si no lo invocamos con el operador 'new'
                if (!(category instanceof Category)) {
                    throw new CategoryException();
                }

                var position = this.getCategoryPosition(category);
                if (position === -1) { //si no encuentra la categoría, la añadimos
                    _categories.push(category);
                } else { //sino, salta una excepción
                    throw new CategoryExists();
                }

                return _categories.length; //devolvemos el número de elementos
            }


            //elimina una categoría y devuelve el número de elementos
            this.removeCategory = function (category) {
                //si no lo invocamos con el operador 'new'
                if (!(category instanceof Category)) {
                    throw new CategoryException();
                }

                var position = this.getCategoryPosition(category);
                if (position !== -1) { //si encuentra la categoría, la elimina
                    _categories.splice(position, 1);
                } else { //sino, salta una excepción
                    throw new NotRegisteredCategory();
                }

                return _categories.length; //devolvemos el número de elementos
            }


            //conseguimos la posición de la categoría
            this.getCategoryPosition = function (category) {
                if (!(category instanceof Category)) {
                    throw new CategoryException();
                }

                function compareCategory(arrayCategory) {
                    return (arrayCategory.name === category.name)
                }

                return _categories.findIndex(compareCategory);
            }


            //USUARIOS

            var _users = []; //array con los usuarios del sistema


            //devuelve un iterador con los usuarios del sistema
            Object.defineProperty(this, 'users', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _users.length ?
                                { value: _users[nextIndex++], done: false } :
                                { done: true };
                        }
                    }
                }
            });


            //añade un nuevo usuario
            this.addUser = function (user) {
                //si no lo invocamos con el operador 'new'
                if (!(user instanceof User)) {
                    throw new UserException();
                }

                var position_user = this.getUserPosition(user);
                if (position_user !== -1) { //si encuentra el usuario
                    throw new UsernameExists();
                }

                var position_email = this.getEmailPosition(user);
                if (position_email !== -1) { //si encuentra el email
                    throw new EmailExists();
                }

                //si no ha saltado ninguna excepción, añadimos el usuario
                _users.push(user);

                return _users.length; //devolvemos el número de elementos
            }


            //elimina un usuario
            this.removeUser = function (user) {
                //si no lo invocamos con el operador 'new'
                if (!(user instanceof User)) {
                    throw new UserException();
                }
                var position = this.getUserPosition(user);
                if (position !== -1) { //si encuentra el usuario lo elimina
                    _users.splice(position, 1);
                } else { //sino, salta una excepción
                    throw new UserNotExists();
                }

                return _users.length; //devolvemos el número de elementos
            }


            //conseguimos la posición del usuario
            this.getUserPosition = function (user) {
                //sino lo invocamos con el operador 'new'
                if (!(user instanceof User)) {
                    throw new UserException();
                }

                function compareUser(arrayUser) {
                    return (arrayUser.username === user.username)
                }

                return _users.findIndex(compareUser);
            }


            //conseguimos la posición del email
            this.getEmailPosition = function (user) {
                if (!(user instanceof User)) {
                    throw new UserException();
                }

                function compareEmail(arrayEmail) {
                    return (arrayEmail.email === user.email)
                }

                return _users.findIndex(compareEmail);
            }


            //PRODUCCIONES

            var _production = []; //array con las producciones del sistema

            //devuelve un iterador con las producciones del sistema
            Object.defineProperty(this, 'productions', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _production.length ?
                                { value: _production[nextIndex++], done: false } :
                                { done: true };
                        }
                    }
                }
            });

            //conseguimos la posición de la producción
            this.getProductionPosition = function (production) {
                //si no lo invocamos con el operador 'new'
                if (!(production instanceof Production)) {
                    throw new ProductionException();
                }

                function compareProduction(arrayProduction) {
                    return (arrayProduction.title === production.title);
                }

                return _production.findIndex(compareProduction);
            }

            //añade una nueva producción
            this.addProduction = function (production) {
                //si no lo invocamos con el operador 'new'
                if (!(production instanceof Production)) {
                    throw new ProductionException();
                }

                var position = this.getProductionPosition(production);
                if (position === -1) { //si no encuentra la producción, la añadimos
                    _production.push(production);
                } else { //sino, salta una excepción
                    throw new ProductionExists();
                }

                return _production.length;
            }

            //elimina una producción
            this.removeProduction = function (production) {
                //si no lo invocamos con el operador 'new'
                if (!(production instanceof Production)) {
                    throw new ProductionException();
                }

                var position = this.getProductionPosition(production);
                if (position !== -1) { //si encuentra la producción, la elimina
                    _production.splice(position, 1);
                } else { //sino, salta una excepción
                    throw new NotRegisteredProduction();
                }

                return _production.length; //devolvemos el número de elementos
            }


            //ACTORES

            var _actors = []; //array con los actores del sistema


            //devuelve un iterador con los actores del sistema
            Object.defineProperty(this, 'actors', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _actors.length ?
                                { value: _actors[nextIndex++], done: false } :
                                { done: true };
                        }
                    }
                }
            });

            Object.defineProperty(this, 'actores', {
                get: function () {
                    return _actors;
                }
            });


            //añade un nuevo actor
            this.addActor = function (actor) {
                if (!(actor instanceof Person)) {
                    throw new PersonException();
                }

                var position = this.getActorPosition(actor);
                if (position === -1) { //si no encuentra el actor, lo añadimos
                    _actors.push(actor);
                } else { //sino, salta una excepción
                    throw new ActorExists();
                }

                return _actors.length; //devolvemos el número de elementos
            }


            //elimina un actor
            this.removeActor = function (actor) {
                if (!(actor instanceof Person)) {
                    throw new PersonException();
                }
                var position = this.getActorPosition(actor);
                if (position !== -1) { //si encuentra el actor, lo elimina
                    _actors.splice(position, 1);
                } else {
                    throw new ActorNotExists();
                }
            }


            //conseguimos la posición del actor
            this.getActorPosition = function (actor) {
                if (!(actor instanceof Person)) {
                    throw new PersonException();
                }

                function compareActor(arrayActor) {
                    return (arrayActor.name === actor.name)
                }

                return _actors.findIndex(compareActor);
            }


            //DIRECTORES

            var _directors = []; //array con los directores del sistema


            //devuelve un iterador con los directores del sistema
            Object.defineProperty(this, 'directors', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _directors.length ?
                                { value: _directors[nextIndex++], done: false } :
                                { done: true };
                        }
                    }
                }
            });


            //añade un nuevo director
            this.addDirector = function (director) {
                if (!(director instanceof Person)) {
                    throw new PersonException();
                }

                var position = this.getDirectorPosition(director);
                if (position === -1) { //si no encuentra el director, lo añadimos
                    _directors.push(director);
                } else { //sino, salta una excepción
                    throw new DirectorExists();
                }

                return _directors.length; //devolvemos el número de elementos
            }


            //elimina un director
            this.removeDirector = function (director) {
                if (!(director instanceof Person)) {
                    throw new PersonException();
                }
                var position = this.getDirectorPosition(director);
                if (position !== -1) { //si encuentra el director, lo elimina
                    _directors.splice(position, 1);
                } else {
                    throw new DirectorNotExists();
                }
            }

            //conseguimos la posición del director
            this.getDirectorPosition = function (director) {
                if (!(director instanceof Person)) {
                    throw new PersonException();
                }

                function compareDirector(arrayDirector) {
                    return (arrayDirector.name === director.name)
                }

                return _directors.findIndex(compareDirector);
            }


            //ASIGNACIONES

            //asigna una producción a una categoría
            this.assignCategory = function (category, production) {
                if (category == null) { //comprobamos que la categoría no sea nula
                    throw new NullParamException("category");
                }

                if (production == null) { //comprobamos que la producción no sea nula
                    throw new NullParamException("production");
                }

                var position = this.getCategoryPosition(category);
                if (position === -1) { //si no encuentra la categoría,
                    this.addCategory(category); //la añadimos
                }

                var position_p = this.getProductionPosition(production);
                if (position_p === -1) { //si no encuentra la producción 
                    this.addProduction(production); //la añadimos
                }

                var position_pc = category.getProductionPosition(production);
                if (position_pc === -1) { //si una producción no existe dentro de una categoría
                    category.addProduction(production); //se añade
                }

                return category.production.length; //devolvemos el número de producciones asignadas a una categoría

            }


            //desasigna una producción a una categoría
            this.deassignCategory = function (category, production) {
                if (category == null) { //comprobamos que la categoría no sea nula
                    throw new NullParamException("category");
                }

                if (production == null) { //comprobamos que la producción no sea nula
                    throw new NullParamException("production");
                }

                var position = category.getProductionPosition(production);
                if (position !== -1) { //si encuentra la producción asignada a esa categoría
                    category.removeProduction(production); //la elimina
                }

                return category.production.length; //devolvemos el número de producciones desasignadas
            }


            //asigna una producción a un director
            this.assignDirector = function (director, production) {
                if (director == null) { //comprobamos que el director no sea nulo
                    throw new NullParamException("director");
                }

                if (production == null) { //comprobamos que la producción no sea nula
                    throw new NullParamException("production");
                }

                var position = this.getDirectorPosition(director);
                if (position === -1) { //si no encuentra el director,
                    this.addDirector(director); //lo añadimos
                }

                var position_p = this.getProductionPosition(production);
                if (position_p === -1) { //si no encuentra la producción 
                    this.addProduction(production); //la añadimos
                }

                var position_pd = director.getProductionPosition(production);
                if (position_pd === -1) { //si una producción no está asignada a un director
                    director.addProduction(production); //la añadimos
                }

                return director.production.length; //devolvemos el número de producciones asignadas a un director
            }


            //desasigna una producción a un director
            this.deassignDirector = function (director, production) {
                if (director == null) { //comprobamos que el director no sea nulo
                    throw new NullParamException("director");
                }

                if (production == null) { //comprobamos que la producción no sea nula
                    throw new NullParamException("production");
                }

                var position = director.getProductionPosition(production);
                if (position !== -1) { //si encuentra la producción
                    director.removeProduction(production); //la elimina
                }

                return director.production.length; //devolvemos el número de producciones desasignadas a un director
            }


            //asigna una interpretación a un actor
            this.assignActor = function (actor, interpretation) {
                if (actor == null) { //comprobamos que el actor no sea nulo
                    throw new NullParamException("actor");
                }

                if (interpretation == null) { //comprobamos que la interpretación no sea nula
                    throw new NullParamException("interpretation");
                }

                var position = this.getActorPosition(actor);
                if (position === -1) { //si no encuentra el actor,
                    this.addActor(actor); //lo añadimos
                }

                var position_p = this.getProductionPosition(interpretation.production); //buscamos la producción dentro de interpretación
                if (position_p === -1) { //si no encuentra la producción
                    this.addProduction(interpretation.production); //la añadimos
                }

                var position_pa = actor.getInterpretationPosition(interpretation);
                if (position_pa === -1) { //si una interpretación no está asignada a un actor
                    actor.addInterpretation(interpretation); //la añadimos
                }

            }


            //desasigna una interpretación a un actor
            this.deassignActor = function (actor, interpretation) {
                if (actor == null) { //comprobamos que el actor no sea nulo
                    throw new NullParamException("actor");
                }

                if (interpretation == null) { //comprobamos que la interpretación no sea nula
                    throw new NullParamException("interpretation");
                }

                var position_pa = actor.getInterpretationPosition(interpretation);
                if (position_pa !== -1) { //si encuentra la interpretación 
                    actor.removeInterpretation(interpretation); //la elimina
                }
            }


            //ITERADORES

            //obtiene un iterador con las producciones de un director
            this.getProductionsDirector = function (director) {
                if (director == null) { //comprobamos que el director no sea nulo
                    throw new NullParamException("director");
                }

                var position = this.getDirectorPosition(director);
                if (position === -1) { //sino encuentra el director retorna 'false'
                    return false;
                } else { //en caso de que lo encuentre, retorna el iterador
                    var nextIndex = 0;

                    return {
                        next: function () {
                            return nextIndex < _directors[position].production.length ?
                                { value: _directors[position].production[nextIndex++], done: false } : { done: true };

                        }
                    }
                }

            }


            //obtiene un iterador con las producciones de una categoría determinada
            this.getProductionsCategory = function (category) {
                if (category == null) { //comprobamos que la categoría no sea nula
                    throw new NullParamException("category");
                }

                var position = this.getCategoryPosition(category);
                if (position === -1) { //sino encuentra la categoría, retorna 'false'
                    return false;
                } else { //en caso de que la encuentre, retorna el iterador
                    var nextIndex = 0;

                    return {
                        next: function () {
                            return nextIndex < _categories[position].production.length ?
                                { value: _categories[position].production[nextIndex++], done: false } : { done: true };
                        }
                    }
                }
            }


            //obtiene un iterador con las producciones de un actor y su papel en la producción
            this.getProductionsActor = function (actor) {
                if (actor == null) { //comprobamos que el actor no sea nulo
                    throw new NullParamException("actor");
                }

                var position = this.getActorPosition(actor);
                if (position === -1) { //sino encuentra el actor, retorna 'false'
                    return false;
                } else { //en caso de que lo encuentre, retorna el iterador
                    var nextIndex = 0;

                    return {
                        next: function () {
                            return nextIndex < _actors[position].interpretaciones.length ?
                                { value: _actors[position].interpretaciones[nextIndex++], done: false } : { done: true };
                        }
                    }
                }
            }


            //obtiene un iterador de los actores del reparto, una producción y sus personajes
            this.getCast = function (production) {
                if (production == null) { //comprobamos que la producción no sea nula
                    throw new NullParamException("production");
                }

                var array_actores = [];

                for (var i = 0; i < _actors.length; i++) { //recorremos el array de actores
                    for (var j = 0; j < _actors[i].interpretaciones.length; j++) { //recorremos las interpretaciones del actor en cuestión
                        if (_actors[i].interpretaciones[j].production.title === production.title) { //si las producciones coinciden
                            array_actores.push(_actors[i]); //añadimos al actor al array de actores
                        }
                        i++;
                    }
                }

                var nextIndex = 0;

                return { //retornamos el iterador
                    next: function () {
                        return nextIndex < array_actores.length ?
                            { value: array_actores[nextIndex++], done: false } : { done: true };
                    }
                }
            }

        }

        VideoSystem.prototype = {};
        VideoSystem.prototype.constructor = VideoSystem;

        return new VideoSystem(); //devolvemos el objeto VideoSystem parsa que sea una instancia única

    } //fin inicialización del Singleton
    return {
        //devuelve un objeto con el método getInstance
        getInstance: function () {
            if (!instantiated) { //si la variable instantiated es undefined, primera ejecución, ejecuta init
                instantiated = init(); //instantiated contiene el objeto único
            }
            return instantiated; //si ya está asignado, devuelve la asignación
        }
    };
})();


