import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// Combine reducers essential for redux if we have multiple reducers for multiple states
const rootReducer = combineReducers({
    account: accountReducer,
    customer: customerReducer
})

// Create store for redux
const store = createStore(rootReducer)

export default store;



