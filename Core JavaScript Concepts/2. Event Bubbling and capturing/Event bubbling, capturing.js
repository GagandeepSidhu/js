// event Bubbling Out: on an event listener when calling of functions propogates 
//                 from child to parent then it is known bubbling

// event capturing: on an event listener when calling of functions propogates 
//                  from parent to child then it is known capturing, also known as trickling


// we can also provide third argument in addEventListener (it will be true or false)
// flase => bubbing will be used to resolve event
// true => capturing will be used to resolve event
// by default third argument is false, means it use bubbling 

// bubbling
document.querySelector( '#Bgrandparent' ).addEventListener( 'click', e => {
    console.log('Bubbling GrandParent clicked');
} )

document.querySelector( '#Bparent' ).addEventListener( 'click', e => {
    console.log('Bubbling Parent clicked');
} )

document.querySelector( '#Bchild' ).addEventListener( 'click', e => {
    console.log('Bubbling Child clicked');
} )

// output - when click on child
// Bubbling Child clicked
// Bubbling Parent clicked
// Bubbling GrandParent clicked


// capturing
document.querySelector( '#Cgrandparent' ).addEventListener( 'click', e => {
    console.log('Capturing GrandParen clicked');
}, true)

document.querySelector( '#Cparent' ).addEventListener( 'click', e => {
    console.log('Capturing Parent clicked');
}, true )

document.querySelector( '#Cchild' ).addEventListener( 'click', e => {
    console.log('Capturing Child clicked');
}, true )
// output- when clicking on child
// Capturing GrandParen clicked
// Capturing Parent clicked
// Capturing Child clicked



// mixing 
// Note: According to W3School -> first capturing happens then bubbling happens
document.querySelector( '#Mgrandparent' ).addEventListener( 'click', e => {
    console.log('Mixing GrandParen clicked');
}, true)    //capturing

document.querySelector( '#Mparent' ).addEventListener( 'click', e => {
    console.log('Mixing Parent clicked');
}, false )  //bubbling

document.querySelector( '#Mchild' ).addEventListener( 'click', e => {
    console.log('Mixing Child clicked');
}, true )   //capturing
// output- click on child (as first capturing then bubbling happens so)
// Mixing GrandParen clicked
// Mixing Child clicked
// Mixing Parent clicked


// stoping bubbling and capturing
document.querySelector( '#SPgrandparent' ).addEventListener( 'click', e => {
    console.log('Stop GrandParen clicked');
}, true)    //capturing

document.querySelector( '#SPparent' ).addEventListener( 'click', e => {
    console.log( 'Stop Parent clicked' );
    e.stopPropagation()
}, true )  //bubbling

document.querySelector( '#SPchild' ).addEventListener( 'click', e => {
    console.log('Stop Child clicked');
}, true )   //capturing

// output - in case of bubbling (click on child)
// Stop Child clicked
// Stop Parent clicked

// output - in case of capturing
// Stop GrandParen clicked
// Stop Parent clicked