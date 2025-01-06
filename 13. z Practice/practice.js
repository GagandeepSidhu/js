let Person = {
	name: 'sachin',
	address: {
		personal: {
			city: 'Bulandshahr',
			area: 'Meerpur',
		},
		office: {
			city: 'Noida',
			area: 'Sector-135',
		},
	},
};

function A(key, obj) {
	let ans = {};
    if ( typeof obj === 'object' )
    {
        for ( let k in obj )
        {
            return 
        }
    } else
    {
        return { ...ans, [key]: obj };
    }
	return ans;
}

let m = A('user', Person);
console.log(m);
