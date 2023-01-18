import React, {FC, ReactElement, ReactNode, useState, useTransition} from 'react'
import ChooseByListSearch from "../../../choose-by-list-search"
import {AiOutlineSearch} from 'react-icons/ai'
import {VscClose} from 'react-icons/vsc'
import SearchAsyncThunk from '../../../../features/searchFeature/searchAsyncThunk'
import {useDispatch} from 'react-redux'
import './style.css'

type  inputTypes = "text" | "numeric" | "search";

interface inputProps {
    title?: string,
    placeholder?: string,
    inputType?: inputTypes,
    startIcon?: ReactNode,
}

const SearchInput: FC<inputProps> = ({
                                         placeholder = "Luke Skywalker",
                                         inputType = "text",
                                         startIcon = <AiOutlineSearch size={"2em"}/>
                                     }): ReactElement => {
    const [isPending, startTransition] = useTransition();
    const dispatch = useDispatch<any>();
    const [state, setState] = useState('');
    const searchPathList: string[] = [
        "films",
        "people",
        "planets",
        "species",
        "starships",
        "vehicles",
    ];
    const [searchPath, setSearchPath] = useState<string>(searchPathList[0]);

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(e.target.value);
        if (state.length >= 2) {
            startTransition(() => {
                dispatch(SearchAsyncThunk({searchBy: searchPath, searchText: state}));
            });
        }
    }

    return (
        <>
            <div className={"search-input-container"}>
                <input type={inputType} placeholder={placeholder} onChange={inputChangeHandler} value={state}/>
                {state.length >= 2 && (
                    <span className={"delete-icon"}>
                     <span onClick={() => setState('')}>
                        <VscClose size={"2em"}/>
                     </span>
                    </span>)
                }
                <span className={"start-icon"}>
                {startIcon}
                </span>
            </div>
            <ChooseByListSearch list={searchPathList} onClick={setSearchPath} value={searchPath}/>
        </>
    )
}

export default SearchInput
