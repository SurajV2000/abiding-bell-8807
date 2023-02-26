import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context.jsx/AuthContextProvider";

const Private = ({ children }) => {
  const { auth } = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return <div>{children}</div>;
};

export default Private;
