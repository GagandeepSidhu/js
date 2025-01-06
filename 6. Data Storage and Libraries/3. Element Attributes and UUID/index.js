let check = document.createElement( 'input' );

// set attribute
check.setAttribute( 'type', 'checkbox' );
check.setAttribute( 'value', 'sachin' );
document.querySelector( 'body' ).appendChild( check );

check.addEventListener( 'change', e => {

    console.log(check.checked);

    // get attribute
    console.log( e.target.getAttribute( 'value' ) );
    
    // remove attribute
    e.target.removeAttribute( 'value' );
})

// useing third party library
// search github uuid
// copy link to include in it: (browser rady version)
// <script src="https://unpkg.com/uuid@latest/dist/umd/uuidv4.min.js"></script>
// include it into html file

console.log( uuidv4() );  //it  will generate unique id like : d0541308-4c71-46be-b455-f66266cce123
// we can use it to set a unique id for every element of array and can use to delete it, as we need to 
// identify correctly, which element need to be deleted


