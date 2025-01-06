// location object is provided by browser like document, localStorage object
// location has many properties and method that we can use
// location.assign  , pass a link address, it will work similar to <a> tag
console.log( location );


// location.assign( 'https://www.google.com' );  // it will take use to google page

//  we can also give relative path of the files that we created in this project

// to send the user information in the user we can use like this:
// 'link#info', example 'https://www.google.com#id'
location.assign( './index2.html#myname' );

// to access the #myname in the render page( index2.html )
// use: location.hash()