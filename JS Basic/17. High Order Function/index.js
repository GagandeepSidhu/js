/*  
High Order Function(HOF): A function that takes a function as argument or returns a function. 


*/

// Example of High Order Function and Call back 
function A (fun) {
    fun()
}
function B(){
    console.log('This is call back function');
}
A( B )  //here A is the High Order Function and B is call back function


// Problem 
function AreaOfCircle ( array ) {
    output = []
    for ( let i = 0; i < array.length; i++ )
    {
        let area = Math.PI * array[i] * array[i]
        output.push(area)
    }
    return output
}

function DiameterOfCircle ( array ) {
    output = []
    for ( let i = 0; i < array.length; i++ )
    {
        let area = 2 * Math.PI * array[i] 
        output.push(area)
    }
    return output
}

let radius = [1, 2, 3]
console.log( AreaOfCircle( radius ) );  //[ 3.141592653589793, 12.566370614359172, 28.274333882308138 ]
console.log(DiameterOfCircle(radius));  //[ 6.283185307179586, 12.566370614359172, 18.84955592153876 ]

// to calculate area and diameter we wrote two functions but most code is the same, so we can avoid it 
// using call back funciton and functional programming
function area ( radius )
{
    return Math.PI * radius * radius
}
function diameter ( radius )
{
    return 2 * Math.PI * radius    
}

function HOF ( callback, array ) {  //this implementation is to the map function in this case
    let output = []
    for ( let i = 0; i < array.length; i++ )
    {
        output.push(callback(array[i]))
    }
    return output
}

console.log( HOF( area, radius ) ); //[ 3.141592653589793, 12.566370614359172, 28.274333882308138 ]
console.log(HOF(diameter, radius)); //[ 6.283185307179586, 12.566370614359172, 18.84955592153876 ]

// own implementation of map function
Array.prototype.myMap = function ( callback ) {
    let output = []
    for ( let i = 0; i < this.length; i++ )
    {
        output.push(callback(this[i]))
    }
    return output
}

console.log(radius.myMap(area));    //[ 3.141592653589793, 12.566370614359172, 28.274333882308138 ]
