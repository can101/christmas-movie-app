import './style.css'
import React, {useEffect, useState,lazy,Suspense} from 'react'
import {snowGenerator} from '../assets/scripts/snow'
import {RouterProvider} from "react-router-dom";
import router from "../routes";
import Loading from '../components/loading'

function App() {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        snowGenerator()
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, [])

    return (
        <div className="App">
            {isLoading && <Loading/>}
            {!isLoading && <RouterProvider router={router}/>}
        </div>
    )
}

export default App
