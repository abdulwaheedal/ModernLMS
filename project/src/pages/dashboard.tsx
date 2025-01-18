import { useAuth } from '@/contexts/auth-context';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Award } from 'lucide-react';

export function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome back!</h1>
        <Button>Browse Courses</Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <h2 className="text-lg font-semibold">My Courses</h2>
          </div>
          <p className="text-3xl font-bold">0</p>
          <p className="text-gray-600">Enrolled courses</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="h-6 w-6 text-blue-600" />
            <h2 className="text-lg font-semibold">Learning Time</h2>
          </div>
          <p className="text-3xl font-bold">0h</p>
          <p className="text-gray-600">Total learning time</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center space-x-3 mb-4">
            <Award className="h-6 w-6 text-blue-600" />
            <h2 className="text-lg font-semibold">Certificates</h2>
          </div>
          <p className="text-3xl font-bold">0</p>
          <p className="text-gray-600">Earned certificates</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
        </div>
        <div className="p-6 text-center text-gray-500">
          No recent activity. Start learning today!
        </div>
      </div>
    </div>
  );
}