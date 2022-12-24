import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
    const count = useSelector((states) => {
        return states.counter.count;
    });

    return <div>Header Count : {count}</div>;
};

export default Header;
