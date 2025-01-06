// most of api required authentication, so we need to login and get the token, later we will use
// this token to make an api request
// https://ipinfo.io/
// 1. login
// dashboard -> token -> copy token (766717658e4066)
// use below end point: https://ipinfo.io/json?token=766717658e4066


const getLocation = () => {
    return fetch( 'https://ipinfo.io/json?token=766717658e4066' )
        .then( response => {
            if ( response.status === 200 )
                return response.json()
            else
                throw new Error('Unable to fetch ip info')
        } )
        
}

getLocation().then( data => {
    // console.log( data );
    console.log(`You live in ${data.region}, ${data.city}, ${data.country}`);
} ).catch( error => {
    console.log(error);
})


const getCountry = (countryCode) => {
    return fetch( 'http://restcountries.eu/rest/v2/all' ).then( response => {
        return response.json()
    } )
    .then( data => {
        let countryObject = data.find( element => element.alpha2Code === countryCode )
        return countryObject.name
    })
}

getCountry( 'IN' ).then( data => { console.log( data ); } )


getLocation().then( data => {
    // console.log( data );
    console.log( `You live in ${data.region}, ${data.city}, ${data.country}` );
    return getCountry(data.country)
} ).then( data => {
    console.log(`Your country is : ${data}`);
}).catch( error => {
    console.log(error);
})
