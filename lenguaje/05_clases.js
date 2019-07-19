var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Clases en TypeScript
//No existe modificadores de acceso, propiedades, clases abstractas
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    Persona.prototype.saludar = function (otro) {
        if (otro === void 0) { otro = 'amigo'; }
        console.log("Hola " + otro + ", soy " + this.nombre);
    };
    Persona.pensar = function () {
        console.log('Las personas piensan');
    };
    return Persona;
}());
Persona.pensar();
var p1 = new Persona('pepe');
p1.saludar('Juan');
console.log(p1);
var p2 = new Persona('elena');
p2.saludar(p1.nombre);
p2.edad = 32;
console.log(p2);
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(nombre, curso) {
        var _this = _super.call(this, nombre) || this;
        _this.curso = curso;
        return _this;
    }
    Alumno.prototype.saludar = function (otro) {
        if (otro === void 0) { otro = 'amigo'; }
        _super.prototype.saludar.call(this, otro);
        console.log("Y estudio " + this.curso);
    };
    return Alumno;
}(Persona));
var a1 = new Alumno('Raquel', 'Angular');
a1.saludar();
console.log(a1);
