let arr = [2, 3];
console.log(arr.__proto__); //an object that will be same as Array.prototype
console.log(arr.__proto__.__proto__); //an object that will be same as Object.prototype
console.log(arr.__proto__.__proto__.__proto__); //null

console.log(arr.__proto__ === Array.prototype); //true
console.log(arr.__proto__.__proto__ === Object.prototype); //true

let obj = {
	name: 'sachin',
};

console.log(obj.__proto__); //an object that will be same as Object.prototype
console.log(obj.__proto__.__proto__); //null

console.log(obj.__proto__ === Object.prototype); //true
console.log(obj.__proto__ === Object.__proto__); //false

function fun() {}
console.log(fun.__proto__); // a function
console.log(fun.__proto__.__proto__); //an object
console.log(fun.__proto__.__proto__.__proto__); //null
console.log(fun.__proto__ === Function.prototype); //true
console.log(fun.__proto__ === Function.__proto__); //true

console.log(fun.__proto__ === Object.prototype); //false
console.log(fun.__proto__.__proto__ === Object.prototype); //true

// -----------------------------
let obj1 = {
	name: 'sachin',
	age: 35,
	getName: () => {
		return this.name;
	},
	setName: (name) => {
		this.name = name;
	},
	gName: function () {
		return this.name;
	},
	sName: function (name) {
		this.name = name;
	},
	getDetails: function () {
		return this.name + ' ' + this.age;
	},
};

let obj2 = {
	name: 'Batman',
};

obj1.setName('pradeep');
console.log(obj1); // { name: 'sachin', getName: [Function: getName], setName: [Function: setName] }
console.log(obj1.getName()); //pradeep

obj1.sName('John');
console.log(obj1);
//{
//   name: 'John',
//   getName: [Function: getName],
//   setName: [Function: setName],
//   gName: [Function: gName],
//   sName: [Function: sName]
// }
// ------------------------------

obj2.__proto__ = obj1;
console.log(obj2.name); //batman
console.log(obj2.age); //35
console.log(obj2.getDetails()); //Batman 35

console.log(obj1.getName(), obj1.gName());
console.log(obj1.name);
