import React, {FC, ReactElement} from 'react'
import './style.scss'

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
                    <span className={"card-section-container__title"}>{title}</span>
                    {summary}
                </p>
            </div>
            <img src={imgUrl} className={"card-section-container__img"} alt={imgDesc}/>
        </section>
    )
}

export default Banner
