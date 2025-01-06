// comment and uncomment then run to see what is going on


// function x () {
//     let i = 1
//     setTimeout( () => {
//         console.log(i);
//     }, 1000 )
//     console.log('hello');
// }
// x()
// // output
// // hello
// // 1

// // how to print 1 after 1 sec, 2 after 2 sec, 3 after 3 sec, .... 
// function y () {
//     for ( var i = 1; i <= 5; i++ )
//     {
//         setTimeout( () => {
//             console.log(i);
//         }, i * 1000)
//     }
// }
// y()
// output: below output is printed because what a closeure is formed then it remembers the refrence of 
// variables, not the value of variables that it has access to 
// 6
// 6
// 6
// 6
// 6

// so it can be done using let keyword as it has block scoping 
// function z () {
//     for ( let i = 1; i <= 5; i++ )
//     {
//         setTimeout( () => {
//             console.log(i);
//         }, i * 1000)
//     }
// }
// z()
// output
// 1
// 2
// 3
// 4
// 5

// without let keyword, 
// bacause var has function scoping so we can use a function 
function A () {
    for ( var i = 1; i <= 5; i++ )
    {
        function f(i) {
            setTimeout( () => {
                console.log(i);
            }, i * 1000)
        }
        f(i)
    }
}
A()
// output
// 1
// 2
// 3
// 4
// 5