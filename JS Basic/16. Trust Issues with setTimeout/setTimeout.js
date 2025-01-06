/*

If setTimeout is set for 5sec but lines after that takes 10 sec to execute then in this case
setTimeout will execute call back function after 10 sec, not after 5 sec.

*/

{
    console.log( 'Start' );
    setTimeout( () => {
        console.log( 'setTime out' );
    }, 5000 );

    let start = new Date()
    let end = start

    // blocking the main thread for 10 seconds
    while ( ( end.getTime() - start.getTime() ) <= 10000 )
    {
        end = new Date()
    }
    console.log('ENd ');
}

// output 
// Start     - immediately
// ENd       - after 10 seconds
// setTime out  - at the last 


{
    console.log( 'Example of setTimeout with 0 second' );
    setTimeout( () => {
        console.log('0 sec completed');
    } )
    console.log('Example finished');
}
// output
// Example of setTimeout with 0 second
// Example finished
// 0 sec completed