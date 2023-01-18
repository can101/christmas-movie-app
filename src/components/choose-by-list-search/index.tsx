import React, {FC, ReactElement, useState} from "react";
import "./style.css";

interface chooseProps {
    list: string[],
    value: string,
    onClick: (value: string) => void,
}

const SearchDetails: FC<chooseProps> = ({list, onClick, value}): ReactElement => {

    const clickHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        onClick(e.currentTarget.innerText);
    }

    return <div className={"choose-box"}>
        {list.map((item, index) => {
            return <div className={`choose-item ${value == item && "selected-item"}`} onClick={() => {
                onClick(item)
            }} key={index}>
                <span className={"choose-item-text"}>{item}</span>
            </div>
        })}
    </div>;
}

export default SearchDetails
