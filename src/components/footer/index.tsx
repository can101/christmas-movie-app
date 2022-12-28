import React, {FC, ReactElement,} from 'react'
import IconButton from "../ui/buttons/icon-button";
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from "react-icons/fa";
import {IconContext} from "react-icons";
import  './style.css'

const Footer: FC = (): ReactElement => {
    return (
        <footer className={"footer"}>
            <div className={"footer-wrapper"}>
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
        </footer>

    )
}

export default Footer
