import React, {FC, ReactElement, useEffect} from 'react'
import './style.css'
import {useDispatch} from "react-redux";
import {foundFilmDetails, resetDetailsState} from '../../features/filmFeature'
import {useParams} from 'react-router-dom'

const index: FC = (): ReactElement => {
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        // @ts-ignore
        console.log(id)
        // @ts-ignore
        dispatch(foundFilmDetails(id))
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
