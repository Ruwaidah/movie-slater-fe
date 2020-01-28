import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: " I need Endpoint Thanks :)",
        headers: {
            Authorization: token
        }
    })
}

export default axiosWithAuth;