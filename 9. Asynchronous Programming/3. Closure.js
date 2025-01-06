// Closure is the combination of function and it's 
// Lexical scope( what are the variables that are accessible to the function)

function createCounter () {
    let count = 0
    return {
        increment(){
            count++
        },
        decrement(){
            count--
        },
        getCount(){
            return count
        }
    }
}

// counter is a object, with the functions that have access to count variable 
// this is closure 
let counter = createCounter()
counter.increment()
console.log( counter.getCount() );  //1
counter.decrement()
counter.decrement()
console.log( counter.getCount() );    //-1


const adder = ( a ) => {
    return ( b ) => {
        return a + b
    }
}

let add10 = adder( 10 )
console.log( add10( -1 ) ); //9
console.log( add10( 20 ) ); //30



