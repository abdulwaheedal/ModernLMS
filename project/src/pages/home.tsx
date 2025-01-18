import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Award } from 'lucide-react';

export function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
          Learn Anything, Anytime, Anywhere
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Access high-quality courses from expert instructors and join a community of lifelong learners.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/register">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link to="/courses">
            <Button variant="outline" size="lg">Browse Courses</Button>
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Expert-Led Courses</h3>
          <p className="text-gray-600">Learn from industry experts with years of experience.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Community Learning</h3>
          <p className="text-gray-600">Join a community of learners and share knowledge.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Earn Certificates</h3>
          <p className="text-gray-600">Get recognized for your achievements with certificates.</p>
        </div>
      </section>
    </div>
  );
}