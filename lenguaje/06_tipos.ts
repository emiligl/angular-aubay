{
    let cadena:string 
    let num:number
    let isOK:boolean
    let sinTipo
    let otroSinTipo: any
    let codigo: string | number

    //cadena = 43 da error de TS que no en el JS despues de compilar
    codigo = 23
    codigo ='hola'
}

// Inferencia de tipos
{
    let cadena = 'pepe' //string
    // cadena = 32 Da error
}

// Arrays
{
    let aDatos: [] = []
    let aDatos2: Array<any> = []
    let aNumbers: number[] = []
    let aNumbers2: Array<number> = []

    // aDatos.push('Pepe'); //Daria Error de TS
    // aDatos2.push('Pepe');
}

// Objetos
{
    let oDatos: { nombre: string, edad: number }
    // oDatos.nombre = 'Pepe'
    // oDatos.edad = 23

    let oDatos2: { nombre: string, edad: number }
    oDatos2 = { nombre: 'Pepe', edad: 23 }
}

{
    interface IPersona{
        nombre:string,
        edad: number
    }

    class Persona implements IPersona{
        // nombre: string;        
        // edad: number;

        // constructor (nombre: string, edad:number){
        //     this.nombre = nombre
        //     this.edad = edad
        // }

        constructor (public nombre: string, public edad:number){
            this.nombre = nombre
            this.edad = edad
        }
    }

    //Tipos esctructurales, no semanticos

    let iDatos:IPersona
    let oDatos: Persona
    let oDatos1: Persona

    iDatos = { nombre: 'ataco directamente la Interfaz', edad: 20 }
    oDatos = new Persona('En el constructor', 36)
    oDatos1 = { nombre: 'Al vuelo', edad: 23 }

    console.log(iDatos)
    console.log(oDatos)
    console.log(oDatos1)
}

// Funciones

{
    let algo : () => void
    let otra : (n:number) => boolean

    // algo = function () { } OK
    algo = () => { return 2 } //Retipar para obligar a void
    // algo = (): void => { return 2 } //Da error

    algo = function () { 
        return 2 
    }
    otra = (num) => { return true }

    const otramas = (c: string) : void => { // se tipa al hacer la implementación
        // return 2 da error        
    }

}

// Enums
{
    enum Direction {
        Up = 1,
        Down,
        Left,
        Right
    }

    let x: Direction
    x = Direction.Down;
    



}
