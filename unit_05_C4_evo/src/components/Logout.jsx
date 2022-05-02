import { AutoContext } from "../context/AuthContext";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Logout = () => {
  // Logout component, just log user out and take him to `/` homepage
  const navigate = useNavigate();
  const { handleAuth } = useContext(AutoContext);
  useEffect(()=>{
    navigate("/",{ replace: true });
  },[])
  handleAuth(false);
  // suggestion: if you are storing anyting in redux it's a good idea to
  // empty it before loggin out. eg: order

  return <>
  
  </>;
};
