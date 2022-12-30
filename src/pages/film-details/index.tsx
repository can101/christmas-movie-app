import React, {FC, ReactElement, useEffect} from 'react'
import './style.css'
import {useDispatch} from "react-redux";
import {useParams} from 'react-router-dom'
import filmFoundAsyncThunk from '../../features/filmFoundFeatures/filmFoundAsyncThunk'

const index: FC = (): ReactElement => {
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        // @ts-ignore
        dispatch(filmFoundAsyncThunk(Number(id)))
        // dispatch(foundFilmDetails(id));
        // return () => {
        //     dispatch(resetDetailsState());
        // };
    }, []);

    return (
        <div className={"details-container"}>
            hello
        </div>
    )
}

export default index
