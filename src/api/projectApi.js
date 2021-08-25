import axiosClient from './axiosClient';
const projectApi = {
    getAll : (params) => {
        const url = '/projects';
        return axiosClient.get(url, { params });
    }
}
 
export default projectApi;