// default and named export
// default export -> we can use it onece only
export const stringConvert = (s) => {
	return s.toUpperCase();
};

const getName = (name) => {
	console.log('Utility');
	return name + ' Kumar';
};
export default getName;

// we can also export using a single line
// export { stringConvert, getName as default}
