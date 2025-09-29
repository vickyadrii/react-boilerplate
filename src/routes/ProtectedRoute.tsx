import { getAccessToken } from "@/lib/authStorage";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const token = getAccessToken() || 'Token123';

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
