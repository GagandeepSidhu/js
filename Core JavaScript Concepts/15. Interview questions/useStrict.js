'use strict';
console.log(this); //window

function abc() {
	// instrict mode this will be undefined if we call abc method without .
	console.log('abc', this); //window (if now strict mode)
}

abc();

console.log(process);
