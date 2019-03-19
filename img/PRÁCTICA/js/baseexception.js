//excepción base para ir creando el resto de excepciones
function BaseException() {
}
BaseException.prototype = new Error(); //herencia del objeto Error
BaseException.prototype.constructor = BaseException; //definimos el constructor

//sobreescribimos el método toString para personalizarlos
BaseException.prototype.toString = function () {
    //name y message son propiedades de Error
    return this.name + ": " + this.message;
}

//excepciones de validación de parámetros, reutilizables en todas las clases
function ParameterValidationException() {
    this.name = "ParameterValidationException";
    this.message = "Error: Parameter Validation Exception";
}
ParameterValidationException.prototype = new BaseException(); //heredamos de BaseException
ParameterValidationException.prototype.constructor = ParameterValidationException;

//excepción personalizada para indicar valores vacíos
function EmptyValueException(param) {
    this.name = "EmptyValueException";
    this.message = "Error: El parámetro " + param + " no puede estar vacío";
}
EmptyValueException.prototype = new ParameterValidationException(); //heredamos de ParameterValidationException
EmptyValueException.prototype.constructor = EmptyValueException;

//excepción de valor inválido
function InvalidValueException(param, value) {
    this.name = "InvalidValueException";
    this.message = "Error: El parámetro " + param + " posee un valor no válido. (" + param + ": " + value + ")";
}
InvalidValueException.prototype = new ParameterValidationException(); //heredamos de ParameterValidationException
InvalidValueException.prototype.constructor = InvalidValueException;

//excepción acceso inválido a constructor
function InvalidAccessConstructorException() {
    this.name = "InvalidAccessConstructorException";
    this.message = "Constructor can't be called as a function";
}
InvalidAccessConstructorException.prototype = new BaseException();
InvalidAccessConstructorException.prototype.constructor = InvalidAccessConstructorException;

//excepción objeto no instanciable
function AbstractClassException(param) {
    this.name = "AbstractClassException";
    this.message = "No puede instanciar un objeto " + param;
}
AbstractClassException.prototype = new BaseException();
AbstractClassException.prototype.constructor = AbstractClassException;
