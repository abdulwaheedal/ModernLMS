import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { Register } from './pages/register';
import { Dashboard } from './pages/dashboard';
import { Courses } from './pages/courses';
import { AuthProvider } from './contexts/auth-context';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;