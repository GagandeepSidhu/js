let Person = {
	name: 'sachin',
	address: {
		personal: {
			city: 'Bulandshahr',
			area: 'Meerpur',
		},
		office: {
			city: 'Noida',
			area: 'Sector-135',
		},
	},
};

// Write a function that takes Person object and return a object like below:
// {
//     user_name: 'Sachin',
//     user_address_personal_city: 'Bulandshahr',
//     user_address_personal_area: 'Meerpur',
//     user_address_office_city: 'Noida',
//     user_address_office_area:'Sector-135'
// }

let magic = (obj, key) => {
	let newObject = {};
	if (typeof obj === 'object') {
		// for(let objKey in obj)    //we can also use it
		for (let objKey of Object.keys(obj)) {
			newObject = { ...newObject, ...magic(obj[objKey], key + '_' + objKey) };
		}
	} else {
		newObject[key] = obj;
	}
	return newObject;
};

let newObject = magic(Person, 'user');
console.log(typeof Person === 'object'); //true
console.log(newObject);
// {
//   user_name: 'sachin',
//   user_address_personal_city: 'Bulandshahr',
//   user_address_personal_area: 'Meerpur',
//   user_address_office_city: 'Noida',
//   user_address_office_area: 'Sector-135'
// }

for (let key in Person) {
	console.log(key);
}
// name
// address

console.log(typeof []); //object
let numbers = [10, 29, 30];
for (let num in numbers) {
	console.log(num); // 0 1 2 (it will think index as key)
}

// typeof of array
console.log(Object.prototype.toString.call([])); //[object Array]
console.log(typeof Object.prototype.toString.call([])); //string

function checkOutput1() {
	setTimeout(() => {
		console.log(a);
		console.log(b);
	}, 1000);
	var a = 10;
	let b = 1;
}

checkOutput1();

const b = [1, 1, 2, 3, 4, 4, 5, 5, 6, 7];

let dup = new Set(b);
dup.forEach((element) => {
	console.log(element);
});
