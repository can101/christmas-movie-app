import React, {FC, ReactElement} from 'react'
import './style.css'
import {useNavigate} from "react-router-dom";

interface textProps {
    title?: string,
    directory?: string,
    episode?: string,
    id: number
}

const Carousel: FC<textProps> = ({
                                     title = "the sin",
                                     directory = "deborah cow",
                                     episode = "episode 3"
                                     , id
                                 }): ReactElement => {
    const navigate = useNavigate()
    return (
        <div className={"carousel-text-container"} onClick={() => {
            navigate(`/details/${id}`)
        }}>
            <div>
                <span>{episode}</span>
            </div>
            <div>
                <span>{title}</span>
            </div>
            <div>
                <span>directed by :{directory}</span>
            </div>
        </div>

    )
}

export default Carousel
