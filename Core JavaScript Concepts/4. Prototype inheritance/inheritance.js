function q1() {
	class Person {
		name = 'sachin';
		display() {
			console.log(this.name);
		}
	}

	Person.name = 'pradeep';
	Person.age = 12;
	Person.display = function () {
		console.log(this.name, this.age);
	};

	// we can not override name property
	Person.display(); //Person 12

	let person1 = new Person();

	// we can not use properties that defined on Person object
	// we can only access properties that are present inside class
	console.log(person1.age); //undefined
}

q1();

function q2() {
	function Person(name, age) {
		this.name = name || 'John';
		this.age = age || 24;
		this.displayName = function () {
			console.log(this.name);
		};
	}

	Person.name = 'John123';
	Person.displayName = function () {
		console.log(this.name);
	};

	var person1 = new Person('John');

	person1.displayName();
	Person.displayName();

	var employeeId = 'aq123';

	function Employee() {
		this.employeeId = 'bq1uy';
	}

	console.log(new Employee().employeeId);

	Employee.prototype.employeeId = 'kj182';
	Employee.prototype.JobId = '1BJKSJ';

	console.log(new Employee().JobId);
	console.log(new Employee().employeeId);
}
