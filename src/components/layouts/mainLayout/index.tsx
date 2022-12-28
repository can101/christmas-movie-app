import React from 'react'
import {Outlet} from 'react-router-dom'
import Banner from "../../banner";
import Navbar from "../../navbar";
import Footer from "../../footer";


function Index() {
    return (
        <div className="Index">
            <Banner/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Index
