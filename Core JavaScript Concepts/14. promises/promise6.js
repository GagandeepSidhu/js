function question5() {
	console.log('start');

	let promise1 = new Promise((resolve, reject) => {
		reject('Some error');
	});

	promise1
		.then((res) => {
			console.log(res);
		})
		.then(() => {
			console.log('success2');
		})
		.then(() => {
			console.log('success3');
		})
		.catch((err) => console.log(err)) //this will execute
		.then((val) => {
			console.log(val, 'success4'); //this will execute
		});

	console.log('end');
}

question5();
