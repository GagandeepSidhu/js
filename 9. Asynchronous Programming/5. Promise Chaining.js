const getCallback = (num, callback ) => {
    setTimeout( () => {
        if ( typeof num === 'number' )
        {
            callback(undefined, num*2)
        }
        else
        {
            callback('some error occur')
        }
    }, 2000)
}

// this is callback hell (chaining a callback)
getCallback( 2, ( error, data ) => {
    if ( error )
        console.log( error );
    else
    {
        getCallback( data, ( error, data ) => {
            if ( error )
                console.log( error );
            else
                console.log(data);
        })
    }
} )
// output: 8



// do same thing using Promise
const myPromise = ( num ) => new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        typeof num === 'number' ? resolve(num+2) : reject('An promise error has occured')
    }, 2000)
} )


// but it is complex as callback chaining
myPromise( 9 )
.then(
    data => {
        myPromise( data ).
            then(
                data => {
                    console.log('Promise data is: ' + data);    //Promise data is: 13
                },
                error => {
                    console.log(error);
                }
            )
    },
    error => {
        console.log(error);   
    }
)

// better way to handle it
myPromise( 36 ).then( data => {
    return myPromise(data)
} ).then( data => {
    return myPromise(data)
} ).then( data => {
    return myPromise(data)
} ).then( data => { console.log( data ); } )    //44
// now to handle the error need to use catch 
.catch( error => {
    console.log(error);
})


myPromise( 0 ).then( data => {
    // instead of returing a promise, we can return anything else as well
    return 'This is valid'
} ).then( data => { console.log( data ); } )    //This is valid
// now to handle the error need to use catch 
.catch( error => {
    console.log(error);
})
