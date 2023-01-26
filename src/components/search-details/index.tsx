import react from "react";
import "./style.scss";
import {useSelector} from "react-redux";
import Card from "../cards/card";
import React from "react";

export default function SearchDetails() {
    const {value, searchBy} = useSelector((state: any) => state.search);
    return (
        <div className="search-details-container">
            <div className="search-details__description">{value.length} result founded</div>
            <div className="search-details">
                {
                    value.map((item: any, index: number) => {
                        return (
                            <Card item={item} title={item?.name || item?.title} isReverse={~~index % 2 == 0 ? false : true} key={index} index={index} searchBy={searchBy}/>
                        )
                    })
                }
            </div>
        </div>
    );
}
