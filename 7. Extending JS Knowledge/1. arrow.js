// Difference between normal and arrow function:
//     Normal Function                   Arrow Function
// ------------------------------------------------------------    
// 1.  Complex Syntex                    Very simple Syntex
// 2.  It binds it's own this            It does not bind it's own this
// 3.  has argument variable             does not has argument variable(so it can not use this)


// does not bind this
let book = {
    name: 'Physics',
    summary: function () {
        return `I have book of ${this.name}`
    }
}
console.log( book.summary() );  //I have book of Physics

let myBook = {
    name: 'Physics',
    summary: () => `I have book of ${this.name}`
}
console.log( myBook.summary() );  //I have book of undefined



function Hello () {
    this.name = 'No matter'
    this.fullName = () => {
        return this.name
    }
    this.getName = function () {
        return this.name
    }
}

let x = new Hello()
console.log(x.getName());   //No matter
console.log(x.fullName());  //No matter










// argument variable
let fun1 = function ( a, b ) {
    console.log(arguments);
}
fun1( 2, 3, 5, 6 )  //[Arguments] { '0': 2, '1': 3, '2': 5, '3': 6 }

let fun2 = ( a, b ) => {
    console.log(arguments);
}

fun2( 3, 4, 5, 6, 6, )  // it will print a very long output but don't have info about passed arguments

console.log( 'End arguemnts variable access' );


