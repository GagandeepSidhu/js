let book = {
    title: 'Ramayan',
    auther: 'Balmiki',
    page: 1000
}

let fun1 = function ( obj1 ) {
    obj1.page = 1
    console.log(obj1);
}

fun1( book )    // { title: 'Ramayan', auther: 'Balmiki', page: 1 }
console.log( book );  //{ title: 'Ramayan', auther: 'Balmiki', page: 1 }
// output is same as they are refring to the same object

let fun2 = function ( obj2 ) {
    obj2 = {}
    console.log(obj2);
}

fun2( book )    //{}
console.log( book );  //{ title: 'Ramayan', auther: 'Balmiki', page: 1 }
// output is different as obj2 is refring to the different new object 