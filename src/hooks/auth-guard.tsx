import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './use-auth';

interface AuthGuardProps {
  children: ReactNode;
  allowedRoles?: ('admin' | 'user' | 'kitchen')[];
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ 
  children, 
  allowedRoles = [] 
}) => {
  const { isAuthenticated, loading, checkRole } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or your loading component
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles.length > 0 && !checkRole(allowedRoles)) {
    return <Navigate to="/unauthorized" />;
  }

  return <>{children}</>;
};