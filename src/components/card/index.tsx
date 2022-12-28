import React, {FC, ReactElement} from 'react'
import './style.css'

interface sectionProps {
    imgUrl: string,
    imgDesc: string,
    summary: string,
    isReverse?: boolean,
    isTarget?: boolean
}

const Banner: FC<sectionProps> = ({imgDesc, imgUrl, isReverse = false, summary, isTarget=false}): ReactElement => {
    return (
        <section className={`card-section-container ${isTarget?"target":""} ${isReverse?"reverse":""}`}>
            <div>
                <p>
                    {summary}
                </p>
            </div>
            <img src={imgUrl} className={"float-img"} alt={imgDesc}/>
        </section>
    )
}

export default Banner
