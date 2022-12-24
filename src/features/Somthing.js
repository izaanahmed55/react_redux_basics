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

export const somethingSlice = createSlice({
    name: "counter",
    initialState: { sum: 0, mehh: 0 },
    reducers: {
        // functions
        kuchbhi: (states) => {
            states.count = states.count + 1;
        },
        emmm: (states) => {
            states.count = states.count - 1;
        },
    },
});

// Action creators are generated for each case reducer function
export const { kuchbhi, emmm } = somethingSlice.actions;

export default somethingSlice.reducer;
