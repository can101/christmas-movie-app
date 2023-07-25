import './style.css'
import React, { useEffect, useState } from 'react'
import { snowGenerator } from '../assets/scripts/snow'
import { RouterProvider } from "react-router-dom";
import router from "../routes";
import Loading from '../components/loading'
import GoToTop from "../components/ui/buttons/go-to-top-button";
import ReactGA from 'react-ga';

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-BB0X54LPH6"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-BB0X54LPH6');
// </script>

const TRACKING_ID = "G-BB0X54LPH6"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);


function App() {
    useEffect(() => {
        ReactGA.pageview(document.location.pathname);
    }, []);
    const [isLoading, setIsLoading] = useState(true);
    const [isSnowing, setIsSnowing] = useState(false);
    useEffect(() => {
        snowGenerator()
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        window.addEventListener('scroll', () => {
            const scroll = window.scrollY;
            if (scroll > 600) {
                setIsSnowing(true)
            } else {
                setIsSnowing(false)
            }
        })
    }, [])

    return (
        <div className="App">
            {isSnowing && <GoToTop />}
            {isLoading && <Loading />}
            {!isLoading && <RouterProvider router={router} />}
        </div>
    )
}

export default App
