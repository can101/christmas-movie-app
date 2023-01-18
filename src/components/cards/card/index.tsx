import React, {FC, ReactElement} from 'react'
import './style.css'
import {useNavigate} from "react-router-dom";

interface sectionProps {
    title?: string,
    isReverse?: boolean,
    index?: number,
    item?: any,
    searchBy?: string
}


const DCard: FC<sectionProps> = ({
                                     item,
                                     title,
                                     isReverse = false,
                                     index = 0,
                                     searchBy
                                 }): ReactElement => {
    const [isShow, setIsShow] = React.useState(false)
    const [isAnim, setAnim] = React.useState(false)
    const handleClick = () => {
        if (isShow) {
            setAnim(true)
            setTimeout(() => {
                setIsShow(false)
                setAnim(false)
            }, 600)
        } else {
            setIsShow(true)
        }
    }
    const navigate = useNavigate();
    const visitHandleClick = () => {
        const splitArr = item.url.split("/");
        const id = splitArr[splitArr.length - 2];
        navigate(`/details/${id}`)
    }
    const checker = ["name", "title", "edited", "created", "url", "homeworld"];
    return (
        <section className={`search-detail-card-section-container ${isReverse ? "reverse" : ""}`} key={index}>
            <div className={"search-detail-card-section"}>
                <div className={"search-detail-card-section-container__wrapper"}>
                    <div className={"id-box"}>
                        <p className={"id-box__number"}>{index + 1}</p>
                    </div>
                    <div className={"search-detail-card-content-box"}>
                        <span className={"search-detail-card-title"}>{title}</span>
                    </div>
                    <div className={"search-detail-card-action-box"}>
                        {searchBy != "films" &&
                            <button className={"search-detail-card-action-btn bg-red"} onClick={handleClick}>
                                {!isShow ? "expand" : "compress"} details
                            </button>}
                        {searchBy == "films" &&
                            <button className={"search-detail-card-action-btn bg-red"} onClick={visitHandleClick}>
                                visit
                            </button>
                        }
                    </div>
                </div>
                {searchBy != "films" && <div
                    className={`search-detail-card-section-container__details ${isShow ? "detail-show-box" : "d-none"} ${isAnim ? "out-anim" : ""}`}>
                    <>
                        {
                            Object.entries(item).filter(([key]) => !checker.includes(key)).map(([key, value], index) => {
                                return (
                                    <div className={"search-detail-card-section-container__details__wrapper"}
                                         key={index}>
                                        <div className={"search-detail__box"}>
                                        <span
                                            className={"search-detail__key"}>{key.replace(/_/g, " ")}</span>
                                            <span
                                                className={"search-detail__value"}>
                                            <>
                                                {Array.isArray(value) && value.length}
                                                {!Array.isArray(value) && value}
                                            </>
                                        </span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </>
                </div>}
            </div>
        </section>
    )
}

export default DCard
