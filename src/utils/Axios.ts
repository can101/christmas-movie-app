import Axios from "axios";

const instance = Axios.create({
    baseURL: "/api",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
        'Access-Control-Allow-Methods': '*',
        "Content-Type": "application/json"
    }
});

export default instance;
