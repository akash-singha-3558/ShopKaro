import {legacy_createStore, combineReducers, applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import {ProductReducer} from "./Products/product.reducer";
const rootReducer=combineReducers({ProductReducer});
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));
