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
const sumaD = (a = 0,b = 0) => a+b //inicializamos por defecto los valores a 0

const cuadrado = a => a*a

console.log(sumaA(1,5))
console.log(sumaB(2,5))
console.log(sumaC(3,5))
console.log(sumaD(4,5))
console.log(cuadrado(3))


//This es SIEMPRE la función

const verThis = function(){
    console.log('Ver this');
    console.log(this)
}
verThis();
const o = {
    nombre: 'Pepe',
    metodo: verThis
}
o.metodo()

const arrow = () => {
    console.log('Ver this en un arrow');
    console.log(this)
}

arrow();

const o2 = {
    nombre: 'Juan',
    metodo: arrow
}

o2.metodo()

o2.metodoAsinc = function (){
    console.log(this.nombre);
    setTimeout(()=> { console.log(this.nombre) },1000)
}

o2.metodoAsinc()

// Operadores spreed / rest

const verArray = (...rest) => { console.log(rest)}

verArray(1,3,4,6)

const verNumeros = (a,b,c)=>{console.log(a,b,c)}

const aMasDatos = [2,6,9]

verNumeros(...aMasDatos);


let s = 0

for (const iterator of aMasDatos)
{
    s+=iterator
}

console.log(s)

s=0

aMasDatos.forEach(item =>  s+=item)
console.log(s)
