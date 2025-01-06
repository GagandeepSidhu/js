class A {

}

var a1 = new A()
console.log( a1 );    //A {}

class Person{
    constructor( name, age ) {
        this.name = name
        this.age = age
        this.skills = 'Play Cricket'
        console.log('This is Peroson class');
    }
    // now we need not to use ',' to seperate functions, it will give error
    // no need to use function keyword
    getName () {
        return this.name
    }
}

let p1 = new Person( 'Sachin', 21 )
console.log( p1 );    //Person { name: 'Sachin', age: 21, skills: 'Play Cricket' }
console.log( p1.getName() );  //Sachin

Person.prototype.setName = function ( newName ) {
    this.name = newName
}

// will now show setName in object as it is a part of prototype
console.log( p1 );    //Person { name: 'Sachin', age: 21, skills: 'Play Cricket' }

p1.setName( 'Pradeep' )
console.log(p1);    //Person { name: 'Pradeep', age: 21, skills: 'Play Cricket' }


// sub class or child class

class B extends Person {

}

// it is working same as Person class, 
// if we don't define a constructor or function then it uses parent one
let b1 = new B( 'John', 50 )    //B { name: 'John', age: 50, skills: 'Play Cricket' }
console.log(b1);


// define constructor and other methods in child class
class Employee extends Person {
    constructor( name, age, salary )
    {
        // if we don't call parent constructor then will get error
        super( name, age )
        this.salary = salary
    }
    // overriding
    getName () {
        // we can use parent class method as val inside child class method
        return 'Employee name is ' + this.getName()
    }

    // define owe methods
    getSalary () {
        return this.salary
    }
}

let e1 = new Employee()
console.log( e1 );
// output
// Employee {
//   name: undefined,
//   age: undefined,
//   skills: 'Play Cricket',
//   salary: undefined
// }

e1.setName( 'Prakesh' )
console.log( e1 );
// output
// Employee {
//   name: 'Prakesh',
//   age: undefined,
//   skills: 'Play Cricket',
//   salary: undefined
// }


// creates an empty object
let obj = Object.create(new Person('Hari', 34))
console.log( obj );   //Person {}

// getter and setter methods for object
let book = {
    names: [],
    get name () {
        return this._name
    },
    set name ( newName ) {
        this._name = newName.trim()
        this.names.unshift(this._name)
    }
}

book.name = 'Khali'
console.log( book.name ); //Khali
console.log( book );  //{ names: [ 'Khali' ], name: [Getter/Setter], _name: 'Khali' }

// getter and setter for class

class Bank {
    constructor( account)
    {
        this.account = account
        this._amount = 0
    }
    get amount () {
        return this._amount
    }
    set amount ( newAmount ) {
        this._amount = newAmount
    }
}

let b2 = new Bank( 12345 )
console.log( b2 );  //Bank { account: 12345, _amount: 0 }

b2.amount = 200
console.log( b2.amount ); //200

// console.log(b2.amount());    //give error: amount is not a function