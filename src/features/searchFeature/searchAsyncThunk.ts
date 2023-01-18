import {createAsyncThunk} from '@reduxjs/toolkit'
import Axios from '../../utils/Axios'

interface ISearchParams {
    searchText: string,
    searchBy: string
}

const getAllFilms = createAsyncThunk(
    "post/search-current-tag", async (tag: ISearchParams) => {
        const {data, status} = await Axios.get(`/${tag.searchBy}/?search=${tag.searchText}`);
        if (status == 200) {
            return {data, tag}
        }
    }
)

export default getAllFilms
