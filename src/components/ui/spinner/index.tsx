import React, {FC, ReactElement} from 'react'
import './style.scss'

interface textProps {

}

const Carousel: FC = (): ReactElement => {
    return (
        <div className={"spinner-container"}>
            <span className={"spinner-box"}></span>
        </div>
    )
}

export default Carousel
