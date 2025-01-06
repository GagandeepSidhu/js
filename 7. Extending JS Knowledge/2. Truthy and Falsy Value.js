// Falsy values: false, empty string, 0, null, undefined, math error,
// every thing else (other than the falsy values) is truthy 

if ( {} )
{
    console.log('True');  // will execute
}
else
{
    console.log('False');
}

if ( false || 0 || null || undefined || ''  )
    console.log( "Truthy" );
else
    console.log( 'Falsy' );   // Falsy   , it will execute
    
if ( 1 / 0 ) // it is truethy
    console.log( '1/0 is true' ); // it will be execute
else
    console.log( '1/0 is false' );
    
console.log(1/0);   //Infinity