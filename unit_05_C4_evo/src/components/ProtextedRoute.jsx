// /orders and /neworder are protected routes
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AutoContext } from "../context/AuthContext";

export const ProtectedRoute = ({ children }) => {
const { isAuth } = useContext(AutoContext);

if (!isAuth) {
  alert("Please Login");
  return <Navigate to="/login" replace={true}/>;
}

return children;
};
