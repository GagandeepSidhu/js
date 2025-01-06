/*

Hoisting: Hoisting is the default behavior of moving all the declarations at the top of the scope before 
code execution. Basically, it gives us an advantage that no matter where functions and variables are 
declared, they are moved to the top of their scope regardless of whether their scope is global or local.

hoisting is the creating memory for variables and functions then assigning undefined value 
to the variables and assign actual code of the function to the function before the execution of program.
It is the mechanism by which we can call a function before declaring
it(in case of function Statement/ Declaration ) and also can use a variable before declaring it.

*/
/*

Note: Even before the program starts executing, memory is allocated to every variables and functions and
variables initialize with undefined and functions initialize with actual function code. 

*/

// putting debugger to see that if variables and function has allocated memory or not and what they 
// have initaalized with
// see in the GLOBAL scope inside inspect element in browser
// debugger
// check window.fun and window.x

debugger
// x, fun (so variables using var keyword and function will be create in global scope) will be 
// given memory inside global scope( as it is created using var keyword),
// so we can access it before execution of code

// y and z is created inside script scope, we can not access them before execution of code. 

fun()   //hello
console.log( x );   //undefined
console.log( fun );   //[Function: fun]
// console.log( y );    //can not access y before initialization
// console.log(z);  //can not access z before initialization

console.log(fun2);  //undefined

var x = 7   //it is created as global variables 
let y = 9
const z = 11

function fun () {
    console.log('hello');
}

var fun2 = function () {
    
}