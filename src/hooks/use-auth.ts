import { useEffect, useState } from "react";
import { RoleUser } from "../types/common";

interface UserRole {
  role: RoleUser;
}

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No token found");
      }

      // Decode token to get role (assuming JWT)
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      console.log("decodedToken", decodedToken);
      setUserRole({ role: decodedToken.role.name });
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
      setUserRole(null);
    } finally {
      setLoading(false);
    }
  };

  const checkRole = (allowedRoles: UserRole["role"][]) => {
    return userRole && allowedRoles.includes(userRole.role);
  };

  return {
    isAuthenticated,
    userRole,
    loading,
    checkRole,
  };
};
