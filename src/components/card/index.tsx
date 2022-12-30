import React, {FC, ReactElement} from 'react'
import './style.css'

interface sectionProps {
    imgUrl: string,
    imgDesc: string,
    summary: string,
    title: string,
    isReverse?: boolean,
    isTarget?: boolean
}

const Banner: FC<sectionProps> = ({
                                      imgDesc,
                                      imgUrl,
                                      title,
                                      isReverse = false,
                                      summary,
                                      isTarget = false
                                  }): ReactElement => {
    return (
        <section className={`card-section-container ${isTarget ? "target" : ""} ${isReverse ? "reverse" : ""}`}>
            <div>
                <p>
                    <span className={"card-title"}>{title}</span>
                    {summary}
                </p>
            </div>
            <img src={imgUrl} className={"float-img"} alt={imgDesc}/>
        </section>
    )
}

export default Banner
