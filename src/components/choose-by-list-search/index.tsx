import React, {FC, ReactElement, useState} from "react";
import "./style.scss";

interface Props {
    list: string[],
    value: string,
    onClick: (value: string) => void,
}

const SearchDetails: FC<Props> = ({list, onClick, value}): ReactElement => {

    const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        onClick(e.currentTarget.innerText);
    }

    return <div className={"choose-box"}>
        {list.map((item, index) => {
            return <div className={`choose-box__item ${value == item ? "selected-item" : ''}`} onClick={() => {
                onClick(item)
            }} key={index}>
                <span className={"choose-box__text"}>{item}</span>
            </div>
        })}
    </div>;
}

export default SearchDetails
