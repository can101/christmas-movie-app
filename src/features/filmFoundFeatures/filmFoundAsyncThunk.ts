import {createAsyncThunk} from '@reduxjs/toolkit'
import Axios from '../../utils/Axios'

const foundFilmToList = createAsyncThunk(
    "get/found-film", async (id: number) => {
        const url = `/films/${id}`
        const {data, status} = await Axios.get(url);
        if (status == 200) {
            console.log(data)
            return data
        }
    }
)

export default foundFilmToList
