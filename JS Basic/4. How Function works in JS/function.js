var x = 10
fun1()  //20
fun2()  //30
console.log(x); //10

function fun1 () {
    var x = 20
    console.log(x);
}

function fun2 () {
    var x = 30
    console.log(x);
}

{
    var x = 60;
}

console.log(x);