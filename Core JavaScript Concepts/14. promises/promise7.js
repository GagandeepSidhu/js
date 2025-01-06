function question6() {
	console.log('start');

	let promise1 = new Promise((resolve, reject) => {
		resolve('Success 1');
	});

	promise1
		.then((res) => {
			console.log(res); //will execute
		})
		.then(() => {
			console.log('success2'); //this will execute
		})
		.then(() => {
			console.log('success3');
		})
		.catch((err) => console.log(err)) //this will execute
		.then(() => {
			console.log('success4'); //this will execute
		});

	console.log('end');
}

question6();
