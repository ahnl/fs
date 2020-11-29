import axios from 'axios'
const baseUrl = '/api/persons'

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
};
const create = (data) => {
    const request = axios.post(baseUrl, data);
    return request.then(response => response.data);
};
const del = (id) => {
    const request = axios.delete(baseUrl + '/' + id);
    return request.then(response => response.data);
}

const personService = { getAll, create, delete: del };

export default personService