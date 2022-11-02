import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  if (user) {
    return children;
  }
  if (loader) {
    return <div className="flex items-center bg-slate-300 mx-auto rounded-lg btn btn-square loading my-10"></div>;




  }
  return (
    <Navigate to="../../login" state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
