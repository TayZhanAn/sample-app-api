import axios from 'axios';

const baseURL = 'http://springboot-env.eba-qfbr9n2v.ap-southeast-1.elasticbeanstalk.com';

export const loginService = async (params) => {
    const url = baseURL + '/login';
    return axios.post(url, params)
}