import React, {FC, ReactElement, Fragment} from 'react'
import ImgPath from '../../assets/images/png/logo.png'
// @ts-ignore
import {FaBeer, FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa';
// @ts-ignore
import {IoIosSearch} from 'react-icons/io'
import IconButton from '../ui/buttons/icon-button'
// @ts-ignore
import {IconContext} from "react-icons";
import './style.css'

const Navbar: FC = (): ReactElement => {
    // @ts-ignore
    return (
        <Fragment>
            <IconContext.Provider value={{color: "inheritance", size: "1.7em", className: "social-icons"}}>
                <nav className='navbar-wrapper'>
                    <ul>
                        <li>
                            <ul>
                                <li>
                                    <IconButton icon={<FaFacebook/>} click={() => console.log("hello world")}/>
                                </li>
                                <li>
                                    <IconButton icon={<FaInstagram/>} click={() => console.log("hello world")}/>
                                </li>
                                <li>
                                    <IconButton icon={<FaYoutube/>} click={() => console.log("hello world")}/>
                                </li>
                                <li>
                                    <IconButton icon={<FaTwitter/>} click={() => console.log("hello world")}/>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <img src={ImgPath} alt="starwars" className='brand-logo'/>
                        </li>
                        <li>
                            {/*<IconContext.Provider value={{color: "#fff", size: "1.7em", className: "social-icons"}}>*/}
                            <IconButton icon={<IoIosSearch/>} click={() => console.log("hello world")}/>
                            {/*</IconContext.Provider>*/}
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </Fragment>
    )
}

export default Navbar
