import React, {FC, ReactElement} from 'react'
import Video from '../../assets/videos/bg-video.mp4'
// @ts-ignore
import Slider from "react-slick";
import './style.css'
import Text from '../ui/textures/carousel-text'
import DownButton from "../ui/buttons/down-button";

const Carousel: FC = (): ReactElement => {
    const settings = {
        dots: false,
        arrows: false,
        centerMode: true,
        slidesToShow: 3,
        autoplay: true,
        centerPadding: "30px",
        autoplaySpeed: 6600
    };
    return (
        <>
            <div className={"carousel-container"}>
                <video src={Video} className={"video-container"} autoPlay loop playsInline muted/>
                <div className={"image-carousel-wrapper"}>
                    <Slider {...settings}>
                        <Text/>
                        <Text/>
                        <Text/>
                        <Text/>
                        <Text/>
                        <Text/>
                        <Text/>
                    </Slider>
                </div>
                <DownButton/>
            </div>
        </>

    )
}

export default Carousel
