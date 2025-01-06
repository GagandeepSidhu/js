let square = function ( num ) {
    return num * num
}

let n = square( 10 )
console.log( n );

// in console.log  -> log is a function that takes some agrument and print it on the console screen

// undefined, for variable
let name
console.log( name );    // undefined

if ( name === undefined )
{
    console.log('Please give some value '); // Please give some value
}
else
{
    console.log('Your name is ' + name);
}

// undefined, for function

let print = function ( msg ) {
    console.log(msg);
}

let output1 = print()
// here print will call with no value so it will print undefined
// as return is not used anywhere in the print function so it is not returning anything, so it means
// it is returning undefined

console.log( output1 );    // undefined


// clearing a variable implicetly
let v1 = 34
v1 = undefined  // but here we are not sure that we intensionaly did it or it comse with above two conditions
console.log( v1 );

// so instead of giving a undefined value we can use null value
v1 = null

console.log( v1 );

console.log( v1 === 0 );  // false
console.log( v1 === false );    //false

if ( 0 ) // 0 is treated as false value here, so this block will not be executed
{
    console.log('It is zero');
}

if ( null ) // null is also treated as false
{
    console.log('It is null');
}

if ( undefined )    // undefined is also treated as false
{
    console.log('It is undefined');
}

if(""){
  console.log('"" is not falsey');
}
else{
  console.log('"" is false');//"" is false
}

//
const fun1 = function () {
    console.log('This is fun1');
}
function fun2 () {
    console.log('This is fun2');
}
