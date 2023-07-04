import { createContext, useContext } from "react";

const AppContext = createContext();
export const AppProvider = ({ children }) => {
    const greeting = "Hi!";
    const alo = "Alo!";
    return <AppContext.Provider value={{ greeting, alo }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext);