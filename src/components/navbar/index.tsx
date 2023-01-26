import React, {FC, ReactElement, Fragment} from 'react'
import ImgPath from '../../assets/images/png/logo-rm-bg.png'
// @ts-ignore
import {FaBeer, FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa';
// @ts-ignore
import {IoIosSearch} from 'react-icons/io'
import IconButton from '../ui/buttons/icon-button'
// @ts-ignore
import {IconContext} from "react-icons";
import './style.scss'
import {Link, useNavigate } from "react-router-dom";

const Navbar: FC = (): ReactElement => {
    const navigate =useNavigate()
    return (
        <Fragment>
            <IconContext.Provider value={{color: "inheritance", size: "1.7em", className: "social-icons"}}>
                <nav className='navbar-wrapper'>
                    <ul>
                        <li>
                            <ul>
                                <li>
                                    <IconButton icon={<FaFacebook/>}
                                                click={() => window.open("https://www.facebook.com/StarWars", "_blank")}/>
                                </li>
                                <li>
                                    <IconButton icon={<FaInstagram/>}
                                                click={() => window.open("https://www.instagram.com/starwars/", "_blank")}/>
                                </li>
                                <li>
                                    <IconButton icon={<FaYoutube/>}
                                                click={() => window.open("https://www.youtube.com/user/starwars", "_blank")}/>
                                </li>
                                <li>
                                    <IconButton icon={<FaTwitter/>}
                                                click={() => window.open("https://twitter.com/starwars", "_blank")}/>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to={"/"} >
                                <img src={ImgPath} alt="star-wars"
                                     className='brand-logo'/>
                            </Link>
                        </li>
                        <li>
                            <IconButton icon={<IoIosSearch/>} click={() => navigate("/search")}/>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </Fragment>
    )
}

export default Navbar
