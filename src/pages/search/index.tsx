import React, {useEffect} from "react";
import './style.css'
import SearchInput from "../../components/ui/inputs/search-input";
import SearchDetails from "../../components/search-details";
import Spinner from "../../components/ui/spinner";
import {useDispatch, useSelector} from "react-redux";
import {resetSearch} from "../../features/searchFeature";

const SearchRules = () => {
    return (
        <div className="search-rules">
            <div className="search-rules__description">Please select a label and enter the data you would like to
                research.
            </div>
        </div>
    )
}

const NotFound = () => {
    return (
        <div className={"empty-block-box"}>
            <svg
                width="40"
                height="40"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path
                    d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path>
            </svg>
        </div>
    )
}

const index = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        return () => {
            dispatch(resetSearch());
        }
    }, [])
    const {value, loading, notFound, isSearch} = useSelector((state: any) => state.search);
    return (
        <>
            <SearchInput/>
            {loading && <Spinner/>}
            {!isSearch && <SearchRules/>}
            {(value.length > 0 && !notFound) && <SearchDetails/>}
            {notFound && <NotFound/>}
        </>
    )
}

export default index
