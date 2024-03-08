/**
 * Copies the given string to the clipboard.
 * @param str - The string to be copied.
 */
export function copyToClipboard(str: string | undefined) {
	if (!str) return;
	navigator.clipboard.writeText(str);
}
