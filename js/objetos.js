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


//objeto Person
function Person(name, lastname1, lastname2, born, picture) {

    //si no lo invocamos con el operador 'new'

    if (!(this instanceof Person)) throw new InvalidAccessConstructorException();


    //el objeto 'Person' no puede ser instanciado, puesto que es una clase abstracta

    if (this.constructor === Person) throw new AbstractClassException("Person");


    //comprobamos que los parámetros obligatorios no están vacíos

    if (name === "undefined" || name === "") throw new EmptyValueException("name");
    if (lastname1 === "undefined" || lastname1 === "") throw new EmptyValueException("lastname1");
    if (born === "undefined" || born === "") throw new EmptyValueException("born");
    if (!(born instanceof Date)) throw new ParameterValidationException();


    //definimos variables para hacer privadas las propiedades del objeto

    var _name = name;
    var _lastname1 = lastname1;
    var _lastname2 = lastname2;
    var _born = born;
    var _picture = picture;


    //definimos las propiedades correspondientes 

    Object.defineProperty(this, 'name', {
        get: function () {
            return _name;
        },
        set: function (name) {
            if (name === "" || name === "undefined") throw EmptyValueException("name");
            _name = name;
        }
    });

    Object.defineProperty(this, 'lastname1', {
        get: function () {
            return _lastname1;
        },
        set: function (lastname1) {
            if (lastname1 === "" || lastname1 === "undefined") throw EmptyValueException("lastname1");
            _lastname1 = lastname1;
        }
    });

    Object.defineProperty(this, 'lastname2', {
        get: function () {
            return _lastname2;
        },
        set: function (lastname2) {
            if (lastname2 === "" || lastname2 === "undefined") throw EmptyValueException("lastname2");
            _lastname2 = lastname2;
        }
    });

    Object.defineProperty(this, 'born', {
        get: function () {
            return _born;
        },
        set: function (born) {
            if (!(born instanceof Date)) throw new ParameterValidationException();
            if (born === "" || born === "undefined") throw EmptyValueException("born");
            _born = born;
        }
    });

    Object.defineProperty(this, 'picture', {
        get: function () {
            return _picture;
        },
        set: function (picture) {
            if (picture === "" || picture === "undefined") throw EmptyValueException("picture");
            _picture = picture;
        }
    });

}

Person.prototype = {};
Person.prototype.constructor = Person;
Person.prototype.toString = function () {
    return "Nombre: " + this.name + ", primer apellido: " + this.lastname1 +
        ", segundo apellido: " + this.lastname2 + ", fecha de nacimiento: " + this.born + ", imagen: " + this.picture;
}


//objeto 'Actor' que hereda de 'Person'
function Actor(name, lastname1, lastname2, born, picture) {

    //invocamos al constructor de la clase padre

    Person.call(this, name, lastname1, lastname2, born, picture);


    //si no lo invocamos con el operador 'new'

    if (!(this instanceof Actor)) throw new InvalidAccessConstructorException();


    var _interpretations = []; //array con las interpretaciones de un actor,
    //cada interpretación dentro del array tendrá una producción

    Object.defineProperty(this, 'interpretaciones', {
        get: function () {
            return _interpretations;
        }
    });

    //conseguimos la posición de la interpretación
    this.getInterpretationPosition = function (interpretations) {
        //si no lo invocamos con el operador 'new'
        if (!(interpretations instanceof Interpretation)) {
            throw new InvalidAccessConstructorException();
        }

        function compareInterpretation(arrayInterpretation) {
            return (arrayInterpretation.production.title === interpretations.production.title);
        }

        return _interpretations.findIndex(compareInterpretation);
    }

    //añade una nueva interpretación
    this.addInterpretation = function (interpretations) {
        //si no lo invocamos con el operador 'new'
        if (!(interpretations instanceof Interpretation)) {
            throw new InvalidAccessConstructorException();
        }

        var position = this.getInterpretationPosition(interpretations);
        if (position === -1) { //si no encuentra la interpretación, la añadimos
            _interpretations.push(interpretations);
        }
    }

    //elimina una interpretación
    this.removeInterpretation = function (interpretations) {
        //si no lo invocamos con el operador 'new'
        if (!(interpretations instanceof Interpretation)) {
            throw new InvalidAccessConstructorException();
        }

        var position = this.getInterpretationPosition(interpretations);
        if (position !== -1) { //si encuentra la interpretación, la elimina
            _interpretations.splice(position, 1);
        }
    }
}

