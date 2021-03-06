// ES6+(ES2015) incorpora let / cons en vez de var
'use strict'

let x = 1
console.log(x)

const k = 3
//k = 4 da error
const aDatos = [1,2,3]
aDatos.push(4)
//aDatos = 4 da error
console.log(aDatos)

const algo = function (){
    let x = 2
    console.log(x)

    if (true){
        let x = 3
        console.log(x)
    }
}

algo()
//algo = 4 Da error, protegemos la funcion declarandola const

let cadena = 'Hola Pepe'

let cadenaMal = "Hola Pepe" // Mala

// Es6 incorpora los template strings: ``
let template = `Tengo una variable que dice ${cadena}`
console.log(template)

function sumaA(a,b) {
    return a+b
}
const sumaB = function (a,b) {
    return a+b
}

//Arrow functions o lambdas
//No constructor, this apunta a la propia función, funciones anonimas
const sumaC = (a,b) => {return a+b}
const sumaD = (a,b) => a+b
const cuadrado = a => a*a

console.log(sumaA(1,5))
console.log(sumaB(2,5))
console.log(sumaC(3,5))
console.log(sumaD(4,5))
console.log(cuadrado(3))