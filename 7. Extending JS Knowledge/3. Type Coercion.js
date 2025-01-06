console.log( '5' + 5 ); //55
console.log( '5' - 5 ); //0


console.log( typeof {} );    // object

let num1 = true + 12
let num2 = false + 12

console.log( typeof num1 ); //number
console.log( num1 );    //13

console.log( typeof num2 ); //number
console.log( num2 );    //12

// convert a string to a number
let age = '21'
let age1 = parseInt( age )
let age2 = parseFloat( age )
let age3 = Number( age )

console.log( age1, age2, age3 );    //21 21 21

console.log(age1===age2, age2===age3);  // true true


// for float string
let price = '21.45'
let price1 = parseInt( price )
let price2 = parseFloat( price )
let price3 = Number( price )

console.log( price1, price2, price3 );    //21 21.45 21.45

console.log( price1 === price2, price2 === price3 );  // false true


// convert number to string 
let ticketNo = 1234
let tn = ticketNo.toString()
console.log(tn);

