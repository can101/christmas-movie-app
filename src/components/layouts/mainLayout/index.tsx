import React from 'react'
import {Outlet} from 'react-router-dom'
import Banner from "../../banner";
import Navbar from "../../navbar";
import Footer from "../../footer";
import "./style.css"

function Index() {
    return (
        <div className="main-container">
            <Banner/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Index
