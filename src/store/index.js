import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { fromJS } from 'immutable'
import configureStore from './configureStore'
import storage from '../libs/storage'
import { APP_STORAGE } from '../globals'

export function serialize(state = {}) {
	const serializedState = {}

	Object.keys(state).forEach( k => {
		serializedState[k] = state[k].toJS ? state[k].toJS() : state[k]
	})

	return serializedState
}

export function deserialize(state = {}) {
	const deserializedState = {}

	Object.keys(state).forEach( k => {
		deserializedState[k] = fromJS(state[k])
	})

	return deserializedState
}

const deserializedState = deserialize(storage.get(APP_STORAGE))

export const store = configureStore(deserializedState)

export const syncHistory = syncHistoryWithStore(browserHistory, store)

store.subscribe(() => {
	if(!storage.get('debug')) {
    	storage.set(APP_STORAGE, serialize(store.getState()));
	}
})