let Person = function (name) {
	this.name = name;
};

// if we want to new property and it should be availavle to every object
// like functions, they need not be have in every object, instead of it we can define function
// into a place where object can access these functions
// we can do this using prototyping

// here prototype is a object,
Person.prototype.setName = function (newName) {
	this.name = newName;
};

// to access setName we need not to use prototype object, we can do it as we normally do using objectReference.setName

let p1 = new Person('Kumar');
let p2 = new Person('John2');
console.log(p1); //Person { name: 'Kumar' }
// we can see the setName is not showing in object properties, because it is available in a sperical
// object called prototype, we can see it using browser console -> __proto__:

p1.setName('Pradeep');
console.log(p1); //Person { name: 'Pradeep' }

console.log(p1.__proto__); //{ setName: [Function (anonymous)] }

// instead of using function name we can use instance variable to create new prototype properties
Person.prototype.getName = function () {
	return this.name;
};

console.log(p2.getName()); //John2

// we can define new property for prototype only using function name, not using the instance

// shadowing
p2.getName = function () {
	return 'getName function hidden';
};

console.log(p2.getName()); //getName function hidden

// order to get a property -> first it will check all instance properties, if not found
// then go to prototype object properties
