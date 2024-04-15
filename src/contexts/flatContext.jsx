import React, { createContext, useContext, useState } from "react";

const flatContext = createContext();

export const FlatProvider = ({ children }) => {
    const [flat, setFlat] = useState('hello');

    return (
        <flatContext.Provider value={{ flat, setFlat }}>
            {children}
        </flatContext.Provider>
    );
};

export const useFlatContext = () => useContext(flatContext);
