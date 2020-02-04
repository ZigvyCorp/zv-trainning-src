import Axios from "axios";

function getGround(id) {
    return Axios.request(`http://localhost:3001/api/ground/${id}`)
}


export default {
    getGround
}