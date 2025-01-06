let sum = ( a, b ) => {
    if ( typeof a !== 'number' || typeof b !== 'number' )
    {
        // throw a error message without Error object
        throw 'Type is not correct'    
    }
    return a+b
}

console.log(typeof 32);     //number
console.log( sum( 2, 3 ) ); // 5
// console.log( sum( 2, 'abc' ) ); //will throw error
// console.log( sum( 'abc', 2 ) );  // will throw error

let sub = ( a, b ) => {
     if ( typeof a !== 'number' || typeof b !== 'number' )
    {
        // throw a error message without Error object
        throw Error('Type is not correct')
    }
    return a - b
}

console.log( sub( 3, 5 ) ); //-2
// console.log( sub( 'sac', 54 ) );    //will throw an error

// try catch

try {
    console.log(sub(3, 'abc'));     
} catch (myError) {
    // console.log(myError);    // it will print a very long error message, with all details

    // to print only main message
    console.log(myError.message);   //Type is not correct

}

console.log( typeof 2.3 );    // number


// application errors
// while using localStorage we convert it into a json object using JSON.parse but if it is
// not a valid json object then it will give error, so while using this JSON.parse we can
// use a try catch block 