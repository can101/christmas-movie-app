import React, {FC, ReactElement, ReactNode} from 'react'
// @ts-ignore
import Text from 'react-svg-text';
import './style.css'
import {AiOutlineSearch} from 'react-icons/ai'

type  inputTypes = "text" | "numeric";

interface inputProps {
    title?: string,
    placeholder?: string,
    value: string,
    inputType?: inputTypes,
    startIcon?: ReactNode,
    //@ts-ignore
    setValue: (value: string) => void,
}

const Carousel: FC<inputProps> = ({
                                      title = "Search character",
                                      placeholder = "Luke Skywalker",
                                      inputType = "text",
                                      setValue,
                                      value,
                                      startIcon = <AiOutlineSearch size={"2em"}/>
                                  }): ReactElement => {
    return (
        <div className={"search-input-container"}>
            <input type={inputType} placeholder={placeholder} onChange={e => setValue(e.target.value)} value={value}/>
            <span className={"start-icon"}>
                {startIcon}
            </span>
        </div>

    )
}

export default Carousel
