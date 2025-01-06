// sum(2)(4)
function A ( a ) {
    return function B( b ){
        return a+b
    }
}
console.log( A( 2 )( 4 ) );   //6


// sum(1)(2)(3)(4)
function S ( a ) {
    return function P ( b ) {
        return function Q ( c ) {
            return function R ( d ) {
                return a+b+c+d
            }
        }
    }
}

console.log( S( 1 )( 2 )( 3 )( 4 ) ); //10

// sum(1)(2)(3)(4) - recursively
function fun1 ( a ) {
    return function fun2( b ){
        if ( b === undefined )
            return a
        else
            return fun1( a + b )
        
        // return b?sum(a+b):a
    }
}

console.log( fun1( 1 )( 2 )( 3 )( 4 )() );  //10

// // sum(1)(2)(3)(4) - recursively (simpler version)

let sum = a => b => b ? sum( a + b ) : a

console.log(sum(1)(2)(3)(4)()); //10