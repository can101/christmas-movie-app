import React, {FC, ReactElement, useEffect, useState} from 'react'
import './style.css'
import {Player} from "@lottiefiles/react-lottie-player";
import jsonPath from "../../assets/json/404.json";
import {useNavigate} from "react-router-dom";

const index: FC = (): ReactElement => {
    // const [counter, setCounter] = useState(0);
    // const navigate = useNavigate();
    //
    //
    // useEffect(() => {
    //     return () => clearInterval(interval);
    //     let interval = setInterval(() => {
    //         setCounter(counter => counter + 1);
    //     }, 1000);
    //     if (counter == 5) {
    //         console.log("redirecting")
    //         navigate('/')
    //     }
    // }, [])
    let navigate = useNavigate();
    const [count, setCount] = useState(10);

    useEffect(() => {
        const countInterval = setInterval(() => {
            setCount(count - 1);
        }, 1000);
        if (count === -1) {
            navigate("/");
        }
        return () => clearInterval(countInterval);
    }, [count]);

    return (
        <div className={"error-container"}>
            <Player
                autoplay
                loop
                src={jsonPath}
                className={"loading-animation-box"}
            >
            </Player>
            <div>
                <span>
                {count}
                </span>
                seconds then auto change page
            </div>
        </div>
    )
}

export default index
