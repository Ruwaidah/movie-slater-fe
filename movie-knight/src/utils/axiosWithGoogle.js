import axios from 'axios';

const axiosWithGoogle = () => {
    const google_token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://movieknight01.herokuapp.com",
        headers: {
            Authorization: google_token
        }
    })
}

export default axiosWithGoogle;