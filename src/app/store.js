import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/CounterSlice";
import somthingReducer from "../features/Somthing";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        kuchOr: somthingReducer,
    },
});
