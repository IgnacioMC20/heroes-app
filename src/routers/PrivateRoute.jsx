import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

// children is an array of components
export const PrivateRoute = ({ children }) => {

  const {pathname, search} = useLocation();

  // useEffect(() => {
    console.log({pathname, search});
    localStorage.setItem('pathname', pathname + search);
  // }, [pathname]);
  
  const { user } = useContext(AuthContext);

  return user.logged ? children : <Navigate to="/login" />;
}
