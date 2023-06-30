import { useContext, useReducer, useEffect, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const test = "Test is on!";
    return <AppContext.Provider value={{ test }}>
        {children}
    </AppContext.Provider>
}

export const AppGlobalContext = () => useContext(AppContext);