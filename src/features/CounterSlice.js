import { createSlice } from "@reduxjs/toolkit";

// counter   -> incremebnr decre reset jump

// header  (counter value reflects here)
// content
// ..
// ..
// ..
// ..
// counter

// products:{
//     Allproducts: [ ... ,.... ,],
//     cart: 0 ,4,6
//     activeproduct : 1
// }

export const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 20, resetValue: 100 },
    reducers: {
        // functions
        increment: (states) => {
            states.count = states.count + 1;
        },
        decrement: (states) => {
            states.count = states.count - 1;
        },
        reset: (states) => {
            states.count = states.resetValue;
        },
        // jo data receive horaha hota he component se wo payload me ata he
        jump: (states, action) => {
            console.log(action)
            states.count = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, reset, jump } = counterSlice.actions;

export default counterSlice.reducer;
