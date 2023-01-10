import {HiOutlineChevronUp} from "react-icons/hi";
import React from "react";
import './style.css'

const GoToTop = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div className={"goto-top-box"}>
            <button onClick={scrollToTop} className={"up-button"}>
                <HiOutlineChevronUp size={"3em"}/>
            </button>
        </div>
    );
};


export default GoToTop;
