import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [auth, setIsAuth] = useState(true);

  const login = () => {
    setIsAuth(true);
  };
  const logout = () => {
    setIsAuth(false);
  };

  return (
    <>
      <AuthContext.Provider value={{ login, auth, logout }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
