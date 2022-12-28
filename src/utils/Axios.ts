import Axios from "axios";

const instance = Axios.create({
    baseURL: "/api",
    headers: {'X-Custom-Header': 'foobar'}
});

export default  instance;
