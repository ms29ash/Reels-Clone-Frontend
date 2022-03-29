import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://tik-tok-clone-my.herokuapp.com/'
});

export default instance;