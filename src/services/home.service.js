import axios from 'axios';
function fetchGrounds() {
    return axios.request('http://localhost:3001/api/grounds')
}

export default {
    fetchGrounds
}