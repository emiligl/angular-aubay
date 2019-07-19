function PersonaES5 (nombre){
    this.nombre = nombre
}

PersonaES5.prototype.saludar = function (otro = 'amigo'){
    console.log(`Hola ${otro}, soy ${this.nombre}`)
}

PersonaES5.cerebro = true
PersonaES5.pensar = function () {
    console.log('Las personas ES5 piensan')
}

PersonaES5.pensar()


//Clases en ES6
//No existe modificadores de acceso, propiedades, clases abstractas
class Persona {
 
    constructor(nombre){
        this.nombre = nombre
    }

    saludar (otro = 'amigo'){
        console.log(`Hola ${otro}, soy ${this.nombre}`)
    }

    static pensar(){
        console.log('Las personas piensan')
    }
}

Persona.pensar()

const p1 = new Persona('pepe')
p1.saludar('Juan')
console.log(p1)

const p2 = new Persona('elena')
p2.saludar(p1.nombre)
p2.edad = 32
console.log(p2)

class Alumno extends Persona {
    constructor(nombre, curso){
        super(nombre)
        this.curso = curso
    }
    saludar(otro = 'amigo'){
        super.saludar(otro)
        console.log(`Y estudio ${this.curso}`)
    }
}

const a1 = new Alumno ('Raquel','Angular')
a1.saludar()
console.log(a1)


