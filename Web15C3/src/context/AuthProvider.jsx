import { createContext } from "react";
import { useState } from "react";

export const EmplyoyeeContext = createContext();

export const EmployeyeContextProvider = ({children})=>{
    const [employ, SetEmploy] = useState(false);

    const hanleAuth = (stat)=>{
        SetEmploy(stat);
    };

    return <EmplyoyeeContext.Provider value={{employ, hanleAuth}}>{children}</EmplyoyeeContext.Provider>
}