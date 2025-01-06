/*  
High Order Function(HOF): A function that takes a function as argument or returns a function. 

map, filter and reduce are same as python
*/

// map: if after iterating over an array you are transforming every elemnet inside array and returning the 
// transformed array then use map
let num = [1, 2, 5, 4]
let squares = num.map( ( element ) => element * element )
console.log( squares );   //[ 1, 4, 25, 16 ]

// filter: if after iterating over a array you are expecting an array with no of element equal or less than 
// to original array (min can be 0 and max can be the no of elements in original array)
let odd_even = [3, 4, 5, 7, 9]
let odd = odd_even.filter( ( element ) => element % 2 == 1 )
console.log( odd );   //[ 3, 5, 7, 9 ]

// reduce: if after iterating over a array you are expecting a single value then use reduce
let max_min = [12, 3, 3, 5, 66, 33,]
let max = max_min.reduce( ( result, element ) => {
    if ( result )
    {
        result = result > element ? result : element
    }
    else
    {
        result = element
    }
    return result
} )

console.log( max );   //66 

// we can give initial value to the result by passing second agrument in filter function
let sum_numbers = [1, 2, 3, 4]
let sum = sum_numbers.reduce((result, element)=> result+=element, 0)    //here 0 is the initial value of result
console.log( sum );   //10


// examples:
let Students = [
    { fname: 'sachin', lname: 'kumar', age: 21 },
    { fname: 'pradeep', lname: 'kumar', age: 20 },
    { fname: 'arun', lname: 'kumar', age: 20 },
    { fname: 'sumit', lname: 'kumar', age: 19 },
    { fname: 'naman', lname: 'kumar', age: 15},
]

// get the names off all Students that are less than 21 year

// using reduce:
let names = Students.reduce( ( result, student ) => {
    if ( student.age < 21 )
        result.unshift( student.fname )
    return result
}, [] )
console.log(names); //[ 'naman', 'sumit', 'arun', 'pradeep' ]

// using map, filter chaining
let names_1 = Students.filter( student => student.age < 21 ).map( student => student.fname )
console.log( names_1 );   //[ 'pradeep', 'arun', 'sumit', 'naman' ]


