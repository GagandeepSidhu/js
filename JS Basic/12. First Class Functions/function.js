// Function Statement or Function Declaration : way of creating a function
function fun () {
    console.log('this');
}

//Function Expresstion: assigning a function to a variable is know as function expression
// we can assign a variable a function as well
let fun1 = function () {
    console.log('fun1');
}
fun1()  //fun1

// Difference between funciton statement and function expression
// hoisting is the difference between them
// function statement: we can call before creating it
A() //function A
function A () {
    console.log('function A');
}

// function expression: we can not call before creating it
// B()
let B = function () {
    console.log('function B');
}

// Anonymous Function: Function without name
// function statement always require a name of the function 
// so we can not use anynymous function as Function Statement(we need to assign it to a variable)
// we can use anonymous function as a value 
let num = function () {
    console.log('anonymous function');
}

// Name Function Expression: assigning a function with a name to a variable 
// instead of using anonymous function, we use named function as a value to assing to a variable
// fun2()  // it will give error
let fun2 = function fun3 () {
    console.log( 'fun3' );
    // we can use fun3 here
    console.log( fun3 );    //[Function: fun3]
    // but outside can not use because it not created in the outer(global) scope and can be use only locally
}
fun2()  //fun3
// fun3()  // it will give error

// Difference between parameters and arguments
function Sum ( parameter1, parameter2 ) //here parameter1 and parameter2 = Parameters not the argument
{
    return parameter1 + parameter2
}
let argument1 = 5
let argument2 = 10
Sum( argument1, argument2 )   // here argument1 and argument2 = Arguments
Sum(2, 4)   // here 2, 4 = arguments

// function as a variable: we can assign a value to a function 
fun = 56
console.log( fun ); //56


// First Class Function or First Class Citizens: The ability to use function as a value, 
//  to receive function as a parameter, pass a function as agrument and return a function
//  as a value is know as first class function
