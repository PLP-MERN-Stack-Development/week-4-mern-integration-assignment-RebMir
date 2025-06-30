import axios from 'axios';

const API_URL = '/api/auth';

// Register user
export const register = async (userData) => {
    return await axios.post(`${API_URL}/register`, userData);
};

// Login user and store token
export const login = async (userData) => {
    const res = await axios.post(`${API_URL}/login`, userData);
    const { token } = res.data;
    if (token) {
        localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    return res.data;
    };

    // Logout user and remove token
export const logout = () => {
    localStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
};
