import React, {FC, ReactElement, useEffect} from 'react'
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from 'react-router-dom'
import filmFoundAsyncThunk from '../../features/filmFoundFeatures/filmFoundAsyncThunk'
import HeroContent from "../../components/hero-content";
import {resetState} from "../../features/filmFoundFeatures";
import {BsArrowLeftSquare} from 'react-icons/bs'
import IconButton from "../../components/ui/buttons/icon-button";
import Spinner from "../../components/ui/spinner";
import Carousel from "../../components/detail-carousel";
import Detail from '../../components/movie-detail'

const index: FC = (): ReactElement => {
    const navigate = useNavigate()
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        // @ts-ignore
        dispatch(filmFoundAsyncThunk(Number(id)))
        return () => {
            // @ts-ignore
            dispatch(resetState());
        };
    }, []);
    const {loading, value} = useSelector((state: any) => state.found);

    return (
        <div className={"details-container"}>
            {loading && <Spinner/>}
            {!loading && (<>
                <div className={"back-button-wrapper"}>
                    <IconButton icon={<BsArrowLeftSquare/>} click={() => navigate(-1)}/>
                </div>
                <HeroContent {...{
                    title: value.title,
                    description: value.opening_crawl,
                    img_source: value.image,
                    date: value.release_date
                }}/>
                <Carousel/>
                <Detail/>
            </>)}
        </div>
    )
}

export default index
