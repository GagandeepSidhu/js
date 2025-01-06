const fun = async () => {
    
}

let value = fun()

// it returns a Promise, we can tell our function what to return in that promise
console.log( value ); //Promise { undefined }

// if we want to return resolve then simply use return keyword, 
// if we want to return a reject then use throw to throw an error
const fun1 = async () => {
    return 34    
}
fun1().
    then( data => { console.log( data ); } ) //34
    .catch(error=>{console.log(error);})


// const fun2 = async () => {
//     throw new Error('Some error occur')   
// }
// fun2()
//     .then( data => console.log( data ))
//     .catch( error => console.log( error ) )
    


const getMyNumber = ( num ) => new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        typeof num === 'number'?resolve(num+2): reject('Provide a number')
    }, 2000)
})

const getNum = async (num) => {
    let data = await getMyNumber( num )
    data = await getMyNumber( data )
    return data
}

getNum( 2 )
    .then( data => { console.log( data ); } )
    .catch( error => { console.log( error ); } )




// Examples

const getPuzzle = async ( wordCount ) => {
    const response = await fetch( `https://puzzle.mead.io/puzzle?wordCount=${wordCount}` )
    if ( response.status === 200 )
    {
        return response.json()
    }
    else
    {
        throw new Error('Not able to fetch puzzle')
    }
}

getPuzzle()
    .then( data => { console.log( data ); } )   //{puzzle: "Locket"}
    .catch(error=>{console.log(error);})
