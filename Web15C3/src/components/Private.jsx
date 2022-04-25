

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { EmplyoyeeContext } from "../context/AuthProvider";

export const PrivateComponent = ({children})=>{
    const {isAuth}= useContext(EmplyoyeeContext);

    if(!isAuth){
        // alert("Please Login!");
        return <Navigate to= "/login" replace={true} />;
    }

    return children;
};