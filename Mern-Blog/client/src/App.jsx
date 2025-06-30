import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import SinglePost from './components/SinglePost';
import PostForm from './components/PostForm';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';
import Register from './components/Register';

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />

        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<PostList />} />
            <Route path="/post/:id" element={<SinglePost />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route
              path="/create"
              element={
                <ProtectedRoute>
                  <PostForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <ProtectedRoute>
                  <PostForm isEdit />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white text-center py-4">
          MERN Blog &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </Router>
  );
}
