import axios from 'axios';

const BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const fetchAll = (params) => axios.get(BASE + '/api/data/all', { params }).then(r => r.data);
export const chatQuery = (q) => axios.post(BASE + '/api/chat', { query: q }).then(r => r.data);
