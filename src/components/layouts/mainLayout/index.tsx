import React from 'react'
import {Outlet} from 'react-router-dom'
import Banner from "../../banner";
import Navbar from "../../navbar";

function Index() {
    return (
        <div className="Index">
            <Banner/>
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default Index
