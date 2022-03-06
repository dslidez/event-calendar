import { combineReducers , createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers";


const rootReducer = combineReducers(reducers)

//create store
export const store = createStore(rootReducer, applyMiddleware(thunk) )


//get type of state and dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;