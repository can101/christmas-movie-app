import './style.css'
import React, {useEffect} from 'react'
import {snowGenerator} from '../assets/scripts/snow'
import Home from '../pages/home'
import {RouterProvider} from "react-router-dom";
import router from "../routes";


function App() {

    useEffect(() => {
        snowGenerator()
    }, [])

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
