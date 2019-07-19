function asyncOriginal(callback){
    setTimeout(()=> {
        let data = 'Los datos'
        callback(data)
    },2000)
}

asyncOriginal( (res)=>{
    //Proceso los datos
    console.log(res)
})

//ES6 incorpora promesas nativas JS
function asyncPromise (){
    return new Promise( (resolve, reject)=>{            
            setTimeout( ()=> {
                let i = Math.random()
                if (i < 0.7){
                    //Todo OK
                    resolve(i)
                }
                else
                {
                    //Error
                    reject(new Error(i))               }
            },2000)
        })
}

asyncPromise().then(
    (res) => { console.log('Datos:' + res)}
).catch(
    (error) => { console.log('Error:' + error.message)}
);

//ES6(ES2017) incorpora async/await
(async () => {
    try {
        let res = await asyncPromise()
        console.log('Datos ES2017:' + res)    
    } catch (error) {
        console.log('Error ES2017:' + error.message)
    }
    
    console.log("Funcion autoejectuada")
})()