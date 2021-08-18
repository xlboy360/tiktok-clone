import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tiktok-clone-backend0314.herokuapp.com/" 
});

export default instance;