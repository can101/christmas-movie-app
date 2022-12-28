import React, {FC, ReactElement, ReactNode, useEffect} from 'react'
import Video from '../../assets/videos/bg-video.mp4'
// @ts-ignore
import Slider from "react-slick";
import './style.css'
import Text from '../ui/textures/carousel-text'
import DownButton from "../ui/buttons/down-button";
import {useDispatch, useSelector} from 'react-redux'
import filmAsyncThunk from "../../features/filmFeature/filmAsyncThunk"

const Carousel: FC = (): ReactElement => {
    const dispatch = useDispatch();
    // @ts-ignore
    const {value, loading} = useSelector(state => state.films)
    useEffect(() => {
        // @ts-ignore
        dispatch(filmAsyncThunk())
    }, [])

    const settings = {
        dots: false,
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
        autoplay: true,
        centerPadding: "0px",
        autoplaySpeed: 6600,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    return (
        <>
            <div className={"carousel-container"}>
                <video src={Video} className={"video-container"} autoPlay loop playsInline muted/>
                <div className={"image-carousel-wrapper"}>
                    <Slider {...settings}>
                        {value.map((item: any, index: number) => {
                            return (
                                <Text key={index} directory={item?.director} title={item?.title}
                                      episode={`episode ${item?.episode_id}`}/>
                            );
                        })}
                    </Slider>
                </div>
                <DownButton click={() => {
                    // @ts-ignore
                    // document.getElementsByClassName("section-second").scrollIntoView()
                    const target = document.querySelector('.target');
                    // @ts-ignore
                    target.scrollIntoView({behavior: 'smooth'});
                }}/>
            </div>
        </>

    )
}

export default Carousel
