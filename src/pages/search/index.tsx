import React,{useState} from "react";
import './style.css'
import SearchInput from "../../components/ui/inputs/search-input";

const index = () => {
    const [state, setState] = useState('');

    return (
        <>
            <SearchInput  value={state} setValue={setState}/>
        </>
    )
}

export default index
