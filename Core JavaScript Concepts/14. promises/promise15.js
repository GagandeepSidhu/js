//event loop visualizer
//www.jsv9000.app/

function question13() {
	function A(a) {
		return function (b) {
			if (b) {
				return A(a + b);
			} else {
				return a;
			}
		};
	}

	console.time('Start');
	console.log(A(6)(7)(8)());
	console.timeEnd('Start');
}
