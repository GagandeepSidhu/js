fetch( 'https://puzzle.mead.io/puzzle', {} )
.then( response => {
    if ( response.status === 200 )
        return response.json()
    else
        throw new Error('Unable to fetch api')
} )
.then( data => {
    console.log(data);    
} )
.catch( error => {
    console.log(error);
})


const getPuzzle = (wordCount) => {
    return fetch( `https://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {} )
        .then( response => {
            if ( response.status === 200 )
                return response.json()
            else
                throw new Error('Unable to fetch api')
        } )

}
    

getPuzzle(1)
.then( data => {
        console.log(data);    
} )
.catch( error => {
    console.log(error);    
})