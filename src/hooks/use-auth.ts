import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UserRole {
  role: 'admin' | 'user' | 'kitchen';
}

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('No token found');
      }

      // Decode token to get role (assuming JWT)
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      setUserRole({ role: decodedToken.role });
      setIsAuthenticated(true);
    } catch (error) {
      setIsAuthenticated(false);
      setUserRole(null);
      navigate('/login');
    } finally {
      setLoading(false);
    }
  };

  const checkRole = (allowedRoles: UserRole['role'][]) => {
    return userRole && allowedRoles.includes(userRole.role);
  };

  return {
    isAuthenticated,
    userRole,
    loading,
    checkRole,
  };
};