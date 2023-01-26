import React, {FC} from 'react'
import {HiOutlineChevronDown} from 'react-icons/hi'
import './style.scss'

interface iconButtonProps {
    click?: () => void
}

const IconButton: FC<iconButtonProps> = ({ click = () => {console.log("clicked the arrow button")}}) => {
    return (
        <button onClick={click} className={"down-button"}>
            <HiOutlineChevronDown size={"3em"}/>
        </button>
    )
}

export default IconButton
