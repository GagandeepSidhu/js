const info = function ( name = 'sahcin', age ) {
    console.log( name );
    console.log(age);
}

info()
// sahcin
// undefined

const fun1 = function ( name = 'anonymous', age = 0 ) {
    console.log( name );
    console.log(age);
}

// give only first argument
fun1( 'John' )
// John
// 0

// give only second argument
fun1( undefined, 99 )
// anonymous
// 99

// give both
fun1( 'Pradeep', 98 )
// Pradeep
// 98


// give null
fun1( null, null )
// null
// null