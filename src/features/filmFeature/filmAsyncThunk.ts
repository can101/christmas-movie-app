import {createAsyncThunk} from '@reduxjs/toolkit'
import Axios from '../../utils/Axios'

const getAllFilms = createAsyncThunk(
    "get/film-list", async () => {
        const {data,status} =await Axios("/films");
        if(status==200){
            return data
        }
    }
)

export default getAllFilms
