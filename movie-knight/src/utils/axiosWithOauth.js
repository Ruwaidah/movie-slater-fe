//Oauth
import axios from 'axios';

const axiosWithOauth = () => {
    const oauth_token = localStorage.getItem('oauth_token');

    return axios.create({
        baseURL: " I need Endpoint Thanks :)",
        headers: {
            Authorization: oauth_token
        }
    })
}

export default axiosWithOauth;
//Oauth