import { configureStore,combineReducers } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'
import authReducer from './slices/authSlice'


const reducer = combineReducers({
    authState:authReducer,
  
})

const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk
    })
})

export default store;