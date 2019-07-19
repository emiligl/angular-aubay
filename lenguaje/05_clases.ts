//Clases en TypeScript
//Existe modificadores de acceso, propiedades, tipos, clases abstractas
abstract class SerVivo{
    public nombre: string
    public edad: number

    saludar (otro:string = 'amigo'){}

    static pensar(){}
}

class Persona extends SerVivo {
    
    constructor(nombre:string){
        super()
        super.nombre = nombre
    }

    saludar (otro:string = 'amigo'){
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
    public curso:string 

    constructor(nombre:string, curso:string){
        super(nombre)
        this.curso = curso
    }
    saludar(otro:string = 'amigo'){
        super.saludar(otro)
        console.log(`Y estudio ${this.curso}`)
    }
}

const a1 = new Alumno ('Raquel','Angular')
a1.saludar()
console.log(a1)


