import Axios from "axios";

const instance = Axios.create({
    baseURL: "https://swapi.py4e.com/api/",
    headers: {}
});

export default instance;
