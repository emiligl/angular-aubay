function course (target) {
    Object.defineProperty(
        target.prototype,
        'course',
        {
            value: () => "Angular 8"
        }    
    )
}

@course
class Person {
    nombre: string;        
    edad: number;

    constructor (nombre: string, edad:number){
        this.nombre = nombre
        this.edad = edad
    }
}

let oPersona = new Person("Pepe" , 22);
console.log(oPersona); //Persona
console.log(oPersona['course']()); //Angular 8
// console.log(oPersona.course()); //Angular 8 pero dando error en el TS

//Notacion objetos
const o = {
    nombre:'Pepe'
}

o.nombre = 'Jose'

let propiedad = 'nombre'
o[propiedad] = 'Jose'
