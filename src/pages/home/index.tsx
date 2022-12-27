import React, { FC, ReactElement } from 'react'
import Banner from '../../components/banner'
import Carousel from '../../components/carousel'
import Navbar from '../../components/navbar'


const index: FC = (): ReactElement => {
    return (
        <div>
            <Banner />
            <Navbar />
            <Carousel/>
        </div>
    )
}

export default index
