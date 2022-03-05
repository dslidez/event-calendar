import { combineReducers , createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";


const rootReducer = combineReducers({


})

//create store
export const store = createStore(rootReducer, applyMiddleware(thunk) )


//get type of state and dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;