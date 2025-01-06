// window is also a global variable provided by browser
// it has many properties like innerHeight, innerWidth
console.log( window );
console.log( window.innerHeight, window.innerWidth );

console.log( window.document === document );  // true  because both are same, 
// we can access document directly or usng window.document

// to add a eventListener for click (anywhere on the page if get clicked then this eventListener will trigger)
window.addEventListener( 'click', e => {
    console.log( 'clicked' );
    // console.log( window.screenX );
} )

localStorage.setItem( 'name', 'sachin' );

// suppose we have duplicate a page, now we have same page two times
// now we update some localStorage value on page2 then page1 will have the same previous value
// to update it we need to reload the page1 
// but we don't want that instead of it we want it happen automatically
// so use storage event listener on window object:
// note: storage eventListener always exucute other page, not on the page on which we made changes
window.addEventListener( 'storage', e => {
    console.log( e );
    // e has key = 'name', oldValue = old value stored in localStorage, newValue = changed value in localStorage
    if(e.key === 'name')
        document.getElementById( 'name' ).value = e.newValue;
} )

let paragraph = document.createElement( 'p' );
paragraph.textContent = localStorage.getItem( 'name' );

document.querySelector( 'body' ).appendChild( paragraph );

document.getElementById( 'btn' ).addEventListener( 'click', e => {
    localStorage.setItem( 'name', document.getElementById( 'name' ).value );
})