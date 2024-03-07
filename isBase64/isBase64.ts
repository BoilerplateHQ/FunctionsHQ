/**
 * Checks if a string is a valid base64 encoded string.
 *
 * @param str - The string to be checked.
 * @returns A boolean indicating whether the string is base64 encoded or not.
 */
export function isBase64(str: string): boolean {
	const base64Regex =
		/^(?:[A-Za-z0-9+\/]{4})*?(?:[A-Za-z0-9+\/]{2}(?:==)?|[A-Za-z0-9+\/]{3}=?)?$/;
	return base64Regex.test(str);
}
