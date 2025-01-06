//Question write below code with async await
function question10(url) {
	return fetch(url).then((res) => {
		if (res.status === 200) {
			return res.json();
		} else {
			throw new Error(res.status);
		}
	});
}

async function answer10(url) {
	const response = await fetch(url);
	if (response.status === 200) {
		const json = await response.json();
		return json;
	}
	throw new Error(res.status);
}

question10('https://fakeurl.com/no-such-user.json').catch((err) => {
	console.log(err);
});