Actor.prototype = Object.create(Person.prototype); //Actor hereda de Person sus propiedades
Actor.prototype.constructor = Actor;
Actor.prototype.toString = function () {
    return "Nombre: " + this.name + ", primer apellido: " + this.lastname1 +
        ", segundo apellido: " + this.lastname2 + ", fecha de nacimiento: " + this.born + ", imagen: " + this.image +
        ", interpretaciones: " + this.interpretaciones;
}


//objeto 'Director' que hereda de 'Person'
function Director(name, lastname1, lastname2, born, picture) {

    //invocamos al constructor de la clase padre

    Person.call(this, name, lastname1, lastname2, born, picture);


    //si no lo invocamos con el operador 'new'

    if (!(this instanceof Director)) throw new InvalidAccessConstructorException();


    var _productions = []; //array de producciones

    Object.defineProperty(this, 'production', {
        get: function (production) {
            return _productions;
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

        return _productions.findIndex(compareProduction);
    }


    //añade una nueva producción
    this.addProduction = function (production) {
        //si no lo invocamos con el operador 'new'
        if (!(production instanceof Production)) {
            throw new ProductionException();
        }

        var position = this.getProductionPosition(production);
        if (position === -1) { //si no encuentra la producción, la añadimos
            _productions.push(production);
        } else { //sino, salta una excepción
            throw new ProductionExists();
        }

        return _productions.length;
    }


    //elimina una producción
    this.removeProduction = function (production) {
        //si no lo invocamos con el operador 'new'
        if (!(production instanceof Production)) {
            throw new ProductionException();
        }

        var position = this.getProductionPosition(production);
        if (position !== -1) { //si encuentra la producción, la elimina
            _productions.splice(position, 1);
        } else { //sino, salta una excepción
            throw new NotRegisteredProduction();
        }

        return _productions.length; //devolvemos el número de elementos
    }
}

Director.prototype = Object.create(Person.prototype); //Director hereda de Person sus propiedades
Director.prototype.constructor = Director;
Director.prototype.toString = function () {
    return "Nombre: " + this.name + ", primer apellido: " + this.lastname1 +
        ", segundo apellido: " + this.lastname2 + ", fecha de nacimiento: " + this.born + ", imagen: " + this.image + ", producciones: " + this.production;
}


//objeto Interpretation
function Interpretation(production, character, main) {

    //si no lo invocamos con el operador 'new'

    if (!(this instanceof Interpretation)) throw new InvalidAccessConstructorException();


    //definimos variables para hacer privadas las propiedades del objeto

    var _production = production;
    var _character = character;
    var _main = main;


    //definimos las propiedades correspondientes

    Object.defineProperty(this, 'production', {
        get: function () {
            return _production;
        },
        set: function (production) {
            if (production === "" || production === "undefined") throw EmptyValueException("production");
            _production = production;
        }
    });

    Object.defineProperty(this, 'character', {
        get: function () {
            return _character;
        },
        set: function (character) {
            if (character === "" || character === "undefined") throw EmptyValueException("character");
            _character = character;
        }
    });

    Object.defineProperty(this, 'main', {
        get: function () {
            return _main;
        },
        set: function (main) {
            if (main === "" || main === "undefined") throw EmptyValueException("main");
            _main = main;
        }
    });
}

Interpretation.prototype = {};
Interpretation.prototype.constructor = Interpretation;
Interpretation.prototype.toString = function () {
    return "Producción: " + this.production + ", personaje: " + this.character +
        ", principal: " + this.main;
}


//objeto Category
function Category(name, description) {

    //si no lo invocamos con el operador 'new'

    if (!(this instanceof Category)) throw new InvalidAccessConstructorException();


    //comprobamos que los parámetros obligatorios no están vacíos

    if (name === "undefined" || name === "") throw new EmptyValueException("name");


    //definimos variables para hacer privadas las propiedades del objeto

    var _name = name;
    var _description = description;
    var _productions = [];


    //definimos las propiedades correspondientes

    Object.defineProperty(this, 'name', {
        get: function () {
            return _name;
        },
        set: function (name) {
            if (name === "" || name === "undefined") throw EmptyValueException("name");
            _name = name;
        }
    });

    Object.defineProperty(this, 'description', {
        get: function () {
            return _description;
        },
        set: function (description) {
            if (description === "" || description === "undefined") throw EmptyValueException("description");
            _description = description;
        }
    });

    Object.defineProperty(this, 'production', {
        get: function () {
            return _productions;
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

        return _productions.findIndex(compareProduction);
    }

    //añade una nueva producción
    this.addProduction = function (production) {
        //si no lo invocamos con el operador 'new'
        if (!(production instanceof Production)) {
            throw new ProductionException();
        }

        var position = this.getProductionPosition(production);
        if (position === -1) { //si no encuentra la producción, la añadimos
            _productions.push(production);
        } else { //sino, salta una excepción
            throw new ProductionExists();
        }

        return _productions.length;
    }

    //elimina una producción
    this.removeProduction = function (production) {
        //si no lo invocamos con el operador 'new'
        if (!(production instanceof Production)) {
            throw new ProductionException();
        }

        var position = this.getProductionPosition(production);
        if (position !== -1) { //si encuentra la producción, la elimina
            _productions.splice(position, 1);
        } else { //sino, salta una excepción
            throw new NotRegisteredProduction();
        }

        return _productions.length; //devolvemos el número de elementos
    }
}

Category.prototype = {};
Category.prototype.constructor = Category;
Category.prototype.toString = function () {
    return "Nombre: " + this.name + ", descripción: " + this.description + ", producciones: " + this.production;
}


//objeto Resource
function Resource(duration, link, audios, subtitles) {

    //si no lo invocamos con el operador 'new'

    if (!(this instanceof Resource)) throw new InvalidAccessConstructorException();


    //comprobamos que los parámetros obligatorios no están vacíos

    if (duration === "undefined" || duration === "") throw new EmptyValueException("duration");
    if (link === "undefined" || link === "") throw new EmptyValueException("link");

    audios = typeof audios !== 'undefined' ? audios : [];
    subtitles = typeof subtitles !== 'undefined' ? subtitles : [];


    //definimos variables para hacer privadas las propiedades del objetos

    var _duration = duration;
    var _link = link;
    var _audios = audios;
    var _subtitles = subtitles;


    //definimos las propiedades correspondientes

    Object.defineProperty(this, 'duration', {
        get: function () {
            return _duration;
        },
        set: function (duration) {
            if (duration === "" || duration === "undefined") throw EmptyValueException("duration");
            _duration = duration;
        }
    });

    Object.defineProperty(this, 'link', {
        get: function () {
            return _link;
        },
        set: function (link) {
            if (link === "" || link === "undefined") throw EmptyValueException("link");
            _link = link;
        }
    });

    Object.defineProperty(this, 'audios', {
        get: function () {
            return _audios;
        },
        set: function (audios) {
            audios = typeof audios !== 'undefined' ? audios : [];
            _audios = audios;
        }
    });

    Object.defineProperty(this, 'subtitles', {
        get: function () {
            return _subtitles;
        },
        set: function (subtitles) {
            subtitles = typeof subtitles !== 'undefined' ? subtitles : [];
            _subtitles = subtitles;
        }
    });

}

Resource.prototype = {};
Resource.prototype.constructor = Resource;
Resource.prototype.toString = function () {
    return "Duración: " + this.duration + ", link: " + this.link + ", audio: "
        + this.audios + ", subtítulos: " + this.subtitles;
}


//objeto Production
function Production(title, publication, nationality, synopsis, image) {

    //si no lo invocamos con el operador 'new'

    if (!(this instanceof Production)) throw new InvalidAccessConstructorException();


    //el objeto 'Production' no puede ser instanciado, puesto que es una clase abstracta
    if (this.constructor === Production) throw new AbstractClassException("Production");


    //comprobamos que los parámetros obligatorios no están vacíos

    if (title === "undefined" || title === "") throw new EmptyValueException("title");
    if (publication === "undefined" || publication === "") throw new EmptyValueException("publication");
    if (!(publication instanceof Date)) throw new ParameterValidationException();


    //definimos variables para hacer privadas las propiedades del objeto

    var _title = title;
    var _nationality = nationality;
    var _publication = publication;
    var _synopsis = synopsis;
    var _image = image;


    //definimos las propiedades correspondientes

    Object.defineProperty(this, 'title', {
        get: function () {
            return _title;
        },
        set: function (title) {
            if (title === "" || title === "undefined") throw EmptyValueException("title");
            _title = title;
        }
    });

    Object.defineProperty(this, 'nationality', {
        get: function () {
            return _nationality;
        },
        set: function (nationality) {
            if (nationality === "" || nationality === "undefined") throw EmptyValueException("nationality");
            _nationality = nationality;
        }
    });

    Object.defineProperty(this, 'publication', {
        get: function () {
            return _publication;
        },
        set: function (publication) {
            if (!(publication instanceof Date)) throw new ParameterValidationException();
            if (publication === "" || publication === "undefined") throw EmptyValueException("publication");
            _publication = publication;
        }
    });

    Object.defineProperty(this, 'synopsis', {
        get: function () {
            return _synopsis;
        },
        set: function (synopsis) {
            if (synopsis === "" || synopsis === "undefined") throw EmptyValueException("synopsis");
            _synopsis = synopsis;
        }
    });

    Object.defineProperty(this, 'image', {
        get: function () {
            return _image;
        },
        set: function (image) {
            if (image === "" || image === "undefined") throw EmptyValueException("image");
            _image = image;
        }
    });

}

Production.prototype = {};
Production.prototype.constructor = Production;
Production.prototype.toString = function () {
    return "Título: " + this.title + ", nacionalidad: " + this.nationality + ", fecha de publicación" + this.publication +
        ", sinopsis: " + this.synopsis + ", imagen: " + this.image;
}


//objeto Movie que hereda de 'Production'
function Movie(title, publication, resource, locations, nationality, synopsis, image) {

    //invocamos al constructor de la clase padre

    Production.call(this, title, publication, nationality, synopsis, image);


    //si no lo invocamos con el operador 'new'

    if (!(this instanceof Movie)) throw new InvalidAccessConstructorException();


    //comprobamos que los parámetros obligatorios no están vacíos

    if (resource === "undefined" || resource === "") throw new EmptyValueException("resource");
    if (locations === "undefined" || locations === "") throw new EmptyValueException("locations");


    //definimos variables para hacer privadas las propiedades del objeto

    var _resource = resource;
    var _locations = locations;


    //definimos las propiedades correspondientes

    Object.defineProperty(this, 'resource', {
        get: function () {
            return _resource;
        },
        set: function (resource) {
            if (resource === "" || resource === "undefined") throw EmptyValueException("resource");
            _resource = resource;
        }
    });

    Object.defineProperty(this, 'locations', {
        get: function () {
            return _locations;
        },
        set: function (locations) {
            if (locations === "" || locations === "undefined") throw EmptyValueException("locations");
            _locations = locations;
        }
    });

}

Movie.prototype = Object.create(Production.prototype); //Movie hereda de Production sus propiedades
Movie.prototype.constructor = Movie;
Movie.prototype.toString = function () {
    return "Título: " + this.title + ", publicación: " + this.publication + ", recurso: " + this.resource +
        ", localizaciones: " + this.locations + ", nacionalidad: " + this.nationality +
        ", sinopsis: " + this.synopsis + ", image: " + this.image;
}


//objeto Serie que hereda de 'Production'
function Serie(title, publication, seasons, nationality, synopsis, image) {

    //invocamos al constructor de la clase padre

    Production.call(this, title, publication, nationality, synopsis, image);


    //si no lo invocamos con el operador 'new'

    if (!(this instanceof Serie)) throw new InvalidAccessConstructorException();


    //definimos variables para hacer privadas las propiedades del objeto

    var _seasons = seasons;


    //definimos las propiedades correspondientes

    Object.defineProperty(this, 'seasons', {
        get: function () {
            return _seasons;
        },
        set: function (seasons) {
            seasons = typeof seasons !== 'undefined' ? seasons : [];
            _seasons = seasons;
        }
    });
}

Serie.prototype = Object.create(Production.prototype); //Serie hereda de Production sus propiedades
Serie.prototype.constructor = Serie;
Serie.prototype.toString = function () {
    return "Título: " + this.title + ", publicación: " + this.publication +
        "temporadas: " + this.seasons + ", nacionalidad: " + this.nationality + ", sinopsis: " + this.synopsis + ", image: " + this.image;
}


//objeto Season
function Season(title, episodes) {

    //si no lo invocamos con el operador 'new'

    if (!(this instanceof Season)) throw new InvalidAccessConstructorException();


    //comprobamos que los parámetros obligatorios no están vacíos

    if (title === "undefined" || title === "") throw new EmptyValueException("title");


    //definimos variables para hacer privadas las propiedades del objeto

    var _title = title;
    var _episodes = episodes;


    //definimos las propiedades correspondientes

    Object.defineProperty(this, 'title', {
        get: function () {
            return _title;
        },
        set: function (title) {
            if (title === "" || title === "undefined") throw EmptyValueException("title");
            _title = title;
        }
    });

    Object.defineProperty(this, 'episodes', {
        get: function () {
            return _episodes;
        },
        set: function (episodes) {
            if (episodes === "" || episodes === "undefined") throw EmptyValueException("episodes");
            _episodes = episodes;
        }
    });
}

Season.prototype = {};
Season.prototype.constructor = Season;
Season.prototype.toString = function () {
    return "Título: " + this.title + ", episodios: " + this.episodes;
}


//objeto Episodes
//creamos este objeto con la finalidad de agilizar y manejar mejor los episodios de las temporadas
function Episodes(title, resource, location) {

    //si no lo invocamos con el operador 'new'

    if (!(this instanceof Episodes)) throw new InvalidAccessConstructorException();


    //comprobamos que los parámetros obligatorios no están vacíos

    if (title === "undefined" || title === "") throw new EmptyValueException("title");
    if (resource === "undefined" || resource === "") throw new EmptyValueException("resource");
    if (location === "undefined" || resource === "") throw EmptyValueException("location");

    //definimos variables para hacer privadas las propiedades del objeto

    var _title = title;
    var _resource = resource;
    var _location = location;


    //definimos las propiedades correspondientes

    Object.defineProperty(this, 'title', {
        get: function () {
            return _title;
        },
        set: function (title) {
            if (title === "" || title === "undefined") throw EmptyValueException("title");
            _title = title;
        }
    });

    Object.defineProperty(this, 'resource', {
        get: function () {
            return _resource;
        },
        set: function (resource) {
            if (resource === "" || resource === "undefined") throw EmptyValueException("resource");
            _resource = resource;
        }
    });

    Object.defineProperty(this, 'location', {
        get: function () {
            return _location;
        },
        set: function (location) {
            if (location === "" || location === "undefined") throw EmptyValueException("location");
        }
    });
}
Episodes.prototype = {};
Episodes.prototype.constructor = Episodes;
Episodes.prototype.toString = function () {
    return "Titulo: " + this.title + ", recurso: " + this.resource +
        ", localizaciones: " + this.location;
}


//objeto User
function User(username, email, password) {

    //si no lo invocamos con el operador 'new'

    if (!(this instanceof User)) throw new InvalidAccessConstructorException();


    //comprobamos que los parámetros obligatorios no están vacíos

    if (username === "undefined" || username === "") throw new EmptyValueException("username");
    if (/^[a-z0-9ü][a-z0-9ü_]{3,9}$/.test(username) !== true) throw new InvalidValueException("username", username);
    if (email === "undefined" || email === "") throw new EmptyValueException("email");
    if (/^(.+\@.+\..+)$/.test(email) !== true) throw new InvalidValueException("email", email);
    if (password === "undefined" || password === "") throw new EmptyValueException("password");


    //definimos variables para hacer privadas las propiedades del objeto

    var _username = username;
    var _email = email;
    var _password = password;


    //definimos las propiedades correspondientes

    Object.defineProperty(this, 'username', {
        get: function () {
            return _username;
        },
        set: function (username) {
            if (username === "" || username === "undefined") throw EmptyValueException("username");
            _username = username;
        }
    });

    Object.defineProperty(this, 'email', {
        get: function () {
            return _email;
        },
        set: function (email) {
            if (email === "" || email === "undefined") throw EmptyValueException("email");
            _email = email;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function () {
            return _password;
        },
        set: function (password) {
            if (password === "" || password === "undefined") throw EmptyValueException("password");
            _password = password;
        }
    });

}

User.prototype = {};
User.prototype.constructor = User;
User.prototype.toString = function () {
    return "Nombre de usuario: " + this.username + ", email: " + this.email +
        ", contraseña: " + this.password;
}


//objeto Coordinate
function Coordinate(latitude, longitude) {

    //si no lo invocamos con el operador 'new'

    if (!(this instanceof Coordinate)) throw new InvalidAccessConstructorException();


    //comprobamos que los parámetros obligatorios no están vacíos

    latitude = typeof latitude !== 'undefined' ? Number(latitude).valueOf() : 0;
    if (Number.isNaN(latitude) || latitude < -90 || latitude > 90)
        throw new InvalidValueException("latitude", latitude);
    longitude = typeof longitude !== 'undefined' ? Number(longitude).valueOf() : 0;
    if (Number.isNaN(longitude) || longitude < -180 || longitude > 180)
        throw new InvalidValueException("longitude", longitude);


    //definimos variables para hacer privadas las propiedades del objeto

    var _latitude = latitude;
    var _longitude = longitude;


    //definimos las propiedades correspondientes

    Object.defineProperty(this, 'latitude', {
        get: function () {
            return _latitude;
        },
        set: function (latitude) {
            latitude = typeof latitude !== 'undefined' ? Number(latitude).valueOf() : 0;
            if (Number.isNaN(latitude) || latitude < -90 || latitude > 90)
                throw new InvalidValueException("latitude", latitude);
            _latitude = latitude;
        }
    });

    Object.defineProperty(this, 'longitude', {
        get: function () {
            return _longitude;
        },
        set: function (longitud) {
            longitude = typeof longitude !== 'undefined' ? Number(longitude).valueOf() : 0;
            if (Number.isNaN(longitude) || longitude < -180 || longitude > 180)
                throw new InvalidValueException("longitude", longitude);
            _longitude = longitude;
        }
    });

}

Coordinate.prototype = {};
Coordinate.prototype.constructor = Coordinate;
Coordinate.prototype.toString = function () {
    return "latitud: " + this.latitude + ", longitud: " + this.longitude;
} 