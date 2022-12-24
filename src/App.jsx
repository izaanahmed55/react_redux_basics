import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, jump, reset } from "./features/CounterSlice";
import Header from "./Header";

const App = () => {
    const dispatch = useDispatch();
    const count = useSelector((states) => {
        return states.counter.count;
    });

    const jumpValue = 300;

    console.log(count);

    const handleIncrement = () => {
        // you have to dispatch functions
        dispatch(increment());
    };
    const handleDecrement = () => {
        // you have to dispatch functions
        dispatch(decrement());
    };
    return (
        <div>
        <Header/>
            <button onClick={() => handleIncrement()}>Increment</button>
            <button>{count}</button>
            <button onClick={() => handleDecrement()}>Decrement</button>
            <button onClick={() => dispatch(reset())}>reset</button>
            <button onClick={() => dispatch(jump(jumpValue))}>Jump 300</button>
        </div>
    );
};

export default App;
