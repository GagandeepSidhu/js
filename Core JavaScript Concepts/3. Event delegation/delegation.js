// Delegation -> instead of attaching addEventListener to every child element,
// we will add event listener to only parent

// example 1
document.querySelector('#category').addEventListener('click', (e) => {
	console.log(e.target.tagName); // LI

	// condition to check that it should redirect only if tag is 'LI'
	if (e.target.tagName == 'LI') {
		location.href = '/' + e.target.id;
		// it will redirect to the url like /laprops , /cameras or /shooes based on the id of targeted element
	}
});

// example 2
document.querySelector('#form').addEventListener('keyup', (e) => {
	let classText = e.target.getAttribute('class');
	if (classText && classText.toLowerCase().includes('uppercase')) {
		document.querySelector('#' + e.target.id).value =
			e.target.value.toUpperCase();
	}
});
