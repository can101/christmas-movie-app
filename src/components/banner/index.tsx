import React, {useState, FC, ReactElement, useLayoutEffect} from 'react'
import './style.css'

const Banner: FC = (): ReactElement => {
    const [differenceDays, setDifferenceDays] = useState(0);
    const [differenceHours, setDifferenceHours] = useState(0);
    const [differenceMinutes, setDifferenceMinutes] = useState(0);
    const [differenceSeconds, setDifferenceSeconds] = useState(0);
    const timeCalculator = () => {
        setInterval(() => {
            const countDownDate = new Date(new Date().getUTCFullYear(), 11, 31, 23, 59).getTime();
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setDifferenceHours(hours)
            setDifferenceDays(days)
            setDifferenceMinutes(minutes)
            setDifferenceSeconds(seconds)
        }, 1000)
    }
    useLayoutEffect(() => {
        timeCalculator();
    }, [])
    return (
        <div className='banner-container'>
            <span>{differenceDays} d, {differenceHours} h,</span><span
            className={"banner-text-highlight"}>
             {differenceMinutes} m, and {differenceSeconds} s left until New Year's Day</span>
        </div>
    )
}

export default Banner
