console.log(this);

let book = {
	title: 'GOT',
	language: 'English',
	pages: 7,
	getPage: function () {
		return this.pages; // we need to use this keyword, this refers to the current object
	},
};

console.log(book.getPage());

let animal = {
	name: 'Lion',
	getName: () => {
		console.log(this);
		return this.name;
	},
	getAnimalName: () => name,
	getAnimalNameFunction: function () {
		return this.name;
	},
	getAnimalName2: function () {
		return name;
	},
};

console.log(animal.getName()); //undefined
console.log(animal.getAnimalNameFunction()); //lion
console.log(animal.getAnimalName()); // name is not defined
console.log(animal.getAnimalName2()); // name is not defined
