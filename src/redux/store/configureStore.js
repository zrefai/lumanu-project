import { createStore, combineReducers } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import { repoReducer } from "../reducers"
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    repos: repoReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["repos"],
    blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export let store = createStore(persistedReducer)
export let persistor = persistStore(store)
