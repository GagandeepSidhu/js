let n = 10.12345

console.log( n.toFixed( 2 ) );  // 10.12
console.log( n.toFixed( 10 ) ); // 10.1234500000

console.log( Math.round(n) );   // 10
console.log( Math.floor(n) );   // 10
console.log( Math.ceil( n ) );    // 11

// it generates value from 0 to 0.999999
console.log( Math.random() ); // 

// it generates no between 0 to 10.9999999;
n = Math.random() * ( 10 + 1 )

n = Math.floor( n ) // it will be a vlaue between 0 to 10

// generate a number between a range
let min = 10
let max = 20

// it will generate no between 10 to 20 (inclusively)
let no_of_range = Math.floor( Math.random() * ( max - min + 1 ) ) + min
console.log(no_of_range);



