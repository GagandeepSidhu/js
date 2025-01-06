let obj = {
	name: 'Sachin',
	age: 31,
};

let fName = function (pages, price, publishDate) {
	console.log(
		`Name: ${this.name} and Age: ${this.age} and Other Details: [pages: ${pages}, price: ${price}, publist: ${publishDate}`,
	);
};

Function.prototype.myBind = function (...rest) {
	let funToExecute = this; //it represents the function using which we will call myBind, in this case- fName
	return function (...rest2) {
		// rest[0] is the object that will be passed, in this case it is obj
		// rest will contains the argumensts that will be pass while calling myBind
		// funToExecute.call(rest[0]);

		// because we are passing remaining agruments as array, so we need to use apply
		// funToExecute.apply(rest[0], rest.slice(1));

		funToExecute.apply(rest[0], [...rest.slice(1), ...rest2]);
	};
};

let myName = fName.myBind(obj, 200, 1000); // [obj, 200, 1000] => rest parameter

// ['2021-07-01] => rest2 parameter
myName('2021-07-01'); //Name: Sachin and Age: 31 and Other Details: [pages: 200, price: 1000, publist: 2021-07-01
