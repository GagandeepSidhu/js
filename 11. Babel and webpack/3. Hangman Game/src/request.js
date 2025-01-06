const getPuzzleWord = async (wordCount) => {
	let response = await fetch(
		`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`,
	);
	if (response.status === 200) {
		return response.json();
	} else {
		throw new Error('Puzzle Error : Unable to fetch puzzle word');
	}
};
export default getPuzzleWord;
