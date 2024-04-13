/**
 * Converts a string to a slug.
 * Replaces non-word characters and underscores with spaces,
 * splits the string into an array of words, and joins them with hyphens.
 * Finally, converts the resulting string to lowercase.
 *
 * @param string - The string to convert to a slug, such as 'This is a Header!'.
 * @returns The slugified string, such as this-is-a-header.
 */
export function stringToSlug(string: string) {
	return string
		.toString()
		.replace(/[\W_]+/g, ' ')
		.split(' ')
		.join('-')
		.toLowerCase();
}
