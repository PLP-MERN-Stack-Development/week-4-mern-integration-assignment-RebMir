import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav className="p-4 bg-gray-800 text-white flex justify-between">
        <Link to="/">Home</Link>
        {isAuthenticated ? (
            <>
            <Link to="/create">Create Post</Link>
            <button onClick={logout} className="ml-4">Logout</button>
            </>
        ) : (
            <Link to="/login">Login</Link>
        )}
        </nav>
    );
}