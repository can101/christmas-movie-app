import Axios from "axios";

const instance = Axios.create({
    baseURL: "/api",
    headers: {"Access-Control-Allow-Headers": "*"}
});

export default  instance;
