import axios from 'axios';


export const initAuth = () => {
    const token = localStorage.getItem('token');
    if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};