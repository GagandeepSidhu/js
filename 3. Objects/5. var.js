// we can define a variables again if we use var keyword
var name = 'Sahcin'
var name = 'Pradeep'
console.log( name );

let n = 23
// var n = 54      // we can not redefine that is already defined with let or const
console.log( n );

// var is function scopped, not the block scopped

// block scopped ( var is not block scopped means we can access it outside block)
if ( true )
{
    var size = 15
}

// we can access it outside the block
console.log( size );    // 15 

function fun1 () {
    var page = 1000
}

// function scopped
fun1()
// console.log(page);   // we can not access variables defined by var outside the function


// use before declaring it
console.log( color );   // undefined
var color = 'red'

// using let
// console.log( legs );  // give error: Cannot access 'legs' before initialization
let legs;
