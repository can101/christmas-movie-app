import React, {FC, ReactElement} from 'react'
// @ts-ignore
import Text from 'react-svg-text';
import './style.css'

interface textProps {
    title?: string,
    directory?: string,
    episode?: string
}

const Carousel: FC<textProps> = ({title="the sin",directory="deborah cow",episode="episode 3"}): ReactElement => {
    return (
        <div className={"carousel-text-container"}>
            <div>
                <span>{episode}</span>
            </div>
            <div>
                <span>{title}</span>
                {/*<svg>*/}
                {/*    <Text verticalAnchor="start">{title}</Text>*/}
                {/*</svg>*/}
            </div>
            <div>
                <span>directed by :{directory}</span>
            </div>
        </div>

    )
}

export default Carousel
