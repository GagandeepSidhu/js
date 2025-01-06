//creating promisePolyfill
function question12() {
	function PromisePolyFill(executer) {
		let onResolve, onReject;

		// to handle synchronos promises
		// bcause .then method will be called later than executer method
		// so onResolve, onReject will not be initialized by that time
		// so we need to handle those cases as well
		let isCalled = false,
			value,
			isFullfilled = false;

		this.resolve = function (val) {
			isFullfilled = true;
			value = val;
			if (typeof onReject === 'function') {
				onResolve(val);
				isCalled = true;
			}
		};

		this.reject = function (val) {
			isFullfilled = true;
			value = val;
			if (typeof onReject === 'function') {
				onReject(val);
				isCalled = true;
			}
		};

		this.then = function (cb) {
			onResolve = cb;
			if (isFullfilled && !isCalled) {
				onResolve(value);
				isCalled = true;
			}
			return this;
		};
		this.catch = function (cb) {
			onReject = cb;

			if (isFullfilled && !isCalled) {
				onReject(value);
				isCalled = true;
			}
			return this;
		};

		try {
			executer(this.resolve, this.reject);
		} catch (error) {
			this.reject(error);
		}
	}

	/// Promise.resolve
	PromisePolyFill.resolve = (val) =>
		new PromisePolyFill((resolve, reject) => resolve(val));

	/// Promise.reject
	PromisePolyFill.reject = (val) =>
		new PromisePolyFill((resolve, reject) => reject(val));

	let promPolyFill = new PromisePolyFill((resolve, reject) => {
		// setTimeout(() => {
		// 	if (Math.random() > 0.5) {
		// 		resolve('Promise polyfill resolved');
		// 	} else {
		// 		reject({ msg: 'Error occured' });
		// 	}
		// }, 1000);

		if (Math.random() > 0.5) {
			resolve('Promise polyfill resolved');
		} else {
			reject({ msg: 'Error occured' });
		}
	});

	promPolyFill.then((val) => console.log(val)).catch((err) => console.log(err));
	// .then((val) => console.log('Second', val)); //can use second time for our implementation
}

question12();
