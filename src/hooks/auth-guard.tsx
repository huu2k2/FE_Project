import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./use-auth";
import { RoleUser } from "../types/common";

interface AuthGuardProps {
  children: ReactNode;
  allowedRoles?: RoleUser[];
}

export const AuthGuard: React.FC<AuthGuardProps> = ({
  children,
  allowedRoles = [],
}) => {
  const { isAuthenticated, loading, checkRole } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or your loading component
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  console.log("allowedRoles", allowedRoles ,checkRole(allowedRoles));
  if (allowedRoles.length > 0 && !checkRole(allowedRoles)) {
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
};
