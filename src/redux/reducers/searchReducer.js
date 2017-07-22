const initialState = {
	query: '',
	searchResults: [],
	showTitle: false
}

export default function searchReducer(state=initialState, action) {
	const {type, payload} = action

	switch(type){
		case 'QUERY':
			return Object.assign({}, state, {query: payload})
		case 'RESULTS':
			return Object.assign({}, state, {
				searchResults: [...payload],
				showTitle: true
			})
		default:
			return state
	}
}