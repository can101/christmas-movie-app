import { FC, ReactElement, Fragment, useEffect, useState } from "react";
import './style.scss';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { FaWindowClose } from "react-icons/fa";
import IconButton from "../ui/buttons/icon-button";
import { Player } from "@lottiefiles/react-lottie-player";
import jsonPath from "../../assets/json/merry-christmas.json";

const CConfetti: FC<{ onClose: () => void }> = ({ onClose }): ReactElement => {
    const [isEnter, setIsEnter] = useState(true);

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "visible";
        }
    }, []);
    const handleCloseClick = () => {
        setIsEnter(false);
        setTimeout(() => {
            onClose();
        }, 3500);
    }
    const { width, height } = useWindowSize()
    return (
        <div className="container">
            <div className={`modal ${isEnter ? "animEnter" : "animLeave"}`}>
                <div className="modal__header">
                    <IconButton icon={<FaWindowClose />}
                        click={handleCloseClick} />
                </div>
                <div className="modal__body">
                    <Player
                        autoplay
                        loop
                        src={jsonPath}
                        style={{ height: 350 }}
                    />
                    {/* <h2>May the force be with you, always</h2> */}
                </div>
            </div>
            <Confetti
                width={width - 10}
                height={height}
                numberOfPieces={200}
                recycle={isEnter}
                run={true}
                colors={["#ffe81f", "#fff", "#388ED7", "#74ADDC", "#0650B1"]}
            />
        </div>
    )
}

export default CConfetti;
