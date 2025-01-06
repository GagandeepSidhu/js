// First Class Function: means we can use functions as variable to pass a function or to return from a fuction
// callback function: A function that is passed to another 
// JS behave like asynchronous programming language only because of callback functions
function A ( callback ) {
    let name = 'sachin'
    callback(name)
}

A( function B (name) {
    console.log(name);
} )
// output
// sachin

setTimeout( function callback () {
    console.log('this is asynchronous way to execute program');
}, 3000 )
// this is asynchronous way to execute program


// how to count how many times button is clicked wothout using global variable 
let button = document.createElement( 'button' );
button.textContent = 'Click Me'
document.querySelector( 'body' ).appendChild( button );

function makeClosure () {
    var count = 0;
    button.addEventListener( 'click', function callback ( e ) {
        console.log('Button click ' + ++count);
    })
}
makeClosure()


// garbage collection and remove event listeners
// event listeners are heavey because they do not let gabrage collection clear the closures as 
// it is not certain that an event can occur or not.

// so we should remove event listener when we are sure that we are no longer use it
// remove event listener:
// element.removeEventListener(event, listener, useCapture)
// Parameters: It accepts three parameters which are specified below-

// event: It is a string which describes the name of event that has to be remove.
// listener: It is the function of the event handler to remove.
// useCapture: It is an optional parameter. By default it is Boolean value false 
// which specifies the removal of event handler from the bubbling phase and if it 
// is true than the removeEventListener() method removes the event handler from the capturing phase.