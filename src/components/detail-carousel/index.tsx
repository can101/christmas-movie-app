import React, {FC, ReactElement, useEffect, useState} from 'react'
import SliderDetailCard from '../ui/card/detail-slider-card'
// @ts-ignore
import Slider from "react-slick";
import './style.css'
import {useSelector} from 'react-redux'
import Spinner from "../ui/spinner";
import speciesPath from '../../assets/images/icons/png/species.png'
import starshipsPath from '../../assets/images/icons/png/starships.png'
import vehiclesPath from '../../assets/images/icons/png/vehicls.png'
import planetsPath from '../../assets/images/icons/png/planets.png'
import charactersPath from '../../assets/images/icons/png/chracters.png'

const Carousel: FC = (): ReactElement => {
    const {value, loading} = useSelector((state: any) => state.found)

    interface sliderCardProps {
        length: number,
        source_url: string,
        title: string
    }

    const [slider, setSlider] = useState<sliderCardProps[]>([])
    useEffect(() => {
        const list = [
            {length: value?.characters?.length, title: "characters", source_url: charactersPath},
            {length: value?.planets?.length, title: "planets", source_url: planetsPath},
            {length: value?.species?.length, title: "species", source_url: speciesPath},
            {length: value?.starships?.length, title: "starships", source_url: starshipsPath},
            {length: value?.vehicles?.length, title: "vehicles", source_url: vehiclesPath},
        ]
        setSlider(list)
    },[]);
    const settings = {
        dots: false,
        arrows: false,
        centerMode: true,
        slidesToShow: 5,
        autoplay: true,
        centerPadding: "0px",
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    return (
        <>
            {loading && <Spinner/>}
            {
                !loading && (<>
                    <div className={"detail-carousel-container"}>
                        <Slider {...settings}>
                            {slider.map((item: any, index: number) => (
                                <SliderDetailCard key={index} length={item.length} title={item.title} source_url={item.source_url}/>)
                            )}
                        </Slider>
                    </div>
                </>)
            }
        </>

    )
}

export default Carousel
