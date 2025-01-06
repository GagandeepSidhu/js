const getDataCallback = callback => {
    setTimeout( () => {
        // we can call callback more than one time
        callback( undefined, 'This is the data' )
        callback( undefined, 'This is the data' ) 
    }, 2000 );
}

getDataCallback( ( error, data ) => {
    if ( error )
        console.log(error);
    else
        console.log(data);  //This is the data
} )


let myPromise = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        let error = 'error'

        // we can not use resolve and reject at the same time, also can not use more than one time
        if ( error === 'error' )
            reject( 'Something went wrong' )
        else
            resolve( 'This is promise data' )
        
    }, 2000 )
} )

myPromise.then(
    // handle resolve, when thing go well
    ( data ) => {
    console.log(data);  //This is promise data
    },
    // to handle reject, if there some error occur
    ( error ) => {
        console.log(error);
    }
)



