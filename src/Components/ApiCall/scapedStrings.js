import he from 'he'

export const escapeString = (input) => {
		return he.escape(input);
}
