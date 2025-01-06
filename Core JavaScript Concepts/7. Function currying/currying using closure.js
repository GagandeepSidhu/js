let multiply = ( x ) =>
{
    return ( y ) => {
        console.log(x*y);
    }
}

let multiplyBy2 = multiply( 2 )
multiplyBy2( 10 )   //20


