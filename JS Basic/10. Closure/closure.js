/*

Closure: It means a function bind together with it's lexical environment
It is the combination of a function and it's lexical environment(bundeled togegether) 
and it remembers(using reference) the values of variables event if it is called outside the inner function

Advantages of Closure:
1. used in function currying
2. used in module pattern
3. used in some high order functions memoizations and ones 
4. used in data hiding and encapsulation

Disadvantage of Closure:
1. over memeory consupmtions
*/


function outer () {
    let a = 10
    function inner () {
        console.log(10);
    }
    return inner    
}

outer()()   //10

let fun = outer()
fun()   //10


function A () {
    function B () {
        console.log(a); //it is accessing the variable a, so closure is created 
    }
    let a = 10
    return B //// it is not necessary to return a function to make a closure as it has already created
}

A()()   //10

function Play (n) {
    function Cricket () {
        console.log(a, n);
    }
    let a = 10
    return Cricket
}

Play( 35 )()   //10 35


// hiding and encapsulation
// problem
// now anyone can chage c variable
var c = 1
function fun1 () {
    console.log( c );
}

// solution
function Counter () {
    var count = 1
    function myCounter () {
        console.log(count++);
    }
    return myCounter
}

let counter1 = Counter()
counter1()  //1
counter1()  //2

let counter2 = Counter()
counter2()  //1


function COUNTER () {
    var count = 1
    this.increment = function(){
        console.log(++count);
    }
    this.decrement=function(){
        console.log(--count);
    }
}

let COUNTER1 = new COUNTER()

COUNTER1.increment()    //2
COUNTER1.increment()    //3
COUNTER1.increment()    //4
COUNTER1.decrement()    //3

// connection between garbage collector and closure
function Question () {
    var ans = 8, z = 9  
    function Answer () {
        debugger
        console.log(ans); // because Answer is making closure only with ans, so z will be deallocated by GC
    }
    return Answer
}

let myAnswer = Question()
// because Question has completed it's execution, so garbace collector should deallocate this memory
// but as closer is formed for this variable so it will not free the memory
// this is how closure and GC has relation
myAnswer()  //8   