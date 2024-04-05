import { createSlice } from "@reduxjs/toolkit"

const initialStateCustomer = {
    fullName: "",
    nationalID: "",
    createdAt: "",
}


const customerSlice = createSlice({
    name: "customer",
    initialState: initialStateCustomer,
    reducers: {
        createCustomer: {
            prepare(fullName, nationalID) {
                return { payload: { fullName, nationalID, createdAt: new Date().toISOString() } }
            },
            reducer(state, action) {
                state.fullName = action.payload.fullName
                state.nationalID = action.payload.nationalID
                state.createdAt = action.payload.createdAt;
            },
        },
        updateName: {
            prepare(fullName) {
                return { payload: fullName }
            },
            reducer(state, action) {
                state.fullName = action.payload
            }
        },
    }
})

export const { createCustomer, updateName } = customerSlice.actions

export default customerSlice.reducer;

// The code below are another way of using redux(which I prefer as of now since it is more readable but requires a lot of setup)
// Reducer for customer
// export default function customerReducer(state = initialStateCustomer, action) {

//     switch (action.type) {
//         case "customer/create":
//             return {
//                 ...state,
//                 fullName: action.payload.fullName,
//                 nationalID: action.payload.nationalID,
//                 createdAt: action.payload.createdAt
//             }

//         case "customer/updateName":
//             return {
//                 ...state,
//                 fullName: action.payload
//             }
//         default:
//             return state;
//     }
// }

// export function createCustomer(fullName, nationalID) {
//     return (
//         {
//             type: "customer/create",
//             payload: { fullName: fullName, nationalID: nationalID, createdAt: new Date().toISOString() }
//         }
//     )
// }

// export function updateName(fullName) {
//     return ({ type: "customer/updateName", payload: fullName })
// }