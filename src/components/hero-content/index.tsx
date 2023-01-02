import React, {FC, ReactElement,} from 'react';
import './style.css'

interface HeroContentProps {
    title: string;
    img_source: string;
    description: string;
    date: string;
}

const Footer: FC<HeroContentProps> = ({img_source, description, title,date}): ReactElement => {
    return (
        <section className="hero-content-container">
            <div className="image-box-container"  data-date={date}>
                <img loading={"lazy"} className={"image-box-element"} src={img_source} alt="hero-image"/>
            </div>
            <div className="text-box-container">
                <div className="title-container">
                    <span className="text-title">{title}</span>
                </div>
                <p className={"text-box"}> {description}</p>
            </div>
        </section>
    )
}

export default Footer
