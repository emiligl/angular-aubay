// function algo(){
//     let codigo = 23
//     let user = 'Pepe'
//     let error = false

//     return [codigo, user, error]
//     //return 
// }

// let x = algo()
// if (!x[2])
//     console.log(`El código es ${x[0]} y el usuario ${x[1]}`)

// let [codigo, user, error] = algo()

// if (!error)
//     console.log(`El código es ${codigo} y el usuario ${user}`)



function algo(){
    let codigo = 23
    let user = 'Pepe'
    let error = false

    return {
        codigo:codigo,
        user:user,
        error:error
    }
}

let {codigo, user, error} = algo()

if (!error)
    console.log(`El código es ${codigo} y el usuario ${user}`)