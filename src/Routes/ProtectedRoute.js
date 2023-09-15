import { Navigate } from "react-router-dom";
import Layout from "../layout";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token");
  return <>{isAuthenticated ? <Layout>{children}</Layout> : <Navigate to="/login" />}</>;
};

export default ProtectedRoute;