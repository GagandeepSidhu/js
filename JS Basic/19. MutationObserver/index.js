let element = document.querySelector('.summary');

let observer = new MutationObserver((mutations) => {
	console.log(mutations);
	console.log('it is happening');

	mutations.forEach((mutation) => {
		if (mutation.type === 'attributes') {
			let attrName = mutation.attributeName;
			let changes = mutation.target.getAttribute(attrName);
			let oldValue = mutation.oldValue;
			console.log('old value of ' + attrName + ' is: ' + oldValue);
			console.log(
				`attribute changed new value for attribute ${attrName} is ${changes} `,
			);
		} else if (mutation.type === 'childList') {
			// print text of removed elements
			let removedElements = mutation.removedNodes;
			if (removedElements)
				removedElements.forEach((elem) => {
					console.log(elem.innerHTML);
				});

			// print text of added elements
			let addedElements = mutation.addedNodes;
			if (addedElements)
				addedElements.forEach((elem) => {
					console.log(elem.innerHTML);
				});
		}
	});
});

// if we want to observe change if a attribute is appened or removed from element then use below option object
let options = {
	attributes: true, // observe only when attributes changes(like: id, class, name, ...)
	attributeFilter: ['class'], // only observe change to the attributes provided in the array
	attributeOldValue: true, // it will give old value of attribute
};

// if we want to observe change if a node is appened or removed from parent then use below option object
options = {
	childList: true,
};
observer.observe(element, options);

setTimeout(() => {
	// for attribute change observation
	element.setAttribute('id', 'list'); //this will not be observed by observer as it is not proveded in arrtibuteFilter
	element.setAttribute('class', 'previoussummary'); //this will be observed by observer
	element.setAttribute('class', 'newsummary'); //this will be observed by observer

	// for chaild appent or remove change observation
	element.removeChild(element.firstElementChild);
	let newLi = document.createElement('li');
	newLi.textContent = 'This is new li element added';
	element.appendChild(newLi);
}, 1000);

// observing the text changes
let nameElement = document.querySelector('.name');
let textObserver = new MutationObserver((mutations) => {
	console.log(mutations);
	mutations.forEach((mutation) => {
		if (
			mutation.addedNodes.length === 1 &&
			mutation.addedNodes[0].nodeType === Node.TEXT_NODE &&
			mutation.removedNodes.length === 1 &&
			mutation.removedNodes[0].nodeType === Node.TEXT_NODE
		) {
			console.log('Value of Node.TEXT_NODE: ' + Node.TEXT_NODE);
			console.log(
				'Text changed from ' +
					mutation.removedNodes[0].nodeValue +
					' to ' +
					mutation.addedNodes[0].nodeValue,
			);
		}
	});
});
let textOptions = {
	childList: true,
};
textObserver.observe(nameElement, textOptions);
setTimeout(() => {
	// observe changes in text
	nameElement.textContent = 'Pradeep';
	nameElement.innerHTML = 'Naman'; // if we use tag in innerHtml then observer will not work
}, 1000);

// to observer the actual text change like if text inside p tag is sachin then direct observe change in Sachin
// use textObserver.observe(nameElement.childNodes[0]) and textOptions = {characterData: true, characterOldValue: true}
console.log('text is: ', nameElement.childNodes[0]); //text is: 'Sachin
// we can use nameElement.firstChild instead of nameElement.childNodes[0]
// change text in setTimeout like this nameElement.firstChild.nodeValue = 'some text'
// to access value inside observer use mutation.target.nodeValue and mutation.oldValue

// if we want to listen the change for a parent and as well it's children then use below
// options = {subtree: true, attributes: true} and now it will be same as the attribute observer but for all
// childs as weel along with parent

observer.disconnect(); // to stop observe changes
