const initialState = {
	query: '',
	searchResults: []
}

export default function searchReducer(state=initialState, action) {
	const {type, payload} = action
	console.log(type, typeof payload)
	switch(type){
		case 'QUERY':
			return Object.assign({}, state, {query: payload})
		case 'RESULTS':
			return Object.assign({}, state, {searchResults: [...payload]})
		default:
			return state
	}
}