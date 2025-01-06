const Pen = function () {
    
}

let p1 = Pen();
console.log( p1 );  //undefined

let p2 = new Pen();
console.log( p2 );    //Pen {}

// it means new keywork create a new object (empty object) into the memory and return it reference
// we can refer to this empty object using this keyword, and can add new properties to it

let Persion = function () {
    console.log(this);  //Persion {}
}

let p3 = new Persion();
console.log( p3 );    //Persion {}

// adding new values to this object
let Student = function (age) {
    this.name = 'Sachin'
    this.age = age

    // return {}   we can return a object but it is not that we want 
}

let p4 = new Student( 23 );
console.log( p4 );    //Student { name: 'Sachin', age: 23 }

