import './style.css'
import React, {useEffect, useState, useRef} from 'react'
import {snowGenerator} from '../assets/scripts/snow'
import {RouterProvider} from "react-router-dom";
import router from "../routes";
import Loading from '../components/loading'
import GoToTop from "../components/ui/buttons/go-to-top-button";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isSnowing, setIsSnowing] = useState(false);
    const ref = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        snowGenerator()
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY;
            console.log(scroll)
            if (scroll > 600) {
                setIsSnowing(true)
            } else {
                setIsSnowing(false)
            }
        })
    }, [])

    return (
        <div className="App">
            {isSnowing && <GoToTop/>}
            {/*<GoToTop/>*/}
            {isLoading && <Loading/>}
            {!isLoading && <RouterProvider router={router}/>}
        </div>
    )
}

export default App
