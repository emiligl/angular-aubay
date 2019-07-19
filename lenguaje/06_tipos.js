{
    var cadena = void 0;
    var num = void 0;
    var isOK = void 0;
    var sinTipo = void 0;
    var otroSinTipo = void 0;
    var codigo = void 0;
    //cadena = 43 da error de TS que no en el JS despues de compilar
    codigo = 23;
    codigo = 'hola';
}
// Inferencia de tipos
{
    var cadena = 'pepe'; //string
    // cadena = 32 Da error
}
// Arrays
{
    var aDatos = [];
    var aDatos2 = [];
    var aNumbers = [];
    var aNumbers2 = [];
    // aDatos.push('Pepe'); //Daria Error de TS
    // aDatos2.push('Pepe');
}
// Objetos
{
    var oDatos = void 0;
    oDatos.nombre = 'Pepe';
    oDatos.edad = 23;
    var oDatos2 = void 0;
    oDatos2 = { nombre: 'Pepe', edad: 23 };
}
{
    var Persona = /** @class */ (function () {
        // nombre: string;        
        // edad: number;
        function Persona(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
            this.nombre = nombre;
            this.edad = edad;
        }
        return Persona;
    }());
    var iDatos = void 0;
    iDatos = { nombre: 'Pepe', edad: 23 };
    console.log(iDatos);
    var oDatos = void 0;
    var oDatos1 = void 0;
    oDatos = new Persona('Juan', 36);
    oDatos1 = { nombre: 'Pepe', edad: 23 };
    console.log(oDatos);
    console.log(oDatos1);
}
