import React, {FC, ReactElement, ReactNode} from 'react'
// @ts-ignore
import './style.scss'

interface sliderCardProps {
    length: number,
    source_url: string,
    title: string
}

const Carousel: FC<sliderCardProps> = ({length, source_url, title}): ReactElement => {
    return (
        <div className={"card-box"}>
            <div className={"card-content"}>
                <div> {title}</div>
                {length || 0}
            </div>
            <img loading={"lazy"} className={"card-image"} src={source_url}/>
        </div>

    )
}

export default Carousel
