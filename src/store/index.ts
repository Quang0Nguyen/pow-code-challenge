import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './spells/spellsSlice'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import {combineReducers} from "redux"; 

const reducers = combineReducers({
  spellsState: counterReducer,
})
const persistConfig = {
  key: 'root',
  storage
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch