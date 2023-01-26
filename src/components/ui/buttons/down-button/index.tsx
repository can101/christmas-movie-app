import React, {FC} from 'react'
import {HiOutlineChevronDown} from 'react-icons/hi'
import './style.scss'

interface Props {
    click?: () => void
}

const IconButton: FC<Props> = ({ click = () => {console.log("clicked the arrow button")}}) => {
    return (
        <button onClick={click} className={"down-button"}>
            <HiOutlineChevronDown size={"3em"}/>
        </button>
    )
}

export default IconButton
