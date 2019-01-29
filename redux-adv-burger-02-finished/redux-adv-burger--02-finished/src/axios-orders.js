import axios from 'axios';

const instance = axios.create({    
    baseURL: 'https://react-my-burger-rza.firebaseio.com/'
});

export default instance;
