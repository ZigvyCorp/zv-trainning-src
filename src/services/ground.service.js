import axios from 'axios';
import { URL_API } from '../config';

function getAll(data) {
    const { payload: { filter } } = data
    let query = ''
    if (filter) {
        query = Convert(filter)
    }
    return axios.request(`${URL_API}/api/grounds/${query}`)
}

function get(id) {
    return axios.request(`${URL_API}/api/ground/${id}`)
}

export default {
    getAll,
    get
}


function Convert(data) {
    let result = '?';
    Object.entries(data).forEach(([key, value], i) => {
        if (value) {
            if (Array.isArray(value)) {
                value = value.join(',')
            }
            let singleParam = (i ? '&' : '') + key + '=' + value
            result += singleParam;
        }
    })
    return result;
}