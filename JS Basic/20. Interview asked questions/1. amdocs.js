// Question 1 ------------------------
function func1() {
	setTimeout(() => {
		console.log(x);
		console.log(y);
	}, 3000);

	(function () {
		console.log(y);
	})();

	var x = 2;
	let y = 12;
}
// func1();

// Question 2 ----------------------------
const b = {
	name: 'Vivek',
	f: function () {
		var self = this;

		console.log(this.name);

		(function () {
			console.log(this.name);
			console.log(self.name);
		})();
	},
};

b.f();

// Question 3 ----------------------------------------
var x = 23;
(function () {
	var x = 43;
	console.log(x); //43
	(function random() {
		x++;
		console.log(x); //NaN
		var x = 21;
	})();
})();
