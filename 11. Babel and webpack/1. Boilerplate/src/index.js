class Name {
	constructor(name) {
		this.name = name;
	}
}

debugger;
let p1 = new Name('sachin');
console.log('My class is created with person name:', p1.name);
console.log('why it is happeing, i have no idea');

import getName, { stringConvert } from './urility';

console.log(stringConvert(getName('Sachin')));

console.log(getName('PK'));
console.log('Plugin');
