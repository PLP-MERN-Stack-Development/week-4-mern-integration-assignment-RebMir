import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav className="p-4 bg-gray-800 text-white flex justify-between">
            <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-violet-500">MERN Blog</Link>
<br /> <br />
            <div className="space-x-4">
                <Link to="/login" className="hover:">Login</Link>
<br /> <br />
                <Link to="/register" className="hover:underline">Register</Link>
                {isAuthenticated && ( 
                    <button onClick={logout} className="hover:underline">Logout</button>
                )}
            </div>
        </nav>
    );
}