import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/auth-context';
import { Button } from './ui/button';
import { GraduationCap } from 'lucide-react';

export function Navigation() {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">ModernLMS</span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link to="/courses">
              <Button variant="secondary">Browse Courses</Button>
            </Link>
            {user ? (
              <>
                <Link to="/dashboard">
                  <Button variant="secondary">Dashboard</Button>
                </Link>
                <Button variant="outline" onClick={() => signOut()}>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="secondary">Sign In</Button>
                </Link>
                <Link to="/register">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}