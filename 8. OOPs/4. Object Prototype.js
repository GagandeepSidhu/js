let book = function(){
    this.name = 'Physics'
}

console.log( book.hasOwnProperty( 'name' ) );   //true
console.log( book.hasOwnProperty( 'page' ) );   //false

console.log( book.hasOwnProperty( 'hasOwnProperty' ) ); //false
//Object is the parent of book and it has hasOwnProperty insede it's prototype object

console.log( [1, 2, 3, 4].toString() );  //1,2,3,4

// Premetives 
// String  => new String()  //can convert to an object
// Number => new Number()
// Boolean => new Boolean()
// undefined   // can not convert to an object
// null    // can not convert to an object

// Non Premetive 
// object
// array
// function