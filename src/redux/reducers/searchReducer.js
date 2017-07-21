const initialState = {
	query: 'Dallin',
	searchResults: 'Super Awesome'
}

export default function searchReducer(state=initialState, action) {
	const {type, payload} = action
	switch(type){
		case 'QUERY':
			return Object.assign({}, state, {query: payload})
		default:
			return state
	}
}