export function updateQuery(value) {
	return {
		type: 'QUERY',
		payload: value
	}
}

export function queryResults(value) {
	return{
		type: 'RESULTS',
		payload: value
	}
}