export function cleanString(str) {
	return typeof str !== 'string' ? '' : str.replace(/\s/g, '');
}
