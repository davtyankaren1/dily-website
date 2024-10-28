import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isAuthenticated = localStorage.getItem("userName") !== null;

  return isAuthenticated ? <>{children}</> : <Navigate to='/auth' replace />;
};

export default PrivateRoute;
