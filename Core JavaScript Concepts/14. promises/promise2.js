function question1() {
	console.log('start');

	let promise1 = new Promise((resolve, reject) => {
		console.log(1);
		resolve(2);
	});

	promise1.then((res) => {
		console.log(res);
	});

	console.log('end');
}

question1();
