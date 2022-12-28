import React, {FC, ReactElement} from 'react'
import Carousel from '../../components/carousel'
import imgPath from '../../assets/images/png/a.png'
import './style.css'

const index: FC = (): ReactElement => {
    return (
        <div>
            <Carousel/>
            <section className="section-second target-section">
                <div>
                    <p>
                        Star Wars is a science fiction media franchise created by George Lucas. It includes a series of
                        films, television shows, and other works set in a galaxy far, far away and featuring a diverse
                        cast
                        of characters, including humans, droids, and various alien species. The franchise centers around
                        a
                        group of rebels fighting against an evil empire, led by the Sith Lord Darth Vader, and includes
                        themes of redemption, family, and the struggle between good and evil. The original trilogy,
                        consisting of the films "Star Wars: A New Hope," "The Empire Strikes Back," and "Return of the
                        Jedi," was released between 1977 and 1983 and became a cultural phenomenon, influencing many
                        aspects
                        of popular culture and inspiring numerous spin-off works. The franchise has continued with
                        numerous
                        prequel, sequel, and anthology films, as well as television shows, video games, and other media.
                    </p>
                </div>
                <img src={imgPath} className={"right-float-img"} alt="star-wars"/>
            </section>
        </div>
    )
}

export default index
