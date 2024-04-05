
import { configureStore } from "@reduxjs/toolkit";

import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

// Modern way of fetching the state in redux !! CHECK V2 FOR REFERENCE !!
const store = configureStore({
    reducer: {
        account: accountReducer,
        customer: customerReducer
    }
})

export default store;



