import { createContext, useState } from "react";

export const AutoContext = createContext();

export const AutoContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const handleAuth = (state) => {
    setIsAuth(state);
  };

  return <AutoContext.Provider value={{isAuth, handleAuth}}>{children}</AutoContext.Provider>;
};
