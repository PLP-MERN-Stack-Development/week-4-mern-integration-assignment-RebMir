import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../services/authService';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
        const response = await register({ username, email, password });

        
        if (response.status === 201 || response.data?.message === 'User registered') {
            navigate('/login');
        } else {
            setError('Registration failed');
        }
        } catch (err) {
        setError(err.response?.data?.message || 'An error occurred during registration');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-4">
            <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
            />
            <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            />
            <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            />
            <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
            Register
            </button>
        </form>
        </div>
    );
}
