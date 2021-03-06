import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

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