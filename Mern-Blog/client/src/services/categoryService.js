import axios from 'axios';

const API_URL = '/api/categories';

export const getCategories = () =>
    axios.get(API_URL);

export const createCategory = (data) =>
    axios.post(API_URL, data);
