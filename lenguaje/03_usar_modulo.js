// const f = require('./03_modulo.js') //añadir la extension cuando es js. Si no supone que es ts 
// console.log(f)

// f.suma()
// f.resta()

const {resta, suma} = require('./03_modulo.js') // Desestructurando e importando lo que necesitemos
console.log(suma(2,3))
console.log(resta(9,5))