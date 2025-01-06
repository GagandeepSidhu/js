let Book = {
	name: 'Drawing',
	auther: 'Sachin',
};

function printBook() {
	console.log(`Book Name: ${this.name}, Book Auther: ${this.auther}`);
}

//call--------------------
// call printBook for Book object but Book object don't have printBook function
printBook.call(Book); //Book Name: Drawing, Book Auther: Sachin

// calling with others parameters as well
function printBookWithPrice(price) {
	console.log(
		`Book Name: ${this.name}, Book Auther: ${this.auther}, Book Price: ${price}`,
	);
}

printBookWithPrice.call(Book, 100); //Book Name: Drawing, Book Auther: Sachin, Book Price: 100

//apply----------------
// apply method is same as call method only difference is we pass other argument as an array in apply method
printBookWithPrice.apply(Book, [200]); //Book Name: Drawing, Book Auther: Sachin, Book Price: 200

// bind----------------
// bind is same as call method, but instead of executing the function, it returns a function reference
// we can assign returned method to a varible and can use it later
let bookDetails = printBookWithPrice.bind(Book, 300);

//here it will not consider the 400 argument as we already provided in the above statement
bookDetails(400); //Book Name: Drawing, Book Auther: Sachin, Book Price: 300

// we have not passed any argument after Book, so we can pass price argument while calling
let bd = printBookWithPrice.bind(Book);
bd(900); //Book Name: Drawing, Book Auther: Sachin, Book Price: 900
