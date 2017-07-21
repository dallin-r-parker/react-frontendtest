import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import searchReducer from './reducers/searchReducer'

const middleware = applyMiddleware(thunk)


export default createStore(searchReducer, middleware)