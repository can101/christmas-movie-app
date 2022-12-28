import {createAsyncThunk} from '@reduxjs/toolkit'
import Axios from '../../utils/Axios'

const getAllFilms = createAsyncThunk(
    "get/film-list", async () => {
        const {data,status} =await Axios("https://swapi.dev/api/films");
        if(status==200){
            return data
        }
    }
)

export default getAllFilms
