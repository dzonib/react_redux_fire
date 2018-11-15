import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import {getFirestore, reduxFirestore} from 'redux-firestore'
import {getFirebase, reactReduxFirebase} from 'react-redux-firebase'

import fbConfig from '../config/fbConfig'

const middleware = [ thunk.withExtraArgument({getFirestore, getFirebase}) ]

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(...middleware),
		reduxFirestore(fbConfig),
		reactReduxFirebase(fbConfig),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

export default store
