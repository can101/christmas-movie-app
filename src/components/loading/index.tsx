import React, {FC, ReactElement} from 'react'
import {Player} from '@lottiefiles/react-lottie-player';
import jsonPath from '../../assets/json/loading.json'
import './style.scss'

const index: FC = (): ReactElement => {

    return (
        <div className={"loading-container"}>
            <Player
                autoplay
                loop
                src={jsonPath}
                className={"loading-animation-box"}
            >
            </Player>
        </div>
    )
}

export default index
