//////////////////////////////////////////////////////////////////////////
// CRUD (create, read, update, delete) operation on localStorage
    // 1. to store the data
    // we can store only strings in localStorage
    localStorage.setItem( 'name', "Sachin" );

    // 2. to get the data stored in localstorage
    let name = localStorage.getItem( 'name' )
    console.log(name);

    // 3. to remove the data from localstorage
    localStorage.removeItem( 'name' );

    // 4. to remove all storage from localStorage
    localStorage.clear();
////////////////////////////////////////////////////////////////////////    



let myArray = [];

document.getElementById( 'form' ).addEventListener( 'submit', e => {
    e.preventDefault();
    myArray.push( { title: e.target.title.value, description: e.target.description.value } );
    
    // save array to localStorage by converting array into string
    let myArrayString = JSON.stringify( myArray );
    localStorage.setItem( 'myArray', myArrayString );

    // get the data back into string formate
    let getMyArray = localStorage.getItem( 'myArray' );
    console.log( getMyArray );
    
    // convert string to original object
    let myArrayOriginal = JSON.parse( getMyArray );
    console.log( myArrayOriginal );
    
    myArrayOriginal.forEach(item=>{console.log(item.title, item.description);})
} );

// Note: if we create more than one js file then they will share the same memory, means
// all values will be accessible to the other one but order of including the file will have impact