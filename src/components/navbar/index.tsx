import React, { FC, ReactElement, Fragment } from 'react'
import ImgPath from '../../assets/imgs/png/logo.png'
// @ts-ignore
import { FaBeer, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
// @ts-ignore
import { IoIosSearch } from 'react-icons/io'
// @ts-ignore
import { BsSnow2 } from 'react-icons/bs'
// @ts-ignore
import { IconContext } from "react-icons";
import './style.css'

const Navbar: FC = (): ReactElement => {
    return (
        <Fragment>
            <nav className='navbar-wrapper'>
                <ul>
                    <li>
                        <IconContext.Provider value={{ color: "#fff", size: "1.7em", className: "social-icons" }}>
                            <ul>
                                <li><FaFacebook /></li>
                                <li><FaInstagram /></li>
                                <li><FaYoutube /></li>
                                <li><FaTwitter /></li>
                            </ul>
                        </IconContext.Provider>
                    </li>
                    <li>
                        <img src={ImgPath} alt="starwars" className='brand-logo' />
                    </li>
                    <li>
                    <BsSnow2/>
                        <IconContext.Provider value={{ color: "#fff", size: "1.7em", className: "social-icons" }}>
                            <IoIosSearch />
                        </IconContext.Provider>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default Navbar
