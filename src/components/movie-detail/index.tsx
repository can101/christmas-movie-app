import React, {FC, ReactElement, useEffect, useState} from 'react'
import './style.css'
import {useSelector} from 'react-redux'
import Spinner from "../ui/spinner";


const Carousel: FC = (): ReactElement => {
    const {value, loading} = useSelector((state: any) => state.found)

    return (
        <>
            {loading && <Spinner/>}
            {
                !loading && (<div className={"extra-detail-container"}>
                    <div className={"extra-detail-box"}>
                        <span>Director:</span>
                        <span>{value?.director}</span>
                    </div>
                    <div className={"extra-detail-box"}>
                        <span>producer:</span>
                        <span>{value?.producer}</span>
                    </div>
                </div>)
            }
        </>

    )
}

export default Carousel
