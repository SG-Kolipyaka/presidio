
import { legacy_createStore } from "redux"
import { combineReducers,applyMiddleware } from "redux"
import {thunk} from "redux-thunk"
import { reducer as authreducer } from "./AuthReducer/reducer"
import { reducer as housereducer } from "./AdminReducer/reducer"

const rootReducer=combineReducers({
authreducer ,
housereducer,

})




export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))