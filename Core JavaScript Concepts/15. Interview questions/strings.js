function question1() {
	let s = new String('abc');
	console.log(s);

	let first = 'sachin';
	let last = 'kumar';
	console.log`my name ${first} and ${last}`;
	//op: [ 'my name ', ' and ', '' ] sachin kumar
}

// question1();

function question2() {
	function test(string, first, second) {
		console.log(string); //[ 'my name is ', ' and ', '' ]
		console.log(first); //sachin
		console.log(second); //kumar
	}

	test`my name is ${'sachin'} and ${'kumar'}`;
}

// question2();

function question3() {
	//strings are immutable
	let s = 'abc';
	s[0] = 'z';
	console.log(s); //abc

	let s1 = s.concat('def123def');
	console.log(s1);

	console.log(s1.indexOf('ab'), s1.indexOf('fj'));
	console.log(s1.lastIndexOf('d'));
	console.log('abcd'.startsWith('ab'), 'abcd'.startsWith('cd'));
	console.log('abcd'.endsWith('ab'), 'abcd'.endsWith('cd'));

	// console.log('abcde'.substring(1, 3)); //second argument is (last index + 1)
	// console.log('abcde'.substr(2, 1)); //second argument is length

	console.log('abcde'.slice(0, -3)); //ab
	//  0   1   2   3   4
	// -5  -4  -3  -2  -1
	//  a   b   c   d   e

	console.log(String.fromCharCode(65)); //A

	console.log('abc'.localeCompare('abc'), 'abc'.localeCompare('a')); //0 1
	console.log('abc'.localeCompare('bc')); //-1

	console.log('abc'.includes('ab')); //true

	//convert a number to binary string
	let a = 9;
	console.log(a.toString(2)); //1001
}

question3();
