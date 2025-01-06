function question4() {
	console.log('start');

	function fn() {
		new Promise((resolve, reject) => {
			console.log(1);
			resolve('success');
		});
	}

	// TypeError: Cannot read properties of undefined (reading 'then')
	// becuase fn() is not returning any promise so can't use then and catch
	fn()
		.then((res) => {
			console.log(res);
		})
		.catch((err) => console.log(err));

	console.log('end');
}

question4();
