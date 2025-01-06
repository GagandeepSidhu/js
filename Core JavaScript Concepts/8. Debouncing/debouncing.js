/*
Debouncing: A technique which helps to reduce unnecessary API calls by calling the function only if the 
            time inverval between two calls is greater than the provided delay.

*/

let count = 0;
let getData = () => {
	console.log('Fetching data ' + count++);
};

let debounce = (callBack, delay) => {
	let timer;
	return function () {
		let context = this,
			args = arguments;
		console.log(this, args);
		clearTimeout(timer);
		timer = setTimeout(() => {
			callBack.apply(context, arguments);
		}, delay);
	};
};
let betterGetData = debounce(getData, 3000);
