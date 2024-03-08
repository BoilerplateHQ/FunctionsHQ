/**
 * Provides a background image URL based on a predefined pattern.
 * @param pattern - The name of the pattern ['blueprint', 'boxes-sm', 'boxes-md', 'boxes-lg', 'dotted', 'hearts'] chosen to convert.
 * @returns The background image URL for the given pattern.
 */
export const backgroundPattern = (pattern: string): string => {
	let svg: string;

	switch (pattern) {
		case 'blueprint':
			svg =
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="#3399cc" stroke="#fff"><path d="M0 0H32V32H0V0Z"/></svg>';
			break;
		case 'boxes-sm':
			svg =
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="#808080"><path d="M0 0H32V32"/></svg>';
			break;
		case 'boxes-md':
			svg =
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none" stroke="#808080"><path d="M0 0H32V32"/></svg>';
			break;
		case 'boxes-lg':
			svg =
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="#808080"><path d="M0 0H32V32"/></svg>';
			break;

		case 'dotted':
			svg =
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="#808080"><circle cx="16" cy="16" r="2" /></svg>';
			break;
		case 'hearts':
			svg =
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="32" height="32" fill="red" stroke="#808080"><path d="M140 20C73 20 20 74 20 140c0 135 136 170 228 303 88-132 229-173 229-303 0-66-54-120-120-120-48 0-90 28-109 69-19-41-60-69-108-69z"/></svg>';
			break;
		default:
			svg =
				'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="#3399cc" stroke="#fff"><path d="M0 0H32V32H0V0Z"/></svg>';
	}

	return `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;
};
