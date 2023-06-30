import { useContext, useReducer, useEffect, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const greeting = "Hello everybody!";
    return <AppContext.Provider value={{ greeting }} >
        {children}
    </AppContext.Provider>
}

export const AppGlobalContext = () => useContext(AppContext);