import axios from 'axios';

const api = axios.create({
    baseURL: 'https://todoapp-2c022-default-rtdb.firebaseio.com',
});

export { api };