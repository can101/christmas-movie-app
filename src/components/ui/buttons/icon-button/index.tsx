import React, {FC, ReactNode} from 'react'
import './style.css'

interface iconButtonProps {
    icon: ReactNode,
    click: () => void
}

const IconButton: FC<iconButtonProps> = ({icon, click = () => {}}) => {
    return (
        <button onClick={click} className={"icon-button"}>
            {icon}
        </button>
    )
}
export default IconButton
