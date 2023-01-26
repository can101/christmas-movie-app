import React, {FC, ReactNode} from 'react'
import './style.scss'

interface Props {
    icon: ReactNode,
    click: () => void
}

const IconButton: FC<Props> = ({icon, click = () => {}}) => {
    return (
        <button onClick={click} className={"icon-button"}>
            {icon}
        </button>
    )
}
export default IconButton
