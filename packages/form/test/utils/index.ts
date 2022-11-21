export function cleanString(str: string) {
	return typeof str !== 'string' ? '' : str.replace(/\s/g, '');
}
