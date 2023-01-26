import React, {FC, ReactElement,} from 'react'
import IconButton from "../ui/buttons/icon-button";
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import imgPath from '../../assets/images/png/logo-rm-bg.png'
import {IconContext} from "react-icons";
import {Link} from "react-router-dom";
import './style.scss'

const Footer: FC = (): ReactElement => {
    return (
        <footer className={"footer"}>
            <div className={"footer-wrapper"}>
                <div className={"logo-and-slogan-box"}>
                    <span>May the Force be with you</span>
                    <Link to={"/"}>
                        <img src={imgPath} alt="star-wars"
                             className='brand-logo'/>
                    </Link>
                </div>
                <div>
                    <span className={"info-title"}>More From Star Wars:</span>
                    <IconContext.Provider value={{color: "inheritance", size: "1.7em", className: "social-icons"}}>
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
                    </IconContext.Provider>
                </div>
            </div>
        </footer>

    )
}

export default Footer
